let express = require('express');
let app = express();

app.get('/fruits', (req, res, next) => {
    res.json(['Banana', 'Apple', 'Kiwi']);
    });

app.listen(3000, () => {
    console.log('Server running on port 3000');
});