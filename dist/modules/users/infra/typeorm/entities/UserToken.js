"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let UserToken = (_dec = (0, _typeorm.Entity)('user_tokens'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)('uuid'), _dec3 = Reflect.metadata("design:type", String), _dec4 = (0, _typeorm.Column)(), _dec5 = (0, _typeorm.Generated)('uuid'), _dec6 = Reflect.metadata("design:type", String), _dec7 = (0, _typeorm.Column)(), _dec8 = Reflect.metadata("design:type", String), _dec9 = (0, _typeorm.CreateDateColumn)(), _dec10 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec11 = (0, _typeorm.UpdateDateColumn)(), _dec12 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec(_class = (_class2 = (_temp = class UserToken {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "token", _descriptor2, this);

    _initializerDefineProperty(this, "user_id", _descriptor3, this);

    _initializerDefineProperty(this, "created_at", _descriptor4, this);

    _initializerDefineProperty(this, "updated_at", _descriptor5, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "token", [_dec4, _dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "user_id", [_dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "created_at", [_dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "updated_at", [_dec11, _dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
var _default = UserToken;
exports.default = _default;