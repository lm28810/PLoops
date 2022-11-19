// 0-15 Loop
const add =()=>{
    for(let i=0; i< 16; i++){
        console.log(i)
    }
}

add()

// 15-0 loop

const backwards15=()=>{
    for(let i=15; i>=0; i--){
        console.log(i)
    }
}

backwards15()

// Lood odd from 0- 700

const odd = () => {
    for(let i = 0; i<700; i++){
        i % 2 !== 0 ? console.log(i): null
    }
}

odd()

// Even loop
const even = () => {
    for(let i = 0; i<700; i++){
        i % 2 == 0 ? console.log(i): null
    }
}

even()

const whatAge = ()=> {
    let age = 29;
    for(let i=0; i<50; i++){
        i === age ? console.log("correct age"): console.log(i)
    }
}

whatAge()

// The Lap Loop

const runLaps = () =>{
    let laps = 0
    for(let i=0; i<11; i++){
        laps++
        console.log("Another Lap" +" " +laps)
    }
}

runLaps()

const invention = () =>{
    for(let i=1900; i<1950; i++){
        if(i === 1900){
            console.log("Zeppline was created in 1900")
        }else if (i === 1902){
            console.log("The Teddy Bear was created in 1902")
        } else if (i === 1910){
            console.log("The talking motion picture was created in 1910")
        }else if (i === 1913){
            console.log("THe Bra was created in 1913")
        } else if (i === 1918){
            console.log("The fortune cookie was created in 1918")
        } else if (i === 1923){
            console.log("The traffic signal was created in 1923")
        } else if (i === 1935){
            console.log("The Radar was created in 1935")
        } else if (i === 1938){
            console.log("The Ballpoint Pen was created in 1938")
        } else if(i === 1943){
            console.log("The slinky was created in 1943")
        } else {
        console.log(i)
        }
    }
}

invention()