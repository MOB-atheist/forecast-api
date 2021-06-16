import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'covid19',
  connector: 'rest',
  baseURL: 'https://api.brasil.io/v1',
  crud: true,
  operations: [
    {
      template: {
        method: 'GET',
        url: 'https://api.brasil.io/v1/datasets',
        headers: {
          accepts: 'application/json',
          'content-type': 'application/json',
        }
      },
    },
  ],
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Covid19DataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'covid19';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.covid19', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
