import { Console } from '@woowacourse/mission-utils';
import { WINNING_REQUIRED_COUNT } from '../constants/lotto/numbers';

export const consoleInput = async (message) => {
  const input = Console.readLineAsync(message);
  return input;
};

export const buyOutput = (count) => {
  Console.print(`${count} 개를 구매했습니다.`);
};

export const firstPlaceOutput = (place, count) => {
  Console.log(
    `${WINNING_REQUIRED_COUNT.firstPlace}개 일치 (${place})원 - ${count}개}`,
  );
};
