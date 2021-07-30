import { IEvent } from '@nestjs/cqrs';
import { DeviceDto } from '../dtos/device.dto';
export declare class DeviceCreatedEvent implements IEvent {
    readonly deviceDto: DeviceDto;
    constructor(deviceDto: DeviceDto);
}
