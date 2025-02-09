/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "select475199832",
        "maxSelect": 1,
        "name": "brand",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "Nissan",
          "Toyota",
          "Haval",
          "Camry",
          "Kia Carnival",
          "Lexus"
        ]
      },
      {
        "hidden": false,
        "id": "number3145888567",
        "max": 3000,
        "min": 1000,
        "name": "year",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3616895705",
        "max": 0,
        "min": 0,
        "name": "model",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "select105650625",
        "maxSelect": 1,
        "name": "category",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "Luxury",
          "SUV",
          "N/A"
        ]
      },
      {
        "hidden": false,
        "id": "select3646614347",
        "maxSelect": 1,
        "name": "body_type",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "Sedan",
          "Hatchback",
          "SUV",
          "Coupe",
          "Sports Car",
          "Station Wagon",
          "Convertible",
          "Minivan",
          "Pick Up Truck",
          "Van",
          "Prime Mover",
          "Scooter"
        ]
      },
      {
        "hidden": false,
        "id": "select2627800888",
        "maxSelect": 1,
        "name": "fuel_type",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "Petrol",
          "Diesel",
          "CNG",
          "EV"
        ]
      },
      {
        "hidden": false,
        "id": "select1716930793",
        "maxSelect": 1,
        "name": "color",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "White",
          "Black"
        ]
      },
      {
        "hidden": false,
        "id": "number2514197817",
        "max": null,
        "min": null,
        "name": "deposit",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "number3219281744",
        "max": 10,
        "min": 1,
        "name": "seats",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "number257272573",
        "max": null,
        "min": null,
        "name": "KMs",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3843930009",
        "max": 0,
        "min": 0,
        "name": "additional_info",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "number1256801037",
        "max": null,
        "min": null,
        "name": "daily_price",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "number3975809993",
        "max": null,
        "min": null,
        "name": "weekly_price",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "select2063623452",
        "maxSelect": 1,
        "name": "status",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "Available",
          "Unavailable"
        ]
      },
      {
        "hidden": false,
        "id": "file3760176746",
        "maxSelect": 99,
        "maxSize": 0,
        "mimeTypes": [],
        "name": "images",
        "presentable": false,
        "protected": false,
        "required": false,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_318297498",
    "indexes": [],
    "listRule": null,
    "name": "Cars",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_318297498");

  return app.delete(collection);
})
