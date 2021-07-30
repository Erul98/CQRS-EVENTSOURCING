"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const device_created_event_1 = require("../events/device-created.event");
class Device extends cqrs_1.AggregateRoot {
    constructor(id) {
        super();
        this.id = id;
    }
    setData(data) {
        this.data = data;
    }
    create() {
        this.apply(new device_created_event_1.DeviceCreatedEvent(this.data));
    }
}
exports.Device = Device;
//# sourceMappingURL=device.model.js.map