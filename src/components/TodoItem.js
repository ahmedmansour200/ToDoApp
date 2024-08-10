import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

const TodoItem = ({ todo, removeTodo ,isDeleteMode }) => {
  const navigation = useNavigation();
  
  return (
    <View
      style={{
        marginVertical: 4,
        width: "100%",
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center', // Aligns items vertically in the center
      }}
    > 
      <TouchableOpacity
        onPress={() => navigation.navigate("Todo-details", { todo })}
        style={{ flex: 1 }} // Makes this TouchableOpacity take up the available space
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>{todo.title}</Text>
        <Text>{todo.body}</Text>
      </TouchableOpacity>
      
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <AntDesign
          onPress={() => navigation.navigate("Completed Task", { todo })}
          name="checksquareo"
          size={20}
          color="green"
          style={{ marginRight: 10 }}
        />
        {isDeleteMode && (
        <Feather
          onPress={() => removeTodo(todo.id)} // Pass the correct ID
          name="trash"
          size={20}
          color="red"
        /> 
        )}
      </View>
    </View>
  );
};

export default TodoItem;
