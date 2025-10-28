// components/layouts/AuthLayout.tsx
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { ReactNode } from 'react'
import BottomBar from '@/components/ui/BottomBar'

interface Props {
  children: ReactNode
  title?: string
}

export default function AuthLayout({ children, title }: Props) {
  return (
    <View style={styles.container}>
      {/* Header with Back Button + Title */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        {title && <Text style={styles.title}>{title}</Text>}
      </View>

      {/* Page Content */}
      <View style={styles.content}>{children}</View>

      {/* Bottom Bar */}
      <BottomBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    paddingRight: 10,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginRight: 34, // balances arrow space visually
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
})
