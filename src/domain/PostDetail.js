import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native'

import { Button, Card, Divider, Text, TouchableRipple } from '../components'

const PostDetail = ({ data }) => {
  if (!data) {
    return <></>
  }

  return (
    <ScrollView style={styles.container}>
      <Text body>{data.title}</Text>
      <Divider large />
      <Text footnote>{data.body}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  }
});

export default PostDetail
