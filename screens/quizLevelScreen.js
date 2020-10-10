import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';

const QuizLevelScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerLogo}>
        <Image
          style={styles.logo}
          source={require('../assets/images/bery_logo.png')}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.textinfo}>Pilih Tingkat Kesulitan</Text>
      </View>
      <View style={[styles.button, {backgroundColor: '#327820'}]}>
        <TouchableOpacity>
          <Text style={styles.leveltext}>Mudah</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.button, {backgroundColor: '#b8b65c'}]}>
        <TouchableOpacity>
          <Text style={styles.leveltext}>Medium</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.button, {backgroundColor: '#e35454'}]}>
        <TouchableOpacity>
          <Text style={styles.leveltext}>Sulit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  leveltext: {
    fontFamily: 'BalsamiqSans-Regular',
    color: '#fff',
  },
  textinfo: {
    fontSize: 25,
    fontFamily: 'BalsamiqSans-Regular',
  },
  logo: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  quiz: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    width: 100,
    height: 80,
    backgroundColor: '#327820',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
    borderColor: 'black',
    borderWidth: 3,
  },
  buttonview: {
    alignItems: 'center',
    marginTop: 10,
  },
  scrool: {
    height: 400,
  },
  gambar: {
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
export default QuizLevelScreen;
