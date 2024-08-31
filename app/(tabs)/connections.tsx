import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';

export default function HomeScreen() {
  const connections = [
    { name: 'Arnold Tin', image: require('@/assets/images/Arnold.png') },
    { name: 'Kira Bluebell', image: require('@/assets/images/Kira.png') },
    { name: 'Peter Glasses', image: require('@/assets/images/Peter.png') },
    { name: 'Sara Fashion', image: require('@/assets/images/Sara.png') },
    { name: 'Lila Bonbon', image: require('@/assets/images/Lila.png') },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header} />
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={[styles.text, styles.titleText]}>Connections</Text>
        </View>
        <View style={styles.lineContainer}>
          <View style={styles.line} />
        </View>
        {connections.map((connection, index) => (
          <View key={index}>
            <View style={styles.row}>
              <Image source={connection.image} style={styles.image} />
              <Text style={[styles.text, styles.subtitleText]}>{connection.name}</Text>
            </View>
            <View style={styles.lineContainer}>
              <View style={styles.line2} />
            </View>
          </View>
        ))}
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
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 25,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 45,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  lineContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  line: {
    width: '150%',
    height: 1,
    backgroundColor: 'gray',
    marginBottom: 22,
  },
  line2: {
    width: '150%',
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 30,
  },
  text: {
    color: '#000000',
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 28,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
