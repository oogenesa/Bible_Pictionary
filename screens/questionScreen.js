import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Animated,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const QuestionScreen = ({route, navigation}) => {
  const {id} = route.params;
  console.log(id.link);

  const array = [
    {
      id: '1',
      uri: id.link,
    },
  ];

  const [caraousel, setCaraousel] = useState(array);
  return (
    <View style={styles.container}>
      <View style={styles.quiz}>
        <Text style={{fontSize: 40}}>Quiz</Text>
      </View>
      <View style={{height: 400}}>
        <FlatList
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={caraousel}
          renderItem={({item}) => (
            <View style={{marginHorizontal: 50}}>
              <Image
                style={styles.gambar}
                source={{
                  uri: id.link,
                }}
              />
              <View style={styles.source}>
                <Text>Sumber</Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.question}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>
          Question: Apa nama bintang yang jatuh dari langit saat malaikat ketiga
          meniup terompetnya?
        </Text>
      </View>
      <View style={styles.source}>
        <Text>Sumber</Text>
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
export default QuestionScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quiz: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  gambar: {
    width: 250,
    height: (3 / 2) * 250,
    borderRadius: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  question: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aaaaaa',
    width: 350,
  },
  source: {
    marginTop: 5,
    backgroundColor: '#aaaaaa',
    alignItems: 'center',
    borderRadius: 5,
  },
});
//<Text>{id.id}</Text>
const _renderItem = ({item, index}) => {
  return (
    <View
      style={{
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginLeft: 25,
        marginRight: 25,
      }}>
      <Text style={{fontSize: 30}}>{item.title}</Text>
      <Text>{item.text}</Text>
    </View>
  );
};
{
  /* <Image
          style={styles.gambar}
          source={{
            uri: id.link,
          }}
        /> */
}
