import { MissionUtils, Console } from "@woowacourse/mission-utils";

class LottoController {
    constructor(cnt) {
        this.lottoCount = cnt;
      }
    
    makeLotto() {
        const lottoArr = [];
        for (let i = 0; i < this.lottoCount; i++) {
            let lottoNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
            let lottoArray = String(lottoNum).split(",").map(Number);
            let formattedArray = "[" + lottoArray.join(", ") + "]"; // 배열을 문자열 형태로 포맷
            Console.print(formattedArray);
            lottoArr.push(lottoArray);
            
        }
        return lottoArr;
    }

    
}

export default LottoController;