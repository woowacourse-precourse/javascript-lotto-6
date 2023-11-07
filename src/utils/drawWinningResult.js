import { OUTPUT_MESSAGE } from '../constants/message.js';

const drawWinningResult = (rank) => {
  const [standard, prize, winningAmount] = rank.get();
  const { numbers, bonus } = standard;

  return OUTPUT_MESSAGE.WINNING_RESULT(
    numbers,
    bonus,
    prize.toLocaleString('ko-KR'),
    winningAmount
  );
};

export default drawWinningResult;
