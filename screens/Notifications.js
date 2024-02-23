import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const NotificationsScreen = ({ navigation }) => {
  // Sample notification data for demonstration
  const [notifications, setNotifications] = useState([
    { id: '1', title: 'New Message', content: 'You have received a new message.' },
    { id: '2', title: 'Reminder', content: 'Don\'t forget to complete your tasks.' },
    { id: '3', title: 'Alert', content: 'Emergency alert: Please evacuate immediately.' },
    // Add more notification items as needed
  ]);

  const handleNotificationPress = (notification) => {
    navigation.navigate('NotificationDetails', { notification });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleNotificationPress(item)} style={styles.notificationItem}>
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationContent}>{item.content}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>No notifications</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  notificationItem: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notificationContent: {
    fontSize: 16,
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default NotificationsScreen;