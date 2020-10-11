import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Animated,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Overlay} from 'react-native-elements';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DoubleClick from 'react-native-double-click';

const QuestionScreen = ({route, navigation}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const id = route.params.res[0];
  const tes = route.params.res;
  const items = route.params.item;
  console.log(route.params);
  console.log(id.link_gambar);
  const [visible, setVisible] = useState(false);
  const [zoom, setZoom] = useState({
    boolzoom: false,
    link: '',
  });

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const toogleZoom = (img) => {
    setZoom({boolzoom: !zoom.boolzoom, link: img});
  };
  const handleSlide = (index) => {
    setActiveSlide(index);
    console.log(index);
  };

  const [caraousel, setCaraousel] = useState(tes);
  return (
    <View style={styles.container}>
      <View style={styles.quiz}>
        <Text style={styles.title}>Bible Ask</Text>
      </View>
      {items.jumlah_gambar > 1 ? (
        <View>
          <View style={{height: 430}}>
            <Carousel
              data={caraousel}
              sliderWidth={300}
              itemWidth={250}
              renderItem={({item}) => (
                <View style={{marginHorizontal: 20}}>
                  <DoubleClick onClick={() => toogleZoom(item.link_gambar)}>
                    <Image
                      style={styles.gambar}
                      source={{
                        uri: item.link_gambar,
                      }}
                    />

                    {console.log(item.link_gambar)}
                  </DoubleClick>

                  <View style={styles.source}>
                    <Text>{item.perikop}</Text>
                    <Text>Sumber :{item.link_komik}</Text>
                  </View>
                </View>
              )}
              onSnapToItem={(index) => handleSlide(index)}
              // onSnapToItem={(index) => this.setState({activeSlide: index})}
            />
          </View>
          <View
            style={{
              width: 10,
              alignItems: 'center',
              position: 'absolute',
              bottom: 30,
              right: 130,
            }}>
            <Pagination
              dotsLength={items.jumlah_gambar}
              activeDotIndex={activeSlide}
              containerStyle={{}}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
              }}
              inactiveDotStyle={
                {
                  // Define styles for inactive dots here
                }
              }
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </View>
        </View>
      ) : (
        <View style={{marginHorizontal: 20}}>
          <DoubleClick onClick={() => toogleZoom(id.link_gambar)}>
            <Image
              style={styles.gambar}
              source={{
                uri: id.link_gambar,
              }}
            />
            {console.log(id.link_gambar)}
          </DoubleClick>
          <View style={styles.perikop}>
            <Text>{id.perikop}</Text>
          </View>
          <View style={styles.source}>
            <Text> Sumber :{id.link_komik}</Text>
          </View>
        </View>
      )}
      <View style={styles.question}>
        <Text style={styles.questiontext}>
          {items.pertanyaan}
        </Text>
      </View>
      <View style={styles.circle}>
        <TouchableOpacity onPress={toggleOverlay}>
          <View>
            <MaterialCommunityIcons
              name="lightbulb-on"
              color={'#d2e336'}
              size={30}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View></View>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={styles.overlays}>
        <View style={styles.overlay}>
        <View style={{flex :1, justifyContent :'center'}}>

          <Text style={styles.jawaban}>Jawabannya:</Text>
        </View>
<View style={{flex :5, justifyContent :'space-between' }}>
<View></View>
          <Text style={styles.jawabantext}>{items.jawaban}</Text>
          <Text style={styles.jawabantext}>{id.halaman}</Text>
</View>
        </View>
      </Overlay>
      <Overlay
        isVisible={zoom.boolzoom}
        onBackdropPress={toogleZoom}
        overlayStyle={styles.zoom}>
        <TouchableOpacity onPress={toogleZoom}>
          <View style={{height: 600, padding: 0}}>
            <Image
              style={styles.zoomimage}
              source={{
                uri: zoom.link,
              }}
            />
          </View>
        </TouchableOpacity>
      </Overlay>
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
  title: {
    fontSize: 50,
    fontFamily: 'BalsamiqSans-Regular',
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

    width: 350,
  },
  circle: {
    backgroundColor: '#aaaaaa',
    borderRadius: 100,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  source: {
    marginTop: 5,
    backgroundColor: '#aaaaaa',
    alignItems: 'center',
    borderRadius: 5,
  },
  perikop: {
    marginTop: 5,

    alignItems: 'center',
  },
  overlays: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#f9e58d',
  },
  overlay: {
    width: 250,
    height: 220,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
  },
  jawabantext: {
    fontFamily: 'BalsamiqSans-Regular',
    fontSize: 24,
   
    textAlign :'center'
  },
  jawaban: {
    fontFamily: 'BalsamiqSans-Regular',
    fontSize: 25,
    color: '#fff',
    
  },
  zoom: {
    alignItems: 'stretch',
    width: 400,
  },
  zoomimage: {
    flex: 1,
    width: 380,
    height: 600,
  },
  questiontext :{fontSize: 20, textAlign: 'center',  fontFamily: 'BalsamiqSans-Regular',}
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

{
  /* <FlatList
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
        /> */
}
