let express = require('express');
let app = express()

app.get('/', (req, res) => {
    console.log('Hello weeraphat')
    res.send('Helllo weeraphat')
})

app.get('/crash', (req, res) => {
    console.log('Crash!!')
    res.send('Crash')
    process.exit(1)
})
app.listen(8000, ()=> console.log('Server is running at',8000))