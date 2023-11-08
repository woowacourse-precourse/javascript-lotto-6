class BonusNumber {
    #bonusNumber;
  
    constructor(bonusNumber) {
      this.#bonusNumber = bonusNumber;
    }
  
    getBonusNumber() {
      return this.#bonusNumber;
    }
  }
  
  export default BonusNumber;