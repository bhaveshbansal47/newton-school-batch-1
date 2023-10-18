function asynchronous(sync) {
    console.log('I am async work, 10 sec ho gyi') //10sec
    sync()
}

// calback must be function
// callback must be passed as an argument to asynchronous
// callback must be executed in the end
function synchrnous() {
    console.log('I am sync work') //1sec
}

asynchronous(synchrnous)