import { Text, Button, useTheme, Divider, ProgressBar } from "react-native-paper"
import * as React from 'react';
import * as images from '../utils/importImages'
import { SafeAreaView, View, ImageBackground, Image, Animated } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { setBottomBar } from "../redux/reducers/stylesSlice"
import createStyles from "../styles/homeStyle";
import { storage } from '../index'
import TrendingScrollView from "./common/TrendingScrollView";
import { Jikan } from '../utils/fetchData'

const getRandomImage = () => {
    const imageKeys = Object.keys(images)
    const randomIndex = Math.floor(Math.random() * imageKeys.length)
    return images[imageKeys[randomIndex]]
}

function Home() {
    const theme = useTheme()
    const styles = createStyles(theme)

    const trendingLoader = useSelector((state) => state.loading.trendingStatus)

    const [trendingAnimeData, setTrendingAnimeData] = React.useState()

    const [firstLaunch, setFirstLaunch] = React.useState(true)
    const [randomImages, setRandomImages] = React.useState(getRandomImage)
    const imageZoom = React.useRef(new Animated.Value(1.15)).current
    const imageMoveX = React.useRef(new Animated.Value(0)).current
    const imageMoveY = React.useRef(new Animated.Value(0)).current
    const AnimatedImage = Animated.createAnimatedComponent(ImageBackground) // ImageBackground does not have an animated component, this is a pretty workaround from stackoverflow :)

    React.useEffect(() => {
        setFirstLaunch(storage.getBoolean('APP.STATUS'))
    }, [])

    const zoomIn = () => {
        Animated.timing(imageZoom, {
            toValue: 1.2,
            duration: 7500,
            useNativeDriver: true
        }).start()
    }

    const moveImageX = () => {
        const randomValue = Math.floor(Math.random() * (30 - 15 + 1)) + 20;
        Animated.timing(imageMoveX, {
            toValue: randomValue,
            duration: 15000,
            useNativeDriver: true
        }).start()
    }

    const moveImageY = () => {
        const randomValue = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
        Animated.timing(imageMoveY, {
            toValue: randomValue,
            duration: 15000,
            useNativeDriver: true
        }).start()
    }

    const handleLaunchPress = () => {
        setFirstLaunch(false)
        dispatch(setBottomBar(false))
        storage.set('APP.STATUS', false)
    }

    const dispatch = useDispatch()

    // Images loaded as simple imports have a delay while the Image component caches them.
    // This preloads every image from the helper function
    const preloadImages = async () => {
        const imagePromises = Object.values(images).map(async (imageSource) => {
            return new Promise((resolve, reject) => {
                const resolvedImageSource = Image.resolveAssetSource(imageSource)

                Image.getSize(resolvedImageSource.uri, () => {
                    resolve();
                }, (error) => {
                    reject(error)
                })
            })
        })

        await Promise.all(imagePromises)
    }


    React.useEffect(() => {
        // Check if the application is on the first ever launch on the phone and show some kind of informations about this app
        const checkLaunch = () => {
            const launch = storage.getBoolean('APP.STATUS')
            console.log(launch)
            if (launch === undefined) {
                storage.set('APP.STATUS', true)
                setFirstLaunch(true)
                dispatch(setBottomBar(true))
            } else if (launch) {
                setFirstLaunch(true)
                dispatch(setBottomBar(true))
            } else {
                setFirstLaunch(false)
                dispatch(setBottomBar(false))
            }
        }

        checkLaunch()
    }, [])

    // This effect preloads the images from the function declared a bit up, while running the animation functions
    // Probably i will use Reanimated in the future but with this ill keep mind of what i want to do
    // Also hopefully cleans up the images so lesser RAM usage :)
    React.useEffect(() => {
        const cleanUpFunction = async () => {
            await preloadImages();

            const animateImages = () => {
                setRandomImages(getRandomImage());
                zoomIn();
                moveImageX();
                moveImageY();
            };

            animateImages();

            // Return a cleanup function to clear everything on unmount
            return () => {
                cleanUpFunction()
            };
        };

        cleanUpFunction();
    }, []);

    React.useEffect(() => {
        const fetchTrendingAnimes = async () => {
            const response = await Jikan.getTrendingAnimes(dispatch)
            setTrendingAnimeData(response)
        }
        fetchTrendingAnimes()
    }, [])

    return (
        <SafeAreaView style={styles.mainContainer}>
            {firstLaunch ? (
                <>
                    <AnimatedImage style={[styles.imageBackground, { transform: [{ scale: imageZoom }, { translateX: imageMoveX }, { translateY: imageMoveY }] }]} source={randomImages} resizeMode="cover" />
                    <View style={styles.startupView}>
                        <Text variant="titleLarge" style={styles.mainStartupText}>Watch Animes in The <Text style={styles.highlightedText}>BEST</Text> Quality Available</Text>
                        <Text variant="titleMedium" style={styles.secondaryStartupText}>Press below to start watching</Text>
                        <Button mode="elevated" textColor={theme.colors.onSurface} buttonColor={theme.colors.secondary} style={styles.startupButton} onPress={handleLaunchPress}>
                            Get Started
                        </Button>
                    </View>
                </>
            ) : (
                <View style={{ padding: 18 }}>
                    {trendingLoader !== 1 ? (
                            <ProgressBar progress={trendingLoader} style={{marginTop: 64}}/>
                    ) : (
                        <>
                            <Text variant="titleLarge" style={{ alignSelf: 'center', marginTop: 24, fontFamily: 'ralewaymedium' }}>Trending</Text>
                            <Divider theme={theme.colors.elevation} style={{ marginTop: 24 }} bold />
                            <TrendingScrollView trendingAnimeData={trendingAnimeData} />
                            <Divider theme={theme.colors.elevation} style={{ marginTop: 24 }} bold />
                            <Text variant="titleLarge" style={{ alignSelf: 'center', marginTop: 24, fontFamily: 'ralewaymedium' }}>Upcoming</Text>
                        </>
                    )}
                </View>
            )}
        </SafeAreaView>
    )
}

export default Home