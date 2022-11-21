import React from "react";
import Screen from "./screen";
import 'react-native-gesture-handler';

export const ProfileScreen = ({navigation}) => <Screen navigation = {navigation} name="Profile"/>;
export const MessageScreen = ({navigation}) => <Screen navigation = {navigation} name="Message"/>;
export const ListScreen = ({navigation}) => <Screen navigation = {navigation} name="List"/>;