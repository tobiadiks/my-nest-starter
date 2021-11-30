"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const company_module_1 = require("../company/company.module");
const company_entity_1 = require("../company/entity/company.entity");
const user_entity_1 = require("../user/entity/user.entity");
const user_module_1 = require("../user/user.module");
const feedback_entity_1 = require("./entity/feedback.entity");
const feedback_controller_1 = require("./feedback.controller");
const feedback_service_1 = require("./feedback.service");
let FeedbackModule = class FeedbackModule {
};
FeedbackModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([feedback_entity_1.Feedback, user_entity_1.User, company_entity_1.Company]),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            company_module_1.CompanyModule,
        ],
        controllers: [feedback_controller_1.FeedbackController],
        providers: [feedback_service_1.FeedbackService],
        exports: [typeorm_1.TypeOrmModule.forFeature([feedback_entity_1.Feedback])],
    })
], FeedbackModule);
exports.FeedbackModule = FeedbackModule;
//# sourceMappingURL=feedback.module.js.map