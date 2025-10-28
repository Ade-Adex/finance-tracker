// /components/onboarding/OnboardingSlide.tsx

import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

interface OnboardingSlideProps {
  title: string
  description: string
  image: any
}

export default function OnboardingSlide({
  title,
  description,
  image,
}: OnboardingSlideProps) {
  return (
    <View style={styles.slide}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  slide: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  image: {
    width: width * 0.7,
    height: height * 0.4,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: '#222',
    marginBottom: 10,
    letterSpacing: 0,
    lineHeight: 39,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#666',
    paddingHorizontal: 10,
  },
})
