export default class Model {
    constructor() {
        this.buyLottoCost = 0;
        this.lottoDataObject = new Object();
        this.lotto = new Array();

    }

    setBuyLottoCost(cost) {
        this.buyLottoCost = cost;
    }

    setLottoDataObject(keyName, value) {
        this.lottoDataObject[keyName] = value;
    }

    setLottoNumber(lottoNumbers) {
        this.lotto.push(lottoNumbers)
    }

    getLottoObject() {
        return this.lottoDataObject;
    }

    getBuyLottoCost() {
        return this.buyLottoCost;
    }

    getLottosNumber() {
        return this.lottoDataObject.lottos;
    }
}