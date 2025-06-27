import calcWeightIndex from "./calcWeightIndex.js";

/*
1. Given weight in kg and height in metr.
2. If arguments valid return weight / (height * height) round to 2.
3. If arguments inlvalid throw error with correct message.

90, 1.9 => 24.93
90 => error 'weight and height required'
 => error 'weight and height required'
-90, 1.9 => error 'weight and height must be > 0'
90, 0 => error 'weight and height must be > 0'
1.9, 90 => error 'weight must be first argument and height - second'
'90', 1.9 => error 'weight and height must be number'
90, {} => error 'weight and height must be number"
NaN, 1.9 => error 'weight and height cannot be NaN'
90, NaN => error 'weight and height cannot be NaN'
Infinity, -Infinity => error 'weight and height cannot be Infinty'
90, 190 => error 'height must be in metr'
*/

describe("test calcWeightIndex function", ()=> {
    test("90, 1.9 => 24.93", ()=> {
        const result = calcWeightIndex(90, 1.9);
        expect(result).toBe(24.93);
        /*
        const expect => result => {
            return {
                result,
                toBe(value) {
                    return this.result === value
                }
            }
        }
        */
    });

    test("90 => error 'weight and height required'", ()=> {
        expect(()=>calcWeightIndex(90)).toThrow('weight and height required');
    })

    it(" => error 'weight and height required'", ()=> {
        expect(()=>calcWeightIndex()).toThrow('weight and height required');
    })

    test("-90, 1.9 => error 'weight and height must be > 0'", ()=> {
        expect(() => calcWeightIndex(-90, 1.9)).toThrow('weight and height must be > 0');
    })

    test("90, 0 => error 'weight and height must be > 0'", ()=> {
        expect(() => calcWeightIndex(90, 0)).toThrow('weight and height must be > 0');
    })

    test("1.9, 90 => error 'weight must be first argument and height - second'", ()=> {
        expect(()=> calcWeightIndex(1.9, 90)).toThrow('weight must be first argument and height - second')
    })

    test("'90', 1.9 => error 'weight and height must be number'", ()=> {
        expect(()=> calcWeightIndex('90', 1.9)).toThrow('weight and height must be number')
    })

    test("90, {} => error 'weight and height must be number'", ()=> {
        expect(()=> calcWeightIndex(90, {})).toThrow('weight and height must be number')
    })

    test("NaN, 1.9 => error 'weight and height cannot be NaN'", ()=> {
        expect(()=> calcWeightIndex(NaN, 1.9)).toThrow('weight and height cannot be NaN')
    })

    test("90, NaN => error 'weight and height cannot be NaN'", ()=> {
        expect(()=> calcWeightIndex(90, NaN)).toThrow('weight and height cannot be NaN')
    })

    test("Infinity, -Infinity => error 'weight and height cannot be Infinty'", ()=> {
        expect(()=> calcWeightIndex(Infinity, -Infinity)).toThrow('weight and height cannot be Infinty');
    })
})