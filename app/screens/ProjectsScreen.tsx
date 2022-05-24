import React, { useState } from 'react';
import { BackHandler, StyleSheet, FlatList } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ProjectItem from '../components/ProjectItem';

export default function ProjectsScreen() {
  const [project, setProjects] = useState([
    {
      id: '1',
      title: 'Project 1',
      createdAt: '2nd',
    }, {
      id: '2',
      title: 'Project 2',
      createdAt: '2nd',
    }, {
      id: '3',
      title: 'Project 3',
      createdAt: '2nd',
    },
  ])

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <FlatList
        data={project}
        renderItem={({ item }) => <ProjectItem project={item} />}
        style={{ width: '100%' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#404040',
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    marginRight: 5,
    // fontWeight: 'bold',
  },
  time: {
    color: 'darkgrey'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
