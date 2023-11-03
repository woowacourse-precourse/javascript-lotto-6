export default class GameError extends Error {
  #TEMPLETE = '[ERROR]';

  constructor(message) {
    super();
    this.message = `${this.#TEMPLETE} ${message}`;
  }
}
