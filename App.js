import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO APP</Text>
      <TextInput
        style={styles.input}
        placeholder="Todo Title"
      />
      <TextInput
        style={styles.input}
        placeholder="Todo Description"
      />
      <TouchableOpacity style={styles.button}>
        <Text>Add Todo</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <View style={styles.filterContainer}>
        {['All', 'Active', 'Done'].map(status => (
          <TouchableOpacity
            key={status}
          >
            <Text>{status}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#7C00FE',
    padding: 10,
  },
});
