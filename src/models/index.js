// @ts-check
import {initSchema} from "@aws-amplify/datastore";
import {schema} from "./schema";


const {
  PackageDetailModel,
  ContactFormModel,
  AccommodationHotelDataModel,
  DayWiseDataModel,
  InclusionListModel
} = initSchema(schema);

export {
  PackageDetailModel,
  ContactFormModel,
  AccommodationHotelDataModel,
  DayWiseDataModel,
  InclusionListModel
};