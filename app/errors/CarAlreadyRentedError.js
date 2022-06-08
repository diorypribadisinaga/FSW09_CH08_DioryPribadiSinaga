const ApplicationError = require("./ApplicationError");

class CarAlreadyRentedError extends ApplicationError {
  constructor(name) {
    super(`${name} is already rented!!`);
  }

  get details() {
    return { name }
  }
}

module.exports = CarAlreadyRentedError;
