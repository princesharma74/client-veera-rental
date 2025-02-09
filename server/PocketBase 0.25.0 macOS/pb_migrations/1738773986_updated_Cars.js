/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_318297498")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "select475199832",
    "maxSelect": 1,
    "name": "brand",
    "presentable": false,
    "required": true,
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
  }))

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number3145888567",
    "max": 3000,
    "min": 1000,
    "name": "year",
    "onlyInt": false,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3616895705",
    "max": 0,
    "min": 0,
    "name": "model",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select105650625",
    "maxSelect": 1,
    "name": "category",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "Luxury",
      "SUV",
      "N/A"
    ]
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select3646614347",
    "maxSelect": 1,
    "name": "body_type",
    "presentable": false,
    "required": true,
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
  }))

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select2627800888",
    "maxSelect": 1,
    "name": "fuel_type",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "Petrol",
      "Diesel",
      "CNG",
      "EV",
      "Hybrid"
    ]
  }))

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select1716930793",
    "maxSelect": 1,
    "name": "color",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "White",
      "Black"
    ]
  }))

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "number2514197817",
    "max": null,
    "min": null,
    "name": "deposit",
    "onlyInt": false,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "number3219281744",
    "max": 10,
    "min": 1,
    "name": "seats",
    "onlyInt": false,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "number1256801037",
    "max": null,
    "min": null,
    "name": "daily_price",
    "onlyInt": false,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "number3975809993",
    "max": null,
    "min": null,
    "name": "weekly_price",
    "onlyInt": false,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "select2063623452",
    "maxSelect": 1,
    "name": "status",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "Available",
      "Unavailable"
    ]
  }))

  // update field
  collection.fields.addAt(15, new Field({
    "hidden": false,
    "id": "file3760176746",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [
      "image/jpeg",
      "image/vnd.mozilla.apng",
      "image/png"
    ],
    "name": "images",
    "presentable": false,
    "protected": false,
    "required": true,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_318297498")

  // update field
  collection.fields.addAt(1, new Field({
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
  }))

  // update field
  collection.fields.addAt(2, new Field({
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
  }))

  // update field
  collection.fields.addAt(3, new Field({
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
  }))

  // update field
  collection.fields.addAt(4, new Field({
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
  }))

  // update field
  collection.fields.addAt(5, new Field({
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
  }))

  // update field
  collection.fields.addAt(6, new Field({
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
  }))

  // update field
  collection.fields.addAt(7, new Field({
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
  }))

  // update field
  collection.fields.addAt(8, new Field({
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
  }))

  // update field
  collection.fields.addAt(9, new Field({
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
  }))

  // update field
  collection.fields.addAt(12, new Field({
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
  }))

  // update field
  collection.fields.addAt(13, new Field({
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
  }))

  // update field
  collection.fields.addAt(14, new Field({
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
  }))

  // update field
  collection.fields.addAt(15, new Field({
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
  }))

  return app.save(collection)
})
