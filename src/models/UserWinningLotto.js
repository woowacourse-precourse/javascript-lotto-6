import Lotto from "../Lotto.js";

class UserWinningLotto{
    lottoNumber;
    bonusNumber;

    constructor(lottoNumber, bonusNumber){
        this.lottoNumber = new Lotto(lottoNumber);
        this.bonusNumber = bonusNumber;
    }
}
export default UserWinningLotto;