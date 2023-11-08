import { MATCHED_NUMBER_3, MATCHED_NUMBER_4, MATCHED_NUMBER_5, MATCHED_NUMBER_5_BONUS, MATCHED_NUMBER_6 } from "../static/static";

export class GetTotalInfo {
    static getMatchedNumber(lotto, winningNumbers) {
        return lotto.getNumbers().filter(number => winningNumbers.includes(number)).length;
    }
    static getTotalPrize(results) {
        const result = results[MATCHED_NUMBER_3] * 5000
            + results[MATCHED_NUMBER_4] * 50000
            + results[MATCHED_NUMBER_5] * 1500000
            + results[MATCHED_NUMBER_5_BONUS] * 30000000
            + results[MATCHED_NUMBER_6] * 2000000000;
        return result;
    }
    static getTotalPrice(tickets) {
        return tickets * 1000;
    }

    static getProfitRate(results, tickets) {
        const totalPrize = this.getTotalPrize(results);
        const totalprice = this.getTotalPrice(tickets);
        return 100 + ((totalPrize - totalprice) / totalprice) * 100
    }
}