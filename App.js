import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootNavigator from './src/navigations/RootNavigator'
import TestFirebase from './src/screens/TestFirebase'

import "react-native-gesture-handler"
const App = () => {
  return (
    <View style={styles.container}>
      <TestFirebase/>
    </View>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})