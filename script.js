
const randomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[parseInt(Math.random()*16)]
    }
    return color;
}
 let colorChg;
 document.querySelector('#start').addEventListener('click',() =>{
     colorChg = setInterval(() => {
        document.body.style.backgroundColor = randomColor()
    }, 1000);
})

document.querySelector('#stop').addEventListener('click',() =>{
    clearInterval(colorChg)
   
})