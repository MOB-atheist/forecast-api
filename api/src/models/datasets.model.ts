import {Entity, model, property} from '@loopback/repository';

@model()
export class Datasets extends Entity {
  @property({
    type: 'string',
  })
  author_name?: string;

  @property({
    type: 'string',
  })
  author_url?: string;

  @property({
    type: 'string',
  })
  code_url?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  id?: string;

  @property({
    type: 'string',
  })
  license_name?: string;

  @property({
    type: 'string',
  })
  license_url?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  slug?: string;

  @property({
    type: 'string',
  })
  source_name?: string;

  @property({
    type: 'string',
  })
  source_url?: string;


  constructor(data?: Partial<Datasets>) {
    super(data);
  }
}

export interface DatasetsRelations {
  // describe navigational properties here
}

export type DatasetsWithRelations = Datasets & DatasetsRelations;
