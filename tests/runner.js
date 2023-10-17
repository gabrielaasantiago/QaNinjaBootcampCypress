const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter')

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjUxMmI1MjU0LTg5NTUtNGJmNC1hNjhlLTVjODZkZDljMTVmZS0xNjk3NTY1MjA5NTQ1IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiOTZmNjYzNzEtNGJjYy00NzdjLWIyNzYtNmM3Yjc4MTdkNjQ2IiwidHlwZSI6InQifQ.bJK9rfTQpkOa2JdYEXE_Br3sXCBgUzUF2QxbxSDXld8'

cypress.run({
    browser: 'chrome'
})
    .then((results) => {
        const args = {
            target: TOKEN,
        }
        tesults.results(results, args);
    })
    .catch((err) => {
        console.error(err)
    })