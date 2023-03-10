/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme
} from "@aws-amplify/ui-react";
import {getOverrideProps} from "@aws-amplify/ui-react/internal";
import {PackageDetailModel} from "../models";
import {fetchByPath, validateField} from "./utils";
import {DataStore} from "aws-amplify";

function ArrayField({
                      items = [],
                      onChange,
                      label,
                      inputFieldRef,
                      children,
                      hasError,
                      setFieldValue,
                      currentFieldValue,
                      defaultFieldValue,
                      lengthLimit,
                      getBadgeText
                    }) {
  const labelElement = <Text>{label}</Text>;
  const {tokens} = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
        currentFieldValue !== undefined &&
        currentFieldValue !== null &&
        currentFieldValue !== "" &&
        !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
      <React.Fragment>
        {!!items?.length && (
            <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
              {items.map((value, index) => {
                return (
                    <Badge
                        key={index}
                        style={{
                          cursor: "pointer",
                          alignItems: "center",
                          marginRight: 3,
                          marginTop: 3,
                          backgroundColor:
                              index === selectedBadgeIndex ? "#B8CEF9" : ""
                        }}
                        onClick={() => {
                          setSelectedBadgeIndex(index);
                          setFieldValue(items[index]);
                          setIsEditing(true);
                        }}
                    >
                      {getBadgeText ? getBadgeText(value) : value.toString()}
                      <Icon
                          style={{
                            cursor: "pointer",
                            paddingLeft: 3,
                            width: 20,
                            height: 20
                          }}
                          viewBox={{width: 20, height: 20}}
                          paths={[
                            {
                              d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                              stroke: "black"
                            }
                          ]}
                          ariaLabel="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            removeItem(index);
                          }}
                      />
                    </Badge>
                );
              })}
            </ScrollView>
        )}
        <Divider orientation="horizontal" marginTop={5}/>
      </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
        <React.Fragment>
          {labelElement}
          {arraySection}
        </React.Fragment>
    );
  }
  return (
      <React.Fragment>
        {labelElement}
        {isEditing && children}
        {!isEditing ? (
            <>
              <Button
                  onClick={() => {
                    setIsEditing(true);
                  }}
              >
                Add item
              </Button>
            </>
        ) : (
            <Flex justifyContent="flex-end">
              {(currentFieldValue || isEditing) && (
                  <Button
                      children="Cancel"
                      type="button"
                      size="small"
                      onClick={() => {
                        setFieldValue(defaultFieldValue);
                        setIsEditing(false);
                        setSelectedBadgeIndex(undefined);
                      }}
                  ></Button>
              )}
              <Button
                  size="small"
                  variation="link"
                  color={tokens.colors.brand.primary[80]}
                  isDisabled={hasError}
                  onClick={addItem}
              >
                {selectedBadgeIndex !== undefined ? "Save" : "Add"}
              </Button>
            </Flex>
        )}
        {arraySection}
      </React.Fragment>
  );
}

export default function PackageDetailModelUpdateForm(props) {
  const {
    id: idProp,
    packageDetailModel,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    code: "",
    name: "",
    countries: [],
    accommodation: [],
    inclusions: "",
    exclusions: "",
    route: ""
  };
  const [code, setCode] = React.useState(initialValues.code);
  const [name, setName] = React.useState(initialValues.name);
  const [countries, setCountries] = React.useState(initialValues.countries);
  const [accommodation, setAccommodation] = React.useState(
      initialValues.accommodation
  );
  const [inclusions, setInclusions] = React.useState(initialValues.inclusions);
  const [exclusions, setExclusions] = React.useState(initialValues.exclusions);
  const [route, setRoute] = React.useState(initialValues.route);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = packageDetailModelRecord
        ? {...initialValues, ...packageDetailModelRecord}
        : initialValues;
    setCode(cleanValues.code);
    setName(cleanValues.name);
    setCountries(cleanValues.countries ?? []);
    setCurrentCountriesValue("");
    setAccommodation(cleanValues.accommodation ?? []);
    setCurrentAccommodationValue("");
    setInclusions(cleanValues.inclusions);
    setExclusions(cleanValues.exclusions);
    setRoute(cleanValues.route);
    setErrors({});
  };
  const [packageDetailModelRecord, setPackageDetailModelRecord] =
      React.useState(packageDetailModel);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
          ? await DataStore.query(PackageDetailModel, idProp)
          : packageDetailModel;
      setPackageDetailModelRecord(record);
    };
    queryData();
  }, [idProp, packageDetailModel]);
  React.useEffect(resetStateValues, [packageDetailModelRecord]);
  const [currentCountriesValue, setCurrentCountriesValue] = React.useState("");
  const countriesRef = React.createRef();
  const [currentAccommodationValue, setCurrentAccommodationValue] =
      React.useState("");
  const accommodationRef = React.createRef();
  const validations = {
    code: [],
    name: [],
    countries: [],
    accommodation: [],
    inclusions: [],
    exclusions: [],
    route: []
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
              code,
              name,
              countries,
              accommodation,
              inclusions,
              exclusions,
              route
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
                  PackageDetailModel.copyOf(packageDetailModelRecord,
                      (updated) => {
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
          {...getOverrideProps(overrides, "PackageDetailModelUpdateForm")}
          {...rest}
      >
        <TextField
            label="Code"
            isRequired={false}
            isReadOnly={false}
            value={code}
            onChange={(e) => {
              let {value} = e.target;
              if (onChange) {
                const modelFields = {
                  code: value,
                  name,
                  countries,
                  accommodation,
                  inclusions,
                  exclusions,
                  route
                };
                const result = onChange(modelFields);
                value = result?.code ?? value;
              }
              if (errors.code?.hasError) {
                runValidationTasks("code", value);
              }
              setCode(value);
            }}
            onBlur={() => runValidationTasks("code", code)}
            errorMessage={errors.code?.errorMessage}
            hasError={errors.code?.hasError}
            {...getOverrideProps(overrides, "code")}
        ></TextField>
        <TextField
            label="Name"
            isRequired={false}
            isReadOnly={false}
            value={name}
            onChange={(e) => {
              let {value} = e.target;
              if (onChange) {
                const modelFields = {
                  code,
                  name: value,
                  countries,
                  accommodation,
                  inclusions,
                  exclusions,
                  route
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
        <ArrayField
            onChange={async (items) => {
              let values = items;
              if (onChange) {
                const modelFields = {
                  code,
                  name,
                  countries: values,
                  accommodation,
                  inclusions,
                  exclusions,
                  route
                };
                const result = onChange(modelFields);
                values = result?.countries ?? values;
              }
              setCountries(values);
              setCurrentCountriesValue("");
            }}
            currentFieldValue={currentCountriesValue}
            label={"Countries"}
            items={countries}
            hasError={errors.countries?.hasError}
            setFieldValue={setCurrentCountriesValue}
            inputFieldRef={countriesRef}
            defaultFieldValue={""}
        >
          <TextField
              label="Countries"
              isRequired={false}
              isReadOnly={false}
              value={currentCountriesValue}
              onChange={(e) => {
                let {value} = e.target;
                if (errors.countries?.hasError) {
                  runValidationTasks("countries", value);
                }
                setCurrentCountriesValue(value);
              }}
              onBlur={() => runValidationTasks("countries",
                  currentCountriesValue)}
              errorMessage={errors.countries?.errorMessage}
              hasError={errors.countries?.hasError}
              ref={countriesRef}
              labelHidden={true}
              {...getOverrideProps(overrides, "countries")}
          ></TextField>
        </ArrayField>
        <ArrayField
            onChange={async (items) => {
              let values = items;
              if (onChange) {
                const modelFields = {
                  code,
                  name,
                  countries,
                  accommodation: values,
                  inclusions,
                  exclusions,
                  route
                };
                const result = onChange(modelFields);
                values = result?.accommodation ?? values;
              }
              setAccommodation(values);
              setCurrentAccommodationValue("");
            }}
            currentFieldValue={currentAccommodationValue}
            label={"Accommodation"}
            items={accommodation}
            hasError={errors.accommodation?.hasError}
            setFieldValue={setCurrentAccommodationValue}
            inputFieldRef={accommodationRef}
            defaultFieldValue={""}
        >
          <TextField
              label="Accommodation"
              isRequired={false}
              isReadOnly={false}
              value={currentAccommodationValue}
              onChange={(e) => {
                let {value} = e.target;
                if (errors.accommodation?.hasError) {
                  runValidationTasks("accommodation", value);
                }
                setCurrentAccommodationValue(value);
              }}
              onBlur={() =>
                  runValidationTasks("accommodation", currentAccommodationValue)
              }
              errorMessage={errors.accommodation?.errorMessage}
              hasError={errors.accommodation?.hasError}
              ref={accommodationRef}
              labelHidden={true}
              {...getOverrideProps(overrides, "accommodation")}
          ></TextField>
        </ArrayField>
        <TextField
            label="Inclusions"
            isRequired={false}
            isReadOnly={false}
            value={inclusions}
            onChange={(e) => {
              let {value} = e.target;
              if (onChange) {
                const modelFields = {
                  code,
                  name,
                  countries,
                  accommodation,
                  inclusions: value,
                  exclusions,
                  route
                };
                const result = onChange(modelFields);
                value = result?.inclusions ?? value;
              }
              if (errors.inclusions?.hasError) {
                runValidationTasks("inclusions", value);
              }
              setInclusions(value);
            }}
            onBlur={() => runValidationTasks("inclusions", inclusions)}
            errorMessage={errors.inclusions?.errorMessage}
            hasError={errors.inclusions?.hasError}
            {...getOverrideProps(overrides, "inclusions")}
        ></TextField>
        <TextField
            label="Exclusions"
            isRequired={false}
            isReadOnly={false}
            value={exclusions}
            onChange={(e) => {
              let {value} = e.target;
              if (onChange) {
                const modelFields = {
                  code,
                  name,
                  countries,
                  accommodation,
                  inclusions,
                  exclusions: value,
                  route
                };
                const result = onChange(modelFields);
                value = result?.exclusions ?? value;
              }
              if (errors.exclusions?.hasError) {
                runValidationTasks("exclusions", value);
              }
              setExclusions(value);
            }}
            onBlur={() => runValidationTasks("exclusions", exclusions)}
            errorMessage={errors.exclusions?.errorMessage}
            hasError={errors.exclusions?.hasError}
            {...getOverrideProps(overrides, "exclusions")}
        ></TextField>
        <TextField
            label="Route"
            isRequired={false}
            isReadOnly={false}
            value={route}
            onChange={(e) => {
              let {value} = e.target;
              if (onChange) {
                const modelFields = {
                  code,
                  name,
                  countries,
                  accommodation,
                  inclusions,
                  exclusions,
                  route: value
                };
                const result = onChange(modelFields);
                value = result?.route ?? value;
              }
              if (errors.route?.hasError) {
                runValidationTasks("route", value);
              }
              setRoute(value);
            }}
            onBlur={() => runValidationTasks("route", route)}
            errorMessage={errors.route?.errorMessage}
            hasError={errors.route?.hasError}
            {...getOverrideProps(overrides, "route")}
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
              isDisabled={!(idProp || packageDetailModel)}
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
                    !(idProp || packageDetailModel) ||
                    Object.values(errors).some((e) => e?.hasError)
                }
                {...getOverrideProps(overrides, "SubmitButton")}
            ></Button>
          </Flex>
        </Flex>
      </Grid>
  );
}
