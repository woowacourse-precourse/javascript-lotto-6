import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  async printStaticMessage(messages) {
    return Console.print(messages);
  },
};

export default OutputView;
