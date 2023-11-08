import LottoView from "../views/LottoView.js";
import Validation from "../models/Validation.js";

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
        console.log("유저로또넘버는?",userLottoNumber);
        const userBonusLottoNumber = await this.setUserBonusLottoNumber(userLottoNumber);

    }
}

export default UserLottoNumberController;