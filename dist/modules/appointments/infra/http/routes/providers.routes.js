"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _ensureAuthenticated = _interopRequireDefault(require("../../../../users/infra/http/middlewares/ensureAuthenticated"));

var _ProvidersController = _interopRequireDefault(require("../controllers/ProvidersController"));

var _ProviderDayAvailabilityController = _interopRequireDefault(require("../controllers/ProviderDayAvailabilityController"));

var _ProviderMonthAvailabilityController = _interopRequireDefault(require("../controllers/ProviderMonthAvailabilityController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const providersRouter = (0, _express.Router)();
const provideController = new _ProvidersController.default();
const providerDayAvailabilityController = new _ProviderDayAvailabilityController.default();
const providerMonthAvailabilityController = new _ProviderMonthAvailabilityController.default();
providersRouter.use(_ensureAuthenticated.default);
providersRouter.get('/', provideController.index);
providersRouter.get('/:provider_id/month-availability', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    provider_id: _celebrate.Joi.string().uuid().required()
  }
}), providerMonthAvailabilityController.index);
providersRouter.get('/:provider_id/day-availability', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    provider_id: _celebrate.Joi.string().uuid().required()
  }
}), providerDayAvailabilityController.index);
var _default = providersRouter;
exports.default = _default;