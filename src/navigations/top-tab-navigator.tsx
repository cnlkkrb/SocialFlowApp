import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DraftScreen from '../screens/DraftScreen/draft-screen';

const Tab = createMaterialTopTabNavigator();

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: '#EAEEF1',
        height: 40,
        marginHorizontal: 18,
        borderRadius: 5,
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
              paddingVertical: 4,
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
                  fontWeight: '600'
                },
                labelStyle,
                borderStyle,
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TopTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Draft" component={DraftScreen} />
      <Tab.Screen name="Approved" component={DraftScreen} />
      <Tab.Screen name="Scheduled" component={DraftScreen} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
