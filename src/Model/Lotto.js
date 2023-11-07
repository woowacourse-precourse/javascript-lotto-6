class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    // 당첨 번호를 입력받고 검사한 것
    #validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }
        
        const setNumbers = new Set(numbers);
        if (setNumbers.size !==6) {
            throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
        }

        numbers.forEach((number) => {
            if(!/^[1-9]|[1-3][0-9]|4[0-5]$/.test(number)){
                throw new Error("[ERROR] 로또 번호는 [1-45] 사이의 번호로 구성되어야 합니다.");
            }
        })
    }

    validateBonusNumber(number) {
        const duple = this.#numbers.includes(number);
        if(duple){
            throw new Error("[ERROR] 당첨 번호와 보너스 번호는 겹치지 않아야 합니다.");
        }
        const validation = /^[1-9]|[1-3][0-9]|4[0-5]$/.test(number) 
        if(!validation){
            throw new Error("[ERROR] 로또 번호는 [1-45] 사이의 번호로 구성되어야 합니다.");
        }
    }

    getMatchCount(numbers, bonusNumber){
        const combine = [...this.#numbers, ...numbers];
        const setCombine = new Set(combine);
    
        const matchCount = {
            main : 12-setCombine.size,
            bonus : false
        }

        if(matchCount.main == 5){
            matchCount.bonus = numbers.includes(bonusNumber);
        }
        
        return matchCount;
    }
}


export default Lotto;
