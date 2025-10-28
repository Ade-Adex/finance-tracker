// /components/onboarding/PaginationDots.tsx


import { View, StyleSheet } from 'react-native'

export default function PaginationDots({ total, activeIndex }: any) {
  return (
    <View style={styles.container}>
      {[...Array(total)].map((_, i) => (
        <View
          key={i}
          style={[styles.dot, { opacity: i === activeIndex ? 1 : 0.3 }]}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3B5BFF',
    marginHorizontal: 5,
  },
})
