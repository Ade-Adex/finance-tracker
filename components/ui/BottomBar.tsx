// components/ui/BottomBar.tsx
import { View, StyleSheet } from 'react-native'
import React from 'react'

export default function BottomBar() {
  return <View style={styles.bottomBar} />
}

const styles = StyleSheet.create({
  bottomBar: {
    width: 134,
    height: 5,
    backgroundColor: '#0a0505',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 8,
  },
})
