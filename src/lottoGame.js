import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class lottoGame {

    async lottoMoneyInput(){
        let validInput = false;
        let LOTTO_MONEY;

        while (!validInput) {
            try {
                LOTTO_MONEY = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
                if (LOTTO_MONEY % 1000 !== 0 || LOTTO_MONEY.match(/[^0-9]/)) {
                    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
                }
                validInput = true; 
            } catch (error) {
                MissionUtils.Console.print(error.message);
            }
        }
        return LOTTO_MONEY / 1000;
    }


    lottoCount(LOTTO_COUNT){
        MissionUtils.Console.print(`${LOTTO_COUNT}개를 구매했습니다.`);
        let lottoArr = [];
        for(let i = 0 ; i < LOTTO_COUNT; i++){
            let lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b) => a-b);
            lottoArr.push(lottoNumber);
            MissionUtils.Console.print(`[${lottoNumber.join(", ")}]`);
        }
        return lottoArr;
    }


    async lottoWinNumber(){
        const WIN_NUMBER = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
        const LOTTO_WIN_NUMBER = WIN_NUMBER.split(",");
        new Lotto(LOTTO_WIN_NUMBER);
        return WIN_NUMBER;
    }


    async lottoBonusNuber(LOTTO_WIN_NUMBER) {
        let validInput = false;
        while (!validInput) {
            try {
                const BONUS_NUMBER = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
                this.lottoNumberError(BONUS_NUMBER);

                if (LOTTO_WIN_NUMBER.includes(BONUS_NUMBER)) {
                    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
                }

                validInput = true;
                return BONUS_NUMBER; // 올바른 입력을 받았을 때 반환
            } catch (error) {
                MissionUtils.Console.print(error.message);
            }
        }
    }
    

    
    lottoNumberError(number){
        if(number < 1){
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        if(number > 45){
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        if(number.match(/[^0-9]/)){
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
    }
}

export default lottoGame;