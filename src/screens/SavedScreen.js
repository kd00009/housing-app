// In `src/screens/SavedScreen.js`
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import PropertyCard from '../components/PropertyCard';

const SavedScreen = () => {
  const savedProperties = useSelector(state => state.property.savedProperties);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          <Text style={{ color: 'orange' }}>Dear sanjay chaudhary , </Text> here are your liked
          properties
        </Text>
      </View>

      <FlatList
        data={savedProperties}
        renderItem={({ item }) => <PropertyCard property={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    padding: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default SavedScreen;
