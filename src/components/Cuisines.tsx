/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { CuisineData } from '../utils/data';

const Cuisines = () => {

      return (
            <View style={styles.cuisineView}>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                              CuisineData.map((data, index) => {
                                    return (
                                          <View key={index} style={[styles.cuisine, index === 0 && styles.active]}>
                                                <Text style={index === 0 && styles.text}>{data.label}</Text>
                                          </View>
                                    );
                              })
                        }
                  </ScrollView>
            </View>
      );
};

const styles = StyleSheet.create({
      cuisineView: {
            marginHorizontal: 10,
            marginTop: 45,
      },
      cuisine: {
            marginRight: 20,
            borderRadius: 50,
            borderWidth: 2,
            paddingHorizontal: 16,
            paddingVertical: 4,
            borderColor: '#d3d3d3',
      },
      active: {
            borderColor: '#FF941A',
            backgroundColor: '#ff941a1a',
            color: '#FF941A',
      },
      text: {
            color: '#FF941A',
            fontWeight: '700',
      },
});

export default Cuisines;
