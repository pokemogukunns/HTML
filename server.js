const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/fetch-html', async (req, res) => {
    const url = req.query.url;
    try {
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        res.status(500).send('エラーが発生しました');
    }
});

app.listen(PORT, () => {
    console.log(`サーバーが http://localhost:${PORT} で起動しました`);
});
