import { OUTPUT_MESSAGE } from '../constants/message.js';

const winningResult = (rank) => {
    const [standard, prize, winningAmount] = rank.get();
    const { numbers, bonus } = standard;

    return OUTPUT_MESSAGE.WINNING_RESULT(
        numbers,
        bonus,
        prize.toLocaleString('ko-KR'),
        winningAmount
    );
};

export default winningResult;