export const schema = {
  "models": {
    "PackageDetailModel": {
      "name": "PackageDetailModel",
      "fields": {
        "id": {
          "name": "id",
          "isArray": false,
          "type": "ID",
          "isRequired": true,
          "attributes": []
        },
        "code": {
          "name": "code",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "name": {
          "name": "name",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "countries": {
          "name": "countries",
          "isArray": true,
          "type": "String",
          "isRequired": false,
          "attributes": [],
          "isArrayNullable": true
        },
        "day_wise": {
          "name": "day_wise",
          "isArray": true,
          "type": {
            "nonModel": "DayWiseDataModel"
          },
          "isRequired": false,
          "attributes": [],
          "isArrayNullable": true
        },
        "accommodation": {
          "name": "accommodation",
          "isArray": true,
          "type": "String",
          "isRequired": false,
          "attributes": [],
          "isArrayNullable": true
        },
        "inclusions": {
          "name": "inclusions",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "exclusions": {
          "name": "exclusions",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "inclusions_list": {
          "name": "inclusions_list",
          "isArray": true,
          "type": {
            "nonModel": "InclusionListModel"
          },
          "isRequired": false,
          "attributes": [],
          "isArrayNullable": true
        },
        "accommodation_hotel_wise": {
          "name": "accommodation_hotel_wise",
          "isArray": true,
          "type": {
            "nonModel": "AccommodationHotelDataModel"
          },
          "isRequired": false,
          "attributes": [],
          "isArrayNullable": true
        },
        "route": {
          "name": "route",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "isArray": false,
          "type": "AWSDateTime",
          "isRequired": false,
          "attributes": [],
          "isReadOnly": true
        },
        "updatedAt": {
          "name": "updatedAt",
          "isArray": false,
          "type": "AWSDateTime",
          "isRequired": false,
          "attributes": [],
          "isReadOnly": true
        }
      },
      "syncable": true,
      "pluralName": "PackageDetailModels",
      "attributes": [
        {
          "type": "model",
          "properties": {}
        },
        {
          "type": "auth",
          "properties": {
            "rules": [
              {
                "allow": "public",
                "operations": [
                  "create",
                  "update",
                  "delete",
                  "read"
                ]
              }
            ]
          }
        }
      ]
    },
    "ContactFormModel": {
      "name": "ContactFormModel",
      "fields": {
        "id": {
          "name": "id",
          "isArray": false,
          "type": "ID",
          "isRequired": true,
          "attributes": []
        },
        "name": {
          "name": "name",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "email": {
          "name": "email",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "phone": {
          "name": "phone",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "package_code": {
          "name": "package_code",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "query": {
          "name": "query",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "isArray": false,
          "type": "AWSDateTime",
          "isRequired": false,
          "attributes": [],
          "isReadOnly": true
        },
        "updatedAt": {
          "name": "updatedAt",
          "isArray": false,
          "type": "AWSDateTime",
          "isRequired": false,
          "attributes": [],
          "isReadOnly": true
        }
      },
      "syncable": true,
      "pluralName": "ContactFormModels",
      "attributes": [
        {
          "type": "model",
          "properties": {}
        },
        {
          "type": "auth",
          "properties": {
            "rules": [
              {
                "allow": "public",
                "operations": [
                  "create",
                  "update",
                  "delete",
                  "read"
                ]
              }
            ]
          }
        }
      ]
    }
  },
  "enums": {},
  "nonModels": {
    "AccommodationHotelDataModel": {
      "name": "AccommodationHotelDataModel",
      "fields": {
        "standard": {
          "name": "standard",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "name": {
          "name": "name",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        }
      }
    },
    "DayWiseDataModel": {
      "name": "DayWiseDataModel",
      "fields": {
        "day": {
          "name": "day",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "desc": {
          "name": "desc",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        }
      }
    },
    "InclusionListModel": {
      "name": "InclusionListModel",
      "fields": {
        "country": {
          "name": "country",
          "isArray": true,
          "type": "String",
          "isRequired": false,
          "attributes": [],
          "isArrayNullable": true
        }
      }
    }
  },
  "codegenVersion": "3.3.5",
  "version": "c7274ef25adf952803168de169f1326a"
};