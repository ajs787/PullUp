import React from 'react';
import { Image, StyleSheet, View, ScrollView, Text, Pressable, Alert, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLinkProps } from '@react-navigation/native';

export default function Profile() {

  const navigation = useNavigation();

  const { onPress, href } = useLinkProps({ to: 'Dashboard' });

  
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
          <View style={styles.container}>
          <Text> </Text>
          <Button title="My Profile" onPress={onPress} />
          </View>


          <View style={styles.container}>
          <Text> </Text>
          <Button title="My Dashboard" onPress={() => navigation.navigate("Dashboard")}  />
          </View>

        </View>
        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <View style={styles.line2} />
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
    flexDirection: 'column', // Stack lines vertically
    alignItems: 'center',
    marginBottom: 35,
  },
  line: {
    width: '120%', // Adjust the width of the line as needed
    height: 1, // Adjust the thickness of the line
    backgroundColor: 'black', // Adjust the color of the line
    marginBottom: 0, // Add margin to create space between lines
  },
  line2: {
    width: '50%', // Adjust the width of the line as needed
    height: 4, // Adjust the thickness of the line
    backgroundColor: 'black', // Adjust the color of the line
    alignSelf: 'flex-start', // Move the line to the right
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
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
    flexDirection: 'column', // Ensures elements are laid out in a column
    justifyContent: 'center',
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
    fontSize: 15,
    marginTop: 10, // Adds space between the square and the text
  },
  squareShape: {
    width: 200, // Width of the square
    height: 170, // Height of the square
    backgroundColor: '#FAFAFA', // Square color
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'center', // Center the text vertically
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // Add elevation for Android
    elevation: 4,
  },
  squareText: {
    color: '#000000',
    fontSize: 70,
    fontWeight: 'bold',
  },
  squareText2: {
    color: '#000000',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

