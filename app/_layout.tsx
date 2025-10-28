// /app/_layout.tsx

import { Stack } from 'expo-router'
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from '@/hooks/use-color-scheme'

export default function RootLayout() {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* index.tsx shows LaunchScreen */}
        <Stack.Screen name="index" />
        {/* grouped routes */}
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(main)" />
      </Stack>
      {/* <StatusBar style="auto" /> */}
    </ThemeProvider>
  )
}


