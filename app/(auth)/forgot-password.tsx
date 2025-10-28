// /app/(auth)/forgot-password.tsx

import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useState } from 'react'
import { router } from 'expo-router'
import AppButton from '@/components/ui/AppButton'
import AuthLayout from '@/components/layouts/AuthLayout'

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('')

  const handleContinue = () => {
    router.push('/(auth)/email-sent')
  }

  return (
    <AuthLayout title="Forgot Password">
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>
          Enter your email and we’ll send you a link to reset your password.
        </Text>

        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <AppButton title="Continue" onPress={handleContinue} />
      </View>
    </AuthLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: { textAlign: 'center', color: '#666', marginBottom: 24 },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 20,
  },
})
