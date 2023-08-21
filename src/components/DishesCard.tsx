/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native';
import React from 'react';
import { AllDishesType } from '../utils/data';
import { useNavigation } from '@react-navigation/native';

const DishesCard = ({ name, rating, description, equipments, image }:AllDishesType) => {
        const navigation = useNavigation();

        return (
                <View>
                        <View style={style.flex}>
                                <View style={{ width: '56%' }}>
                                        <View style={style.headContent}>
                                                <Text style={{ fontSize: 16, fontWeight: '700', color: '#000' }}>{name}</Text>
                                                <Image source={require('../../assets/images/veg.png')} style={{ width: 15, height: 15, marginHorizontal: 10 }} />
                                                <View style={style.rating}>
                                                        <Text style={{ color: '#fafafa', fontSize: 9, marginRight: 2 }}>{rating}</Text>
                                                        <Image source={require('../../assets/images/star.png')} style={{ width: 8, height: 8 }} />
                                                </View>
                                        </View>
                                        <View style={style.info}>
                                                <View style={style.equipments}>
                                                        {
                                                                equipments.map((data, index) => (
                                                                        <View style={{ marginRight: 8, alignItems: 'center' }} key={index}>
                                                                                <Image source={require('../../assets/images/fridge.png')} />
                                                                                <Text style={{ fontSize: 8 }}>{data}</Text>
                                                                        </View>
                                                                ))
                                                        }
                                                </View>
                                                <Text style={{ fontSize: 30, marginTop: -10, color: '#dddddda3' }}>|</Text>
                                                <View>
                                                        <Text style={{ fontSize: 12, color: '#000', fontWeight: '700' }}>Ingredients</Text>
                                                        <TouchableOpacity  style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('Detail')}>
                                                                <Text  style={{ fontSize: 12, color: '#FF8800', fontWeight: '700' }}>View list</Text>
                                                                <Image  source={require('../../assets/images/next.png')} style={{ width: 10, height: 10,marginTop:2 }} />
                                                        </TouchableOpacity>
                                                </View>
                                        </View>
                                        <Text style={{ fontSize: 14 }}>{description}</Text>
                                </View>
                                <View style={{ alignItems: 'center', width: '35%'  }}>
                                        <Image source={{ uri: image }} style={style.image} />
                                        <View style={style.viewBtn}>
                                                <Text style={style.addText}>Add</Text>
                                               <Text style={style.add}>+</Text>
                                        </View>
                                </View>
                        </View>
                        <View style={style.border} />
                </View>
        );
};

const style = StyleSheet.create({
        flex: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'stretch',
                marginTop: 20,
                marginBottom: 10,
        },
        headContent: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
        },
        image: {
                width: '100%',
                height: 100,
                borderRadius: 20,
                objectFit: 'cover',
        },
        rating: {
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#51C452',
                paddingVertical: 2,
                paddingHorizontal: 6,
                borderRadius: 4,
        },
        viewBtn: {
                paddingVertical: 6,
                backgroundColor: '#fff',
                borderRadius: 6,
                borderColor: '#FF8800',
                borderWidth: 2,
                position: 'relative',
                width: '60%',
                top: '-15%',
                shadowColor: '#555555',
                shadowOffset: {
                        width: 0,
                        height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,

                elevation: 9,
        },
        addText: {
                textAlign: 'center',
                color: '#FF8800',
                fontSize: 12,
                fontWeight: '700',
        },
        add: {
                position: 'absolute',
                top: -2,
                right: 4,
                color: '#FF8800',
                fontSize: 16,
        },
        info: {
                flexDirection: 'row',
                marginVertical: 15,
                justifyContent: 'space-between',
                alignItems: 'center',
        },
        equipments: {
                flexDirection: 'row',
        },
        border: {
                width: '100%',
                height: 2,
                marginBottom: 10,
                backgroundColor: '#c9c9c956',
        },
});

export default DishesCard;
