"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = void 0;
const bcrypt_1 = require("bcrypt");
async function comparePassword(plainString, hashString) {
    const match = await (0, bcrypt_1.compare)(plainString, hashString);
    return match;
}
exports.comparePassword = comparePassword;
//# sourceMappingURL=password.compare.js.map