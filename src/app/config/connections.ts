
import { SiteClient } from 'datocms-client'
import { config } from './constants'


export const datoCMS = new SiteClient(config.DATO_KEY);

