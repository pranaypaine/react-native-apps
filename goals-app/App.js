import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";

import GoalItem from './components/GoalItem';
import GoalInput from "./components/GoalInput";

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);



  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id){
    console.log('Deleted');
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });

  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal= {addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <Text>list of gaols...</Text>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  }
});
