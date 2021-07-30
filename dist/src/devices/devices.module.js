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
exports.DevicesModule = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const event_store_module_1 = require("../core/event-store/event-store.module");
const event_store_1 = require("../core/event-store/event-store");
const device_created_event_1 = require("./events/device-created.event");
const devices_controller_1 = require("./controllers/devices.controller");
const devices_service_1 = require("./services/devices.service");
const create_device_handler_1 = require("./command-handlers/create-device.handler");
const device_created_handler_1 = require("./event-handlers/device-created.handler");
const device_repository_1 = require("./repository/device.repository");
let DevicesModule = (() => {
    let DevicesModule = class DevicesModule {
        constructor(moduleRef, command$, event$, eventStore) {
            this.moduleRef = moduleRef;
            this.command$ = command$;
            this.event$ = event$;
            this.eventStore = eventStore;
        }
        onModuleInit() {
            this.command$.setModuleRef(this.moduleRef);
            this.event$.setModuleRef(this.moduleRef);
            this.eventStore.setEventHandlers({
                UserCreatedEvent: data => new device_created_event_1.DeviceCreatedEvent(data),
            });
            this.eventStore.bridgeEventsTo(this.event$.subject$);
            this.event$.publisher = this.eventStore;
            this.event$.register([device_created_handler_1.DeviceCreatedHandler]);
            this.command$.register([create_device_handler_1.CreateDeviceHandler]);
        }
    };
    DevicesModule = __decorate([
        common_1.Module({
            imports: [cqrs_1.CQRSModule, event_store_module_1.EventStoreModule.forFeature()],
            controllers: [devices_controller_1.DevicesController],
            providers: [
                devices_service_1.DevicesService,
                create_device_handler_1.CreateDeviceHandler,
                device_created_handler_1.DeviceCreatedHandler,
                device_repository_1.DeviceRepository,
            ],
        }),
        __metadata("design:paramtypes", [core_1.ModuleRef,
            cqrs_1.CommandBus,
            cqrs_1.EventBus,
            event_store_1.EventStore])
    ], DevicesModule);
    return DevicesModule;
})();
exports.DevicesModule = DevicesModule;
//# sourceMappingURL=devices.module.js.map