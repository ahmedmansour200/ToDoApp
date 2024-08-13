import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { styles } from "../shared/styles";
import TodoItem from "../components/TodoItem";

const CompletedTasks = () => {
  const [completedTodos, setCompletedTodos] = useState([]);
  const { todos } = useSelector((state) => state.todo);

  useEffect(() => {
    if(todos.length){
      const filteredTodos = todos.filter((res) => res.completed);
      setCompletedTodos(filteredTodos);
    }
  }, [todos]);

  return (
    <View style={{...styles.todosContainer, alignItems: 'center' ,marginTop: 20 }}>
      {completedTodos.length ? (
        <>
          {completedTodos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </>
      ) : (
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          No Tasks is completed!!
        </Text>
      )}
    </View>
  );
};

export default CompletedTasks;
