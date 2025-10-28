// /app/(auth)/login.tsx

import AuthLayout from '@/components/layouts/AuthLayout'
import AppButton from '@/components/ui/AppButton'
import { router } from 'expo-router'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <AuthLayout title="Login">
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <AppButton
          title="Login"
          onPress={() => router.replace('/(dashboard)/home')}
        />

        <Text
          style={styles.forgotPassword}
          onPress={() => router.push('/forgot-password')}
        >
          Forgot Password?
        </Text>

        <Text style={styles.footer}>
          Don’t have an account?{' '}
          <Text
            style={styles.link}
            onPress={() => router.push('/(auth)/signup')}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </AuthLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 16,
  },
  forgotPassword: { color: '#3366FF', textAlign: 'center', marginVertical: 10 },
  footer: { textAlign: 'center', marginTop: 20, color: '#555' },
  link: { color: '#3366FF', fontWeight: '600' },
})
