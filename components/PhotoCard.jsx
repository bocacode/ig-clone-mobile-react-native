import { Card, Text, Avatar, Icon } from '@rneui/themed'
import { View, ActivityIndicator, Image } from 'react-native'

import { photoCardStyles } from '../assets/styles'

function PhotoCard({ photo }) {
  const BASE_URI = 'https://source.unsplash.com/random?sig='
  return (
    <View>
      <View style={photoCardStyles.cardContainer}>
        <View style={photoCardStyles.cardHeader}>
          <Avatar rounded source={{ uri: `https://randomuser.me/api/portraits/men/${photo.id}.jpg` }} size='small' />
          <View style={photoCardStyles.cardHeaderText}>
            <Text h5>Manik Gupta</Text>
            <Text style={photoCardStyles.location}>San Francisco</Text>
          </View>
        </View>
        <Icon name='more-vert' />
      </View>

      <Image source={{ uri: BASE_URI + photo.id }} 
          style={photoCardStyles.image} 
          PlaceholderContent={<ActivityIndicator />} />
      <Text style={photoCardStyles.cardText}>The idea with React Native Elements is more about component structure than actual design.</Text>
      <Card.Divider />
    </View>
  )
}

export default PhotoCard
