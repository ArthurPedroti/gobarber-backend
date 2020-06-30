"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _mail = _interopRequireDefault(require("../../../../../config/mail"));

var _tsyringe = require("tsyringe");

var _IMailTemplateProvider = _interopRequireDefault(require("../../MailTemplateProvider/models/IMailTemplateProvider"));

var _dec, _dec2, _dec3, _dec4, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let SESMailProvider = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('MailTemplateProvider')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IMailTemplateProvider.default === "undefined" ? Object : _IMailTemplateProvider.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_temp = class SESMailProvider {
  constructor(mailTemplateProvider) {
    this.mailTemplateProvider = mailTemplateProvider;
    this.client = void 0;
    this.client = _nodemailer.default.createTransport({
      SES: new _awsSdk.default.SES({
        apiVersion: '2010-12-01',
        region: 'us-east-1'
      })
    });
  }

  async sendMail({
    to,
    from,
    subject,
    templateData
  }) {
    const {
      name,
      email
    } = _mail.default.defaults.from;
    await this.client.sendMail({
      from: {
        name: (from === null || from === void 0 ? void 0 : from.name) || name,
        address: (from === null || from === void 0 ? void 0 : from.email) || email
      },
      to: {
        name: to.name,
        address: to.email
      },
      subject,
      html: await this.mailTemplateProvider.parse(templateData)
    });
  }

}, _temp)) || _class) || _class) || _class) || _class);
exports.default = SESMailProvider;