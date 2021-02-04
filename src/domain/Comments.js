import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import CommentsItem from './CommentsItem'

const Comments = ({ data = [], onPressItem = () => {} }) => {
  // console.log(data)
  if (data.length === 0) {
    return <></>
  }
  // return <></>

  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item, index }) => (
        <CommentsItem data={item} onPress={onPressItem} />
      )}
      keyExtractor={(item, index) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#d6d6d6',
    height: 1
  }
});

export default Comments
