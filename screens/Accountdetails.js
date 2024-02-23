import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PieChart } from 'react-native-svg-charts';

const Accountdetails = () => {
  // Sample data for demonstration
  const data = [
    { key: 'John', value: 200 },
    { key: 'Jane', value: 300 },
    { key: 'Alice', value: 150 },
  ];

  // Calculate total balance for the current month
  const totalBalance = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <PieChart style={styles.circle} data={data} />
        <Text style={styles.month}>February 2024</Text>
        <Text style={styles.totalBalance}>Total Account Balance: ${totalBalance}</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.contributions}>
        {data.map((item, index) => (
          <Text key={index} style={styles.contribution}>{item.key}: ${item.value}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
  month: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  totalBalance: {
    fontSize: 16,
  },
  line: {
    width: '80%',
    height: 5,
    backgroundColor: 'lightblue',
    marginBottom: 20,
  },
  contributions: {
    alignItems: 'center',
  },
  contribution: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Accountdetails;