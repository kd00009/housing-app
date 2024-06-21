import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {images} from '../constants/Svgs';

const FilterOptions = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleFilterPress = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleOK = () => {
    // Handle OK button press
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity onPress={handleFilterPress}>
          <View style={styles.filterContainer}>
            <View
              style={{
                backgroundColor: 'orange',
                borderRadius: 100,
                width: 20,
                height: 20,
                alignItems : 'center',
                marginRight : 10
              }}>
              <Text style={{color : 'white'}}>0</Text>
            </View>
            <Text style={styles.filterText}>Filter</Text>
            <SvgXml xml={images.filter} width={35} height={20} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.filter}>Types Of Property</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.filter}>BHK Type</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}>
              <Text style={styles.option}>Apartment</Text>
              <Text style={styles.option}>Bungalow / villa</Text>
              <Text style={styles.option}>Pent House</Text>
              <Text style={styles.option}>Row House</Text>
              <Text style={styles.option}>Farm House</Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleCancel}>
                  <Text style={styles.button}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOK}>
                  <Text
                    style={[
                      styles.button,
                      {
                        backgroundColor: 'orange',
                        color: 'white',
                        borderColor: 'orange',
                      },
                    ]}>
                    Apply
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 20,
    padding: 5,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  filterText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filter: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 20,
    padding: 5,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  modalOverlay: {
    flex: 1,
    marginTop: 70,
    marginHorizontal: 15,
  },
  modalContent: {
    width: 350,
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    shadowColor: '#000',
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  option: {
    fontSize: 14,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Aligns children to the right
    marginTop: 20, // Adds some space from the top
    width: '100%',
    paddingHorizontal: 20, // Makes the container take up the full width
  },
  button: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    paddingHorizontal: 20,
    width: 100,
    textAlign: 'center',
  },
});

export default FilterOptions;
