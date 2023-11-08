import { Console } from '@woowacourse/mission-utils';

export const hasDuplicate = numbers => {
  return !numbers.every(
    (value, index) => !numbers.slice(0, index).includes(value),
  );
};

const userInput = async scenario => {
  const result = await Console.readLineAsync(scenario);
  return result;
};

export const getUserValidInputRecursive = async (scenario, callback) => {
  try {
    const result = await userInput(scenario);
    callback(result);
    return true;
  } catch (error) {
    Console.print(error.message);
    return getUserValidInputRecursive(scenario, callback);
  }
};
