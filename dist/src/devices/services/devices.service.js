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
exports.DevicesService = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const create_device_command_1 = require("../commands/create-device.command");
let DevicesService = (() => {
    let DevicesService = class DevicesService {
        constructor(commandBus) {
            this.commandBus = commandBus;
        }
        async createDevice(device) {
            return await this.commandBus.execute(new create_device_command_1.CreateDeviceCommand(device));
        }
    };
    DevicesService = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [cqrs_1.CommandBus])
    ], DevicesService);
    return DevicesService;
})();
exports.DevicesService = DevicesService;
//# sourceMappingURL=devices.service.js.map