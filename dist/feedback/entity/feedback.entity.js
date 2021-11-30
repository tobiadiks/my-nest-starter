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
exports.Feedback = void 0;
const company_entity_1 = require("../../company/entity/company.entity");
const typeorm_1 = require("typeorm");
let Feedback = class Feedback {
    updateDate() {
        this.date_updated = new Date().toLocaleString();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Feedback.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Feedback.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Feedback.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.Company, (company) => company.feedback),
    __metadata("design:type", company_entity_1.Company)
], Feedback.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'open' }),
    __metadata("design:type", String)
], Feedback.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Feedback.prototype, "processed", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'none' }),
    __metadata("design:type", String)
], Feedback.prototype, "feedback_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 2 }),
    __metadata("design:type", Number)
], Feedback.prototype, "sentiment", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Feedback.prototype, "likes", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: new Date().toLocaleString() }),
    __metadata("design:type", String)
], Feedback.prototype, "date_created", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: new Date().toLocaleString() }),
    __metadata("design:type", String)
], Feedback.prototype, "date_updated", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Feedback.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Feedback.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Feedback.prototype, "updateDate", null);
Feedback = __decorate([
    (0, typeorm_1.Entity)()
], Feedback);
exports.Feedback = Feedback;
//# sourceMappingURL=feedback.entity.js.map