const Validator = {
  purchaseAmount(money) {
    if (money === 0 || isNaN(money)) {      
      throw new Error("[ERROR] 구입금액은 0보다 큰 숫자여야 합니다."); 
    }
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 구입금액은 1000의 배수여야 합니다.");
    }
  },

  winningNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);

    if (numbers.length !== 6) {
      throw new Error(`[ERROR] 로또 번호는 6개여야 합니다.`);
    }    
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 중복되지 않는 6개의 번호여야 합니다.");
    }
    if (numbers.some((number) => isNaN(number) || number < 1 || number > 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  },  

  bonusNumber(winningNumbers, bonusNumber) {
    const numbers = [...winningNumbers, bonusNumber];
    const uniqueNumbers = new Set(numbers);

    if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 당첨 번호와 중복된 숫자가 없어야 합니다.");
    }
  }
};

export default Validator;


 