import { Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import Todos from "../components/Todos";
import { styles } from "../shared/styles";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todo.slice";
import TodoForm from "../components/TodoForm";

const Home = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{ fontSize: 25, textTransform: "uppercase", fontWeight: "bold", marginTop: 4 }}
      >
        Todo APP
      </Text>
     <TodoForm/>
      <ScrollView style={styles.todosContainer}>
        <Todos/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
