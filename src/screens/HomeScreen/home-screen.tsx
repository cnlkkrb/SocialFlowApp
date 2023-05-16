import React, { useRef, useState } from 'react';
import Box from '../../components/Box/box';
import Text from '../../components/Text/text';
import { Image, SafeAreaView, ScrollView } from 'react-native';
import Insights from '../../components/Insights/insights';
import TipsTricks from '../../components/TipsTricks/tips-tricks';
import SpecialDays from '../../components/SpecialDays/special-days';
import { useAtom } from 'jotai';
import { myDataAtom, userDataAtom } from '../../utils/atom';
import BottomSheet from '@gorhom/bottom-sheet';
import { SocailData } from '../../data/SocailPlatformData';
import SocialPlatformBottomSheet from '../../components/SocialPlatformBottomSheet/social-platform-bottom-sheet';
import SocialHeader from '../../components/SocialHeader/social-header';
import { sharePost, sharePostWithPhoto } from '../../utils/facebook';
import Button from '../../components/Button/button';
import { Configuration, OpenAIApi } from 'openai';

const HomeScreen = () => {

  const [myData, setMyData] = useAtom(myDataAtom);
  const [userData] = useAtom(userDataAtom);
  const bottomSheetModalRef = useRef<BottomSheet>(null);

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }

  const selectedItem = (item: { id: number }) => {
    const newArrData = SocailData.map(e => {
      if (e.id === item.id) {
        return {
          ...e,
          isSelected: true,
        };
      }
      return {
        ...e,
        isSelected: false,
      };
    });
    setMyData(newArrData);
    bottomSheetModalRef.current?.close();
  };

  const handleButtonPress = () => {
    const pageAccessToken =
      "EAATZCkdCwZB1wBAO0XEYfjtZAW4yjKF2QGUZAcExyj6ZCusCeiKotZBuMis5CWZAK6eU8zwbjZA2JZC5Mda0O6amZCxrMP0yfQ4s7ZAmjsMjlaVFpQeHGavGAGcFm4XUDWg8U7ZAlroHr774uKe2ZBbZAuFToSYWP0HNu5K55iPqlkh6NXbSCbz5GhZCSFU";
    const id = "100426513065072";
    const imgUrl =
      "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/be9f16c4-00b8-4682-abdb-72a4dc926d9e-0.png";

    sharePost(pageAccessToken, id, "Kelebek gibi ucarim ari gibi sokarim")
    sharePostWithPhoto(
      id,
      pageAccessToken,
      imgUrl,
      "Kelebek gibi ucarim ari gibi sokarim"
    );
  };


  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  const generateGPTPrompt = (
    socialMediaPlatform: string,
    brandName: string,
    products: string[] = [],
    city: string,
    foundationyear: number,
    companySlogan: string,
    competitors: string[] = [],
    numberOfPost: number,
    postTone: string,
  ): string => {
    const formattedProducts = products.join(', ');
    const formattedCompetitors = competitors.join(', ');
    const content = `As a Facebook content strategist for SocialFlowApp,a company specializing in ${formattedProducts} based in Ankara since its foundation on 1999, today being, with the slogan eat very eat and having competitors such as ${formattedCompetitors}, you are tasked to create 2, Facebook post based on the following criterias: choose one of the following post theme (Brand awareness), do not mention competitor names in the post, do not mention which theme was chosen, do not use irrelevant events or temperature to the current month, don't use out of season concept, have a Friendly tone, use emojis, have 1-3 hashtags, embed hashtags into post text if relevant, do not make up fake promotions or days. After generating the post text, extract the main subject of the post text that would be depicted on post image and give me 3-6-word brief definition of that subject for each post without mentioning brand or company name and return object as json object {post: string, keywords: string[]}`;
    return content;
  };

  const generateImagePrompt = (
    keywords: [],
  ): {
    prompt: string;
    negativePrompt: string;
  } => {
    const formattedKeywords = keywords.join(', ');
    const prompt = `((Best quality)) Commercial photograph, ${formattedKeywords} (center of screen) , (good composition), (in frame), centered, 8k, 4k, detailed, attractive, beautiful, impressive, photorealistic, realistic, cinematic composition, volumetric lighting, high-resolution, vivid, detailed, stunning, professional, lifelike, crisp, flawless, DSLR, 4k, 8k, 16k, 1024, 2048, 4096, detailed, sharp, best quality, high quality, highres, absurdres`;
    const negativePrompt =
      '(bad composition), (out of frame), off center, drawing, anime, art, cartoon, painting, drawing, anime, art, cartoon, painting, drawing, anime, art, cartoon, painting, Low quality, worst quality, bad anatomy, bad gun anatomy, 144p, blurry, censored, artifacts, jpeg artifact, oversaturation, watermark, signature, EasyNegative, verybadimagenegative, bad hand, duplicates, distortion';
      return { prompt, negativePrompt };
  };

  async function generatePostDetails() {
    const content = generateGPTPrompt(
      'Facebook',
      'Gege Cake',
      ['Desserts', 'bakery', 'foods', 'cakes', 'cookies', 'croissants', 'pies'],
      'London',
      1990,
      'Eat little bit',
      ['Entree', 'PeckaCudo'],
      1,
      'friendly',
    );
    try {
      const completion = await openai.createChatCompletion({
        model: 'gpt-4',
        messages: [{ role: 'user', content: content }],
      });
      const res = JSON.parse(completion.data.choices[0].message.content);
      if (res && res.keywords) {
        return res;
      } else {
        throw new Error('Invalid response');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const generateImage = async (
    model_id: string,
    width: number,
    height: number,
    samples: number,
    num_inference_steps: number,
    scheduler: string,
  ) => {
    const postDetails = await generatePostDetails();
    const imgPrompt = generateImagePrompt(postDetails.keywords);


    const params = {
      key: "npjmaHM3XrYce9VmtHMPLJBLeioMWXLcyCJzruwhjUke2avn1buGXO5lmcCR",
      model_id,
      prompt: imgPrompt.prompt,
      negative_prompt: imgPrompt.negativePrompt,
      width,
      height,
      samples,
      num_inference_steps,
      scheduler,
    };

    const response = await fetch(
      "https://stablediffusionapi.com/api/v4/dreambooth",
      {
        method: "post",
        body: JSON.stringify(params),
        headers: { "Content-Type": "application/json" },
      }
    );
    return await response.json();
  }

  
  const generateImageAsync = async () => {
    const image = await generateImage(
      "realistic-vision-v13",
      768,
      768,
      1,
      41,
      "DPMSolverMultistepScheduler"
    );
    setImageUrl(image);
  };



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4F8FC' }}>
      <Box>
        <SocialHeader
          handlePresentModal={handlePresentModal}
          userData={userData}
          myData={myData}
          SocailData={SocailData}
        />
        <ScrollView>
          <Button onPress={handleButtonPress} label={'Share'} labelColor={'black'} variant='primary'/>
          <Button mt='l' onPress={generateImageAsync} label={'GenerateImage'} labelColor={'black'} variant='primary'/>
          {
            imageUrl && (
              <Image 
              style={{
                width: 200,
                height: 200,
              }}
              source={{ uri: imageUrl }}
              />
            )
          }
          <Box mt="m" ml="m">
            <Text ml="m" variant="heading2">
              Insights
            </Text>
            <Insights />
          </Box>
          <Box mt="m" ml="m">
            <Box
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between">
              <Text ml="m" variant="heading2">
                Tips & Tricks
              </Text>
              <Text mr="m" color="grey">
                More
              </Text>
            </Box>
            <TipsTricks />
          </Box>
          <Box ml="m" mt="l" mb="m">
            <Box
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between">
              <Text ml="m" variant="heading2">
                Special Days
              </Text>
              <Text mr="m" color="grey">
                More
              </Text>
            </Box>
            <SpecialDays />
          </Box>
        </ScrollView>
      </Box>
      <SocialPlatformBottomSheet
        bottomSheetModalRef={bottomSheetModalRef}
        selectedItem={selectedItem}
        myData={myData}
        userData={userData}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
