import { Platform } from 'react-native'

const events = [
  {
    id: '1',
    type: 'football',
    coordinates: {
      latitude: 52.3934921,
      longitude: 16.9339218,
    },
    icon: `${Platform.OS === 'ios' ? 'ios' : 'md'}-football`,
    color: '#0A174C',
  },
  {
    id: '2',
    type: 'basketball',
    coordinates: {
      latitude: 52.3928193,
      longitude: 16.8945513,
    },
    icon: `${Platform.OS === 'ios' ? 'ios' : 'md'}-basketball`,
    color: '#2589ED',
  },
  {
    id: '3',
    type: 'tennis',
    coordinates: {
      latitude: 52.4004458,
      longitude: 16.7615837,
    },
    icon: `${Platform.OS === 'ios' ? 'ios' : 'md'}-tennisball`,
    color: '#FF001D',
  },
  {
    id: '4',
    type: 'baseball',
    coordinates: {
      latitude: 52.4052528,
      longitude: 16.9753684,
    },
    icon: `${Platform.OS === 'ios' ? 'ios' : 'md'}-baseball`,
    color: '#FFDE0A',
  },
  {
    id: '5',
    type: 'american-football',
    coordinates: {
      latitude: 52.4150915,
      longitude: 16.9399262,
    },
    icon: `${Platform.OS === 'ios' ? 'ios' : 'md'}-american-football`,
    color: '#9B9B9B',
  },
]

export default events
