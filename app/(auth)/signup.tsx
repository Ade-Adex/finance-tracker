// /app/(auth)/signup.tsx

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { useState } from 'react'
import { router } from 'expo-router'
import AppButton from '@/components/ui/AppButton'
import AuthLayout from '@/components/layouts/AuthLayout'

export default function SignUpScreen() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = () => {
    router.push('/(auth)/verification')
  }

  return (
    <AuthLayout title="Sign Up">
      <View style={styles.container}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
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

        <View style={styles.termsRow}>
          <Text style={styles.termsText}>
            By signing up, you agree to the{' '}
            <Text style={styles.link}>Terms of Service</Text> and{' '}
            <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </View>

        <AppButton title="Sign Up" onPress={handleSignup} />

        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleText}>Sign Up with Google</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Already have an account?{' '}
          <Text
            style={styles.link}
            onPress={() => router.push('/(auth)/login')}
          >
            Login
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
    height: 48,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 16,
  },
  termsRow: { marginBottom: 20 },
  termsText: { fontSize: 13, color: '#555', textAlign: 'center' },
  link: { color: '#3366FF', fontWeight: '500' },
  googleButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 14,
    marginTop: 10,
  },
  googleText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: '500',
  },
  footer: { textAlign: 'center', marginTop: 20 },
})
