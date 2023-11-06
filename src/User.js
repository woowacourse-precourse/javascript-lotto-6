import { Console } from '@woowacourse/mission-utils';
import Input from './utils/Input.js';

class User {
  // eslint-disable-next-line class-methods-use-this
  async buy() {
    const cost = await Input.getCost();
    const count = cost / 1000;

    Console.print(`\n${count}개를 구매했습니다.`);
  }
}

export default User;
