const axios = require("axios");

module.exports = {
    SetKey(key) {
        this.key = key;
    },

    async GetDisclosure() {
        return await this.get('https://opendart.fss.or.kr/api/list.json');
    },

    async GetCorpCode() {
        return await this.get('https://opendart.fss.or.kr/api/corpCode.xml');
    },

    async get(url, params) {
        url += '?crtfc_key=' + this.key;
        params && Object.keys(params).forEach(key => url += `&${key}=${params[key]}`)
        const ret = await axios.get(url);
        return ret.data;
    }
};