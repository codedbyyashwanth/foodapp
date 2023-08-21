/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
        { label: 'Recommanded', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
];

const DropdownComponent = () => {
        const [value, setValue] = useState('1');

        return (
                <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={data}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        value={value}
                        onChange={e => {
                                setValue(e.value);
                        }}
                />
        );
};

export default DropdownComponent;

const styles = StyleSheet.create({
        dropdown: {
                margin: 20,
                width: 200,
                backgroundColor: '#000',
        },
        icon: {
                marginRight: 5,
                fontWeight: '700',
        },
        placeholderStyle: {
                fontSize: 20,
                fontWeight: '700',
                color: '#000',
        },
        selectedTextStyle: {
                fontSize: 20,
                fontWeight: '700',
                color: '#000',
        },
});
