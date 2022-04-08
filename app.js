// slide 1

const someFunc=(e)=>{
    return e
}
const newSong=(title,artist)=>{
    let song={
        Title: title,
        Artist: artist
    }
    return song
}
const arrayMaker=(e)=>{
    let array=[]
    for(let i=0; i<e.length; i++){
        if(e[i].length>5){
            array.push(e[i])
        }
    }
    return array
}

// refactor attempts

const arrayMakerRef=(e)=>{e.filter(e=>e.length>5)}

const someFuncRef=(e)=>e

// not sure if I can refactor newSong. Nice that the array.filter mdn uses this example. Didn't expect second one to work. No idea why return isn't needed?

// slide 2

const stringMaker=(e)=>e.toString()

let solarSystem={
    1:"Mercury",
    2:"Venus",
    3:"Earth",
    4:"Mars",
    5:"Jupiter",
    6:"Saturn",
    7:"Uranus",
    8:"Neptune"
}
const planetCheck=(i)=>solarSystem[i]

let classReg=[true,true,false,true,false]
const classCheck=()=>{
    let n=0
    for(let i=0; i<classReg.length;i++){
        if(classReg[i]==true){
            n++
        }
    }
    return n
}

const weirdSquare=(e)=>{
    e=e.toString().split("").map(x=>x**2).join("")
    e=parseInt(e,10)
    return e
}
    
// slide 3

const century=(e)=>Math.floor(e/100)

const binary=(e)=>parseInt(e.join(""),2)

// exports
module.exports ={
    someFunc,
    newSong,
    arrayMaker,
    arrayMakerRef,
    someFuncRef,
    stringMaker,
    planetCheck,
    solarSystem,
    classReg,
    classCheck,
    weirdSquare,
    century,
    binary
}