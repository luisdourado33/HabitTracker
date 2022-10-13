export class EmptyValueError extends Error {
  constructor() {
    super('Value is empty!');
    this.name = 'Value is empty';
  }
}
