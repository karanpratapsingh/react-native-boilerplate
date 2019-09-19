import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => (
    <View style={styles.container}>
        <Text style={styles.body}>NEW BOILERPLATE</Text>
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

export default App;
