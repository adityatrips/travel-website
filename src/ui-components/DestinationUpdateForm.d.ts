/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Destination } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DestinationUpdateFormInputValues = {
    code?: string;
    title?: string;
    countries?: string[];
    inclusions?: string[];
    accommodation?: string[];
    exclusions?: string[];
    link?: string;
};
export declare type DestinationUpdateFormValidationValues = {
    code?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    countries?: ValidationFunction<string>;
    inclusions?: ValidationFunction<string>;
    accommodation?: ValidationFunction<string>;
    exclusions?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DestinationUpdateFormOverridesProps = {
    DestinationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    countries?: PrimitiveOverrideProps<TextFieldProps>;
    inclusions?: PrimitiveOverrideProps<TextFieldProps>;
    accommodation?: PrimitiveOverrideProps<TextFieldProps>;
    exclusions?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DestinationUpdateFormProps = React.PropsWithChildren<{
    overrides?: DestinationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    destination?: Destination;
    onSubmit?: (fields: DestinationUpdateFormInputValues) => DestinationUpdateFormInputValues;
    onSuccess?: (fields: DestinationUpdateFormInputValues) => void;
    onError?: (fields: DestinationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DestinationUpdateFormInputValues) => DestinationUpdateFormInputValues;
    onValidate?: DestinationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DestinationUpdateForm(props: DestinationUpdateFormProps): React.ReactElement;
