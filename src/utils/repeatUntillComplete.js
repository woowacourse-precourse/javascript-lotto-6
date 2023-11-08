import { Console } from "@woowacourse/mission-utils";

const repeatUntillComplete = (func) => {
  return async (...args) => {
    try {
      return await func(...args);
    } catch (err) {
      Console.print(err.message);

      return await repeatUntillComplete(func)(...args);
    }
  };
};

export { repeatUntillComplete };
