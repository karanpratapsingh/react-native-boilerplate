import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Logo from 'assets/images/react-logo.png';
import { MaterialColors, FontWeights, FontSizes } from '@app/theme';

const HomeScreen = () => {
  const { status } = useSelector(({ data }) => data);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>React Native Boilerplate</Text>
          <Text style={styles.body}>
            Robust boilerplate to kickstart your next app
          </Text>
        </View>
      </View>
      <Text style={styles.item}>
        Redux <Text style={{ color: MaterialColors.green[400] }}>{status}</Text>
      </Text>
      <Text style={styles.item}>
        TypeScript <Text style={{ color: MaterialColors.blue[800] }}>Added</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContainer: {
    marginLeft: 10,
  },
  logo: {
    height: 64,
    width: 64,
  },
  heading: {
    ...FontWeights.Light,
    ...FontSizes.SubHeading,
  },
  body: {
    ...FontWeights.Light,
    color: MaterialColors.grey[500],
    ...FontSizes.Body,
  },
  item: {
    ...FontWeights.Light,
    ...FontSizes.Body,
    marginTop: 10,
  },
});

export default HomeScreen;
