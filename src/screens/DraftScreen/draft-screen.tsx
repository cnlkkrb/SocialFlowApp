import React, {useRef, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import EditIcon from '../../assets/icons/edit-icon';
import AddVisualsIcon from '../../assets/icons/add-visuals-icon';
import ApproveIcon from '../../assets/icons/approve-icon';
import {DraftData} from '../../data/DraftData';
import DotsIcon from '../../assets/icons/dots-icon';
import LinearGradient from 'react-native-linear-gradient';
import BottomSheet from '@gorhom/bottom-sheet';
import Box from '../../components/Box/box';
import Text from '../../components/Text/text';
import EditPostBottomSheet from '../../components/EditPostBottomSheet/edit-post-bottom-sheet';
import RegenerateIcon from '../../assets/icons/regenerate-icon';
import DuplicateIcon from '../../assets/icons/duplicate-icon';
import { SmallRemoveIcon } from '../../assets/icons/remove-icon';

const DraftScreen = () => {
  const EditPostBottomSheetRef = useRef<BottomSheet>(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [drafts, setDrafts] = useState(DraftData);
  const [menuVisible, setMenuVisible] = useState<any>({});

  const handleSharePress = (updatedPost: { id: number; title: string; }) => {
    const index = DraftData.findIndex(post => post.id === updatedPost.id);
    if (index !== -1) {
      DraftData[index].title = updatedPost.title;
      setSelectedPost(DraftData[index]);
    }
    EditPostBottomSheetRef.current?.close();
  };

  const handleEditPost = (post: React.SetStateAction<null>) => {
    setSelectedPost(post);
    EditPostBottomSheetRef.current?.present();
  };

  const handleRemovePress = () => {
    const index = drafts.findIndex(draft => draft.id === selectedPost.id);
    const updatedDrafts = [...drafts];
    updatedDrafts[index].image = null;
    setDrafts(updatedDrafts);
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      setMenuVisible({})
    }}>
    <Box backgroundColor='pageBackground'>
      <FlatList
        ListFooterComponent={<Box height={20} />}
        data={DraftData}
        style={{marginTop: -12}}
        renderItem={({item}) => {
          return (
            <Box
              backgroundColor="white"
              borderWidth={1}
              borderColor="lightGrey"
              borderRadius={10}
              mx="m"
              mt="m">
              {item.image === null ? null : (
                <Image
                  style={{
                    width: '100%',
                    height: 180,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                  }}
                  source={item.image}
                />
              )}
              <Text p="m" mr='s' fontSize={13} lineHeight={18}>
                {item.title}
              </Text>
              <Box
                mb="s"
                width={'100%'}
                height={1}
                backgroundColor="lightGrey"
              />
                <Box
                  mb="s"
                  mt="xs"
                  flexDirection="row"
                  justifyContent="space-around">
                  <TouchableOpacity
                    onPress={() => {
                      handleEditPost(item);
                      setSelectedPost(item);
                      EditPostBottomSheetRef.current?.expand();
                    }}
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <EditIcon />
                    <Text>Edit</Text>
                  </TouchableOpacity>
                  <Box alignItems="center" justifyContent="center">
                    <AddVisualsIcon />
                    <Text>Add Visuals</Text>
                  </Box>
                  <Box alignItems="center" justifyContent="center">
                    <ApproveIcon />
                    <Text>Approve</Text>
                  </Box>
                </Box>
              <LinearGradient
                colors={
                  item.image === null
                    ? ['white', 'white']
                    : ['transparent', '#000000DB']
                }
                start={{x: -0.1, y: 0.7}}
                end={{x: 0.8, y: -1.5}}
                style={{
                  position: 'absolute',
                  right: 0,
                  width: 30,
                  height: 25,
                  borderTopRightRadius: 10,
                  borderBottomLeftRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 1,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setMenuVisible({
                      ...menuVisible,
                      [item.id]: true
                  })
                  }}
                  style={{
                    width: 30,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <DotsIcon color={item.image === null ? '#09121F' : 'white'} />
                </TouchableOpacity>
              </LinearGradient>
              <Box visible={!!menuVisible[item.id]} position='absolute' right={0}>
                  <TouchableOpacity
                      style={{
                        position: 'relative',
                        backgroundColor: 'white',
                        borderRadius: 10,
                        width: 140,
                        borderWidth: 1,
                        borderColor: '#D6E0EA',
                      }}
                      onPress={() => setMenuVisible({...menuVisible, [item.id]: false})}>
                      <Text
                        ml="s"
                        mb="xs"
                        mt="xs"
                        fontSize={12}
                        variant="heading5"
                        color="grey">
                        More Options
                      </Text>
                      <Box
                        mb="s"
                        width={'100%'}
                        height={1}
                        backgroundColor="lightGrey"
                      />
                      <Box
                        mx="s"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center">
                        <Text>Regenerate</Text>
                        <RegenerateIcon />
                      </Box>
                      <Box
                        mb="s"
                        mt="s"
                        width={'100%'}
                        height={1}
                        backgroundColor="lightGrey"
                      />
                      <Box
                        mx="s"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center">
                        <Text>Duplicate</Text>
                        <DuplicateIcon />
                      </Box>
                      <Box
                        mb="s"
                        mt="s"
                        width={'100%'}
                        height={1}
                        backgroundColor="lightGrey"
                      />
                      <Box
                        mb="xs"
                        mx="s"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center">
                        <Text>Delete</Text>
                        <SmallRemoveIcon />
                      </Box>
                    </TouchableOpacity>
                  </Box>
            </Box>
          );
        }}
      />
      <EditPostBottomSheet
        EditPostBottomSheetRef={EditPostBottomSheetRef}
        selectedPost={selectedPost}
        setSelectedPost={setSelectedPost}
        onSharePress={handleSharePress}
        onRemovePress={handleRemovePress}
      />
    </Box>
    </TouchableWithoutFeedback>
  );
};

export default DraftScreen;
