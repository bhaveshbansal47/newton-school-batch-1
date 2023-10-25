setTimeout(cb1,2000)


function cb1 () {
    console.log('i am callback 1')
    setTimeout(cb2, 2000)
}

function cb2() {
    console.log('i am callback 2')
}