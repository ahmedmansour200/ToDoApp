import React  from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { styles } from "../shared/styles";
import { Text, TouchableOpacity, View } from "react-native";

const Todos = () => {

  const { todos } = useSelector((state) => state.todo);


  return todos.length ? (
    <>
      <View style={styles.dividerLine} />
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={{ ...styles.filterBtn, ...styles.activeFilterBtn }}
          activeOpacity={0.5}
        >
          <Text style={{ ...styles.filterText, ...styles.activeFilterText }}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.filterBtn }}
          activeOpacity={0.5}
        >
          <Text style={{ ...styles.filterText }}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.filterBtn }} activeOpacity={0.5}>
          <Text style={{ ...styles.filterText }}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.todosContainer}>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </View>
    </>
  ) : null;
};

export default Todos;
