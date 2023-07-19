import express from 'express';
import gamesRoutes from './routes/gamesRouter.js';
import { serve, setup } from 'swagger-ui-express';
import swaggerDocument from './swaggerAPI.json' assert {type: 'json'};



const app = express();
const port = 3000;

app.use('/api-docs', serve, setup(swaggerDocument));

// app.use('/', (req, res) => {
//     res.send("Hello World!");
// })

app.use('/games', gamesRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});