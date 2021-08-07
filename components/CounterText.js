import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function CounterText(props) {
  return <Text style={[styles.text, {fontSize: props.fontSize}, {color: props.color}]}>{props.children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
});
