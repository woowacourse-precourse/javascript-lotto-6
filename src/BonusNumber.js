class BonusNumber {
  constructor(bonusNumber) {
    this.validate(bonusNumber);
    this.value = bonusNumber;
  }
  validate(bonusNumber){
    if(isNaN(bonusNumber)!=false){
      throw new Error('[ERROR] 보너스 번호는 숫자만 입력할 수 있습니다.');
    } 

    if(bonusNumber.includes(' ')){
      throw new Error('[ERROR] 보너스 번호는 공백을 포함할 수 없습니다.');
    }

    if (bonusNumber>45 || bonusNumber<0){
      throw new Error('[ERROR] 보너스 번호는 1~45 범위 내에서만 가능합니다.');
    }
  }
}
export default BonusNumber;