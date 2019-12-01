import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Ionicons } from '@expo/vector-icons'

import events from '../constants/Events'

const INITIAL_REGION = {
  latitude: 52.38,
  longitude: 16.85,
  latitudeDelta: 0.05,
  longitudeDelta: 0.25,
}

export default function HomeScreen() {
  const [region, setRegion] = useState(INITIAL_REGION)

  return (
    <MapView style={styles.map} region={region} onRegionChange={setRegion}>
      {events.map(event => (
        <Marker key={event.id} coordinate={event.coordinates}>
          <Ionicons name={event.icon} size={28} color={event.color} />
        </Marker>
      ))}
    </MapView>
  )
}

HomeScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
})
