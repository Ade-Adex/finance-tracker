// /app/(auth)/verification.tsx

import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useRef, useState } from 'react'
import { router } from 'expo-router'
import AppButton from '@/components/ui/AppButton'
import AuthLayout from '@/components/layouts/AuthLayout'

export default function VerificationScreen() {
  const [code, setCode] = useState(['', '', '', '', '', ''])
  const inputRefs = useRef<TextInput[]>([])

  const handleChange = (text: string, index: number) => {
    if (/^\d*$/.test(text)) {
      const newCode = [...code]
      newCode[index] = text
      setCode(newCode)

      // Auto focus next input
      if (text && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus()
      }

      // Auto submit when all 4 digits are entered
      if (newCode.join('').length === 6) {
        handleVerify()
      }
    }
  }

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus()
    }
  }

  const handleVerify = () => {
    router.replace('/(auth)/login')
  }

  return (
    <AuthLayout title="Verification">
      <View style={styles.container}>
        <Text style={styles.title}>Verification</Text>
        <Text style={styles.subtitle}>Enter your Verification Code</Text>

        {/* PIN Inputs */}
        <View style={styles.pinContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => {
                if (ref) inputRefs.current[index] = ref
              }}
              style={styles.pinInput}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              textAlign="center"
            />
          ))}
        </View>

        <Text style={styles.timer}>04:59</Text>
        <Text style={styles.note}>
          We sent a verification code to your email solom*****@gmail.com
        </Text>
        <Text style={styles.resend}>Didn’t receive the code? Send again</Text>

        <AppButton title="Verify" onPress={handleVerify} />
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
    marginBottom: 6,
  },
  subtitle: { textAlign: 'center', color: '#333', marginBottom: 30 },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  pinInput: {
    width: 45,
    height: 45,
    borderWidth: 1.5,
    borderColor: '#ddd',
    borderRadius: 12,
    fontSize: 22,
    color: '#000',
  },
  timer: { textAlign: 'center', color: '#3366FF', marginBottom: 10 },
  note: { textAlign: 'center', color: '#666', fontSize: 16 },
  resend: {
    textAlign: 'center',
    color: '#3366FF',
    marginBottom: 20,
    marginTop: 4,
  },
})
