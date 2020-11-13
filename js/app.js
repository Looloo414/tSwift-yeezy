/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/
const swiftBtn = document.getElementById('swiftButton')
const yeezyBtn = document.getElementById('yeezyButton')
const container = document.getElementById('containerDiv')
const lightDarkBtn = document.getElementById('lightDarkButton')

/*----------------------------- Event Listeners -----------------------------*/
swiftBtn.addEventListener('click', ()=> {
    console.log('T-Swift Rocks')
})

yeezyBtn.addEventListener('click', ()=> {
    console.log('Yeezy ROCKS!!!')
})

lightDarkBtn.addEventListener('click', ()=> {
    console.log('Mode Swap GoGoGoGo!')
})

/*-------------------------------- Functions --------------------------------*/
