import { Console } from '@woowacourse/mission-utils';

const printLottoNumber = (lottoBox) => {
  lottoBox.forEach((lotto) => Console.print(lotto.numbers));
  Console.print(' ');
};

export default printLottoNumber;
