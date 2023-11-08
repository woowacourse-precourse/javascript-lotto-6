import { CONSTANTS } from "../constants/GameConstant.js";
import LottoSettingController from "./LottoSettingController.js";
import {Random} from "@woowacourse/mission-utils";

class GameController{
    async gameStart(){
        await LottoSettingController.setUserLotto();
    }
}
export default GameController;