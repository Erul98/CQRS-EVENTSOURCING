import { AggregateRoot } from '@nestjs/cqrs';
export declare class Device extends AggregateRoot {
    private readonly id?;
    [x: string]: any;
    constructor(id?: string);
    setData(data: any): void;
    create(): void;
}
