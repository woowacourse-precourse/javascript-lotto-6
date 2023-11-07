class BonusNumber {
  constructor(bonusNumber) {
    this.validate(bonusNumber);
    this.value = bonusNumber;
  }
  validate(bonusNumber){
    if(isNaN(bonusNumber)!=false){
      throw new Error('[ERROR] 올바른 숫자를 입력해주세요.');
    } 
  }
}
export default BonusNumber;