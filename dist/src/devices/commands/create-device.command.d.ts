import { ICommand } from '@nestjs/cqrs';
import { DeviceDto } from '../dtos/device.dto';
export declare class CreateDeviceCommand implements ICommand {
    readonly device: DeviceDto;
    constructor(device: DeviceDto);
}
