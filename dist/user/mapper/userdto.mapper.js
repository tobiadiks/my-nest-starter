"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUserDto = void 0;
const user_dto_1 = require("../dto/user.dto");
const toUserDto = (data) => {
    const { id, first_name, last_name, email, photo_url } = data;
    const userDto = { id, first_name, last_name, email, photo_url };
    return userDto;
};
exports.toUserDto = toUserDto;
//# sourceMappingURL=userdto.mapper.js.map