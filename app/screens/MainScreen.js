import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Typography from '../theme/Typography';

const MainScreen = () => {

    const { status } = useSelector(state => state.appData);

    return (
        <View style={styles.container}>
            <Text style={styles.body}>React Native Boilerplate</Text>
            <Text style={styles.body}>Redux {status}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        ...Typography.Body.light
    }
});

export default MainScreen;