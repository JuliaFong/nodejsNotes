const https = require('https')
const url = 'http://api.weatherstack.com/current?access_key=6793779d8129c3035c99634b0bdec018&query=45,75&units=f'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
       data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()