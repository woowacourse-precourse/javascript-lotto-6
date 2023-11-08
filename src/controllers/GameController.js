import { CONSTANTS } from "../constants/GameConstant.js";
import LottoSettingController from "./LottoSettingController.js";
import {Random} from "@woowacourse/mission-utils";
import UserLottoNumberController from "./UserLottoNumberController.js";

class GameController{
    async gameStart(){
        await LottoSettingController.setUserLotto();
        await UserLottoNumberController.setUserInputLottoNumber();
    }
}
export default GameController;