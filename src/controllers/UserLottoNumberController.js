import LottoView from "../views/LottoView.js";
import Validation from "../models/Validation.js";
import UserWinningLotto from "../models/UserWinningLotto.js";

class UserLottoNumberController{
    static async setUserLottoNumber(){
        const userLottoNumber = await LottoView.getUserLottoNumber();
        if(Validation.isUserInputLottoNumberValidate(userLottoNumber)){
            return userLottoNumber.split(',').map(number => Number(number));
        }
    }

    static async setUserBonusLottoNumber(userLottoNumber){
        const userBonusLottoNumber = await LottoView.getUserBonusLottoNumber();
        if(Validation.isUserInputBonusNumberValidate(userLottoNumber,userBonusLottoNumber)){
            return Number(userBonusLottoNumber);
        }
    }

    static async setUserInputLottoNumber(){
        const userLottoNumber = await this.setUserLottoNumber();
        const userBonusLottoNumber = await this.setUserBonusLottoNumber(userLottoNumber);
        
        const userWinningLotto = new UserWinningLotto(userLottoNumber, userBonusLottoNumber);
        return userWinningLotto;
    }
}

export default UserLottoNumberController;