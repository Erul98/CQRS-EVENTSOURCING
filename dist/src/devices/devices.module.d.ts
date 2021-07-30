import { CommandBus, EventBus } from '@nestjs/cqrs';
import { OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { EventStore } from '../core/event-store/event-store';
export declare class DevicesModule implements OnModuleInit {
    private readonly moduleRef;
    private readonly command$;
    private readonly event$;
    private readonly eventStore;
    constructor(moduleRef: ModuleRef, command$: CommandBus, event$: EventBus, eventStore: EventStore);
    onModuleInit(): void;
}
