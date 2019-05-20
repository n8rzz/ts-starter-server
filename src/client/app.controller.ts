export default class AppController {
    constructor() {
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
