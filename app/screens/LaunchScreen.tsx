// /app/screens/LaunchScreen.tsx


import { View, Text, StyleSheet } from 'react-native'
import { useEffect } from 'react'
import { router } from 'expo-router'
import BottomBar from '@/components/ui/BottomBar'

export default function LaunchScreen() {
 useEffect(() => {
   const timer = setTimeout(() => {
     router.replace('/(auth)/onboarding') // ✅ correct path
   }, 2000)
   return () => clearTimeout(timer)
 }, [])


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Finance</Text>
      <Text style={styles.subtitle}>Tracker</Text>
      <BottomBar/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3366FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: '#fff',
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
  },
})
