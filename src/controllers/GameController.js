import LottoSettingController from "./LottoSettingController.js";

class GameController{
    async gameStart(){
        
        await LottoSettingController.setUserLotto();
    }
}
export default GameController;