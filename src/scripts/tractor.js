import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (plantingPlan) => {
    for (const row of plantingPlan) {
        for (const plant of row) {
            if (plant === "Soybean") {
                let soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            }
            else if (plant === "Corn") {
                let cornSeed = createCorn()
                addPlant(cornSeed)
            }
            else if (plant === "Sunflower") {
                let sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            }
            else if (plant === "Potato") {
                let potatoSeed = createPotato()
                addPlant(potatoSeed)
            }
            else if (plant === "Asparagus") {
                let asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            }
            else if (plant === "Wheat") {
                let wheatSeed = createWheat()
                addPlant(wheatSeed)
            }
        }
    }
}
