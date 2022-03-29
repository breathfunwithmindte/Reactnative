import React from 'react';
import { View, Text } from 'react-native';
import useMain from '../context/Main';

function Main(props) {
  const state = useMain()

  return (
    <View>
      <Text>
        main screen {state.user.username}
      </Text>
    </View>
  );
}

export default Main;