export class ViewError extends Error {
  constructor(message) {
    super(message);
    this.name = "ViewError";
  }
}
