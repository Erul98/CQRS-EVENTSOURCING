import { CommandBus } from '@nestjs/cqrs';
import { DeviceDto } from '../dtos/device.dto';
export declare class DevicesService {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    createDevice(device: DeviceDto): Promise<any>;
}
