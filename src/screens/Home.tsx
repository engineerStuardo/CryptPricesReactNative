import React from 'react';
import {Text, View, Pressable} from 'react-native';

import {routes} from '@routes';

export const Home = ({navigation}: {navigation: any}) => {
  const navigateToDetail = () => {
    navigation.navigate(routes.Detail);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Pressable onPress={navigateToDetail}>
        <Text>Navigate to Detail</Text>
      </Pressable>
    </View>
  );
};
