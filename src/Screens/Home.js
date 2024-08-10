import { Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import Todos from "../components/Todos";
import { styles } from "../shared/styles";

const Home = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [todos, setTodos] = useState([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem('todos');
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    } catch (error) {
      console.log("Error loading todos from AsyncStorage", error);
    }
  };

  const saveTodos = async (todos) => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      console.log("Error saving todos to AsyncStorage", error);
    }
  };


  const addTodo = () => {
    const newTodo = { id: todos.length + 1, title, body, isCompleted: false };
    setTodos([...todos, newTodo]);
    setTitle(''); // Clear the input field after adding
    setBody('');  // Clear the input field after adding
  }
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id != id));
  }
  const toggleDeleteMode = () => {
    setIsDeleteMode(!isDeleteMode);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{ fontSize: 25, textTransform: "uppercase", fontWeight: "bold", marginTop: 4 }}
      >
        Todo APP
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your task"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your comment"
        value={body}
        onChangeText={setBody}
      />
      <TouchableOpacity style={styles.submitBtn} onPress={addTodo}>
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={{ ...styles.submitBtn, backgroundColor: isDeleteMode ? 'red' : 'grey' }}
        onPress={toggleDeleteMode}
      >
        <Text style={styles.text}>{isDeleteMode ? "Exit Delete Mode" : "Delete Mode"}</Text>
      </TouchableOpacity>
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
        <TouchableOpacity style={{ ...styles.filterBtn }} activeOpacity={0.5}>
          <Text style={{ ...styles.filterText }}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.filterBtn }} activeOpacity={0.5}>
          <Text style={{ ...styles.filterText }}>Done</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.todosContainer}>
        <Todos todos={todos} removeTodo={removeTodo}  isDeleteMode={isDeleteMode} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
