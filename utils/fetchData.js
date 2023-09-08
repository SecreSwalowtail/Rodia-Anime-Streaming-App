import axios from 'axios';
import { setTrendingStatus } from '../redux/reducers/loadingSlice';

const jikanApi = axios.create({
    baseURL: 'https://api.jikan.moe/v4'
});

export const Jikan = {
    getTrendingAnimes: async (dispatch) => {
        let trendingAnimes = [];
        try {
            const response = await jikanApi.get('/top/anime', {
                params: {
                    'filter': 'airing',
                    'sfw': 'true'
                }
            });
            const dataLength = response.data.data.length;

            /*
                This should dispatch some kind of loading state to the redux store
                so it can display a loading bar while the items are loaded
                TODO : Make that a function I can use everywhere , i don't want to do this shit for each api call in the future
            */
            for (let i = 0; i < dataLength; i++) {
                const anime = response.data.data[i];
                trendingAnimes.push({
                    title: anime.title,
                    background: anime.images.webp.large_image_url,
                    id: anime.mal_id,
                });

                // Calculate progress and dispatch it
                const progress = (i + 1) / dataLength;
                dispatch(setTrendingStatus(progress));
            }

            // If you actually see this progress bar you really need better internet lol

            return trendingAnimes;
        } catch (err) {
            console.error('Some error occurred in getTrendingAnimes', err);
        }
    }
};