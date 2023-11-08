import LottoView from "../views/LottoView.js";
import Validation from "../models/Validation.js";

class UserLottoNumberController{
    static async setUserLottoNumber(){
        const userLottoNumber = await LottoView.getUserLottoNumber();
        if(Validation.isUserInputLottoNumberValidate(userLottoNumber)){
            const res = userLottoNumber.split(',').map(number => Number(number));
        
            console.log("유저로또넘버", res)}
        
    }
}

export default UserLottoNumberController;