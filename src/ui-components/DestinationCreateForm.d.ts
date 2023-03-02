/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DestinationCreateFormInputValues = {
    code?: string;
    title?: string;
    countries?: string[];
    inclusions?: string[];
    accommodation?: string[];
    exclusions?: string[];
    link?: string;
};
export declare type DestinationCreateFormValidationValues = {
    code?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    countries?: ValidationFunction<string>;
    inclusions?: ValidationFunction<string>;
    accommodation?: ValidationFunction<string>;
    exclusions?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DestinationCreateFormOverridesProps = {
    DestinationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    countries?: PrimitiveOverrideProps<TextFieldProps>;
    inclusions?: PrimitiveOverrideProps<TextFieldProps>;
    accommodation?: PrimitiveOverrideProps<TextFieldProps>;
    exclusions?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DestinationCreateFormProps = React.PropsWithChildren<{
    overrides?: DestinationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DestinationCreateFormInputValues) => DestinationCreateFormInputValues;
    onSuccess?: (fields: DestinationCreateFormInputValues) => void;
    onError?: (fields: DestinationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DestinationCreateFormInputValues) => DestinationCreateFormInputValues;
    onValidate?: DestinationCreateFormValidationValues;
} & React.CSSProperties>;
export default function DestinationCreateForm(props: DestinationCreateFormProps): React.ReactElement;
