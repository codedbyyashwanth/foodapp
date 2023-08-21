/* eslint-disable prettier/prettier */
import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const Toolbar = () => {
        return (
                <View style={styles.toolbar}>
                        <View>
                                <Image source={{uri: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-left-512.png" }} style={{ width: 30, height: 30 }} />
                        </View>
                        <Text style={styles.toolText}>Select Dishes</Text>
                </View>
        );
};

const styles = StyleSheet.create({
	toolbar: {
		flexDirection: 'row',
		paddingHorizontal: 10,
		paddingVertical: 15,
		alignItems: 'center',
	},
	toolText: {
		fontSize: 18,
		color: 'black',
		marginLeft: 10,
		fontWeight: '700',
		fontFamily: 'OpenSans',
	},
});

export default Toolbar;
