export class InvalidEntityError {
  constructor(errors, statusCode) {
    this.name = this.constructor.name;
    this.errors = errors;
    this.statusCode = statusCode;
  }
}

InvalidEntityError.prototype = Object.create(Error.prototype);
InvalidEntityError.prototype.constructor = InvalidEntityError;

export class NotFoundError {
  constructor() {
    this.name = this.constructor.name;
  }
}

NotFoundError.prototype = Object.create(Error.prototype);
NotFoundError.prototype.constructor = NotFoundError;
