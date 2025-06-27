const calcWeightIndex = (weight, height)=> {
    if(weight === undefined || height === undefined) {
        throw new Error('weight and height required');
    }

    if(typeof weight !== "number" || typeof height !== "number") {
        throw new Error('weight and height must be number');
    }

    if(Number.isNaN(weight) || Number.isNaN(height)) {
        throw new Error('weight and height cannot be NaN');
    }

    if(!Number.isFinite(weight) || !Number.isFinite(height)) {
        throw new Error('weight and height cannot be Infinty');
    }

    if(weight <= 0 || height <= 0) {
        throw new Error('weight and height must be > 0');
    }

    if(weight < height) {
        throw new Error('weight must be first argument and height - second')
    }

    const result = weight / (height ** 2);
    return Number(result.toFixed(2));
}

export default calcWeightIndex;