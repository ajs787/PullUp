import React, { useState } from 'react';
import { Image, StyleSheet, View, ScrollView, Text, Pressable, Alert, Switch } from 'react-native';

export default function HomeScreen() {
  const [pauseAll, setPauseAll] = useState(false);
  const [socialEmails, setSocialEmails] = useState(false);
  const [newsEmails, setNewsEmails] = useState(false);

  const handlePress = () => {
    Alert.alert('Log Out', 'You have been logged out successfully.');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      </View>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={[styles.text, styles.titleText]}>Account Settings</Text>
        </View>
        <View style={styles.lineContainer}>
          <View style={styles.line} />
        </View>
        <View style={styles.subtitle2Container}>
          <Text style={[styles.text, styles.subtitleText]}> </Text>
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={[styles.text, styles.subtitleText]}> 🔔 Notifications</Text>
        </View>
        <View style={styles.lineContainer}>
          <View style={styles.line2} />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={[styles.text, styles.sectionText]}>Push notifications</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={[styles.text, styles.rowText]}>Pause All</Text>
          <Switch
            value={pauseAll}
            onValueChange={setPauseAll}
            style={styles.switch}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.text, styles.infoText]}>Temporarily pause all notifications</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={[styles.text, styles.sectionText]}>Email notifications</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={[styles.text, styles.rowText]}>Social Emails</Text>
          <Switch
            value={socialEmails}
            onValueChange={setSocialEmails}
            style={styles.switch}
          />
        </View>
        <View style={styles.rowContainer}>
          <Text style={[styles.text, styles.rowText]}>News Emails</Text>
          <Switch
            value={newsEmails}
            onValueChange={setNewsEmails}
            style={styles.switch}
          />
        </View>
        <View style={styles.lineContainer}>
          <View style={styles.line3} />
        </View>
        <Pressable style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Log Out</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingVertical: 50,
  },
  reactLogo: {
    height: 210,
    width: 210,
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 25,
    paddingVertical: 0,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  subtitleContainer: {
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  lineContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 1,
  },
  line: {
    width: '150%',
    height: 1,
    backgroundColor: 'gray',
    marginBottom: 5,
  },
  line2: {
    width: '150%',
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 30,
  },
  line3: {
    width: '200%',
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  text: {
    color: '#000000',
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 23,
  },
  sectionContainer: {
    marginVertical: 15,
  },
  sectionText: {
    fontSize: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  rowText: {
    fontSize: 18,
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    color: 'gray',
  },
  switch: {
    marginLeft: 20,
  },
  button: {
    backgroundColor: '#CAE5EB',
    padding: 25,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 35,
    flexDirection: 'column',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'semibold',
  },
});
