import { DeviceDto } from '../dtos/device.dto';
import { DevicesService } from '../services/devices.service';
export declare class DevicesController {
    private readonly devicesService;
    constructor(devicesService: DevicesService);
    createDevice(deviceDto: DeviceDto): Promise<DeviceDto>;
}
