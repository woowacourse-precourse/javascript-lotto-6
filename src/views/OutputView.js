import { Console } from '@woowacourse/mission-utils';

const outputView = async (message, result) => {
  await Console.print(message);
  await Console.print(result);
};
export default outputView;
