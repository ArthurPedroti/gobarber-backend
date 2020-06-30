"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _SendForgotPasswordEmailService = _interopRequireDefault(require("../../../services/SendForgotPasswordEmailService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ForgotPasswordController {
  async create(request, response) {
    const {
      email
    } = request.body;

    const sendForgotPasswordEmail = _tsyringe.container.resolve(_SendForgotPasswordEmailService.default);

    await sendForgotPasswordEmail.execute({
      email
    });
    return response.status(204).json();
  }

}

exports.default = ForgotPasswordController;