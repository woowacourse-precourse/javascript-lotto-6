import { Console } from '@woowacourse/mission-utils';

function printLottosList(lottosList) {
  const list = lottosList.map((item) => '[' + item.join(', ') + ']');
  Console.print(list.join('\n'));
}

export default printLottosList;
