import LottoValidate from "../validate/LottoValidate.js";

class BonusNumber{

    constructor(bonusNumber){
        this.bonusNumber = bonusNumber;
        this.bonusNumberValidate(bonusNumber);
    }

    bonusNumberValidate = (bonusNumber) => {
        new LottoValidate().inputBonusNumberValidate(bonusNumber);
    }

}

export default BonusNumber