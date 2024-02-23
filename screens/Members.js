import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const Members = () => {
  const members = [
    { id: 1, name: 'John Doe', mobile: '123-456-7890', image: require('../images/john.png') },
    { id: 2, name: 'Jane Smith', mobile: '987-654-3210', image: require('../images/james.png') },
  ];

  const renderMemberItem = ({ item }) => (
    <View style={styles.memberItem}>
      <Image source={item.image} style={styles.avatar} />
      <View style={styles.memberInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.mobile}>{item.mobile}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={members}
      renderItem={renderMemberItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  memberItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  memberInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  mobile: {
    fontSize: 14,
    color: '#777',
  },
});

export default Members;
