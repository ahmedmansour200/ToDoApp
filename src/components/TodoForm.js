import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "../shared/styles";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todo.slice";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const addNewTodo = () => {
    const data = {
      title,
      body,
      completed: false,
      id: Date.now(),
    };

    dispatch(addTodo(data));
    setTitle("");
    setBody("");
  };

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Enter your task"
        value={title}
        onChangeText={(value) => setTitle(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your comment"
        value={body}
        onChangeText={(value) => setBody(value)}
      />
      <TouchableOpacity style={styles.submitBtn} onPress={addNewTodo}>
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>
    </>
  );
};

export default TodoForm;
