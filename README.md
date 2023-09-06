This app is VERY heavy in production.
Please open an issue if you find any bugs.

# Rodia

The standard of anime streaming app on android ( and in future ios )

You can :
1. Watch any animes that are listed on MAL
2. Import your MAL list of Mangas and Animes
3. Everything you watch or read will update your MAL account, go get those shiny badges :)
4. Read released manga from various sources online while the app keeps tracks of it
5. Get a recap for manga if you left it for a long time, of course you can just skip it
6. And much more things i forgot to add here

## Build

### 1. Clone this repository 

```bash
git clone https://github.com/SecreSwalowtail/Rodia_Anime_Streaming_App.git
```

### 2. Install the required packages

```bash
npm install
```
### 3. Install the required Android tools
```bash
# The most simple way is to download Android Studio and check NDK and Build Tools
# If the gradle compiler cannot find NDK or the tools for building , make sure to export them in the Path variable
https://developer.android.com/tools/variables
```
### 4. Navigate into android folder and build the app
```
cd android
./gradlew assembleRelease
```

If everything is set up _correctly_, you should see your APK in :
```
android/app/build/outputs/apk/release
```

# NOTES
The [nodejs-react-native](https://github.com/nodejs-mobile/nodejs-mobile-react-native) package is curentlly broken and the fixes are not documented. This aims to help someone if he wants to integrate that in his application.

The code still tries to build x86 libs while not supporting them, wrongly excluding packages that are needed for the package to run and i'm not even trying to build it for IOS
1. ### Missing x86 libnode file
Follow the guide on this [issue](https://github.com/nodejs-mobile/nodejs-mobile-react-native/issues/34)

2. ### Project requiring NODE 16
While you can change the configuration to use NODE 18+ in ``` node-modules/nodejs-mobile-react-native/android/build.gradle ``` from ```def _nodeVersionRequired = 16``` to ```def _nodeVersionRequired = 18``` or higher the best way for this is to use a node version manager(for example [NVM](https://github.com/nvm-sh/nvm)) while remembering to uninstall [nodejs](https://github.com/nodesource/distributions#uninstall-nodejs-ubuntu--debian-packages)

3. ### Node assets copy failed
Apply this [fix](https://github.com/JaneaSystems/nodejs-mobile/issues/60#issuecomment-378088756)
