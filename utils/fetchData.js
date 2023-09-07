import axios from 'axios'

const jikanApi = axios.create({
    baseURL: 'https://api.jikan.moe/v4'
})


export const Jikan = {
    getTrendingAnimes : async () => {
        let trendingAnimes = []
        try {
            const response = await jikanApi.get('/top/anime', {
                params: {
                    'filter': 'airing',
                    'sfw': 'true'
                }
            })
            response.data.data.map((anime) => {
                trendingAnimes.push({
                    title: anime.title,
                    background: anime.images.webp.large_image_url,
                    id: anime.mal_id,
                })
            })
            return trendingAnimes

        } catch (err) {
            console.error('Some error occured in getTrendingAnimes', err)
        }
    }
}