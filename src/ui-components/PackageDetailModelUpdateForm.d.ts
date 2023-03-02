/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import {GridProps, TextFieldProps} from "@aws-amplify/ui-react";
import {EscapeHatchProps} from "@aws-amplify/ui-react/internal";
import {PackageDetailModel} from "../models";

export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PackageDetailModelUpdateFormInputValues = {
    code?: string;
    name?: string;
    countries?: string[];
    accommodation?: string[];
    inclusions?: string;
    exclusions?: string;
    route?: string;
};
export declare type PackageDetailModelUpdateFormValidationValues = {
    code?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    countries?: ValidationFunction<string>;
    accommodation?: ValidationFunction<string>;
    inclusions?: ValidationFunction<string>;
    exclusions?: ValidationFunction<string>;
    route?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PackageDetailModelUpdateFormOverridesProps = {
    PackageDetailModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    countries?: PrimitiveOverrideProps<TextFieldProps>;
    accommodation?: PrimitiveOverrideProps<TextFieldProps>;
    inclusions?: PrimitiveOverrideProps<TextFieldProps>;
    exclusions?: PrimitiveOverrideProps<TextFieldProps>;
    route?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PackageDetailModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: PackageDetailModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    packageDetailModel?: PackageDetailModel;
    onSubmit?: (fields: PackageDetailModelUpdateFormInputValues) => PackageDetailModelUpdateFormInputValues;
    onSuccess?: (fields: PackageDetailModelUpdateFormInputValues) => void;
    onError?: (fields: PackageDetailModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PackageDetailModelUpdateFormInputValues) => PackageDetailModelUpdateFormInputValues;
    onValidate?: PackageDetailModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PackageDetailModelUpdateForm(props: PackageDetailModelUpdateFormProps): React.ReactElement;
