// NotificationDetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificD = ({ route }) => {
  const { notification } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.notificationTitle}>{notification.title}</Text>
      <Text style={styles.notificationContent}>{notification.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notificationContent: {
    fontSize: 16,
  },
});

export default NotificD;