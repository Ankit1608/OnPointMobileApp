import React, {useState} from 'react';

import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  FlatList,
} from 'react-native';
import Card from '../components/card';
import {useQuery} from '@apollo/react-hooks';
import {getallposts} from '../Graphql/gql';

export default function SearchResult({navigation, route}) {
  const {category, filter} = route.params;
  const {loading, data, error} = useQuery(getallposts, {
    fetchPolicy: 'network-only',
  });
  var temp = [];
  if (data) {
    for (var i = 0; i < data.posts.length; i++) {
      var str = data.posts[i].title;
      if (data.posts[i].category === category && str.includes(filter)) {
        temp.push(data.posts[i]);
      }
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 20}}>
        {data && (
          <FlatList
            data={temp}
            renderItem={({item}) => {
              return (
                <Card
                  title={item.title}
                  description={item.description}
                  rating={2}
                  location={item.location}
                  physical={item.physical}
                  navigation={navigation}
                  postId={item.id}
                  image={item.imageurl}
                  key={item.id}
                  profile={false}
                />
              );
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

    overflow: 'hidden',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 5,
  },
  imageActive: {
    height: 60,
    width: 60,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 5,
    borderColor: 'yellow',
    borderWidth: 1,
  },
  text: {
    color: '#000000',
  },
  textActive: {
    color: '#ffc408',
  },
});
