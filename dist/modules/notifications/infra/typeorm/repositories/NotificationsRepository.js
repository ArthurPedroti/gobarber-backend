"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Notification = _interopRequireDefault(require("../schemas/Notification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NotificationsRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getMongoRepository)(_Notification.default, 'mongo');
  }

  async create({
    content,
    recipient_id
  }) {
    const notification = this.ormRepository.create({
      content,
      recipient_id
    });
    await this.ormRepository.save(notification);
    return notification;
  }

}

var _default = NotificationsRepository;
exports.default = _default;