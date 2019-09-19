import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainScreen = () => (
    <View style={styles.container}>
        <Text style={styles.body}>React Native Boilerplate</Text>
        <Text style={styles.engine}>Hermes Enabled: {global.HermesInternal === null ? false : true}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
    },
    body: {
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
});

export default MainScreen;