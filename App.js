import React from 'react';
import { View } from 'react-native';
import Goal from './Goal'; 

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Goal isGoal={true} /> 
    </View>
  );
};

export default App;