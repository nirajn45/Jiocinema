import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MissedGoal = () => {
  return (
    <View style={styles.missedGoalContainer}>
      <Text style={styles.missedGoalText}>Goal is Missed</Text>
    </View>
  );
};

const MadeGoal = () => {
  return (
    <View style={styles.madeGoalContainer}>
      <Text style={styles.madeGoalText}>Goal is Done</Text>
    </View>
  );
};

const Goal = (props) => {
  const { isGoal } = props;

  return (
    <View style={styles.container}>
      {isGoal ? <MadeGoal /> : <MissedGoal />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 22,
  },
  missedGoalContainer: {
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
  },
  missedGoalText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  madeGoalContainer: {
    padding: 20,
    backgroundColor: 'green',
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
  },
  madeGoalText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Goal;
