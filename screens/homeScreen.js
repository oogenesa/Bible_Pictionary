import React from 'react';
import {Text, View, Image, StyleSheet, StatusBar, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Home = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="light-content"></StatusBar>
      <View style={styles.container}>
        <View style={styles.headerLogo}>
          <Image
            style={styles.logo}
            source={require('../assets/images/bery_logo.png')}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.textinfo}>
            Bery akan menolong kamu membuat kuis Alkitab dan informasi
            seputarnya dari kamus Alkitab berbasis gambar
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            height: 50,
            paddingTop: 5,
            marginTop: 20,
          }}>
          <Text style={styles.konten}>Pilih konten yang kamu mau!</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('QuizLevel')}>
              <View
                style={[
                  styles.button,
                  {backgroundColor: '#f36b70', flexDirection: 'row'},
                ]}>
                <FontAwesome name="question" color="#217882" size={50} />
                <View style={{width: 50}}>
                  <Text
                    style={[styles.buttontext, {color: '#fff', marginLeft: 8}]}>
                    Bible Ask
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('InfoMain')}>
              <View
                style={[
                  styles.button,
                  {backgroundColor: '#f9e58d', flexDirection: 'row'},
                ]}>
                <Fontisto name="zoom" color="#217882" size={35} />
                <View style={{width: 50}}>
                  <Text style={[styles.buttontext, {marginLeft: 5}]}>
                    Bible Info
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerLogo: {
    alignItems: 'center',
    height: 350,
  },
  logo: {
    width: 400,
    height: 400,
  },
  info: {
    alignItems: 'center',
    backgroundColor: '#7d6673',
    padding: 15,
    marginHorizontal: 35,

    borderRadius: 5,
  },
  textinfo: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'New Era Casual Regular',
  },
  button: {
    width: 140,
    height: 80,
    alignItems: 'center',
    padding: 10,
    margin: 20,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 5,
    justifyContent: 'center',
  },
  buttontext: {
    fontSize: 18,
    fontFamily: 'BalsamiqSans-Regular',
    fontWeight: 'bold',
  },
  konten: {
    fontFamily: 'BalsamiqSans-Regular',

    fontSize: 30,
  },
});
export default Home;
