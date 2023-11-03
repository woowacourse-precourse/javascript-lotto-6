import { Console } from '@woowacourse/mission-utils';

// 객체를 받아 값 출력
const Outputs = {
  printLottoNumber(lottos) {
    Object.values(lottos).forEach((items) => {
      Console.print(`[${items.sort((a, b) => a - b).join(', ')}]`);
    });
  },
};
