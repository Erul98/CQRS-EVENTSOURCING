"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventStoreProviders = void 0;
const event_store_class_1 = require("./event-store.class");
exports.eventStoreProviders = [
    {
        provide: 'EVENT_STORE_PROVIDER',
        useFactory: (eventStoreConfig) => {
            if (eventStoreConfig === 'EVENT_STORE_CONFIG_USE_ENV') {
                return new event_store_class_1.EventStore();
            }
        },
        inject: ['EVENT_STORE_CONFIG'],
    },
];
//# sourceMappingURL=event-store.provider.js.map