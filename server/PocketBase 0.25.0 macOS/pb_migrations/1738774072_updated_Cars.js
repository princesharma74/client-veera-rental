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
      "Lexus",
      "Ford"
    ]
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

  return app.save(collection)
})
