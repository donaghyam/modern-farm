
export const harvestPlants = (plantsArray) => {
    let seedArray = []
    // iterate through plantsArray
    for (const plants of plantsArray) {
        // find output of corn
        if (plants.type === "Corn") {
            // assign value of half of output to a variable
            const output = (plants.output) / 2
            for (let i = 0; i < output; i++){
                seedArray.push(plants)
            }
        } else {
            // assign value of output to a variable
            const output = plants.output
            for (let i = 0; i < output; i++){
                seedArray.push(plants)
            }
        }
    }
    return seedArray
}
