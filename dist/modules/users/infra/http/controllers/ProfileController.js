"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

var _UpdateProfileService = _interopRequireDefault(require("../../../services/UpdateProfileService"));

var _ShowProfileService = _interopRequireDefault(require("../../../services/ShowProfileService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProfileController {
  async show(request, response) {
    const user_id = request.user.id;

    const showProfile = _tsyringe.container.resolve(_ShowProfileService.default);

    const user = await showProfile.execute({
      user_id
    });
    return response.json((0, _classTransformer.classToClass)(user));
  }

  async update(request, response) {
    const user_id = request.user.id;
    const {
      name,
      email,
      old_password,
      password
    } = request.body;

    const updateProfile = _tsyringe.container.resolve(_UpdateProfileService.default);

    const user = await updateProfile.execute({
      user_id,
      name,
      email,
      old_password,
      password
    });
    return response.json((0, _classTransformer.classToClass)(user));
  }

}

exports.default = ProfileController;