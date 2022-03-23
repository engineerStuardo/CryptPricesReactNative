import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import axios from 'axios';
import RenderHTML from 'react-native-render-html';

const Detail = ({route}: {route: any}) => {
  const [cryptoProfile, setCryptoProfile] = useState();
  const [cryptoMarketData, setCryptoMarketData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const id = route.params.id;

  const {width} = useWindowDimensions();

  useEffect(() => {
    const API_URL = 'https://crypto-prices-socket.herokuapp.com';

    Promise.all([
      axios.get(`${API_URL}/cryptos/market-data/${id}`),
      axios.get(`${API_URL}/cryptos/profile/${id}`),
    ]).then(([marketData, profile]) => {
      setCryptoMarketData(marketData.data);
      setCryptoProfile(profile.data);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={'#ffab00'} />
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerInfo}>
              <Text style={styles.name}>{cryptoProfile.name}</Text>
              <Text style={styles.symbol}>{cryptoProfile.symbol}</Text>
              <Text style={styles.price}>
                $ {cryptoMarketData.market_data.price_usd.toFixed(2)}
              </Text>
            </View>
            <View style={styles.tagline}>
              <Text style={styles.lineText}>
                {cryptoProfile.profile.general.overview.tagline}
              </Text>
            </View>
          </View>
          <View style={styles.priceChanges}>
            <View style={styles.priceChangeRow}>
              <Text style={styles.lineText}>Percent Change 1h</Text>
              <Text style={styles.lineText}>
                %{' '}
                {cryptoMarketData.market_data.percent_change_usd_last_1_hour.toFixed(
                  2,
                )}
              </Text>
            </View>
            <View style={styles.priceChangeRow}>
              <Text style={styles.lineText}>Percent Change 24h</Text>
              <Text style={styles.lineText}>
                %{' '}
                {cryptoMarketData.market_data.percent_change_usd_last_24_hours.toFixed(
                  2,
                )}
              </Text>
            </View>
          </View>
          <ScrollView style={styles.cryptoInfo}>
            <View style={styles.cryptoInfoRow}>
              <Text style={styles.cryptoInfoTitle}>Overview</Text>
              <RenderHTML
                contentWidth={width}
                source={{
                  html: `<p style='color: #fff' >${cryptoProfile.profile.general.overview.project_details}</p>`,
                }}
              />
            </View>
            <View style={styles.cryptoInfoRow}>
              <RenderHTML
                contentWidth={width}
                source={{
                  html: `<p style='color: #fff' >${cryptoProfile.profile.general.background.background_details}</p>`,
                }}
              />
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272d42',
    padding: 10,
  },
  header: {
    backgroundColor: '#000',
    height: 100,
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  headerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 24,
    color: '#fff',
  },
  symbol: {
    fontSize: 15,
    padding: 5,
    backgroundColor: '#272d42',
    color: '#fff',
  },
  price: {
    color: '#ffab00',
    fontSize: 28,
    width: 150,
    textAlign: 'right',
  },
  tagline: {
    marginTop: 10,
  },
  lineText: {
    color: '#fff',
    fontSize: 16,
  },
  priceChanges: {
    backgroundColor: '#000',
    height: 70,
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
  },
  priceChangeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cryptoInfo: {
    backgroundColor: '#000',
    padding: 10,
    flex: 1,
    borderRadius: 10,
    marginBottom: 15,
  },
  cryptoInfoRow: {
    flex: 1,
    marginTop: 20,
  },
  cryptoInfoTitle: {
    color: '#ffab00',
    fontSize: 22,
    marginBottom: 10,
  },
});

export default Detail;
