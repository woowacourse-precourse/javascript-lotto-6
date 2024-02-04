class LottoPlayer{
    #seed;
    #buyLottoList = [];

    constructor(){

    }

    setSeed(input){
        this.#seed = input;
    }

    setbuyLottoList(lottoList){
        this.#buyLottoList = lottoList;
    }
}