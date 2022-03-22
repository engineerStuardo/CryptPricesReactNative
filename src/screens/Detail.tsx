import React from 'react';
import {Text, View} from 'react-native';

const Detail = ({route}: {route: any}) => {
  const id = route.params.id;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{id}</Text>
    </View>
  );
};

export default Detail;
