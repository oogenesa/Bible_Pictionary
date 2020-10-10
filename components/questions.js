import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Question = ({props}) => {
  return (
    <View>
      <TouchableOpacity style={styles.gambar}>
        <Text>Gambar 1</Text>
      </TouchableOpacity>
      <Text>Pertanyaan 1</Text>
    </View>
  );
};
const styles = StyleSheet.create({
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
export default Question;
