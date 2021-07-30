import { EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateDeviceCommand } from '../commands/create-device.command';
import { DeviceRepository } from '../repository/device.repository';
export declare class CreateDeviceHandler implements ICommandHandler<CreateDeviceCommand> {
    private readonly repository;
    private readonly publisher;
    constructor(repository: DeviceRepository, publisher: EventPublisher);
    execute(command: CreateDeviceCommand, resolve: (value?: any) => void): Promise<void>;
}
