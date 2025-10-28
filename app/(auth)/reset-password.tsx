// /app/(auth)/reset-password.tsx

import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useState } from 'react'
import AppButton from '@/components/ui/AppButton'
import { router } from 'expo-router'
import AuthLayout from '@/components/layouts/AuthLayout'

export default function ResetPasswordScreen() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <AuthLayout title="Reset Password">
      <View style={styles.container}>
        <TextInput
          placeholder="New Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          placeholder="Retype new password"
          secureTextEntry
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <AppButton
          title="Continue"
          onPress={() => router.replace('/(auth)/login')}
        />
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
    marginBottom: 20,
  },
})
