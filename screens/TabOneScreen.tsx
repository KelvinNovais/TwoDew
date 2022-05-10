import React, { useState } from 'react';
import {
  StyleSheet,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import ToDoItem from '../components/ToDoItem';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

let id = '4';

export default function TabOneScreen() {
  const [title, setTitle] = useState('');

  const [todos, setTodos] = useState([{
    id: '1',
    content: 'Buy milk',
    isCompleted: false,
  }, {
    id: '2',
    content: 'Buy cereals',
    isCompleted: true,
  }, {
    id: '3',
    content: 'Buy cheese',
    isCompleted: true,
  }]);

  const createNewItem = (atIndex: number) => {
    const newTodos = [...todos];
    newTodos.splice(atIndex, 0, {
      id: id,
      content: '',
      isCompleted: false
    })
    setTodos(newTodos);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TextInput
        style={styles.title}
        value={title}
        onChangeText={setTitle}
        placeholder={'Your title goes here'}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <FlatList
        data={todos}
        renderItem={({ item, index }) => (
          <ToDoItem
            todo={item}
            onSubmit={() => createNewItem(index + 1)}
          />
        )}
        style={{ width: '100%' }}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: '80%',
  },
});


// Fonte: https://www.youtube.com/watch?v=GFQDJlVEXRg (1:25)