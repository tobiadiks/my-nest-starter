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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const jwt_payload_1 = require("../helpers/jwt.payload");
const jwt_status_1 = require("../helpers/jwt.status");
const userdto_mapper_1 = require("../user/mapper/userdto.mapper");
const user_dto_1 = require("../user/dto/user.dto");
const user_service_1 = require("../user/user.service");
const company_service_1 = require("../company/company.service");
const company_dto_1 = require("../company/dto/company.dto");
const company_mapper_1 = require("../company/mapper/company.mapper");
let AuthService = class AuthService {
    constructor(userService, companyService, jwtService) {
        this.userService = userService;
        this.companyService = companyService;
        this.jwtService = jwtService;
    }
    async validateUser(payload) {
        const user = await this.userService.findByPayload(payload);
        if (!user) {
            throw new common_1.HttpException('Invalid token', common_1.HttpStatus.UNAUTHORIZED);
        }
        return (0, userdto_mapper_1.toUserDto)(user);
    }
    async registerUser(data) {
        let status = {
            success: true,
            message: 'user registered',
        };
        try {
            await this.userService.CreateUser(data);
        }
        catch (err) {
            status = { success: false, message: err };
        }
        return status;
    }
    async loginUser(data) {
        const user = await this.userService.LoginUser(data);
        let status = {
            success: true,
            message: 'user logged in',
        };
        try {
            user;
        }
        catch (err) {
            status = { success: false, message: err };
        }
        const token = await this._createUserToken(user);
        return Object.assign(Object.assign({ user: (0, userdto_mapper_1.toUserDto)(user) }, status), token);
    }
    async validateCompany(payload) {
        const company = await this.companyService.findByPayload(payload);
        if (!company) {
            throw new common_1.HttpException('Invalid token', common_1.HttpStatus.UNAUTHORIZED);
        }
        return (0, company_mapper_1.toCompanyDto)(company);
    }
    async registerCompany(data) {
        let status = {
            success: true,
            message: 'company registered',
        };
        try {
            await this.companyService.CreateCompany(data);
        }
        catch (err) {
            status = { success: false, message: err };
        }
        return status;
    }
    async loginCompany(data) {
        const company = await this.companyService.LoginCompany(data);
        let status = {
            success: true,
            message: 'company logged in',
        };
        try {
            company;
        }
        catch (err) {
            status = { success: false, message: err };
        }
        const accessToken = await this._createCompanyToken(company);
        return Object.assign(Object.assign({ company: (0, company_mapper_1.toCompanyDto)(company) }, status), accessToken);
    }
    _createUserToken({ email }) {
        const user = { email };
        const accessToken = this.jwtService.sign(user);
        return {
            expiresIn: '2h',
            accessToken,
        };
    }
    _createCompanyToken({ email }) {
        const user = { email };
        const accessToken = this.jwtService.sign(user);
        return {
            expiresIn: '2h',
            accessToken,
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        company_service_1.CompanyService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map