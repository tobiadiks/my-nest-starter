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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const password_compare_1 = require("../helpers/password.compare");
const userdto_mapper_1 = require("./mapper/userdto.mapper");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entity/user.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async CreateUser(data) {
        const userExist = await this.userRepository.findOne({
            where: { email: data.email },
        });
        if (userExist) {
            throw new common_1.HttpException('User already exist', common_1.HttpStatus.BAD_REQUEST);
        }
        const user = await this.userRepository.create(data);
        await this.userRepository.save(user);
        return (0, userdto_mapper_1.toUserDto)(user);
    }
    async LoginUser(data) {
        const checkUser = await this.userRepository.findOne({
            where: {
                email: data.email,
            },
        });
        if (!checkUser) {
            throw new common_1.HttpException('User does not exist', common_1.HttpStatus.BAD_REQUEST);
        }
        const isEqualPassword = await (0, password_compare_1.comparePassword)(data.password, checkUser.password);
        if (!isEqualPassword) {
            throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
        }
        return (0, userdto_mapper_1.toUserDto)(checkUser);
    }
    async findByPayload({ email }) {
        return await this.userRepository.findOne({
            where: { email },
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map