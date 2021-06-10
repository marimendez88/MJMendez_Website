
import { SiteClient } from 'datocms-client'
import { config } from './constants'



export const datoDevCMS = new SiteClient(config.DATO_KEY,  { 
  environment: config.DATO_DEV_ENVIRONMENT 
});

export const datoProdCMS = new SiteClient(config.DATO_KEY,  { 
  environment: config.DATO_PROD_ENVIRONMENT 
});









