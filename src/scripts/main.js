import { createPlan } from "./plan.js"
import { createSoybean } from "./seeds/soybean.js"
import { createCorn } from "./seeds/corn.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"

console.log("Welcome to the main module")

const yearlyPlan = createPlan()
const soybeanSeed = createSoybean()
const cornSeed = createCorn()
const sunflowerSeed = createSunflower()
const asparagusSeed = createAsparagus()
const wheatSeed = createWheat()
const potatoSeed = createPotato()

// const pepper = "pepper"
// addPlant(pepper)

plantSeeds(yearlyPlan)
let fieldOfPlants = usePlants()
let harvest = harvestPlants(fieldOfPlants)
let fullCatalog = Catalog(harvest)
console.log(fullCatalog)
