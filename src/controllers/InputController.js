class InputController {
  static loopGetInput(inputFunction) {
    let result;

    while (!result) {
      result = inputFunction();
    }
    return result;
  }
}

export default InputController;
