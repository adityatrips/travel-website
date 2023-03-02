import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerDayWise = {
  readonly day?: string | null;
  readonly desc?: string | null;
}

type LazyDayWise = {
  readonly day?: string | null;
  readonly desc?: string | null;
}

export declare type DayWise = LazyLoading extends LazyLoadingDisabled ? EagerDayWise : LazyDayWise

export declare const DayWise: (new (init: ModelInit<DayWise>) => DayWise)

type EagerInclusions = {
  readonly France?: string | null;
  readonly Switzerland?: string | null;
  readonly Italy?: string | null;
  readonly VaticanCity?: string | null;
  readonly UnitedKingdom?: string | null;
  readonly Belgium?: string | null;
  readonly Netherlands?: string | null;
  readonly Germany?: string | null;
  readonly Liechtenstein?: string | null;
  readonly Greece?: string | null;
  readonly Amsterdam?: string | null;
  readonly Lucerene?: string | null;
  readonly Zurich?: string | null;
}

type LazyInclusions = {
  readonly France?: string | null;
  readonly Switzerland?: string | null;
  readonly Italy?: string | null;
  readonly VaticanCity?: string | null;
  readonly UnitedKingdom?: string | null;
  readonly Belgium?: string | null;
  readonly Netherlands?: string | null;
  readonly Germany?: string | null;
  readonly Liechtenstein?: string | null;
  readonly Greece?: string | null;
  readonly Amsterdam?: string | null;
  readonly Lucerene?: string | null;
  readonly Zurich?: string | null;
}

export declare type Inclusions = LazyLoading extends LazyLoadingDisabled ? EagerInclusions : LazyInclusions

export declare const Inclusions: (new (init: ModelInit<Inclusions>) => Inclusions)

type EagerHotels = {
  readonly hotelName?: string | null;
  readonly starRating?: string | null;
}

type LazyHotels = {
  readonly hotelName?: string | null;
  readonly starRating?: string | null;
}

export declare type Hotels = LazyLoading extends LazyLoadingDisabled ? EagerHotels : LazyHotels

export declare const Hotels: (new (init: ModelInit<Hotels>) => Hotels)

type EagerDestination = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Destination, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code?: string | null;
  readonly title?: string | null;
  readonly countries?: (string | null)[] | null;
  readonly inclusions?: (string | null)[] | null;
  readonly inclusionsPerCountry?: (Inclusions | null)[] | null;
  readonly accommodation?: (string | null)[] | null;
  readonly exclusions?: (string | null)[] | null;
  readonly accommodationsPerHotel?: (Hotels | null)[] | null;
  readonly link?: string | null;
  readonly dayWise?: (DayWise | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDestination = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Destination, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code?: string | null;
  readonly title?: string | null;
  readonly countries?: (string | null)[] | null;
  readonly inclusions?: (string | null)[] | null;
  readonly inclusionsPerCountry?: (Inclusions | null)[] | null;
  readonly accommodation?: (string | null)[] | null;
  readonly exclusions?: (string | null)[] | null;
  readonly accommodationsPerHotel?: (Hotels | null)[] | null;
  readonly link?: string | null;
  readonly dayWise?: (DayWise | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Destination = LazyLoading extends LazyLoadingDisabled ? EagerDestination : LazyDestination

export declare const Destination: (new (init: ModelInit<Destination>) => Destination) & {
  copyOf(source: Destination, mutator: (draft: MutableModel<Destination>) => MutableModel<Destination> | void): Destination;
}

type EagerContactForm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContactForm, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly packageCode?: string | null;
  readonly query?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContactForm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContactForm, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly packageCode?: string | null;
  readonly query?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ContactForm = LazyLoading extends LazyLoadingDisabled ? EagerContactForm : LazyContactForm

export declare const ContactForm: (new (init: ModelInit<ContactForm>) => ContactForm) & {
  copyOf(source: ContactForm, mutator: (draft: MutableModel<ContactForm>) => MutableModel<ContactForm> | void): ContactForm;
}