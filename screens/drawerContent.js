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
          <View>
            <Text>tes</Text>
          </View>
          <Drawer.Section>
            <DrawerItem label="Home" />
          </Drawer.Section>
          <Drawer.Section title="Preferences"></Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
