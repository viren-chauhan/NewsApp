import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import axios from 'axios';
import {getEnvConfig} from '../helpers/configServices';
import Config from 'react-native-config';

const Featured = () => {
  const [featuredNews, setFeaturedNews] = React.useState([]);
  //   axios.defaults.baseURL = 'https://newsapi.org/';
  useEffect(() => {
    callData();
  });
  let callData = async () => {
    try {
      await axios
        .get('https://newsapi.org/v2/top-headlines?sources=bbc-news', {
          headers: {
            Authorization: '1c15080b39c344cd9d0301028cdb7365',
          },
        })
        .then(resp => {
          // console.log(resp.data.articles);
          setFeaturedNews(resp.data.articles);
        })
        .catch(err => console.log('Error---', err));
    } catch (error) {}
  };

  useEffect(() => {
    console.log('Featured News----------', featuredNews);
  }, [featuredNews]);

  return (
    <View style={styles.container}>
      <View style={styles.featuredContainer}>
        <Text style={{fontWeight: 'bold', fontSize: 17, color: '#3f4d5c'}}>
          Featured
        </Text>
        <Text style={{color: '#ff7e78', fontWeight: 'bold'}}>See All</Text>
      </View>
      <FlatList
        horizontal={true}
        style={styles.flatlistContainer}
        contentContainerStyle={{columnGap:16}}
        data={featuredNews}
        keyExtractor={item => item?.title}
        renderItem={({item}) => (
          <View style={styles.featuredNewsContainer}>
            <Image
              style={styles.featuredImg}
              source={{
                uri: item?.urlToImage,
              }}
            />
            <View style={styles.featuredNewsHeadingContainer}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
                {item?.title}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#fe756f',
                  paddingVertical: 10,
                  width: '35%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Read Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Featured;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: 'lightblue',
    paddingHorizontal: '15@ms',
    paddingVertical: '10@mvs',
    // flex: 1,
  },
//   flatlistContainer: {height: '180@vs'},
  featuredContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },

  featuredNewsContainer: {
    backgroundColor: 'yellow',
    height: '180@vs',
    borderRadius: 16,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  featuredImg: {
    flex: 1,
    height: '180@vs',
    width: '300@s',
    // width:'180@vs',
  },

  featuredNewsHeadingContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingVertical: 15,
    paddingHorizontal: 20,
    rowGap: 16,
    // backgroundColor: 'transparent',
    backgroundColor: 'rgba(0,0,0,0.6)',
    filter: 'blur(10)',
    width: '100%',
  },
});
