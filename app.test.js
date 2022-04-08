const funcs=require("./app")

describe("challenge1",() => {
    test("result should not be null",() => {
        expect(funcs.someFunc(1)).not.toBeNull()
    })
})

describe("challenge2",() => {
    test("Result should be truthy",() => {
        expect(funcs.someFunc(1)).toBeTruthy()
    })
})

describe("challenge3",() =>{
    test("Result should not be falsy",() => {
        expect(funcs.someFunc(1)).not.toBeFalsy()
    })
})

describe("challenge4",() => {
    test("result should give an object with two properties",() => {
        expect(funcs.newSong("「ラブカ？」","Ado")).toEqual({Title: "「ラブカ？」", Artist: "Ado"})
    })
})

describe("challenge5",() => {
    test("should return only array items with 6 or more characters",() => {
        expect(funcs.arrayMaker(["Chris","Hibiki","Tsubasa","Miku"])).toEqual(["Hibiki","Tsubasa"])
    })
})

describe("challenge 5 refactored",() => {
    test("should return only items with 6 or more characters",()=> {
        expect(funcs.arrayMaker(["Chris","Hibiki","Tsubasa","Miku"])).toEqual(["Hibiki","Tsubasa"])
    })
})

describe("refactor of function used for challenge 1-3",() => {
    test("result should not be null",() => {
        expect(funcs.someFunc(1)).not.toBeNull()
    })
    test("Result should be truthy",() => {
        expect(funcs.someFunc(1)).toBeTruthy()
    })
    test("Result should not be falsy",() => {
        expect(funcs.someFunc(1)).not.toBeFalsy()
    })
})

describe("slide 2 challenge 1, number to string",() => {
    test("should return a number as a string",()=>{
        expect(funcs.stringMaker(3)).toEqual("3")
    })
})

describe("slide2 challenge2, check planets",() => {
    test("should return the planet corresponding to the number",()=>{
        expect(funcs.planetCheck(3)).toEqual("Earth")
    })
})

describe("slide 2 challenge 3, check attendance",() => {
    test("should return the correct amount of true",()=>{
        expect(funcs.classCheck()).toEqual(3)
    })
})

describe("slide 2 challenge 4",()=>{
    test("should return the square of each digit as one long number",()=>{
        expect(funcs.weirdSquare(1234)).toEqual(14916)
    })
})

describe("slide 3 challenge 1, converting years to century",()=>{
    test("should return the century of the year (but in the CN slide way were 1705 is 17th centry",()=>{
        expect(funcs.century(1705)).toEqual(17)
    })
})

describe("slide 3 challenge 2",()=>{
    test("should return the binary as a base10 number",()=>{
        expect(funcs.binary([0,1,0,1])).toEqual(5)
    })
})
