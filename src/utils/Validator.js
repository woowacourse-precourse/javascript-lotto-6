const Validator = {
  purchaseAmount(money) {
    if (money === 0 || isNaN(money)) {      
      throw new Error("[ERROR] 구입금액은 0보다 큰 숫자여야 합니다."); 
    }
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 구입금액은 1000의 배수여야 합니다.");
    }
  }
};

export default Validator;


 