let count = 0
console.log(count)

// setTimeout(function() {
//     count += 2;
//     console.log(count)
//     setTimeout(function() {
//         count += 2;
//         console.log(count)
//         setTimeout(function() {
//             count += 2;
//             console.log(count)
//             setTimeout(function() {
//                 count += 2;
//                 console.log(count)
//                 setTimeout(function() {
//                     count += 2;
//                     console.log(count)
//                     setTimeout(function() {
//                         count += 2;
//                         console.log(count)
//                     },2000)
//                 },2000)
//             },2000)
//         },2000)
//     },2000)
// }, 2000)

for(let i = 0; i < 10; i++) {
    setTimeout(function() {
        count += 2;
        console.log(count)
    },2000)
}