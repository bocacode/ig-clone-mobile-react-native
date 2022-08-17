import { StyleSheet } from 'react-native'

export const photoListStyles = StyleSheet.create({
  photoList: {
    flex: 1,
    backgroundColor: 'white',
  },
})

export const loginStyles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 40,
    height: '100%',
    backgroundColor: 'white',
  },
})

export const photoCardStyles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 15,
  },
  cardHeader: {
    marginLeft: 1,
    flexDirection: 'row',
  },
  cardHeaderText: {
    marginLeft: 15,
  },
  location: {
    color: 'gray',
    fontSize: 12,
  },
  image: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
  },
  cardText: {
    margin: 20
  }
})
