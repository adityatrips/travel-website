/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {Button, Flex, Grid, TextField} from "@aws-amplify/ui-react";
import {getOverrideProps} from "@aws-amplify/ui-react/internal";
import {ContactFormModel} from "../models";
import {fetchByPath, validateField} from "./utils";
import {DataStore} from "aws-amplify";

export default function ContactFormModelUpdateForm(props) {
  const {
    id: idProp,
    contactFormModel,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    package_code: "",
    query: ""
  };
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [package_code, setPackage_code] = React.useState(
      initialValues.package_code
  );
  const [query, setQuery] = React.useState(initialValues.query);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = contactFormModelRecord
        ? {...initialValues, ...contactFormModelRecord}
        : initialValues;
    setName(cleanValues.name);
    setEmail(cleanValues.email);
    setPhone(cleanValues.phone);
    setPackage_code(cleanValues.package_code);
    setQuery(cleanValues.query);
    setErrors({});
  };
  const [contactFormModelRecord, setContactFormModelRecord] =
      React.useState(contactFormModel);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
          ? await DataStore.query(ContactFormModel, idProp)
          : contactFormModel;
      setContactFormModelRecord(record);
    };
    queryData();
  }, [idProp, contactFormModel]);
  React.useEffect(resetStateValues, [contactFormModelRecord]);
  const validations = {
    name: [],
    email: [],
    phone: [],
    package_code: [],
    query: []
  };
  const runValidationTasks = async (
      fieldName,
      currentValue,
      getDisplayValue
  ) => {
    const value = getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({...errors, [fieldName]: validationResponse}));
    return validationResponse;
  };
  return (
      <Grid
          as="form"
          rowGap="15px"
          columnGap="15px"
          padding="20px"
          onSubmit={async (event) => {
            event.preventDefault();
            let modelFields = {
              name,
              email,
              phone,
              package_code,
              query
            };
            const validationResponses = await Promise.all(
                Object.keys(validations).reduce((promises, fieldName) => {
                  if (Array.isArray(modelFields[fieldName])) {
                    promises.push(
                        ...modelFields[fieldName].map((item) =>
                            runValidationTasks(fieldName, item)
                        )
                    );
                    return promises;
                  }
                  promises.push(
                      runValidationTasks(fieldName, modelFields[fieldName])
                  );
                  return promises;
                }, [])
            );
            if (validationResponses.some((r) => r.hasError)) {
              return;
            }
            if (onSubmit) {
              modelFields = onSubmit(modelFields);
            }
            try {
              Object.entries(modelFields).forEach(([key, value]) => {
                if (typeof value === "string" && value.trim() === "") {
                  modelFields[key] = undefined;
                }
              });
              await DataStore.save(
                  ContactFormModel.copyOf(contactFormModelRecord, (updated) => {
                    Object.assign(updated, modelFields);
                  })
              );
              if (onSuccess) {
                onSuccess(modelFields);
              }
            } catch (err) {
              if (onError) {
                onError(modelFields, err.message);
              }
            }
          }}
          {...getOverrideProps(overrides, "ContactFormModelUpdateForm")}
          {...rest}
      >
        <TextField
            label="Name"
            isRequired={false}
            isReadOnly={false}
            value={name}
            onChange={(e) => {
              let {value} = e.target;
              if (onChange) {
                const modelFields = {
                  name: value,
                  email,
                  phone,
                  package_code,
                  query
                };
                const result = onChange(modelFields);
                value = result?.name ?? value;
              }
              if (errors.name?.hasError) {
                runValidationTasks("name", value);
              }
              setName(value);
            }}
            onBlur={() => runValidationTasks("name", name)}
            errorMessage={errors.name?.errorMessage}
            hasError={errors.name?.hasError}
            {...getOverrideProps(overrides, "name")}
        ></TextField>
        <TextField
            label="Email"
            isRequired={false}
            isReadOnly={false}
            value={email}
            onChange={(e) => {
              let {value} = e.target;
              if (onChange) {
                const modelFields = {
                  name,
                  email: value,
                  phone,
                  package_code,
                  query
                };
                const result = onChange(modelFields);
                value = result?.email ?? value;
              }
              if (errors.email?.hasError) {
                runValidationTasks("email", value);
              }
              setEmail(value);
            }}
            onBlur={() => runValidationTasks("email", email)}
            errorMessage={errors.email?.errorMessage}
            hasError={errors.email?.hasError}
            {...getOverrideProps(overrides, "email")}
        ></TextField>
        <TextField
            label="Phone"
            isRequired={false}
            isReadOnly={false}
            value={phone}
            onChange={(e) => {
              let {value} = e.target;
              if (onChange) {
                const modelFields = {
                  name,
                  email,
                  phone: value,
                  package_code,
                  query
                };
                const result = onChange(modelFields);
                value = result?.phone ?? value;
              }
              if (errors.phone?.hasError) {
                runValidationTasks("phone", value);
              }
              setPhone(value);
            }}
            onBlur={() => runValidationTasks("phone", phone)}
            errorMessage={errors.phone?.errorMessage}
            hasError={errors.phone?.hasError}
            {...getOverrideProps(overrides, "phone")}
        ></TextField>
        <TextField
            label="Package code"
            isRequired={false}
            isReadOnly={false}
            value={package_code}
            onChange={(e) => {
              let {value} = e.target;
              if (onChange) {
                const modelFields = {
                  name,
                  email,
                  phone,
                  package_code: value,
                  query
                };
                const result = onChange(modelFields);
                value = result?.package_code ?? value;
              }
              if (errors.package_code?.hasError) {
                runValidationTasks("package_code", value);
              }
              setPackage_code(value);
            }}
            onBlur={() => runValidationTasks("package_code", package_code)}
            errorMessage={errors.package_code?.errorMessage}
            hasError={errors.package_code?.hasError}
            {...getOverrideProps(overrides, "package_code")}
        ></TextField>
        <TextField
            label="Query"
            isRequired={false}
            isReadOnly={false}
            value={query}
            onChange={(e) => {
              let {value} = e.target;
              if (onChange) {
                const modelFields = {
                  name,
                  email,
                  phone,
                  package_code,
                  query: value
                };
                const result = onChange(modelFields);
                value = result?.query ?? value;
              }
              if (errors.query?.hasError) {
                runValidationTasks("query", value);
              }
              setQuery(value);
            }}
            onBlur={() => runValidationTasks("query", query)}
            errorMessage={errors.query?.errorMessage}
            hasError={errors.query?.hasError}
            {...getOverrideProps(overrides, "query")}
        ></TextField>
        <Flex
            justifyContent="space-between"
            {...getOverrideProps(overrides, "CTAFlex")}
        >
          <Button
              children="Reset"
              type="reset"
              onClick={(event) => {
                event.preventDefault();
                resetStateValues();
              }}
              isDisabled={!(idProp || contactFormModel)}
              {...getOverrideProps(overrides, "ResetButton")}
          ></Button>
          <Flex
              gap="15px"
              {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
          >
            <Button
                children="Submit"
                type="submit"
                variation="primary"
                isDisabled={
                    !(idProp || contactFormModel) ||
                    Object.values(errors).some((e) => e?.hasError)
                }
                {...getOverrideProps(overrides, "SubmitButton")}
            ></Button>
          </Flex>
        </Flex>
      </Grid>
  );
}
