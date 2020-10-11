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
  const handleClick = (level) => {
    navigation.navigate('QuizMain', {level: level});
  };
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
      <View>
        <TouchableOpacity onPress={() => handleClick('1')}>
          <View style={[styles.button, {backgroundColor: '#327820'}]}>
            <Text style={styles.leveltext}>Mudah</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => handleClick('2')}>
          <View style={[styles.button, {backgroundColor: '#f9e58d'}]}>
            <Text style={[styles.leveltext], {color : 'black'}}>Medium</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => handleClick('3')}>
          <View style={[styles.button, {backgroundColor: '#e35454'}]}>
            <Text style={styles.leveltext}>Sulit</Text>
          </View>
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
