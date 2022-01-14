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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const company_entity_1 = require("../company/entity/company.entity");
const user_entity_1 = require("../user/entity/user.entity");
const typeorm_2 = require("typeorm");
const feedback_entity_1 = require("./entity/feedback.entity");
let FeedbackService = class FeedbackService {
    constructor(feedbackRepository, userRepository, companyRepository) {
        this.feedbackRepository = feedbackRepository;
        this.userRepository = userRepository;
        this.companyRepository = companyRepository;
    }
    async allByCompany(user) {
        const getCompany = await this.companyRepository.findOne({
            where: { company_id: user.company_id },
        });
        return this.feedbackRepository.find({ where: { company: getCompany } });
    }
    async create(data) {
        const getCompany = await this.companyRepository.findOne({
            where: { company_id: data.company.company_id },
        });
        const feedback = await this.feedbackRepository.create(Object.assign({ company: getCompany }, data));
        return this.feedbackRepository.save(feedback);
    }
    async delete(id) {
        return this.feedbackRepository.delete(id);
    }
    async update(id, data) {
        return this.feedbackRepository.update(id, Object.assign({ id: id }, data));
    }
};
FeedbackService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(feedback_entity_1.Feedback)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(company_entity_1.Company)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], FeedbackService);
exports.FeedbackService = FeedbackService;
//# sourceMappingURL=feedback.service.js.map