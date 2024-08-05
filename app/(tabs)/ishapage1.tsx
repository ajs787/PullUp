import { Image, StyleSheet, View, ScrollView, Text, Pressable, Alert } from 'react-native';

export default function HomeScreen() {
  const handlePress = () => {
    Alert.alert('Edit Preferences', 'You pressed the button!');
  };

  const handlePress2 = () => {
    Alert.alert('Boost Profile', 'To boost profile, you must be a paid member!');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/Penelope.png')}
          style={styles.reactLogo}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={[styles.text, styles.titleText]}>Penelope Kite</Text>
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={[styles.text, styles.subtitleText]}>My Profile</Text>
          <Text style={[styles.text, styles.subtitleText]}>My Dashboard</Text>
        </View>
        <View style={styles.lineContainer}>
          <View style={styles.line} />
        </View>
        <Pressable style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Edit Preferences 🖊️</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handlePress2}>
          <Text style={styles.buttonText}>Boost Profile ★</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Ensures the main container background is white
  },
  header: {
    backgroundColor: '#ffffff', // Ensures the header background is white
    alignItems: 'center',
    paddingVertical: 50,
  },
  reactLogo: {
    height: 210,
    width: 210,
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff', // Ensures the content background is white
    paddingHorizontal: 25,
    paddingVertical: 0,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 90,
  },
  subtitleContainer: {
    flexDirection: 'row', // Aligns children horizontally
    justifyContent: 'space-around', // Adds space between children
    marginBottom: 5, // Adjusted to fit the line beneath
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 35,
  },
  line: {
    width: '150%', // Adjust the width of the line as needed
    height: 1, // Adjust the thickness of the line
    backgroundColor: 'black', // Adjust the color of the line
  },
  text: {
    color: '#000000', // Set the text color to black
  },
  titleText: {
    fontSize: 35, // Penelope Kite font size
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#CAE5EB',
    padding: 45,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
    // Add shadow properties for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // Add elevation for Android
    elevation: 4,
  },
  buttonText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button2: {
    backgroundColor: '#CAE5EB',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    // Add shadow properties for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // Add elevation for Android
    elevation: 4,
  },
  buttonText2: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
