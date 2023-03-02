/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ContactForm } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactFormUpdateFormInputValues = {
    name?: string;
    email?: string;
    phone?: string;
    packageCode?: string;
    query?: string;
};
export declare type ContactFormUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    packageCode?: ValidationFunction<string>;
    query?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactFormUpdateFormOverridesProps = {
    ContactFormUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    packageCode?: PrimitiveOverrideProps<TextFieldProps>;
    query?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactFormUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContactFormUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contactForm?: ContactForm;
    onSubmit?: (fields: ContactFormUpdateFormInputValues) => ContactFormUpdateFormInputValues;
    onSuccess?: (fields: ContactFormUpdateFormInputValues) => void;
    onError?: (fields: ContactFormUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactFormUpdateFormInputValues) => ContactFormUpdateFormInputValues;
    onValidate?: ContactFormUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContactFormUpdateForm(props: ContactFormUpdateFormProps): React.ReactElement;
