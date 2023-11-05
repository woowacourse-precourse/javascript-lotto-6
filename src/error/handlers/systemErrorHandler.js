import { Console } from '@woowacourse/mission-utils';

const systemErrorHandler = {
  async retryOnErrors(executeFunction) {
    try {
      return await executeFunction();
    } catch (error) {
      Console.print(error.message);
      return this.retryOnErrors(executeFunction);
    }
  },
};

export default systemErrorHandler;
