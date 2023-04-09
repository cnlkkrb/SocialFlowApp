import React, {useRef} from 'react';
import {
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import GreyFacebookIcon from '../../assets/icons/grey-facebook-icon';
import GreyInstagramIcon from '../../assets/icons/grey-instagram-icon';
import ClockIcon from '../../assets/icons/clock-icon';
import EditIcon from '../../assets/icons/edit-icon';
import AddVisualsIcon from '../../assets/icons/add-visuals-icon';
import ApproveIcon from '../../assets/icons/approve-icon';
import {DraftData} from '../../data/DraftData';
import DotsIcon from '../../assets/icons/dots-icon';
import LinearGradient from 'react-native-linear-gradient';
import BottomSheet from '@gorhom/bottom-sheet';
import SmallCalendarIcon from '../../assets/icons/small-calendar-icon';
import SmallEditIcon from '../../assets/icons/small-edit-icon';
import SmallCalendarCancelIcon from '../../assets/icons/small-calendar-cancel-icon';
import Box from '../../components/Box/box';
import Text from '../../components/Text/text';
import EditPostBottomSheet from '../../components/EditPostBottomSheet/edit-post-bottom-sheet';

const ScheduledScreen = ({draft}) => {
  const EditPostBottomSheetRef = useRef<BottomSheet>(null);
  const [selectedPost, setSelectedPost] = React.useState(null);
  const [drafts, setDrafts] = React.useState(DraftData);
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [menuPosition, setMenuPosition] = React.useState({x: 0, y: 0});

  const handleSharePress = updatedPost => {
    const index = DraftData.findIndex(post => post.id === updatedPost.id);
    if (index !== -1) {
      DraftData[index].title = updatedPost.title;
      setSelectedPost(DraftData[index]);
    }
    EditPostBottomSheetRef.current?.close();
  };

  const handleEditPost = post => {
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
    <Box>
      <FlatList
        ListFooterComponent={<Box height={20} />}
        data={DraftData}
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
              <Text p="m" fontSize={13} lineHeight={18}>
                {item.title}
              </Text>
              <Box
                mb="s"
                width={'100%'}
                height={1}
                backgroundColor="lightGrey"
              />
                <Box flexDirection="row" alignItems="center" mb="s">
                  <Box flexDirection="row" ml="m" marginRight="auto">
                    <Box mr="s">
                      <GreyFacebookIcon />
                    </Box>
                    <GreyInstagramIcon />
                  </Box>
                  <Box alignItems="center" flexDirection="row" mr="m">
                    <ClockIcon color={'grey'} />
                    <Text variant="heading5" color="grey" ml="s">
                      10:55 PM, Feb 28
                    </Text>
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
                  style={{
                    width: 30,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={event => {
                    setMenuPosition({
                      x: event.nativeEvent.pageX,
                      y: event.nativeEvent.pageY + 10,
                    });
                    setMenuVisible(true);
                  }}
                  onLayout={event => {
                    setMenuPosition({
                      x: event.nativeEvent.pageX,
                      y: event.nativeEvent.pageY + 10,
                    });
                  }}>
                  <DotsIcon color={item.image === null ? '#09121F' : 'white'} />
                </TouchableOpacity>
                <Modal
                  visible={menuVisible}
                  transparent={true}
                  onRequestClose={() => setMenuVisible(false)}
                  animationType="fade">
                  <TouchableOpacity
                    onPress={() => setMenuVisible(false)}
                    style={{flex: 1}}>
                    <TouchableOpacity
                      style={{
                        position: 'relative',
                        top: menuPosition.y - 22,
                        left: menuPosition.x - 121,
                        backgroundColor: 'white',
                        borderRadius: 10,
                        width: 140,
                        borderWidth: 1,
                        borderColor: '#D6E0EA',
                      }}
                      onPress={() => setMenuVisible(false)}>
                      <Text
                        ml="s"
                        mb="xs"
                        mt="xs"
                        fontSize={8}
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
                        <Text>Edit Post</Text>
                        <SmallCalendarIcon />
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
                        <Text>Change Date </Text>
                        <SmallEditIcon />
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
                        <Text>Cancel Schedule</Text>
                        <SmallCalendarCancelIcon />
                      </Box>
                    </TouchableOpacity>
                  </TouchableOpacity>
                </Modal>
              </LinearGradient>
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
  );
};

export default ScheduledScreen;
