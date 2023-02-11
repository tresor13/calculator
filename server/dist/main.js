"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const start = async () => {
    try {
        const PORT = process.env.PORT || 5000;
        const app = core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
        (await app).listen(PORT, () => {
            console.log(`server started on port ${PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
start();
//# sourceMappingURL=main.js.map