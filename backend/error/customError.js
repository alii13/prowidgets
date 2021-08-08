'use strict';

module.exports = function CustomError(message, status) {
  this.message = message;
  this.status = status;
};