import axios from "axios";

const options = {
    params: {
        geo: 'TR',
        lang: 'tr'
    },
    headers: {
        'X-RapidAPI-Key': 'b79b373679msh4a54ef413a4c49fp12f70fjsn1540a8250428',
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
};

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com"

export const getData = async (path) => {
    try {
        return await axios.get(path, options);
    } catch (error) {
        console.log(error);
    }
};

export const milify = (num) => {
    if (num < 1000) {
        return num.toFixed(0);
    } else if (num < 1000000) {
        return (num / 1000).toFixed(1).replace('.0', '') + ' K';
    } else if (num < 1000000000) {
        return (num / 1000000).toFixed(1).replace('.0', '') + ' M';
    } else {
        return (num / 1000000000).toFixed(1).replace('.0', '') + ' B';
    }
};