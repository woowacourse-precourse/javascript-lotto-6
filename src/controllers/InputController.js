class InputController {
  static loopGetInput(inputFunction) {
    let result;

    while (!result) {
      result = inputFunction;
    }
    return result;
  }

  static convertNumber(numberString) {
    return Number(numberString);
  }

  static converList(numbersString) {
    const numberList = numbersString.split(',').map(numberString => Number(numberString.trim()));

    return numberList;
  }
}

export default InputController;
