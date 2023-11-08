export class AlertError extends Error {
  constructor(message) {
    const newMessage = `[ERROR] ${message}`;
    super(newMessage);
    this.message = newMessage;
  }
}
