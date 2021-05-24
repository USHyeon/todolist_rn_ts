import * as React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>SignIn</Text>
      <Text onPress={() => navigation.navigate('SignUp')}>SignUp로 이동</Text>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
