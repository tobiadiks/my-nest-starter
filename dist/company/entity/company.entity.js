"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const bcrypt_1 = require("bcrypt");
const feedback_entity_1 = require("../../feedback/entity/feedback.entity");
const thirdparty_entity_1 = require("../../thirdpartykey/entity/thirdparty.entity");
const typeorm_1 = require("typeorm");
let Company = class Company {
    async hashPassword() {
        this.password = await (0, bcrypt_1.hash)(this.password, 10);
    }
    updateDate() {
        this.date_updated = new Date().toLocaleString();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Company.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Company.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Company.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Company.prototype, "display_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "logo_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: new Date().toLocaleString() }),
    __metadata("design:type", String)
], Company.prototype, "date_created", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: new Date().toLocaleString() }),
    __metadata("design:type", String)
], Company.prototype, "date_updated", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => feedback_entity_1.Feedback, (feedback) => feedback.company),
    __metadata("design:type", Array)
], Company.prototype, "feedback", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => thirdparty_entity_1.PrivateKey, (privatekey) => privatekey.company),
    __metadata("design:type", thirdparty_entity_1.PrivateKey)
], Company.prototype, "privatekey", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Company.prototype, "hashPassword", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Company.prototype, "updateDate", null);
Company = __decorate([
    (0, typeorm_1.Entity)()
], Company);
exports.Company = Company;
//# sourceMappingURL=company.entity.js.map