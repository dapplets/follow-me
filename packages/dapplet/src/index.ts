import { } from '@dapplets/dapplet-extension';

@Injectable
export default class SwarmIndexerDapplet {

  @Inject('twitter-adapter.dapplet-base.eth')
  public adapter: any;

  async activate() {

    const serverUrl = await Core.storage.get('serverUrl');
    if (!serverUrl) throw new Error("Server URL is required.");

    const { button } = this.adapter.exports;

    this.adapter.attachConfig({
      POST: [
        button({
          DEFAULT: {
            label: 'Test',
            exec: () => alert(serverUrl)
          }
        })
      ]
    });

  }
}
