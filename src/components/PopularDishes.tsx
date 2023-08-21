/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import React from 'react';
import { DishesData } from '../utils/data';

const PopularDishes = () => {
        return (
                <View>
                        <Text style={style.headText}>Popular Dishes</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: 10 }}>
                                {
                                        DishesData.map((data, index) => {
                                                return (
                                                        <View style={style.FoodCard} key={index}>
                                                                <ImageBackground source={{ uri: data.url }} resizeMode="cover" style={style.Image}>
                                                                        <View style={{ backgroundColor: '#0000005c', flex: 1,borderRadius: 100,justifyContent: 'center' }}>
                                                                                <Text style={{ color: '#fafafa',  textAlign: 'center', fontSize: 14, fontWeight: '600'}}>{data.label}</Text>
                                                                        </View>
                                                                </ImageBackground>
                                                        </View>
                                                );
                                        })
                                }
                        </ScrollView>
                </View>
        );
};

const style = StyleSheet.create({
        headText: {
                fontSize: 18,
                fontWeight: '700',
                fontFamily: 'OpenSans',
                color: '#000',
                marginHorizontal: 10,
                marginVertical: 10,
        },
        FoodCard: {
                width: 70,
                height: 70,
                marginRight: 15,
        },
        Image: {
                flex: 1,
                justifyContent: 'center',
                borderRadius: 100,
                overflow: 'hidden',
                borderColor: '#ff8c00',
                borderWidth: 2,
        },
});

export default PopularDishes;
