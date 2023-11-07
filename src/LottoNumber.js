class LottoNumber {
    LOTTO_NUMBER;
    ERROR_MESSEGE_NON_NUMBER = "[ERROR] 숫자를 입력해 주세요.";
    ERROR_MESSEGE_NOT_IN_RANGE = "[ERROR] 숫자는 1 이상 45 이하여야 합니다."
    constructor(number) {
        this.#validate(number);
        this.LOTTO_NUMBER = number;
    }

    #validate(number){
        if(isNaN(number)){
            console.log(number);
            throw new Error(this.ERROR_MESSEGE_NON_NUMBER);
        }
        if(number < 1 || number > 45){
            throw new Error(this.ERROR_MESSEGE_NOT_IN_RANGE);
        }

    }
}
export default LottoNumber;