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

# Supporting
I host everything as open-source with absolutely no ads. Any donations are greatly appreciated :)
