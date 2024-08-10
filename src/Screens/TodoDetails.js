import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const TodoDetails = () => {
  const navigation = useNavigation();
  const {todo} = useRoute().params;
  
  return (
    <View style={{justifyContent:'center', flex:1, margin:20 , alignItems:'center'}}>
        <Text>Task Title: {todo.title}</Text>
        <Text>Task Body: {todo.body}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>To Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoDetails;
