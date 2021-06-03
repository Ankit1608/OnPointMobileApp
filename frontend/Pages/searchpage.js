import React, {useState} from 'react';
import FaIcon from 'react-native-vector-icons/FontAwesome5';

import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// rest shopp nigh active beauty auto homeservice
export default function searchpage({navigation}) {
  const [physicalWorld, setPhysicalWorld] = useState(false);
  const [virtualWorld, setVirtualWorld] = useState(true);
  const [entertainment, setEntertainment] = useState(false);
  const [products, setProducts] = useState(true);
  const [services, setServices] = useState(false);
  const [more, setMore] = useState(false);

  const [automobile, setAutomobile] = useState(false);
  const [restaurants, setRestaurant] = useState(false);
  const [shopping, setShopping] = useState(false);
  const [nightlife, setNightlife] = useState(false);
  const [beauty, setBeauty] = useState(false);
  const [homeservice, setHomeservice] = useState(false);
  const [cat, setCat] = useState('Products');

  const [input, setInput] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{marginLeft: 10, marginRight: 10, padding: 5}}>
          <Image
            style={{
              width: '100%',
              marginBottom: 20,
              height: 200,
              resizeMode: 'cover',
            }}
            source={require('../assets/search.jpg')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 0.4,
            borderColor: '#000',
            borderRadius: 50,
            width: '95%',
            alignItems: 'center',
            margin: 10,
            marginBottom: 20,
          }}>
          <Image
            source={require('../assets/search.png')}
            style={{marginLeft: 10, marginRight: 2}}
          />
          <TextInput
            onChangeText={text => setInput(text)}
            style={{flex: 1}}></TextInput>
        </View>
        <View style={{flexDirection: 'row-reverse'}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SearchResult', {
                category: cat,
                filter: input,
              })
            }>
            <Text style={{marginRight: 15}}>Search</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 10,
            marginRight: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              setVirtualWorld(true);
              setPhysicalWorld(false);
              setEntertainment(false);
              setProducts(true);
              setServices(false);
              setMore(false);
              setAutomobile(false);
              setRestaurant(false);
              setShopping(false);
              setNightlife(false);
              setBeauty(false);
              setHomeservice(false);
              setCat('Products');
            }}
            style={{width: '49%'}}>
            <View
              style={{
                flex: 1,
                borderColor: '#bbb',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderRadius: 7,
                backgroundColor: virtualWorld ? '#f0505c' : '#FFFFFF',
              }}>
              <Text style={{color: virtualWorld ? '#FFFFFF' : '#000000'}}>
                Virtual World
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setVirtualWorld(false);
              setPhysicalWorld(true);
              setEntertainment(false);
              setProducts(false);
              setServices(false);
              setMore(false);
              setAutomobile(true);
              setRestaurant(false);
              setShopping(false);
              setNightlife(false);
              setBeauty(false);
              setHomeservice(false);
              setCat('Automobile');
            }}
            style={{width: '49%'}}>
            <View
              style={{
                flex: 1,
                borderColor: '#bbb',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderRadius: 7,
                backgroundColor: physicalWorld ? '#f0505c' : '#FFFFFF',
              }}>
              <Text style={{color: physicalWorld ? '#FFFFFF' : '#000000'}}>
                Physical World
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 10,
            marginRight: 10,
          }}>
          {virtualWorld && (
            <>
              <TouchableOpacity
                onPress={() => {
                  setEntertainment(false);
                  setProducts(true);
                  setServices(false);
                  setMore(false);
                  setAutomobile(false);
                  setRestaurant(false);
                  setShopping(false);
                  setNightlife(false);
                  setBeauty(false);
                  setHomeservice(false);
                  setCat('Products');
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../assets/product.png')}
                    style={products ? styles.imageActive : styles.image}
                  />
                  <Text style={products ? styles.textActive : styles.text}>
                    Products
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setEntertainment(false);
                  setProducts(false);
                  setServices(true);
                  setMore(false);
                  setAutomobile(false);
                  setRestaurant(false);
                  setShopping(false);
                  setNightlife(false);
                  setBeauty(false);
                  setHomeservice(false);
                  setCat('Services');
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source={require('../assets/service.jpeg')}
                    style={services ? styles.imageActive : styles.image}
                  />
                  <Text style={services ? styles.textActive : styles.text}>
                    Services
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setEntertainment(true);
                  setProducts(false);
                  setServices(false);
                  setMore(false);
                  setAutomobile(false);
                  setRestaurant(false);
                  setShopping(false);
                  setNightlife(false);
                  setBeauty(false);
                  setHomeservice(false);
                  setCat('Entertainment');
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source={require('../assets/entertainment.png')}
                    style={entertainment ? styles.imageActive : styles.image}
                  />
                  <Text style={entertainment ? styles.textActive : styles.text}>
                    Entertainment
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setEntertainment(false);
                  setProducts(false);
                  setServices(false);
                  setMore(true);
                  setAutomobile(false);
                  setRestaurant(false);
                  setShopping(false);
                  setNightlife(false);
                  setBeauty(false);
                  setHomeservice(false);
                  setCat('More');
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source={require('../assets/more.png')}
                    style={more ? styles.imageActive : styles.image}
                  />
                  <Text style={more ? styles.textActive : styles.text}>
                    More
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          )}
          {physicalWorld && (
            <>
              <TouchableOpacity
                onPress={() => {
                  setEntertainment(false);
                  setProducts(false);
                  setServices(false);
                  setMore(false);
                  setAutomobile(true);
                  setRestaurant(false);
                  setShopping(false);
                  setNightlife(false);
                  setBeauty(false);
                  setHomeservice(false);
                  setCat('Automobile');
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FaIcon name={'car-side'} size={35} color="black" />
                  <Text style={automobile ? styles.textActive : styles.text}>
                    Automobile
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setEntertainment(false);
                  setProducts(false);
                  setServices(false);
                  setMore(false);
                  setAutomobile(false);
                  setRestaurant(true);
                  setShopping(false);
                  setNightlife(false);
                  setBeauty(false);
                  setHomeservice(false);
                  setCat('Restaurants');
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <FaIcon name={'utensils'} size={35} color="black" />
                  <Text style={restaurants ? styles.textActive : styles.text}>
                    Restaurants
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setEntertainment(false);
                  setProducts(false);
                  setServices(false);
                  setMore(false);
                  setAutomobile(false);
                  setRestaurant(false);
                  setShopping(true);
                  setNightlife(false);
                  setBeauty(false);
                  setHomeservice(false);
                  setCat('Shopping');
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <FaIcon name={'shopping-cart'} size={35} color="black" />
                  <Text style={shopping ? styles.textActive : styles.text}>
                    Shopping
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setEntertainment(false);
                  setProducts(false);
                  setServices(false);
                  setMore(false);
                  setAutomobile(false);
                  setRestaurant(false);
                  setShopping(false);
                  setNightlife(true);
                  setBeauty(false);
                  setHomeservice(false);
                  setCat('Nightlife');
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <FaIcon name={'glass-cheers'} size={35} color="black" />
                  <Text style={nightlife ? styles.textActive : styles.text}>
                    Nightlife
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ScrollView>
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
    height: 40,
    width: 40,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 5,
  },
  imageActive: {
    height: 40,
    width: 40,
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
    color: '#f0505c',
  },
});
