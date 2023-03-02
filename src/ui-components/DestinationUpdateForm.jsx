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
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Destination } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
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
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
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
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
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
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
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
      <Divider orientation="horizontal" marginTop={5} />
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
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
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
export default function DestinationUpdateForm(props) {
  const {
    id: idProp,
    destination,
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
    title: "",
    countries: [],
    inclusions: [],
    accommodation: [],
    exclusions: [],
    link: "",
  };
  const [code, setCode] = React.useState(initialValues.code);
  const [title, setTitle] = React.useState(initialValues.title);
  const [countries, setCountries] = React.useState(initialValues.countries);
  const [inclusions, setInclusions] = React.useState(initialValues.inclusions);
  const [accommodation, setAccommodation] = React.useState(
    initialValues.accommodation
  );
  const [exclusions, setExclusions] = React.useState(initialValues.exclusions);
  const [link, setLink] = React.useState(initialValues.link);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = destinationRecord
      ? { ...initialValues, ...destinationRecord }
      : initialValues;
    setCode(cleanValues.code);
    setTitle(cleanValues.title);
    setCountries(cleanValues.countries ?? []);
    setCurrentCountriesValue("");
    setInclusions(cleanValues.inclusions ?? []);
    setCurrentInclusionsValue("");
    setAccommodation(cleanValues.accommodation ?? []);
    setCurrentAccommodationValue("");
    setExclusions(cleanValues.exclusions ?? []);
    setCurrentExclusionsValue("");
    setLink(cleanValues.link);
    setErrors({});
  };
  const [destinationRecord, setDestinationRecord] = React.useState(destination);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Destination, idProp)
        : destination;
      setDestinationRecord(record);
    };
    queryData();
  }, [idProp, destination]);
  React.useEffect(resetStateValues, [destinationRecord]);
  const [currentCountriesValue, setCurrentCountriesValue] = React.useState("");
  const countriesRef = React.createRef();
  const [currentInclusionsValue, setCurrentInclusionsValue] =
    React.useState("");
  const inclusionsRef = React.createRef();
  const [currentAccommodationValue, setCurrentAccommodationValue] =
    React.useState("");
  const accommodationRef = React.createRef();
  const [currentExclusionsValue, setCurrentExclusionsValue] =
    React.useState("");
  const exclusionsRef = React.createRef();
  const validations = {
    code: [],
    title: [],
    countries: [],
    inclusions: [],
    accommodation: [],
    exclusions: [],
    link: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
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
          title,
          countries,
          inclusions,
          accommodation,
          exclusions,
          link,
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
            Destination.copyOf(destinationRecord, (updated) => {
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
      {...getOverrideProps(overrides, "DestinationUpdateForm")}
      {...rest}
    >
      <TextField
        label="Code"
        isRequired={false}
        isReadOnly={false}
        value={code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              code: value,
              title,
              countries,
              inclusions,
              accommodation,
              exclusions,
              link,
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
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              code,
              title: value,
              countries,
              inclusions,
              accommodation,
              exclusions,
              link,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              code,
              title,
              countries: values,
              inclusions,
              accommodation,
              exclusions,
              link,
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
        hasError={errors?.countries?.hasError}
        errorMessage={errors?.countries?.errorMessage}
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
            let { value } = e.target;
            if (errors.countries?.hasError) {
              runValidationTasks("countries", value);
            }
            setCurrentCountriesValue(value);
          }}
          onBlur={() => runValidationTasks("countries", currentCountriesValue)}
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
              title,
              countries,
              inclusions: values,
              accommodation,
              exclusions,
              link,
            };
            const result = onChange(modelFields);
            values = result?.inclusions ?? values;
          }
          setInclusions(values);
          setCurrentInclusionsValue("");
        }}
        currentFieldValue={currentInclusionsValue}
        label={"Inclusions"}
        items={inclusions}
        hasError={errors?.inclusions?.hasError}
        errorMessage={errors?.inclusions?.errorMessage}
        setFieldValue={setCurrentInclusionsValue}
        inputFieldRef={inclusionsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Inclusions"
          isRequired={false}
          isReadOnly={false}
          value={currentInclusionsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.inclusions?.hasError) {
              runValidationTasks("inclusions", value);
            }
            setCurrentInclusionsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("inclusions", currentInclusionsValue)
          }
          errorMessage={errors.inclusions?.errorMessage}
          hasError={errors.inclusions?.hasError}
          ref={inclusionsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "inclusions")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              code,
              title,
              countries,
              inclusions,
              accommodation: values,
              exclusions,
              link,
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
        hasError={errors?.accommodation?.hasError}
        errorMessage={errors?.accommodation?.errorMessage}
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
            let { value } = e.target;
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              code,
              title,
              countries,
              inclusions,
              accommodation,
              exclusions: values,
              link,
            };
            const result = onChange(modelFields);
            values = result?.exclusions ?? values;
          }
          setExclusions(values);
          setCurrentExclusionsValue("");
        }}
        currentFieldValue={currentExclusionsValue}
        label={"Exclusions"}
        items={exclusions}
        hasError={errors?.exclusions?.hasError}
        errorMessage={errors?.exclusions?.errorMessage}
        setFieldValue={setCurrentExclusionsValue}
        inputFieldRef={exclusionsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Exclusions"
          isRequired={false}
          isReadOnly={false}
          value={currentExclusionsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.exclusions?.hasError) {
              runValidationTasks("exclusions", value);
            }
            setCurrentExclusionsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("exclusions", currentExclusionsValue)
          }
          errorMessage={errors.exclusions?.errorMessage}
          hasError={errors.exclusions?.hasError}
          ref={exclusionsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "exclusions")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Link"
        isRequired={false}
        isReadOnly={false}
        value={link}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              code,
              title,
              countries,
              inclusions,
              accommodation,
              exclusions,
              link: value,
            };
            const result = onChange(modelFields);
            value = result?.link ?? value;
          }
          if (errors.link?.hasError) {
            runValidationTasks("link", value);
          }
          setLink(value);
        }}
        onBlur={() => runValidationTasks("link", link)}
        errorMessage={errors.link?.errorMessage}
        hasError={errors.link?.hasError}
        {...getOverrideProps(overrides, "link")}
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
          isDisabled={!(idProp || destination)}
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
              !(idProp || destination) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
