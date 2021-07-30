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
exports.CreateDeviceHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const create_device_command_1 = require("../commands/create-device.command");
const device_repository_1 = require("../repository/device.repository");
let CreateDeviceHandler = (() => {
    let CreateDeviceHandler = class CreateDeviceHandler {
        constructor(repository, publisher) {
            this.repository = repository;
            this.publisher = publisher;
        }
        async execute(command, resolve) {
            const device = this.publisher.mergeObjectContext(await this.repository.createDevice(command.device));
            device.commit();
            resolve();
        }
    };
    CreateDeviceHandler = __decorate([
        cqrs_1.CommandHandler(create_device_command_1.CreateDeviceCommand),
        __metadata("design:paramtypes", [device_repository_1.DeviceRepository,
            cqrs_1.EventPublisher])
    ], CreateDeviceHandler);
    return CreateDeviceHandler;
})();
exports.CreateDeviceHandler = CreateDeviceHandler;
//# sourceMappingURL=create-device.handler.js.map