// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PackageDetailModel, ContactFormModel, InclusionInCountry, AccommodationHotelDataModel, DayWiseDataModel } = initSchema(schema);

export {
  PackageDetailModel,
  ContactFormModel,
  InclusionInCountry,
  AccommodationHotelDataModel,
  DayWiseDataModel
};