import { Console } from '@woowacourse/mission-utils';

const inputView = {
  async read(query) {
    const result = await Console.readLineAsync(query);
    return result;
  },
};

export default inputView;
