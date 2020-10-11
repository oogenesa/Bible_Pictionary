import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
export function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View>
          <View style={{marginLeft : 10, alignItems :'center', justifyContent :'center', height:500}}>
            <Text style={styles.text}>Code For God</Text>
            <Text style={styles.text}>Hackathon 2020</Text>
            <Text style={styles.text}>Bible Pictionary (Bery)</Text>
            <Text style={styles.text}>Presented By</Text>
            <Text style={styles.text}>Lukas, Nikos, Emma</Text>
            <Text style={styles.text}>Vegi, Yuli, Rinto</Text>
            <Text style={styles.text}></Text>
            <Text style={styles.text}>Segala Hormat Bagi </Text>
            <Text style={styles.text}>Kemuliaan Tuhan </Text>
          </View>
          {/* <Drawer.Section>
            <DrawerItem label="Home" />
          </Drawer.Section>
          <Drawer.Section title="Preferences"></Drawer.Section> */}
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
const styles= StyleSheet.create({
  text :{
    fontFamily : 'BalsamiqSans-Regular',
    fontSize : 24
  }
})