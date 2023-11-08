import { Console } from '@woowacourse/mission-utils';

export const InputView = {
    async price() {
        const price = await Console.readLineAsync('구입할 금액을 입력해주세요.\n');
        return Number(price);
    },
    async wining() {
        const winingnumbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
        return winingnumbers.split(',').map(Number);
    },
    async bonus() {
        const number = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
        return Number(number);
    },
};
