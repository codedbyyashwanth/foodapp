/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';

export type RootStackParamList = {
        Home: undefined;
        Detail: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
        return (
                <NavigationContainer>
                        <Stack.Navigator initialRouteName="Home">
                                <Stack.Screen
                                        name="Home"
                                        component={Home}
                                        options={
                                                {
                                                        headerShown: false,
                                                }
                                        }
                                />

                                <Stack.Screen
                                        name="Detail"
                                        component={Detail}
                                        options={
                                                {
                                                        headerShown: false,
                                                }
                                        }
                                />
                        </Stack.Navigator>
                </NavigationContainer>
        );
};

export default App;
