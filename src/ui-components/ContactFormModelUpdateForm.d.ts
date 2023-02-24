/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import {GridProps, TextFieldProps} from "@aws-amplify/ui-react";
import {EscapeHatchProps} from "@aws-amplify/ui-react/internal";
import {ContactFormModel} from "../models";

export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactFormModelUpdateFormInputValues = {
    name?: string;
    email?: string;
    phone?: string;
    package_code?: string;
    query?: string;
};
export declare type ContactFormModelUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    package_code?: ValidationFunction<string>;
    query?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactFormModelUpdateFormOverridesProps = {
    ContactFormModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    package_code?: PrimitiveOverrideProps<TextFieldProps>;
    query?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactFormModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContactFormModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contactFormModel?: ContactFormModel;
    onSubmit?: (fields: ContactFormModelUpdateFormInputValues) => ContactFormModelUpdateFormInputValues;
    onSuccess?: (fields: ContactFormModelUpdateFormInputValues) => void;
    onError?: (fields: ContactFormModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactFormModelUpdateFormInputValues) => ContactFormModelUpdateFormInputValues;
    onValidate?: ContactFormModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContactFormModelUpdateForm(props: ContactFormModelUpdateFormProps): React.ReactElement;
