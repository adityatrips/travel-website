/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import {GridProps, TextFieldProps} from "@aws-amplify/ui-react";
import {EscapeHatchProps} from "@aws-amplify/ui-react/internal";

export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PackageDetailModelCreateFormInputValues = {
    code?: string;
    name?: string;
    countries?: string[];
    accommodation?: string[];
    inclusions?: string;
    exclusions?: string;
    route?: string;
};
export declare type PackageDetailModelCreateFormValidationValues = {
    code?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    countries?: ValidationFunction<string>;
    accommodation?: ValidationFunction<string>;
    inclusions?: ValidationFunction<string>;
    exclusions?: ValidationFunction<string>;
    route?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PackageDetailModelCreateFormOverridesProps = {
    PackageDetailModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    countries?: PrimitiveOverrideProps<TextFieldProps>;
    accommodation?: PrimitiveOverrideProps<TextFieldProps>;
    inclusions?: PrimitiveOverrideProps<TextFieldProps>;
    exclusions?: PrimitiveOverrideProps<TextFieldProps>;
    route?: PrimitiveOverrideProps<TextFieldProps>;
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
