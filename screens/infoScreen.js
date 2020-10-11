import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {info} from '../components/apiFunction';

const InfoMainScreen = ({route, navigation}) => {
  const [data, setData] = useState({
    keyword: '',
    isValidKeyword: false,
  });
  const textInputChange = (val) => {
    var letters = /^[A-Za-z\s]+$/;
    if (val.match(letters)) {
      setData({
        keyword: val,
        isValidKeyword: true,
      });
    } else {
      setData({
        keyword: val,
        isValidKeyword: false,
      });
    }
  };
  const handleClick = () => {
    //navigation.navigate('QuizSecond');
    const send = {
      keyword: data.keyword,
    };
    console.log(send);

    if (data.isValidKeyword === false) {
      alert('Harap masukkan keyword hanya berupa huruf');
    } else if (data.keyword.length === 0) {
      alert('Harap memasukkan keyword');
    } else {
      info(send).then((res) => {
        if (res.length === 0) {
          alert('data tidak ditemukan');
        } else {
          navigation.navigate('InfoSecond', res);
        }
      });
      //console.log(JSON.stringify(send));
    }
  };
  const handleSuggestion = (val) => {
    const send = {
      keyword: val,
    };
    info(send).then((res) => {
      if (res.length === 0) {
        alert('data tidak ditemukan');
      } else {
        navigation.navigate('InfoSecond', res);
      }
    });
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.quiz}>
          <Text style={styles.quiztext}>Info</Text>
        </View>
        <View>
          <Text style={{fontSize: 18}}>Masukkan nama Kitab atau tokoh!</Text>
          <TextInput
            onChangeText={(val) => textInputChange(val)}
            placeholder="Contoh : Kejadian, Yesus"
            style={{marginTop: 5}}
          />
        </View>
        <View style={styles.buttonview}>
          <TouchableOpacity
            style={styles.generate}
            onPress={() => handleClick()}>
            <Text style={styles.generatetext}>Generate</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text>Suggestion</Text>
        <View style={styles.suggestionbox}>
          <View>
            <TouchableOpacity onPress={() => handleSuggestion('tokoh')}>
              <View style={[styles.button, {backgroundColor: '#e35454'}]}>
                <Text style={styles.leveltext}>Tokoh</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => handleSuggestion('kitab wahyu')}>
              <View style={[styles.button, {backgroundColor: '#e35454'}]}>
                <Text style={styles.leveltext}>Kitab wahyu</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.suggestionbox}>
          <View>
            <TouchableOpacity onPress={() => handleSuggestion('tempat')}>
              <View style={[styles.button, {backgroundColor: '#e35454'}]}>
                <Text style={styles.leveltext}>Tempat</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => handleSuggestion('Yesus')}>
              <View style={[styles.button, {backgroundColor: '#e35454'}]}>
                <Text style={styles.leveltext}>Yesus</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leveltext: {
    fontFamily: 'BalsamiqSans-Regular',
    color: '#fff',
  },
  quiztext: {
    fontSize: 80,
    fontFamily: 'BalsamiqSans-Regular',
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
    width: 100,
    height: 80,

    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    borderColor: 'black',
    borderWidth: 3,
  },
  generate: {
    width: 200,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },
  buttonview: {
    alignItems: 'center',
    marginTop: 10,
  },
  quiztext: {
    fontSize: 80,
    fontFamily: 'BalsamiqSans-Regular',
  },
  suggestionbox: {
    flexDirection: 'row',
  },
  generatetext: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Dinomouse-Regular',
  },
});
export default InfoMainScreen;
