const axios = require("axios");

class OpenDart {
    constructor(key) {
        this.key = key;
    };

    GetDisclosure = async () => {
        const data = {
            pblntf_ty : 'B'
        }
        return await this.get('https://opendart.fss.or.kr/api/list.json',data);
    };

    GetCorpCode = async () => {
        return await this.get('https://opendart.fss.or.kr/api/corpCode.xml');
    }

    get = async (url, params) => {
        console.log(params);
        url += '?crtfc_key=' + this.key;
        Object.keys(params).forEach(key => url += `&${key}=${params[key]}`)
        console.log(url);
        const ret = await axios.get(url);
        return ret.data;
    }
};