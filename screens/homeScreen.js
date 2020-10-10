import React from 'react';
import {Text, View, Image, StyleSheet, StatusBar, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
          <Text style={{fontSize: 30}}>Pilih konten yang kamu mau!</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={[styles.button, {backgroundColor: '#e35454'}]}>
            <TouchableOpacity onPress={() => navigation.navigate('QuizLevel')}>
              <Text style={{fontSize: 18, color: '#fff'}}>Bible Quiz</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.button, {backgroundColor: '#b8b65c'}]}>
            <TouchableOpacity>
              <Text style={{fontSize: 18}}>Bible Info</Text>
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
    backgroundColor: '#995cbd',
    padding: 15,
    marginHorizontal: 20,

    borderRadius: 5,
  },
  textinfo: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
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
});
export default Home;
