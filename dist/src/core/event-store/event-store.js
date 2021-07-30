"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventStore = void 0;
const common_1 = require("@nestjs/common");
const xml2js = require("xml2js");
const http = require("http");
const config_1 = require("../../../config");
const eventStoreHostUrl = config_1.configObj.EVENT_STORE_SETTINGS.protocol +
    `://${config_1.configObj.EVENT_STORE_SETTINGS.hostname}:${config_1.configObj.EVENT_STORE_SETTINGS.httpPort}/streams/`;
let EventStore = (() => {
    let EventStore = class EventStore {
        constructor(eventStore) {
            this.category = 'devices';
            this.eventStore = eventStore;
            this.eventStore.connect({
                hostname: config_1.configObj.EVENT_STORE_SETTINGS.hostname,
                port: config_1.configObj.EVENT_STORE_SETTINGS.tcpPort,
                credentials: config_1.configObj.EVENT_STORE_SETTINGS.credentials,
                poolOptions: config_1.configObj.EVENT_STORE_SETTINGS.poolOptions,
            });
        }
        async publish(event) {
            const message = JSON.parse(JSON.stringify(event));
            const deviceId = message.deviceId || message.deviceDto.deviceId;
            const streamName = `${this.category}-${deviceId}`;
            const type = event.constructor.name;
            try {
                await this.eventStore.client.writeEvent(streamName, type, event);
            }
            catch (err) {
                console.trace(err);
            }
        }
        async bridgeEventsTo(subject) {
            const streamName = `$ce-${this.category}`;
            const onEvent = async (event) => {
                const eventUrl = eventStoreHostUrl + `${event.metadata.$o}/${event.data.split('@')[0]}`;
                http.get(eventUrl, res => {
                    res.setEncoding('utf8');
                    let rawData = '';
                    res.on('data', chunk => {
                        rawData += chunk;
                    });
                    res.on('end', () => {
                        xml2js.parseString(rawData, (err, result) => {
                            if (err) {
                                console.trace(err);
                                return;
                            }
                            const content = result['atom:entry']['atom:content'][0];
                            const eventType = content.eventType[0];
                            const data = content.data[0];
                            event = this.eventHandlers[eventType](...Object.values(data));
                            subject.next(event);
                        });
                    });
                });
            };
            const onDropped = (subscription, reason, error) => {
                console.trace(subscription, reason, error);
            };
            try {
                await this.eventStore.client.subscribeToStream(streamName, onEvent, onDropped, false);
            }
            catch (err) {
                console.trace(err);
            }
        }
        setEventHandlers(eventHandlers) {
            this.eventHandlers = eventHandlers;
        }
    };
    EventStore = __decorate([
        common_1.Injectable(),
        __param(0, common_1.Inject('EVENT_STORE_PROVIDER')),
        __metadata("design:paramtypes", [Object])
    ], EventStore);
    return EventStore;
})();
exports.EventStore = EventStore;
//# sourceMappingURL=event-store.js.map