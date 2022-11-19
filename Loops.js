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

Complete questions 4 6 9