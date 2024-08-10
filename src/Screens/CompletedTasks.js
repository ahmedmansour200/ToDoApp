import { View, Text } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native-web'

const CompletedTasks = ({todo}) => {

  return (
    <ImageBackground  source={require('../../assets/bg.jpg')} >
      <Text style={{color:'#ffff' , textAlign:'center', margin:55}}>CompletedTasks</Text>
      <View>
      {/* <Text>Title : {todo.title}</Text> */}
      {/* <Text>Body : {todo.body} </Text> */}
      </View>
    </ImageBackground>
  )
}

export default CompletedTasks