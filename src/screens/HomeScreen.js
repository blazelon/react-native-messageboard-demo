import React, { useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, FlatList, InteractionManager } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Button } from '../components'
import { Posts } from '../domain'
import { usePosts } from '../providers'

const screenWidth = Dimensions.get('window').width;

const HomeScreen = ({ navigation }) => {
  const { fetchPosts, data } = usePosts()

  const onPressItem = (item) => {
    navigation.navigate('PostDetails', { id: item.id })
  }

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      fetchPosts()
        .then(() => {

        })
    })
  }, [fetchPosts])

  return (
    <View
      style={styles.container}>
      <StatusBar
        backgroundColor='translucent'
        barStyle="dark-content"
      />
      <Posts data={data} onPressItem={onPressItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    flex: 1,
    flexGrow: 1
  }
})

export default HomeScreen;