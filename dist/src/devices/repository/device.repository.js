"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceRepository = void 0;
const common_1 = require("@nestjs/common");
const device_model_1 = require("../models/device.model");
let DeviceRepository = (() => {
    let DeviceRepository = class DeviceRepository {
        _generateId() {
            return `${Math.floor(Math.random() * (999 - 100 + 1) + 100)}`;
        }
        async createDevice(deviceDto) {
            const device = new device_model_1.Device(this._generateId());
            device.setData(deviceDto);
            device.create();
            return device;
        }
    };
    DeviceRepository = __decorate([
        common_1.Injectable()
    ], DeviceRepository);
    return DeviceRepository;
})();
exports.DeviceRepository = DeviceRepository;
//# sourceMappingURL=device.repository.js.map