import * as React from 'react'
import { ScrollView } from "react-native"
import {Card, IconButton, TouchableRipple, useTheme} from 'react-native-paper'

function TrendingScrollView({trendingAnimeData}) {
    const theme = useTheme()

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} contentContainerStyle={{gap: 20}} style={{marginTop: 20}}>
            {trendingAnimeData ? trendingAnimeData.map((anime) => (
                <TouchableRipple key={anime.id} onPress={() => console.log('Ripple pressed with id, ', anime.id)} rippleColor={"rgba(197, 242, 179, 0.3)"} style={{width: 200, height: 245, borderRadius: 12}} borderless>
                    <Card key={anime.id} style={{width: 200, height: 100}} mode="elevated">
                        <Card.Cover source={{uri: anime.background}} style={{borderTopRightRadius: 12, borderTopLeftRadius: 12}} theme={{roundness: 0}}/>
                        <Card.Title title={anime.title} titleStyle={{textAlign: 'left', fontFamily: 'ralewaymedium'}} style={{backgroundColor: theme.colors.onPrimary, paddingBottom: 10}} right={(props) => <IconButton {...props} icon='dots-vertical' style={{paddingBottom: 7}}/>} theme={{margin: 0}}/>
                    </Card>
                </TouchableRipple>
            )) : (null)}
        </ScrollView>
        
    )
}

export default TrendingScrollView