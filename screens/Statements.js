import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const Statement = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('lastThreeMonths');

  // Sample transaction data for demonstration
  const transactionData = [
    { id: 1, description: 'Transaction 1', amount: 100, date: '2024-01-01' },
    { id: 2, description: 'Transaction 2', amount: -50, date: '2024-02-15' },
    // Add more transaction data as needed
  ];

  // Function to filter transaction data based on selected period
  const filteredTransactionData = () => {
    switch (selectedPeriod) {
      case 'lastThreeMonths':
        return transactionData.filter(transaction => {
          const transactionDate = new Date(transaction.date);
          const currentDate = new Date();
          const threeMonthsAgo = new Date();
          threeMonthsAgo.setMonth(currentDate.getMonth() - 3);
          return transactionDate >= threeMonthsAgo;
        });
      case 'lastSixMonths':
        return transactionData.filter(transaction => {
          const transactionDate = new Date(transaction.date);
          const currentDate = new Date();
          const sixMonthsAgo = new Date();
          sixMonthsAgo.setMonth(currentDate.getMonth() - 6);
          return transactionDate >= sixMonthsAgo;
        });
      default:
        return transactionData;
    }
  };

  // Function to calculate period total
  const calculatePeriodTotal = () => {
    return filteredTransactionData().reduce((total, transaction) => total + transaction.amount, 0);
  };

  // Function to handle print button press
  const handlePrint = () => {
    // Replace this with your print logic
    Alert.alert('Print', 'Printing statement...');
  };

  return (
    <View style={styles.container}>
      <View style={styles.segmentedControl}>
        <TouchableOpacity
          style={[styles.segment, selectedPeriod === 'lastThreeMonths' && styles.activeSegment]}
          onPress={() => setSelectedPeriod('lastThreeMonths')}
        >
          <Text>Last 3 Months</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.segment, selectedPeriod === 'lastSixMonths' && styles.activeSegment]}
          onPress={() => setSelectedPeriod('lastSixMonths')}
        >
          <Text>Last 6 Months</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.segment, selectedPeriod === 'wholeTime' && styles.activeSegment]}
          onPress={() => setSelectedPeriod('wholeTime')}
        >
          <Text>Whole Time</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Period Total: ${calculatePeriodTotal()}</Text>
        <TouchableOpacity style={styles.printButton} onPress={handlePrint}>
          <Text style={styles.printButtonText}>Print</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredTransactionData()}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text>{item.description}</Text>
            <Text>{item.amount}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  segmentedControl: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  segment: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
  },
  activeSegment: {
    backgroundColor: 'gray',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  printButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  printButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Statement;