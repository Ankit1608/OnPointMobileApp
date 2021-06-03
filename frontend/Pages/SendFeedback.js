import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {addfeedback} from '../Graphql/gql';
import {useMutation} from '@apollo/react-hooks';

function SendFeedback({navigation}) {
  const [addingfeedback] = useMutation(addfeedback);
  const [value, setValue] = useState('');
  const handlesubmit = async () => {
    try {
      await addingfeedback({variables: {feedback: value}});
      setValue('');
      alert('feedback sent');
    } catch (e) {
      alert('something went wrong');
    }
  };
  return (
    <View
      style={{
        marginRight: 10,
        marginLeft: 10,
        flex: 1,
        backgroundColor: 'white',
      }}>
      <ScrollView>
        <View style={{marginTop: 20}}>
          <Text style={{paddingBottom: 8}}>
            Please send us your feedback here
          </Text>
          <View
            style={{
              borderWidth: 0.3,
              borderColor: 'grey',
              padding: 5,
              justifyContent: 'flex-start',
            }}>
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Type Feedback"
              placeholderTextColor="grey"
              numberOfLines={10}
              multiline={true}
              onChangeText={text => setValue(text)}
              style={{
                height: 150,
                justifyContent: 'flex-start',
                textAlignVertical: 'top',
              }}></TextInput>
          </View>
        </View>
        <TouchableOpacity onPress={() => handlesubmit()}>
          <View
            style={{
              alignItems: 'center',
              marginTop: 30,
            }}>
            <View
              style={{
                backgroundColor: '#f0505c',
                borderRadius: 30,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  paddingHorizontal: 25,
                  paddingVertical: 10,
                  color: '#ffffff',
                }}>
                Send Feedback
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
export default SendFeedback;
