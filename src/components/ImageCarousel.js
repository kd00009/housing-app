import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image'; // Import FastImage

const ImageCarousel = ({images}) => {
  const [currentPage, setCurrentPage] = useState(1); 
  const imageWidth = 200; 
  const imageSpacing = 10; 
  const windowWidth = Dimensions.get('window').width; 

  // Take only the first five images
  const visibleImages = images.slice(0, 5);

  // Handler for scroll view scrolling
  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex =
      Math.floor(contentOffsetX / (imageWidth + imageSpacing)) + 1;
    setCurrentPage(currentIndex);
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.carousel}
          onScroll={handleScroll}
          scrollEventThrottle={16} 
        >
          {visibleImages.map((image, index) => (
            <FastImage
              key={index}
              source={{
                uri: `https://logiqproperty.blr1.digitaloceanspaces.com/${image}`,
              }}
              style={styles.image}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.pagination}>
        <Text style={styles.paginationText}>{`${currentPage}/${Math.min(
          visibleImages.length,
          5,
        )}`}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    position: 'relative',
  },
  carousel: {
    flexDirection: 'row',
  },
  image: {
    width: 200,
    height: 150,
    marginRight: 10,
    borderRadius: 8,
  },
  pagination: {
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 50,
    width: 50,
    alignSelf: 'center',
  },
  paginationText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ImageCarousel;
