function callServer() {
    console.log('hello')
    const req = fetch('https://mocki.io/v1/91597bb3-21fe-4f16-9fd3-d1a4124b2883', {
        method: 'GET'
    })
    console.log('hello2')
    console.log(req)
}

callServer()