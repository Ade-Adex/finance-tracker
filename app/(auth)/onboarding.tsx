//  /app/(auth)/onboarding.tsx

import { View, StyleSheet, FlatList, Dimensions } from 'react-native'
import { useState } from 'react'
import { router } from 'expo-router'
import OnboardingSlide from '@/components/onboarding/OnboardingSlide'
import PaginationDots from '@/components/onboarding/PaginationDots'
import AppButton from '@/components/ui/AppButton'
import { onboardingSlides } from '@/constants/images'
import BottomBar from '@/components/ui/BottomBar'

const { width } = Dimensions.get('window')

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleScroll = (event: any) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width)
    setCurrentIndex(slideIndex)
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={onboardingSlides}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        renderItem={({ item }) => <OnboardingSlide {...item} />}
        scrollEventThrottle={16}
      />

      <PaginationDots
        total={onboardingSlides.length}
        activeIndex={currentIndex}
      />

      <View style={styles.buttons}>
        <AppButton
          title="Sign Up"
          onPress={() => router.push('/(auth)/signup')}
        />
        <AppButton
          title="Login"
          type="secondary"
          onPress={() => router.push('/(auth)/login')}
        />
      </View>

      <BottomBar/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttons: {
    marginBottom: 50,
    paddingHorizontal: 24,
    gap: 10,
  },
})
