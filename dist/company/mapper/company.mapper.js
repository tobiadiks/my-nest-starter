"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCompanyDto = void 0;
const toCompanyDto = (data) => {
    const { id, email, display_name, logo_url, website, date_created, date_updated, } = data;
    const companyDto = {
        id,
        email,
        display_name,
        logo_url,
        website,
        date_created,
        date_updated,
    };
    return companyDto;
};
exports.toCompanyDto = toCompanyDto;
//# sourceMappingURL=company.mapper.js.map