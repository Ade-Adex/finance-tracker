//  /components/ui/AppButton.tsx

import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function AppButton({ title, onPress, type = 'primary' }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, type === 'secondary' && styles.secondary]}
    >
      <Text style={[styles.text, type === 'secondary' && styles.secondaryText]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3B5BFF',
    borderRadius: 20,
    paddingVertical: 14,
    marginVertical: 8,
  },
  secondary: { backgroundColor: '#EAEAFF' },
  text: { textAlign: 'center', color: '#fff', fontWeight: '600', fontSize: 18, },
  secondaryText: { color: '#3B5BFF' },
})
