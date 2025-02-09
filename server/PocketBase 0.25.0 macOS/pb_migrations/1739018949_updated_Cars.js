/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_318297498")

  // update collection data
  unmarshal({
    "name": "cars"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_318297498")

  // update collection data
  unmarshal({
    "name": "Cars"
  }, collection)

  return app.save(collection)
})
