"use strict";

var _tsyringe = require("tsyringe");

var _upload = _interopRequireDefault(require("../../../../config/upload"));

var _DiskStorageProvider = _interopRequireDefault(require("./implementations/DiskStorageProvider"));

var _S3StorageProvider = _interopRequireDefault(require("./implementations/S3StorageProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const providers = {
  disk: _DiskStorageProvider.default,
  s3: _S3StorageProvider.default
};

_tsyringe.container.registerSingleton('StorageProvider', providers[_upload.default.driver]);