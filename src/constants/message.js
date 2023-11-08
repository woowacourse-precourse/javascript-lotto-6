import { Console } from '@woowacourse/mission-utils';

export const LOTTO_COMMAND = Object.freeze({
    inputPurchaseAmountCommand: '구입 금액을 입력해 주세요.\n',
    inputWinningNumbersCommand: '\n당첨 번호를 입력해주세요.\n',
    inputBonusNumberCommand: '\n보너스 번호를 입력해주세요.\n',
});

export const LOTTO_MESSAGE = Object.freeze({
    printUserLottoNumberMessage(numberOfPurchases, lottoNumbers) {
        Console.print(`\n${numberOfPurchases}개를 구매했습니다.`);
        lottoNumbers.forEach(number => {
            Console.print(JSON.stringify(number).replace(/,/g, ', '));
        });
    },
    printLottoResultMessage(results) {
        Console.print('\n당첨 통계\n---');
        Console.print(`3개 일치 (5,000원) - ${results[0]}개`);
        Console.print(`4개 일치 (50,000원) - ${results[1]}개`);
        Console.print(`5개 일치 (1,500,000원) - ${results[2]}개`);
        Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results[3]}개`);
        Console.print(`6개 일치 (2,000,000,000원) - ${results[4]}개`);
    },
    printEarningsRateMessage(earningsRate) {
        Console.print(`총 수익률은 ${(earningsRate).toFixed(1)}%입니다.`);
    },
});

export const ERROR_MESSAGE = Object.freeze({
    notNumberException: '[ERROR] 숫자만 입력해야합니다.',
    notDivide1000Exception: '[ERROR] 구입 금액은 1000원 단위의 숫자로 입력해야합니다.',
    notNumberLengthSixException: '[ERROR] 로또 번호는 6개의 숫자를 쉼표를 사용하여 구분하여 입력해야 합니다.',
    notDuplicateWinningNumberException: '[ERROR] 중복된 숫자는 입력할 수 없습니다.',
    numberRangeException: '[ERROR] 로또 번호의 범위는 1에서 45 사이입니다.',
});