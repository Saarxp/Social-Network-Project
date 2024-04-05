import express from 'express';


const app = express();
const options = process.cwd()
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('public/web.html', {root: options});
})

app.listen(port, () => {
    console.log('server is running')
})