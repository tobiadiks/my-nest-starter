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
exports.PrivateKey = void 0;
const bcrypt_1 = require("bcrypt");
const company_entity_1 = require("../../company/entity/company.entity");
const typeorm_1 = require("typeorm");
let PrivateKey = class PrivateKey {
    async hashPassword() {
        this.privatekey = await (0, bcrypt_1.hash)(Math.random().toString(), 10);
    }
    async hashGenerate() {
        this.privatekey = await (0, bcrypt_1.hash)(Math.random().toString(), 10);
    }
    async updateDate() {
        this.generated = await new Date().toLocaleString();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PrivateKey.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PrivateKey.prototype, "privatekey", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: new Date().toLocaleString() }),
    __metadata("design:type", String)
], PrivateKey.prototype, "generated", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => company_entity_1.Company, (company) => company.privatekey),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", company_entity_1.Company)
], PrivateKey.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PrivateKey.prototype, "hashPassword", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PrivateKey.prototype, "hashGenerate", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PrivateKey.prototype, "updateDate", null);
PrivateKey = __decorate([
    (0, typeorm_1.Entity)()
], PrivateKey);
exports.PrivateKey = PrivateKey;
//# sourceMappingURL=thirdparty.entity.js.map