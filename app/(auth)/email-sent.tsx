// /app/(auth)/email-sent.tsx

import { View, Text, StyleSheet, Image } from 'react-native'
import { router } from 'expo-router'
import AppButton from '@/components/ui/AppButton'
import AuthLayout from '@/components/layouts/AuthLayout'

export default function EmailSentScreen() {
  return (
    <AuthLayout title="">
      <View style={styles.container}>
        <Image
          source={require('@/assets/images/EmailIllustration.png')} // ✅ Corrected
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>Your email is on the way</Text>
        <Text style={styles.message}>
          Check your email sol*****@gmail.com and follow the instructions to
          reset your password.
        </Text>

        <AppButton
          title="Back to Login"
          onPress={() => router.push('/(auth)/reset-password')}
        />
      </View>
    </AuthLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 30,
    // backgroundColor: 'red'
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  message: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    marginBottom: 30,
  },
})
