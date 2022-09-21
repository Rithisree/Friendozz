import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigations/RootNavigator'
import "react-native-gesture-handler"
import SignupPage from './src/screens/SignupPage'
const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <SignupPage />
      </View>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})