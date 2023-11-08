import LottoSettingController from "./LottoSettingController.js";

class GameController{
    async gameStart(){
        const lottoPurchasePrice = await LottoSettingController.getLottoPurchaseAmount();
    }
}
export default GameController;