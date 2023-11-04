import { RULE } from "../../constants";
import { print } from "../../utils";
class Print {
    prizeResult() {
        print("당첨 통계\n---");
    }
    
    sameCount(arr) {
     arr.forEach((count, index) => {
        const cnt = RULE[index].count;
        const money = RULE[index].money;
        const string = index != 3? "개 일치" : "개 일치, 보너스볼 일치";
        print(`${cnt}${string} (${money}원) - ${count}개`);
     })
    }
    
    rateOfReturn(rate) {
        print(`총 수익률은 ${rate}${SIGNS.PERCENT}입니다.`);
    }
}

export default Print;