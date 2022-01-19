let plantsInField = [ ]

export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)) {
        for (const seed of seedObject) {
            plantsInField.push(seed)
        }
    } else {
    plantsInField.push(seedObject)
    }
}

export const usePlants = () => {
    return plantsInField
}
