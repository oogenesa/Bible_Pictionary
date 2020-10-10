import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

const QuizMainScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.quiz}>
          <Text style={{fontSize: 80}}>Quiz</Text>
        </View>
        <View>
          <Text style={{fontSize: 18}}>Masukkan nama Alkitab atau tokoh!</Text>
          <TextInput
            placeholder="Contoh : Kejadian, Yesus"
            style={{marginTop: 5}}
          />
        </View>
        <View style={styles.buttonview}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('QuizSecond')}>
            <Text style={{color: '#FFF'}}>Generate</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image
          style={styles.logo}
          source={require('../assets/images/bery_logo.png')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  quiz: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: '#327820',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonview: {
    alignItems: 'center',
    marginTop: 10,
  },
  quiztext: {
    fontSize: 80,
    fontFamily: 'BalsamiqSans-Regular',
  },
});
export default QuizMainScreen;
