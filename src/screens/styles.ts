import { StyleSheet } from 'react-native';
import { CurrentRenderContext } from '@react-navigation/native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    marginVertical: 10,
  },
  username: {
    marginHorizontal: 10,
    marginLeft: 25,
    fontWeight: 'bold',
  },
  date: {
    marginLeft: 230,
    color: '#979797',
  },
  reactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 20,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
  },
  likes: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    marginRight: 270,
  },
  commentsContainer: {
    marginVertical: 10,
  },
  comment: {
    marginLeft: 50,
  },
});
