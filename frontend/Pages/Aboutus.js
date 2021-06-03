import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';

function Aboutus() {
  return (
    <View
      style={{
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 30}}>On Point</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text>
            Want to go to a new place or want to try someting new? Not sure
            about how it will be? Check what people think about it before you
            experience it. Check On Point!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
export default Aboutus;
