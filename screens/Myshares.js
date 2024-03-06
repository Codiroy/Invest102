import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Shares = () => {
  const [accountOwnerInfo, setAccountOwnerInfo] = useState({
    name: 'John Doe',
    age: 30,
    address: '123 Main St, City, Country',
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.text}>{accountOwnerInfo.name}</Text>
      
      <Text style={styles.label}>Age:</Text>
      <Text style={styles.text}>{accountOwnerInfo.age}</Text>
      
      <Text style={styles.label}>Address:</Text>
      <Text style={styles.text}>{accountOwnerInfo.address}</Text>
      
      <Button title="Edit Bio Data" onPress={() => console.log("Navigate to edit bio data screen")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Shares;
