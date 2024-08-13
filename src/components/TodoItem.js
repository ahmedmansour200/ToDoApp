import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import {useDispatch} from 'react-redux'
import { markAsDone, removeTodo } from "../redux/slices/todo.slice";
import { styles } from "../shared/styles";
const TodoItem = ({todo}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  const todoDone = () => {
    dispatch(markAsDone(todo.id));
  }
  const deleteTodo = () => {
    dispatch(removeTodo(todo.id));
  };
  return (
    <View
      activeOpacity={0.5}
      style={{
        marginVertical: 4,
        width: "100%",
        borderWidth: 1,
        borderBlockColor: "grey",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: "row",
        justifyContent: 'space-between'
      }}
    > 
    <TouchableOpacity onPress={() => navigation.navigate("Todo-details", { todo })}>
      <Text style={{
              fontSize: 22,
              fontWeight: "bold",
              ...(todo.completed ? styles.doneTodo : null),
            }}>{todo.title}</Text>
      <Text style={ todo.completed ? styles.doneTodo : null}>{todo.body}</Text>
    </TouchableOpacity>
    <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
    <AntDesign onPress={todoDone} name="checksquareo" size={20} color="green" />
      <Feather onPress={deleteTodo} name="trash" size={20} color="red" />
    </View>
    </View>
  );
};

export default TodoItem;
