class Budget{
    budget;
    LOTTO_PRICE;
    MIN_LOTTO_NUM;
    MAX_LOTTO_NUM;
    ERROR_MESSAGE = '[ERROR] 숫자가 잘못된 형식입니다.';
    constructor(number, minLottoNumber, maxLottoNumber, lottoPrice){
        this.budget = number;
        this.LOTTO_PRICE = lottoPrice;
        this.MIN_LOTTO_NUM = minLottoNumber;
        this.MAX_LOTTO_NUM = maxLottoNumber;
        this.#validate(number);
    }
    #validate(lottoBudget){
        if(lottoBudget < this.MIN_LOTTO_NUM * this.LOTTO_PRICE || lottoBudget > this.MAX_LOTTO_NUM * this.LOTTO_PRICE){
            throw new Error(this.ERROR_MESSAGE);
        }
        
        const CHANGE = lottoBudget % this.LOTTO_PRICE;

        if(CHANGE!==0){
            throw new Error(this.ERROR_MESSAGE);
        }
    }
}
export default Budget;