/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { SafeAreaView, View, TouchableOpacity, Image, StyleSheet, Text, ScrollView } from 'react-native';
import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native'

const Detail = () => {
        const navigate = useNavigation();
        const [data, setData] = useState<Object|null>(null);

        useEffect(() => {
                fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1')
                .then((response) => response.json())
                .then((result) => setData(result))
                .catch((err) => console.log(err));
        });

        return (
                <SafeAreaView style={{flex: 1}}>
                        <ScrollView>
                                <View style={{ position: 'relative' }}>
                                        <TouchableOpacity style={styles.toolbar} onPress={() => navigate.goBack()}>
                                                <View>
                                                        <Image source={{uri: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-left-512.png" }} style={{ width: 30, height: 30 }} />
                                                </View>
                                        </TouchableOpacity>
                                        <View style={styles.bgImage}>
                                                <Image source={require('../../assets/images/img-1.png')} style={{ width: 220, height: 220 }} />
                                        </View>
                                        <View style={{ marginHorizontal: 10 }}>
                                                <View style={styles.headContent}>
                                                        <Text style={{ fontSize: 20, fontWeight: '700', color: '#000', marginRight: 10 }}>{data?.name}</Text>
                                                        <View style={styles.rating}>
                                                                <Text style={{ color: '#fafafa', fontSize: 9, marginRight: 2 }}>4.2</Text>
                                                                <Image source={require('../../assets/images/star.png')} style={{ width: 8, height: 8 }} />
                                                        </View>
                                                </View>
                                                <Text style={{ marginTop: 10,fontSize: 12, width: '60%' }}>Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire.</Text>
                                        </View>
                                        <View style={styles.cardFlex}>
                                                <Image source={require('../../assets/images/time.png')} style={{ width: 15, height: 15}} />
                                                <Text style={{  fontSize: 14, fontWeight: '900', color: '#000', marginLeft: 8 }}>{data?.timeToPrepare}</Text>
                                        </View>
                                </View>

                                <View style={{ marginHorizontal: 10, marginTop: 40 }}>
                                        <Text style={{ fontSize: 20, fontWeight: '900', color: '#000' }}>Ingredients</Text>
                                        <Text>For 2 people</Text>
                                </View>
                                <View style={styles.border} />

                                <View>
                                        <View style={styles.flex}>
                                                <Text style={{ fontSize:16, fontWeight: '900', color: '#000', marginRight: 10 }}>Vegetables (05)</Text>
                                                <Image  source={require('../../assets/images/down-arrow.png')} style={{ width: 20, height: 20}} />
                                        </View>
                                        {
                                                data?.ingredients?.vegetables.map((item, index) => (
                                                        <View style={styles.options} key={index}>
                                                                <Text style={{ fontSize: 12, fontWeight: '900' }}>{item?.name}</Text>
                                                                <Text style={{ fontSize: 12, fontWeight: '900' }}>{item?.quantity}</Text>
                                                        </View>
                                                ))
                                        }
                                </View>

                                <View style={{ marginTop: 10 }}>
                                        <View style={styles.flex}>
                                                <Text style={{ fontSize:16, fontWeight: '900', color: '#000', marginRight: 10 }}>Spices (10)</Text>
                                                <Image  source={require('../../assets/images/down-arrow.png')} style={{ width: 20, height: 20}} />
                                        </View>
                                        {
                                                data?.ingredients?.spices.map((item, index) => (
                                                        <View style={styles.options} key={index}>
                                                                <Text style={{ fontSize: 12, fontWeight: '900' }}>{item?.name}</Text>
                                                                <Text style={{ fontSize: 12, fontWeight: '900' }}>{item?.quantity}</Text>
                                                        </View>
                                                ))
                                        }
                                </View>

                                <View style={{ marginTop: 20 }}>
                                        <View style={styles.flex}>
                                                <Text style={{ fontSize:20, fontWeight: '900', color: '#000', marginRight: 10 }}>Appliances</Text>
                                        </View>
                                        <ScrollView style={styles.appContent} horizontal  showsHorizontalScrollIndicator={false}>
                                                {
                                                        data?.ingredients?.appliances.map((item, index) => (
                                                                <View style={styles.appCard} key={index}>
                                                                        <View>
                                                                                <Image style={{ alignSelf:'center'}} source={require('../../assets/images/img-2.png')}/>
                                                                        </View>
                                                                        <Text style={{ textAlign: 'center' }}>{item?.name}</Text>
                                                                </View>
                                                        ))
                                                }
                                        </ScrollView>
                                </View>
                        </ScrollView>
                </SafeAreaView>
        );
};

const styles = StyleSheet.create({
	toolbar: {
		// paddingHorizontal: 10,
		paddingVertical: 15,
	},
        appContent: {
                marginHorizontal: 10,
                marginBottom: 15,
                marginTop: 10,
        },
        appCard: {
                backgroundColor: '#e3e3e3',
                borderRadius: 10,
                paddingVertical: 10,
                width: 100,
                marginRight: 15,
                flexDirection:'column',
                justifyContent: 'center',
                alignContent: 'center',
        },
        options: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 10,
                marginVertical: 5,
        },
        bgImage: {
                position: 'absolute',
                top: 20,
                right: 0,
        },
        headContent: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
        },
        flex: {
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 10,
                marginBottom:5,
        },
        rating: {
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#51C452',
                paddingVertical: 2,
                paddingHorizontal: 6,
                borderRadius: 4,
        },
	cardFlex: {
		flexDirection: 'row',
		alignItems: 'center',
                marginHorizontal: 10,
                marginTop: 30,
	},
        border: {
                height: 4,
                marginHorizontal: 10,
                marginVertical: 20,
                backgroundColor: '#c9c9c956',
        },
});

export default Detail;
