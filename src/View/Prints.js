import { RULE, MESSAGE, SIGNS } from "../../constants/index.js";
import { print } from "../../utils/index.js";
class Prints {

    newLine() {
        print("");
    }

    prizeResult() {
        print("당첨 통계\n---");
    }

    sameCount(matches) {
        const keys = ["3","4","5","5b","6"];
        const count = [];

        for (const key of keys) {
            count.push(matches[key]);
        }

        RULE.forEach((element, index) => {
            const cnt = element.count;
            const money = element.money;
            const string = index != 3 ? "개 일치" : "개 일치, 보너스 볼 일치";
            print(`${cnt}${string} (${money}원) - ${count[index]}개`);
        })
    }
    countTicket(number) {
        print(`${number}${MESSAGE.PURCHASE_TICKET}`)
    }

    tickets(arrArr) {
        arrArr.forEach((numbers) => {
            const output = `[${numbers.join(', ')}]`;
            print(output);
        })
    }

    rateOfReturn(rate) {
        print(`총 수익률은 ${rate}${SIGNS.PERCENT}입니다.`);
    }
}

export default Prints;