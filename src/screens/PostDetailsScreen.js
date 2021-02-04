import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, FlatList, InteractionManager } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Button } from '../components'
import { PostDetail } from '../domain'
import { usePosts } from '../providers'

const screenWidth = Dimensions.get('window').width;

const PostDetailsScreen = ({ route }) => {
  const { fetchPost } = usePosts()

  const [data, setData] = useState()

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      fetchPost(route.params.id)
        .then((response) => {
          if (response.ok) {
            setData(response.data)
          }
        })
    })
  }, [route.params])

  return (
    <View
      style={styles.container}>
      <StatusBar
        backgroundColor='translucent'
        barStyle="dark-content"
      />
      <PostDetail data={data} />
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

export default PostDetailsScreen;