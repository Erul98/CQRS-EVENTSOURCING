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
exports.DevicesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const device_dto_1 = require("../dtos/device.dto");
const devices_service_1 = require("../services/devices.service");
let DevicesController = (() => {
    let DevicesController = class DevicesController {
        constructor(devicesService) {
            this.devicesService = devicesService;
        }
        async createDevice(deviceDto) {
            return this.devicesService.createDevice(Object.assign({}, deviceDto));
        }
    };
    __decorate([
        swagger_1.ApiOperation({ title: 'Create Device' }),
        swagger_1.ApiResponse({ status: 200, description: 'Create Device.' }),
        common_1.Post(),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [device_dto_1.DeviceDto]),
        __metadata("design:returntype", Promise)
    ], DevicesController.prototype, "createDevice", null);
    DevicesController = __decorate([
        common_1.Controller('devices'),
        swagger_1.ApiUseTags('Devices'),
        __metadata("design:paramtypes", [devices_service_1.DevicesService])
    ], DevicesController);
    return DevicesController;
})();
exports.DevicesController = DevicesController;
//# sourceMappingURL=devices.controller.js.map