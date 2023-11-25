import { MissionUtils } from '@woowacourse/mission-utils';

const InputView = {
  /**
   *
   * @param {string} query
   * @returns {string}
   */
  async readInput(query) {
    const value = await MissionUtils.Console.readLineAsync(`\n${query}\n`);

    return value.replaceAll(' ', '');
  },
};

export default InputView;
