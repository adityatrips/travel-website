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
export declare type ContactFormModelCreateFormInputValues = {
    name?: string;
    email?: string;
    phone?: string;
    package_code?: string;
    query?: string;
};
export declare type ContactFormModelCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    package_code?: ValidationFunction<string>;
    query?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactFormModelCreateFormOverridesProps = {
    ContactFormModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    package_code?: PrimitiveOverrideProps<TextFieldProps>;
    query?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactFormModelCreateFormProps = React.PropsWithChildren<{
    overrides?: ContactFormModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContactFormModelCreateFormInputValues) => ContactFormModelCreateFormInputValues;
    onSuccess?: (fields: ContactFormModelCreateFormInputValues) => void;
    onError?: (fields: ContactFormModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactFormModelCreateFormInputValues) => ContactFormModelCreateFormInputValues;
    onValidate?: ContactFormModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContactFormModelCreateForm(props: ContactFormModelCreateFormProps): React.ReactElement;
