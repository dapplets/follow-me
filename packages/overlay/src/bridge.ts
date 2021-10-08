import AbstractBridge from '@dapplets/dapplet-overlay-bridge';

class Bridge extends AbstractBridge {
    _subId = 0;

    public async call(method: string, args: any, successEvent: string, errorEvent: string): Promise<any> {
        return new Promise((res, rej) => {
            this.publish(this._subId.toString(), {
                type: method,
                message: args
            });
            this.subscribe(successEvent, (result: any) => {
                this.unsubscribe(successEvent);
                this.unsubscribe(errorEvent);
                res(result);
            });
            this.subscribe(errorEvent, (error: any) => {
                this.unsubscribe(successEvent);
                this.unsubscribe(errorEvent);
                rej(error);
            });
        });
    }
}

const bridge = new Bridge();

export { bridge };