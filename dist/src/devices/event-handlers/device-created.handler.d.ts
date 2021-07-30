import { IEventHandler } from '@nestjs/cqrs';
import { DeviceCreatedEvent } from '../events/device-created.event';
export declare class DeviceCreatedHandler implements IEventHandler<DeviceCreatedEvent> {
    handle(event: DeviceCreatedEvent): void;
}
