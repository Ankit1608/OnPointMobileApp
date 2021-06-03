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
import {getallposts, me} from '../Graphql/gql';

export default function Explore({navigation}) {
  const {loading, data, error} = useQuery(getallposts, {
    fetchPolicy: 'network-only',
  });
  const {data: userid} = useQuery(me);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 20}}>
        {data && userid && (
          <FlatList
            data={data.posts}
            refreshing={data.networkStatus === 4}
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
                  userId={userid.me}
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
