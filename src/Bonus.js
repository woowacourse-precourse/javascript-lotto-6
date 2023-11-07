class Bonus {
    #number
    constructor(number,numbers) {
        this.#isNumber(number);
        this.#isOneNumber(number);
        this.#isNotSame(number,numbers);
    }

    #isNumber(number){
        if(isNaN(number))  throw Error("[ERROR] 숫자를 입력해주세요.");
    }
    #isOneNumber(number) {
        if(number > 45 || number < 1) throw Error("[ERROR] 숫자는 45이하 1이상으로 입력해주세요.");
    }
    #isNotSame(number,numbers) {
        let ISSAME = [...new Set(numbers).add(Number(number))];
        if(ISSAME.length != 7) throw Error("[ERROR] 중복되지 않는 숫자를 입력해주세요.");
    }
}

export default Bonus;