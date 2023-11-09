import { CONSTANTS } from "../constants/GameConstant.js";
import LottoSettingController from "./LottoSettingController.js";
import {Random} from "@woowacourse/mission-utils";
import UserLottoNumberController from "./UserLottoNumberController.js";
import LottoResultController from "./LottoResultController.js";
import GameResult from "../models/GameResult.js";

class GameController{
    #userLotto;
    #userWinningLotto;
    #gameResult;

    async gameStart(){
        this.#userLotto = await LottoSettingController.setUserLotto();
        this.#userWinningLotto = await UserLottoNumberController.setUserInputLottoNumber();
        this.#gameResult = new GameResult(this.#userLotto, this.#userWinningLotto);
        LottoResultController.setLottoResultController(this.#userLotto, this.#userWinningLotto);
        
        LottoResultController.printLottoResult(this.#gameResult);
    }
}
export default GameController;