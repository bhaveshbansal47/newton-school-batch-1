let count = 0
const phlaInterval = setInterval(callBack, 1000)
function callBack() {
    count += 1;
    console.log(count)
    if(count === 10) {
        clearInterval(phlaInterval)
    }
}

