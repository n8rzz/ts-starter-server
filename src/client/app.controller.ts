import EventBus from '../shared/event-bus/event-bus';

export default class AppController {
    protected eventBus: EventBus = null;

    constructor() {
        this.eventBus = new EventBus();

        return this._init()
            ._createChildren()
            ._enable();
    }

    private _init(): this {
        return this;
    }

    private _createChildren(): this {
        return this;
    }

    private _enable(): this {
        return this;
    }
}
