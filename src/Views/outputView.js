import { Console } from '@woowacourse/mission-utils';

export const OutputView = {
    count(number) {
        Console.print(`\n${number}개를 구매했습니다.`);
    },
    makeLottos(numbers) {
        numbers.forEach((lotto, index) => {
            Console.print(`[${lotto.join(', ')}]`);
        });
    },
    result(ranking) {
        Console.print(`당첨 통계\n---`);
        for (let i = 0; i < ranking.length; i++) {
            Console.print(`${PRIZE_TABLE[i]} - ${ranking[i]}개`);
        }
    },
    profit(number) {
        Console.print(`총 수익률은 ${number.toFixed(1)}%입니다.`);
    },
    err(error) {
        Console.print(error);
    },
};
