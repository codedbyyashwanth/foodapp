/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const PopUp = () => {

        return (
                <View style={style.popup}>
                        <View style={style.popText}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require('../../assets/images/food.png')} style={{ width: 30, height: 30 }} />
                                        <Text style={{ color: '#fafafa', marginLeft: 10 }}>3 Food Items Added</Text>
                                </View>
                                <Image source={require('../../assets/images/right-arrow.png')} style={{ width: 20, height: 20 }} />
                        </View>
                </View>
        );
};

const style = StyleSheet.create({
        popup: {
                position: 'absolute',
                top: '85%',
                left: 0,
                right: 0,
                alignItems: 'center',
        },
        popText: {
                width: '80%',
                paddingVertical: 10,
                paddingHorizontal: 15,
                backgroundColor: '#000',
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                shadowColor: '#000000',
                shadowOffset: {
                        width: 2,
                        height: 4,
                },
                shadowOpacity: 1,
                shadowRadius: 5.46,
                elevation: 9,
        },
});

export default PopUp;
