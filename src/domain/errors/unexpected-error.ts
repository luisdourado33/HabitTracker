export class UnexpectedError extends Error {
  constructor() {
    super('Something wrong happened. Try it again later');
    this.name = 'UnexpectedError';
  }
}
