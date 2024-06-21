import React, { useEffect, useState, useCallback, useMemo } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
} from 'react-native';
import axios from 'axios';
import FilterOptions from '../components/FilterOptions';
import PropertyCard from '../components/PropertyCard';

const HomeScreen = () => {
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchProperties = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://api.housivity.com/api/v1/property',
        {
          params: {
            city: 'Gandhinagar',
            page,
          },
        },
      );
      if (response.status === 200 && response.data.propertyList) {
        setProperties(prevProps => [
          ...prevProps,
          ...response.data.propertyList,
        ]);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }, [page]);

  useEffect(() => {
    fetchProperties();
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const memoizedProperties = useMemo(() => properties, [properties]);

  return (
    <View style={styles.container}>
      <FilterOptions />
      <Text style={styles.resultsText}>
        <Text style={styles.resultsHighlight}>97 results</Text> found for{' '}
        <Text style={styles.resultsHighlight}>buy </Text> in
        <Text style={styles.resultsHighlight}> Gandhinagar</Text>
      </Text>

      <FlatList
        data={memoizedProperties}
        renderItem={({ item }) => <PropertyCard property={item} />}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading && <ActivityIndicator size="large" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  resultsText: {
    paddingHorizontal: 10,
    fontSize : 18,
    marginBottom : 5
  },
  resultsHighlight: {
    color: 'orange',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
