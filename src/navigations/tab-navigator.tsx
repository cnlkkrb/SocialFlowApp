import React, {useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/home-screen';
import LibraryScreen from '../screens/LibraryScreen/library-screen';
import CalendarScreen from '../screens/CalendarScreen/calendar-screen';
import WorkspaceScreen from '../screens/WorkspaceSreen/workspace-screen';
import {HomeIcon, HomeIconFilled} from '../assets/icons/home-icon';
import {LibraryIcon, LibraryIconFilled} from '../assets/icons/library-icon';
import {CalendarIcon, CalendarIconFilled} from '../assets/icons/calendar-icon';
import {
  WorkspaceIcon,
  WorkspaceIconFilled,
} from '../assets/icons/workspace-icon';
import {TouchableOpacity} from 'react-native';
import PlusIcon from '../assets/icons/plus-icon';
import LinearGradient from 'react-native-linear-gradient';
import Box from '../components/Box/box';
import BottomSheet from '@gorhom/bottom-sheet';
import CreatePostBottomSheet from '../components/CreatePostBottomSheet/create-post-bottom-sheet';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const AddButton = () => {
    return null;
  };
  const bottomSheetModalRef = useRef<BottomSheet>(null);

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }

  return (
    <>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {fontSize: 12, fontWeight: '500', top: -5},
        tabBarActiveTintColor: '#6944FF',
      }}>
      <Tab.Screen
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({focused}) => {
            if (focused)
              return (
                <>
                  <Box width={40} backgroundColor="bg" height={2} top={-5} />
                  <HomeIconFilled />
                </>
              );
            return <HomeIcon />;
          },
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: 'Library',
          headerShown: false,
          tabBarIcon: ({focused}) => {
            if (focused)
              return (
                <>
                  <Box width={40} backgroundColor="bg" height={2} top={-3} />
                  <LibraryIconFilled />
                </>
              );
            return <LibraryIcon />;
          },
        }}
        name="LibraryScreen"
        component={LibraryScreen}
      />
      <Tab.Screen
        options={{
          title: () => null,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TouchableOpacity
              onPress={handlePresentModal}
              style={{
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <LinearGradient
                style={{
                  top: -10,
                  width: 50,
                  height: 50,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: 'white',
                }}
                colors={['#6944FF', '#9644FF']}>
                <PlusIcon />
              </LinearGradient>
              
            </TouchableOpacity>
          )
        }}
        name="PlusScreen"
        component={AddButton}
      />
      <Tab.Screen
        options={{
          title: 'Calendar',
          headerShown: false,
          tabBarIcon: ({focused}) => {
            if (focused)
              return (
                <>
                  <Box width={40} backgroundColor="bg" height={2} top={-3} />
                  <CalendarIconFilled />
                </>
              );
            return <CalendarIcon />;
          },
        }}
        name="CalendarScreen"
        component={CalendarScreen}
      />
      <Tab.Screen
        options={{
          title: 'Workspace',
          headerShown: false,
          tabBarIcon: ({focused}) => {
            if (focused)
              return (
                <>
                  <Box width={40} backgroundColor="bg" height={2} top={-3} />
                  <WorkspaceIconFilled />
                </>
              );
            return <WorkspaceIcon />;
          },
        }}
        name="WorkspaceScreen"
        component={WorkspaceScreen}
      />
    </Tab.Navigator>
    <CreatePostBottomSheet bottomSheetModalRef={bottomSheetModalRef}/>
    </>
  );
};

export default TabNavigator;
