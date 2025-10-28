// /app/(dashboard)/home.tsx


import { View, Text, StyleSheet } from 'react-native'

export default function DashboardHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Dashboard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3366FF',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
  },
})
