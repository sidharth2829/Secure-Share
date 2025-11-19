import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

export default function HomeScreen ({ navigation }) {
  const [url, setUrl] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>SecureShare</Text>
        <Text style={styles.subtitle}>One‑time encrypted secrets</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Create')}
        >
          <Text style={styles.buttonText}>Create a Secret</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Open a link</Text>
        <Text style={styles.subtitle}>Paste a SecureShare link to view</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Share URL"
          value={url}
          onChangeText={setUrl}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <TouchableOpacity 
          style={[styles.button, styles.secondaryButton, !url && styles.disabledButton]} 
          onPress={() => navigation.navigate('View', { url })}
          disabled={!url}
        >
          <Text style={[styles.buttonText, !url && styles.disabledText]}>View Secret</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#6750A4',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
  },
  secondaryButton: {
    backgroundColor: '#E7E0EC',
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  disabledText: {
    color: '#666',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#79747E',
    borderRadius: 4,
    padding: 12,
    marginVertical: 8,
  },
})
