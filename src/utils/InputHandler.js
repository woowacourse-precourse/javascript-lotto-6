import { Console } from '@woowacourse/mission-utils';

const InputHandler = async (inputText, validator, privateField) => {
  try {
    const userInput = await Console.readLineAsync(inputText);

    validator(userInput, privateField);
    return userInput;
  } catch (error) {
    Console.print(error.message);
    return InputHandler(inputText, validator, privateField);
  }
};

export default InputHandler;
