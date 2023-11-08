import { Console } from "@woowacourse/mission-utils";
import OutputMessages from "../constants/OutputMessages.js";

class Output {
    
    async printLotto(lotto) {
        this.outPutQuantity(lotto);
        const stringArrays = lotto.map(lotto => {
            const innerArrayString = lotto.join(', ');
            return `[${innerArrayString}]`;
        });
        return Console.print(stringArrays.join('\n'));
        }

    async outPutQuantity(lotto) {
        await Console.print('\n'+lotto.length+OutputMessages.PRINT_PURCHASE_QUANTITY);
    }

    printStatistics(dic) {
        Console.print(OutputMessages.PRTNT_STATISTICS);
        Console.print(OutputMessages.PRINT_THREE_SAME + dic[3] + OutputMessages.PRINT_QUANTITY);
        Console.print(OutputMessages.PRINT_FOUR_SAME + dic[4] + OutputMessages.PRINT_QUANTITY);
        Console.print(OutputMessages.PRINT_FIVE_SAME + dic[5] + OutputMessages.PRINT_QUANTITY);
        Console.print(OutputMessages.PRINT_FIVE_SAME_AND_BONUS_SAME + dic[7] + OutputMessages.PRINT_QUANTITY);
        Console.print(OutputMessages.PRINT_SIX_SAME + dic[6] + OutputMessages.PRINT_QUANTITY);
    }

    printTotalRate(totalRate) {
        Console.print(OutputMessages.PRINT_TOTAL_RATE+totalRate+OutputMessages.PRINT_PERCENT);
    }
}

export default Output;