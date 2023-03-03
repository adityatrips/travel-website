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
export declare type PackageDetailModelCreateFormInputValues = {
    code?: string;
    name?: string;
    link?: string;
    countries?: string[];
    accommodation?: string[];
    exclusions?: string[];
    inclusions_list?: string[];
};
export declare type PackageDetailModelCreateFormValidationValues = {
    code?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
    countries?: ValidationFunction<string>;
    accommodation?: ValidationFunction<string>;
    exclusions?: ValidationFunction<string>;
    inclusions_list?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PackageDetailModelCreateFormOverridesProps = {
    PackageDetailModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    countries?: PrimitiveOverrideProps<TextFieldProps>;
    accommodation?: PrimitiveOverrideProps<TextFieldProps>;
    exclusions?: PrimitiveOverrideProps<TextFieldProps>;
    inclusions_list?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PackageDetailModelCreateFormProps = React.PropsWithChildren<{
    overrides?: PackageDetailModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PackageDetailModelCreateFormInputValues) => PackageDetailModelCreateFormInputValues;
    onSuccess?: (fields: PackageDetailModelCreateFormInputValues) => void;
    onError?: (fields: PackageDetailModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PackageDetailModelCreateFormInputValues) => PackageDetailModelCreateFormInputValues;
    onValidate?: PackageDetailModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function PackageDetailModelCreateForm(props: PackageDetailModelCreateFormProps): React.ReactElement;
