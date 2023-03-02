// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Destination, ContactForm, DayWise, Inclusions, Hotels } = initSchema(schema);

export {
  Destination,
  ContactForm,
  DayWise,
  Inclusions,
  Hotels
};