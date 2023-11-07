import LottoUI from "./LottoUI.js";

class LottoGame {
    static async game_start(){
        try {
            const purchase_amount = await LottoUI.input_purchase_amount();
        } catch ( error ){ throw new Error(error); }
    }

}

export default  LottoGame ;