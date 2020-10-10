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

const QuizSecondScreen = ({navigation}) => {
  const Array = [
    {
      id: '1',
      gambar: 'gambar1',
      pertanyaan: 'pertanyaan 1',
      link: 'https://komik.app/files/img/ks/70/thumbs/ks-70-0017.jpg',
    },
    {
      id: '2',
      gambar: 'gambar2',
      pertanyaan: 'pertanyaan 2',
    },
    {
      id: '3',
      gambar: 'gambar3',
      pertanyaan: 'pertanyaan 3',
    },
    {
      id: '4',
      gambar: 'gambar4',
      pertanyaan: 'pertanyaan 4',
    },
  ];
  const [menuItems, setMenuItems] = useState(Array);
  const handleClick = (id) => {
    navigation.navigate('Question', {id});
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.quiz}>
          <Text style={{fontSize: 40}}>Quiz </Text>
        </View>
        <View>
          <Text style={{fontSize: 18}}>Masukkan nama Alkitab atau tokoh!</Text>
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
          keyExtractor={(item) => item.id}
          data={menuItems}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <TouchableOpacity
                style={styles.gambar}
                onPress={() => handleClick(item)}>
                <Text>{item.gambar}</Text>
              </TouchableOpacity>
              <Text>{item.pertanyaan}</Text>
            </View>
          )}
        />
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
    justifyContent: 'space-between',
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
export default QuizSecondScreen;
