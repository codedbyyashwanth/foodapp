/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import DishesCard from './DishesCard';
import { AllDishes } from '../utils/data';

const Recommanded = () => {
        return (
                <View style={{  flexGrow: 1}}>
                        <View style={style.border} />
                        <ScrollView style={{ paddingTop: 15, paddingHorizontal: 10, flex: 1 }} >
                                <View style={style.header}>
                                        <View style={style.flex}>
                                                <Text style={{ fontSize:20, fontWeight: '700', color: '#000', marginRight: 10 }}>Recommanded</Text>
                                                <Image  source={require('../../assets/images/down-arrow.png')} style={{ width: 20, height: 20}} />
                                        </View>
                                        <View style={style.button}>
                                                <Text style={{ color: '#fafafa', fontWeight: '600', fontSize: 14 }}>Menu</Text>
                                        </View>
                                </View>
                                {
                                        AllDishes.map((data, index) => {
                                                return (
                                                        <DishesCard
                                                                name={data.name}
                                                                description={data.description}
                                                                image={data.image}
                                                                rating={data.rating}
                                                                equipments={data.equipments}
                                                                id={data.id}
                                                                key={index}
                                                        />
                                                );
                                        })
                                }
                        </ScrollView>
                </View>
        );
};

const style = StyleSheet.create({
        border: {
                width: '100%',
                height: 4,
                marginTop: 25,
                backgroundColor: '#c9c9c956',
        },
        header: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
        },
        flex: {
                flexDirection: 'row',
                alignItems: 'center',
        },
        button: {
                backgroundColor: '#000',
                paddingVertical: 8,
                paddingHorizontal: 20,
                borderRadius: 6,
                shadowColor: '#1c1c1c',
		shadowOffset: {width: 20, height: 20},
		shadowRadius: 2,
		elevation: 2,
        },
});

export default Recommanded;
