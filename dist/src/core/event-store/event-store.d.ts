import { IEventPublisher } from '@nestjs/cqrs/dist/interfaces/events/event-publisher.interface';
import { IMessageSource } from '@nestjs/cqrs/dist/interfaces/events/message-source.interface';
import { IEvent } from '@nestjs/cqrs/dist/interfaces/events/event.interface';
import { Subject } from 'rxjs';
export declare class EventStore implements IEventPublisher, IMessageSource {
    private eventStore;
    private eventHandlers;
    private category;
    constructor(eventStore: any);
    publish<T extends IEvent>(event: T): Promise<void>;
    bridgeEventsTo<T extends IEvent>(subject: Subject<T>): Promise<void>;
    setEventHandlers(eventHandlers: any): void;
}
