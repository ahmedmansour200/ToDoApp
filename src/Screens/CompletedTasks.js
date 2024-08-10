import { View, Text } from 'react-native'
import React from 'react'

const CompletedTasks = ({todo}) => {

  return (
    <View>
      <Text>CompletedTasks</Text>
      <View>
      {/* <Text>Title : {todo.title}</Text> */}
      {/* <Text>Body : {todo.body} </Text> */}
      </View>
    </View>
  )
}

export default CompletedTasks