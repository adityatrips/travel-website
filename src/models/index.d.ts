import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerInclusionInCountry = {
  readonly name?: string | null;
  readonly included?: (string | null)[] | null;
}

type LazyInclusionInCountry = {
  readonly name?: string | null;
  readonly included?: (string | null)[] | null;
}

export declare type InclusionInCountry = LazyLoading extends LazyLoadingDisabled ? EagerInclusionInCountry : LazyInclusionInCountry

export declare const InclusionInCountry: (new (init: ModelInit<InclusionInCountry>) => InclusionInCountry)

type EagerAccommodationHotelDataModel = {
  readonly standard?: string | null;
  readonly name?: string | null;
}

type LazyAccommodationHotelDataModel = {
  readonly standard?: string | null;
  readonly name?: string | null;
}

export declare type AccommodationHotelDataModel = LazyLoading extends LazyLoadingDisabled ? EagerAccommodationHotelDataModel : LazyAccommodationHotelDataModel

export declare const AccommodationHotelDataModel: (new (init: ModelInit<AccommodationHotelDataModel>) => AccommodationHotelDataModel)

type EagerDayWiseDataModel = {
  readonly day?: string | null;
  readonly desc?: string | null;
}

type LazyDayWiseDataModel = {
  readonly day?: string | null;
  readonly desc?: string | null;
}

export declare type DayWiseDataModel = LazyLoading extends LazyLoadingDisabled ? EagerDayWiseDataModel : LazyDayWiseDataModel

export declare const DayWiseDataModel: (new (init: ModelInit<DayWiseDataModel>) => DayWiseDataModel)

type EagerPackageDetailModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PackageDetailModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code?: string | null;
  readonly name?: string | null;
  readonly link?: string | null;
  readonly countries?: (string | null)[] | null;
  readonly day_wise?: (DayWiseDataModel | null)[] | null;
  readonly accommodation_hotel_wise?: (AccommodationHotelDataModel | null)[] | null;
  readonly accommodation?: (string | null)[] | null;
  readonly exclusions?: (string | null)[] | null;
  readonly inclusions_country_wise?: (InclusionInCountry | null)[] | null;
  readonly inclusions_list?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPackageDetailModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PackageDetailModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code?: string | null;
  readonly name?: string | null;
  readonly link?: string | null;
  readonly countries?: (string | null)[] | null;
  readonly day_wise?: (DayWiseDataModel | null)[] | null;
  readonly accommodation_hotel_wise?: (AccommodationHotelDataModel | null)[] | null;
  readonly accommodation?: (string | null)[] | null;
  readonly exclusions?: (string | null)[] | null;
  readonly inclusions_country_wise?: (InclusionInCountry | null)[] | null;
  readonly inclusions_list?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PackageDetailModel = LazyLoading extends LazyLoadingDisabled ? EagerPackageDetailModel : LazyPackageDetailModel

export declare const PackageDetailModel: (new (init: ModelInit<PackageDetailModel>) => PackageDetailModel) & {
  copyOf(source: PackageDetailModel, mutator: (draft: MutableModel<PackageDetailModel>) => MutableModel<PackageDetailModel> | void): PackageDetailModel;
}

type EagerContactFormModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContactFormModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly package_code?: string | null;
  readonly query?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContactFormModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContactFormModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly package_code?: string | null;
  readonly query?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ContactFormModel = LazyLoading extends LazyLoadingDisabled ? EagerContactFormModel : LazyContactFormModel

export declare const ContactFormModel: (new (init: ModelInit<ContactFormModel>) => ContactFormModel) & {
  copyOf(source: ContactFormModel, mutator: (draft: MutableModel<ContactFormModel>) => MutableModel<ContactFormModel> | void): ContactFormModel;
}