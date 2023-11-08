class Bonus {
    #number;
  
    constructor(number, winning) {
      this.#validate(number, winning);
      this.#number = number;
    }
  
    #validate(number, winning) {
      this.#validateNumber(number);
      for(let i=0; i<6; i++) {
        const num = winning[i];
        this.#validateDuplicate(number, num);
      }
    }
  
    #validateNumber(number) {
      const parsedNumber = Number(number)
      if(isNaN(parsedNumber) || parsedNumber<1 || parsedNumber>45) {
        throw new Error("[ERROR] 보너스 번호는 1~45의 숫자여야 합니다.")
      }
    }
  
    #validateDuplicate(number, num) {
      if(number === num) throw new Error("[ERROR] 보너스 번호가 중복되었습니다.")
    }
  
    // TODO: 추가 기능 구현
  }
  
  export default Bonus;
  