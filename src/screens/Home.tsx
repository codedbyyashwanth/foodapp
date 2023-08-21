/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView} from 'react-native';
import Cuisines from '../components/Cuisines';
import TimeSection from '../components/TimeSection';
import Toolbar from '../components/Toolbar';
import PopularDishes from '../components/PopularDishes';
import Recommanded from '../components/Recommanded';
import PopUp from '../components/PopUp';

const Home = () => {
        return (
                <SafeAreaView style={{ flex: 1, position: 'relative' }}>
			<Toolbar />
			<TimeSection />
			<Cuisines  />
			<PopularDishes />
			<Recommanded />
			<PopUp />
		</SafeAreaView>
        );
};

export default Home;
