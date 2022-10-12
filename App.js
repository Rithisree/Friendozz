import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootNavigator from './src/navigations/RootNavigator'

import "react-native-gesture-handler"
import Firebase from './src/screens/Firebase'
const App = () => {
  return (
    <View style={styles.container}>
      <Firebase/>
    </View>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})