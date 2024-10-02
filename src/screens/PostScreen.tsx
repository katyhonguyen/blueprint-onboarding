import { Image, ScrollView, Text, View } from 'react-native';
import HeartIcon from '../../assets/heart-icon.svg';
import ShareIcon from '../../assets/messenger-icon.svg';
import ProfilePlaceholder from '../../assets/profile-placeholder-icon.svg';
import { styles } from './styles';

export default function PostScreen() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <ProfilePlaceholder />
        <Text style={styles.username}>rbeggs</Text>
        <Text style={styles.date}>September 19</Text>
      </View>

      <View>
        <Text>
          In response to the growing homelessness crisis in San Francisco, a
          local nonprofit organization, Code Tenderloin, has launched a
          comprehensive initiative aimed at providing long-term solutions for
          individuals experiencing homelessness. The organization, founded in
          2015, is dedicated to addressing both immediate needs and underlying
          causes of homelessness through a combination of shelter services, job
          training programs, and mental health support. read more online:
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg',
          }}
          style={{
            width: 400,
            height: 250,
            borderRadius: 10,
          }}
        />
      </View>

      <View style={styles.reactionContainer}>
        <HeartIcon />
        <Text style={styles.likes}>256 Likes</Text>
        <ShareIcon />
      </View>

      <View style={styles.commentsContainer}>
        <View style={styles.profileContainer}>
          <ProfilePlaceholder />
          <Text style={styles.username}>philip_ye</Text>
          <Text style={styles.date}>September 20</Text>
        </View>
        <Text style={styles.comment}>
          This organization is doing amazing work tackling the complex root
          causes of the issue.
        </Text>

        <View style={styles.profileContainer}>
          <ProfilePlaceholder />
          <Text style={styles.username}>vppraggie</Text>
          <Text style={styles.date}>September 21</Text>
        </View>
        <Text style={styles.comment}>Thanks for sharing!</Text>
      </View>
    </View>
    </ScrollView>
  );
}
