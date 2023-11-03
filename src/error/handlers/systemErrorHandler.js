import { Console } from '@woowacourse/mission-utils';

const systemErrorHandler = {
  async retryOnErrors(retryFunction) {
    try {
      return await retryFunction();
    } catch (error) {
      Console.print(error.message);
      return this.retryOnErrors(retryFunction);
    }
  },
};

export default systemErrorHandler;
