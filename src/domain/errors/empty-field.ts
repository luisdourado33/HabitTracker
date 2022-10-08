export class EmptyFieldError extends Error {
  constructor() {
    super('Field is empty!');
    this.name = 'EmptyFieldError';
  }
}
