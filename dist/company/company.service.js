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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const password_compare_1 = require("../helpers/password.compare");
const typeorm_2 = require("typeorm");
const company_entity_1 = require("./entity/company.entity");
const company_mapper_1 = require("./mapper/company.mapper");
let CompanyService = class CompanyService {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async CreateCompany(data) {
        const companyExist = await this.companyRepository.findOne({
            where: { email: data.email },
        });
        if (companyExist) {
            throw new common_1.HttpException('Company with email exist', common_1.HttpStatus.BAD_REQUEST);
        }
        const company = await this.companyRepository.create(data);
        return await this.companyRepository.save(company);
    }
    async LoginCompany(data) {
        const companyExist = await this.companyRepository.findOne({
            where: { email: data.email },
        });
        if (!companyExist) {
            throw new common_1.HttpException('Company does not exist', common_1.HttpStatus.BAD_REQUEST);
        }
        const isEqualPassword = await (0, password_compare_1.comparePassword)(data.password, companyExist.password);
        if (!isEqualPassword) {
            throw new common_1.HttpException('Wrong credentials', common_1.HttpStatus.UNAUTHORIZED);
        }
        return (0, company_mapper_1.toCompanyDto)(companyExist);
    }
    async findByPayload({ email }) {
        return await this.companyRepository.findOne({
            where: { email },
        });
    }
};
CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(company_entity_1.Company)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map