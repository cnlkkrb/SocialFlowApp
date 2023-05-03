import React, {useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DraftScreen from '../screens/DraftScreen/draft-screen';
import ApprovedScreen from '../screens/ApprovedScreen/approved-screen';
import ScheduledScreen from '../screens/ScheduledScreen/scheduled-screen';
import {DraftData} from '../data/DraftData';
import Box from '../components/Box/box';
import SocialHeader from '../components/SocialHeader/social-header';
import {SocailData} from '../data/SocailPlatformData';
import BottomSheet from '@gorhom/bottom-sheet';
import {useAtom} from 'jotai';
import {myDataAtom, userDataAtom} from '../utils/atom';

const Tab = createMaterialTopTabNavigator();

const CustomTabBar = ({state, descriptors, navigation}) => {
  const draftsLength = DraftData.length;
  const scheduledLength = DraftData.length;
  const [myData,] = useAtom(myDataAtom);
  const [userData] = useAtom(userDataAtom);
  const bottomSheetModalRef = useRef<BottomSheet>(null);

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }

  return (
    <Box backgroundColor='pageBackground'>
      <SocialHeader
        handlePresentModal={handlePresentModal}
        userData={userData}
        myData={myData}
        SocailData={SocailData}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          backgroundColor: 'white',
          height: 40,
          marginHorizontal: 18,
          borderRadius: 10,
          marginBottom: 12,
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label = options.tabBarLabel ?? options.title ?? route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const borderStyle = isFocused
            ? {borderWidth: 1, borderColor: '#D6E0EA'}
            : null;
          const labelStyle = isFocused
            ? {
                backgroundColor: '#fff',
                width: 100,
                borderRadius: 10,
                paddingVertical: 5,
                textAlign: 'center',
              }
            : null;

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text
                style={[
                  {
                    color: isFocused ? '#6944FF' : '#7D8998',
                    fontSize: isFocused ? 14 : 12,
                    fontWeight: '600',
                  },
                  labelStyle,
                  borderStyle,
                ]}>
                {label}
                {route.name === 'Approved' && (
                  <Text>{`(${draftsLength})`}</Text>
                )}
                {route.name === 'Scheduled' && (
                  <Text>{`(${scheduledLength})`}</Text>
                )}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Box>
  );
};

const TopTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Draft" component={DraftScreen} />
      <Tab.Screen name="Approved" component={ApprovedScreen} />
      <Tab.Screen name="Scheduled" component={ScheduledScreen} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
