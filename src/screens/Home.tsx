import React from 'react';
import {Text, View, FlatList, Pressable, StyleSheet} from 'react-native';

import {routes} from '@src/navigation/routes';

import {Crypto} from '@models';

const cryptoList: Crypto[] = [
  {
    id: '1',
    name: 'BTC',
    price: 38001.64,
  },
  {
    id: '2',
    name: 'ETH',
    price: 4025.0,
  },
  {
    id: '3',
    name: 'SOL',
    price: 250.21,
  },
];

export const Home = ({navigation}: {navigation: any}) => {
  const openCryptoDetail = (id: string) => {
    navigation.navigate(routes.Detail, {id});
  };

  const renderItem = ({item}: {item: Crypto}) => (
    <Pressable style={styles.crypto} onPress={() => openCryptoDetail(item.id)}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cryptoList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272d42',
  },
  crypto: {
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#000',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  name: {
    color: 'white',
    fontSize: 24,
  },
  price: {
    color: '#ffab00',
    fontSize: 24,
  },
});
