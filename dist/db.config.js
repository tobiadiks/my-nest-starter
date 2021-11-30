"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbConfig = void 0;
function DbConfig() {
    return {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'fpp',
        synchronize: true,
        autoLoadEntities: true,
    };
}
exports.DbConfig = DbConfig;
//# sourceMappingURL=db.config.js.map