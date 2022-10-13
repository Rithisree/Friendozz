import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootNavigator from './src/navigations/RootNavigator'
import Test from './src/screens/Test'

import "react-native-gesture-handler"
const App = () => {
  return (
    <View style={styles.container}>
      {/* <RootNavigator/> */}
      <Test/>
    </View>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})