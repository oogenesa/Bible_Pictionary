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
import {question} from '../components/apiFunction';

const QuizSecondScreen = ({route, navigation}) => {
  const balikan = route.params;

  const [menuItems, setMenuItems] = useState(balikan);

  const handleClick = (item) => {
    let send = {id: item.id_quiz};
    //navigation.navigate('Question', {id});
    question(send).then((res) => {
      if (res.length === 0) {
        alert('jaringan bermasalah');
      } else {
        console.log(res);
        navigation.navigate('Question', {res, item});
      }
    });
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <View style={styles.quiz}>
          <Text style={{fontSize: 40 ,fontFamily: 'BalsamiqSans-Regular'}}>Bible Ask</Text>
        </View>
        <View>
          <Text style={{fontSize: 18}}>Masukkan nama Kitab atau tokoh!</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput
              placeholder="Contoh : Kejadian, Yesus"
              style={{marginTop: 5}}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={{color: '#FFF'}}>Generate</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonview}></View>
      </View>
      <View style={styles.scrool}>
        <FlatList
          keyExtractor={(item) => item.jawaban}
          data={menuItems}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleClick(item)}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}>
                <View style={styles.gambar}>
                <Text style={{fontSize :30, fontFamily :'New Era Casual Bold' }}>{item.row_num}</Text>
                </View>
                <View style={{width: 170, marginRight: 5}}>
                  <Text style={{paddingRight: 20}}>{item.pertanyaan}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const Questions = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      <TouchableOpacity style={styles.gambar}>
        <Text>Gambar 1</Text>
      </TouchableOpacity>
      <Text>Pertanyaan 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
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
    width: 80,
    height: 20,
    backgroundColor: '#327820',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },
  buttonview: {
    alignItems: 'center',
    marginTop: 10,
  },
  scrool: {
    height: 400,

    width: 340,
    flex: 7,
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
    backgroundColor: '#e35454',
  },
});
export default QuizSecondScreen;
