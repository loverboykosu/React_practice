import axios from 'axios';
class SpotifyClient {
    static async initialize() {
        const apiUrl = "https://accounts.spotify.com/api/token";
        const response = await axios.post(apiUrl,
            {grant_type: "client_credentials",
                client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
                client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
                },
                {headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                }}
        );
        let spotify = new SpotifyClient();
        spotify.token = response.data.access_token;
        return spotify;
    };
    test() {
        console.log(this);
    }
}

const spotify = await SpotifyClient.initialize();
export default spotify;