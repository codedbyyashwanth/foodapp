/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const TimeSection = () => {
        return (
                <View style={styles.timeSection}>
                        <View style={styles.timeCard}>
                                <View style={styles.cardFlex}>
                                        <Image source={require('../../assets/images/date.png')} style={{ width: 15, height: 15}} />
                                        <Text style={{  fontSize: 14, fontWeight: '700', color: '#000', marginLeft: 8 }}>21 May 2021</Text>
                                </View>
                                <View style={{ marginHorizontal: 10 }}>
                                        <Text style={{ fontSize: 30, color: '#dddddd' }}>|</Text>
                                </View>
                                <View style={styles.cardFlex}>
                                        <Image source={require('../../assets/images/time.png')} style={{ width: 15, height: 15}} />
                                        <Text style={{  fontSize: 14, fontWeight: '700', color: '#000', marginLeft: 8 }}>10:30 PM -12:30 PM</Text>
                                </View>
                        </View>
                </View>
        );
};

const styles = StyleSheet.create({
	timeSection: {
		height: 50,
		backgroundColor: '#000',
	},
	timeCard: {
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 10,
		minHeight: 60,
		backgroundColor: '#fafafa',
		shadowColor: '#000',
		shadowOffset: {width: 2, height: 4},
		shadowRadius: 2,
		elevation: 2,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginTop: 20,
		marginHorizontal: 10,
	},
	cardFlex: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});

export default TimeSection;
