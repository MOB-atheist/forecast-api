import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {Covid19DataSource} from '../datasources';

export interface Covid19 {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
}

export class Covid19Provider implements Provider<Covid19> {
  constructor(
    // covid19 must match the name property in the datasource json file
    @inject('datasources.covid19')
    protected dataSource: Covid19DataSource = new Covid19DataSource(),
  ) {}

  value(): Promise<Covid19> {
    return getService(this.dataSource);
  }
}
