import React, { useRef } from 'react';
import { StyleSheet, View, I18nManager, Animated } from 'react-native';
import { Swipeable, RectButton } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons';

import { Button, Card, Text, TouchableRipple } from '../components'

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const PostsItem = ({ data, onPress = () => {} }) => {
  const _swipeableRow = useRef()

  const _onPress = () => {
    onPress(data)
  }

  const renderLeftActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 80],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    })
    return (
      <RectButton style={styles.leftAction} onPress={close}>
        <AnimatedIcon
          name="archive"
          size={30}
          color="#fff"
          style={[styles.actionIcon]}
        />
      </RectButton>
    )
  }
  
  const renderRightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    })
    return (
      <RectButton style={styles.rightAction} onPress={close}>
        <AnimatedIcon
          name="delete-forever"
          size={30}
          color="#fff"
          style={[styles.actionIcon]}
        />
      </RectButton>
    )
  }

  const close = () => {
    _swipeableRow.close();
  }

  return (
    <TouchableRipple onPress={_onPress}>
      <View style={styles.item}>
        <Text subhead numberOfLines={1}>{data.title}</Text>
        <Text caption1 numberOfLines={1}>{data.body}</Text>
      </View>
    </TouchableRipple>
  )
  
  // return (
  //   <Swipeable
  //     ref={_swipeableRow}
  //     friction={2}
  //     leftThreshold={80}
  //     rightThreshold={41}
  //     renderLeftActions={renderLeftActions}
  //     renderRightActions={renderRightActions}
  //   >
  //     <RectButton style={styles.rectButton} onPress={() => alert(data.from)}>
  //       <Text numberOfLines={1} style={styles.title}>
  //         {data.title}
  //       </Text>
  //       <Text numberOfLines={1} style={styles.body}>
  //         {data.body}
  //       </Text>
  //     </RectButton>
  //   </Swipeable>
  // )
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  rectButton: {
    flex: 1,
    height: 80,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  title: {
    color: '#999',
    backgroundColor: 'transparent',
  },
  body: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 20,
    top: 10,
    color: '#999',
    fontWeight: 'bold',
  },
});

export default PostsItem
