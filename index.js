const axios = require("axios");

module.exports = {
    SetKey(key) {
        this.key = key;
    },

    async GetDisclosure() {
        const data = {
            pblntf_ty: 'B'
        }
        return await this.get('https://opendart.fss.or.kr/api/list.json', data);
    },

    async GetCorpCode() {
        return await this.get('https://opendart.fss.or.kr/api/corpCode.xml');
    },

    async get(url, params) {
        console.log(params);
        url += '?crtfc_key=' + this.key;
        Object.keys(params).forEach(key => url += `&${key}=${params[key]}`)
        console.log(url);
        const ret = await axios.get(url);
        return ret.data;
    }
};