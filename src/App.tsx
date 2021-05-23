/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components/native';
import Theme from './Theme';
import {NavigationContainer} from '@react-navigation/native';

interface StyledProps {
  theme: ITheme;
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: StyledProps) =>
    props.theme && props.theme.color.black};
`;

const MainText = styled.Text`
  font-size: 30px;
  text-align: center;
  margin: 10px;
  color: red;
`;

interface Props {}
const App = ({}: Props) => {
  const isDarkMode = useColorScheme() === 'dark';

  const {userInfo} = React.useContext<IUserContext>(UserContext)

  return (
    <NavigationContainer>
      <SafeAreaView>
        <ThemeProvider theme={Theme}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <ScrollView>
            <Container>
              <MainText onPress={() => console.log('click')}>
                Hello world TypeScript
              </MainText>
            </Container>
          </ScrollView>
        </ThemeProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
