class App {
  async play() {}

  async receiveUserInput(guideMsg) {
    const userInput = await Console.readLineAsync(guideMsg);
    return userInput;
  }
}

export default App;
