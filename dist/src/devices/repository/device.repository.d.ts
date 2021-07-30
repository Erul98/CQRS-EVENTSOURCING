import { DeviceDto } from '../dtos/device.dto';
import { Device } from '../models/device.model';
export declare class DeviceRepository {
    _generateId(): string;
    createDevice(deviceDto: DeviceDto): Promise<Device>;
}
