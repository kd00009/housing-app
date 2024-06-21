import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import ImageCarousel from './ImageCarousel';
import {useDispatch, useSelector} from 'react-redux';
import {saveProperty, unsaveProperty} from '../redux/slices/propertySlice';
import {SvgXml} from 'react-native-svg';
import {images} from '../constants/Svgs';

const PropertyCard = ({property}) => {
  const dispatch = useDispatch();
  const savedProperties = useSelector(state => state.property.savedProperties);

  const isSaved = savedProperties.some(item => item.id === property.id);

  const handleSavePress = () => {
    if (isSaved) {
      dispatch(unsaveProperty(property));
    } else {
      dispatch(saveProperty(property));
    }
  };

  const formatPrice = price => {
    if (price === null || price === undefined) return '';

    let formattedPrice;
    if (price >= 10000000) {
      formattedPrice = `₹${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
      formattedPrice = `₹${(price / 100000).toFixed(2)} Lakh`;
    } else {
      formattedPrice = `₹${price.toFixed(2)}`;
    }

    return formattedPrice;
  };

  return (
    <View style={styles.card}>
      <ImageCarousel images={property.images} />
      <View
        style={{
          backgroundColor: '#009C93',
          height: 30,
          width: 80,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          marginVertical: 10,
        }}>
        <Text style={{color: 'white'}}>limelight</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.price}>
          {' '}
          {formatPrice(property?.displayPrice?.priceRange?.from)} -{' '}
          {formatPrice(property?.displayPrice?.priceRange?.to)}
        </Text>
        <TouchableOpacity onPress={handleSavePress}>
          {isSaved ? (
            <SvgXml xml={images.Heart_Active} width={20} height={20} />
          ) : (
            <SvgXml xml={images.Heart} width={20} height={20} />
          )}
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{property.name}</Text>
      <Text style={styles.subtitle}>by {property.company.name}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center' , marginTop : 10}}>
        <SvgXml xml={images.location} width={15} height={20} />

        <Text>
          {' '}
          {property.address.area} , {property.address.city.name}
        </Text>
      </View>
      <Text style={styles.configuration}>
        {property.configuration[0]} appartment
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  configuration: {marginTop: 10},
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  address: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },

  subtitle: {color: 'gray', fontSize: 14, marginTop: 10},
  price: {
    marginTop: 5,
    color: 'gray',
    fontWeight: '900',
  },
  saveButton: {},
});

export default PropertyCard;
