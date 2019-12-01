import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native'
import { Entypo, MaterialIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import { MonoText } from '../components/StyledText'

export default function ProfileScreen() {
  const [profileImage, setProfileImage] = useState(null)

  useEffect(() => {
    const getPermissions = async () => {
      if (Platform.OS === 'ios') {
        const { status: cameraRollStatus } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if (cameraRollStatus !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }

        const { status: cameraStatus } = await Permissions.askAsync(Permissions.CAMERA)
        if (cameraStatus !== 'granted') {
          alert('Sorry, we need camera permissions to make this work!')
        }
      }
    }
    getPermissions()
  }, [])

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.cancelled) {
      setProfileImage(result.uri)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {profileImage ? (
          <Image style={styles.image} source={{ uri: profileImage }} />
        ) : (
          <Entypo name="user" color="#9b9b9b" size={80} />
        )}
        <TouchableOpacity
          onPress={pickImage}
          style={styles.imageButtonContainer}
        >
          <MaterialIcons name="edit" size={16} />
        </TouchableOpacity>
      </View>
      <View style={styles.nameContainer}>
        <MonoText style={styles.name}>Anonymous User</MonoText>
      </View>
    </View>
  )
}

ProfileScreen.navigationOptions = {
  title: 'Your profile',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#0A174C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  imageButtonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e4e4e4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameContainer: {
    marginTop: 32,
  },
  name: {
    fontSize: 28,
  },
})
