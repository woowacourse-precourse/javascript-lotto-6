const error = (message) => `[ERROR] ${message}`

export class ConsoleError extends Error{
  constructor(message){
    super(error(message));
  }
}