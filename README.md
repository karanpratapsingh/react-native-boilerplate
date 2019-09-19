### React Native Boilerplate
This project is a [React Native](https://facebook.github.io/react-native/) boilerplate that can be used to kickstart a mobile application.

The boilerplate provides **an architecture optimized for building solid cross-platform mobile applications** through separation of concerns between the UI and business logic.

While I use this boilerplate for my project but this can be extended as you like.

## Content:

    React Native (0.60.x) + Hermes
    Clean Directory Layout
    ESLint
    Packages
        - Redux (Thunk)
        - React Navigation (Hooks)
        - React Native Reanimated
        - React Native Vector Icons
        - React Native Gesture Handler

## Project Structure:

<img width="200" alt="Project Structure" src="https://user-images.githubusercontent.com/29705703/65224389-b3779980-dae0-11e9-9988-27a2ab7b5fe1.png">

## Updates

The boilerplate will follow new React-Native releases as soon as libraries and tools used here are compatible.

## Using the boilerplate:
Make sure to remove the existing git history and initialize the project with your own 
```bash
rm -rf .git/
git init
git add .
git commit -m 'project init'
git remote add origin <your remote repo>
git push -u origin master
```

## Running the project

Assuming you have all the requirements installed, you can setup and run the project by running:

- `yarn install` to install the dependencies

- run the following steps for your platform

### Android

Run the following command while the simulator is open or a device is connected via adb.
```
yarn run android
```

### iOS

Run the following commands to install pods and run the app on iPhone 6 simulator (can be changed via `package.json` scripts)
```
yarn run cocoapods
yarn run ios
```

