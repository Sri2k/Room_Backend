"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const pod_entity_1 = require("./entities/pod.entity");
const message_entity_1 = require("./entities/message.entity");
const pod_member_entity_1 = require("./entities/pod-member.entity");
const user_controller_1 = require("./user/user_controllers/user.controller");
const user_service_1 = require("./user/user_services/user.service");
const message_service_1 = require("./message/message_services/message.service");
const websocket_gateway_1 = require("./websockets/websocket/websocket.gateway");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'root',
                database: 'RoomDB',
                entities: [user_entity_1.User, pod_entity_1.Pod, message_entity_1.Message, pod_member_entity_1.PodMember],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, message_entity_1.Message]),
        ],
        controllers: [app_controller_1.AppController, user_controller_1.UserController],
        providers: [app_service_1.AppService, user_service_1.UserService, message_service_1.MessageService, websocket_gateway_1.WebsocketGateway],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map