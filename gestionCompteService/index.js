const express = require('express');
const accountAdminApi = require('./routes/adminRoute.js');
const accountAnnonceurApi = require('./routes/annonceurRoute.js');
const accountSharedApi = require('./routes/sharedRoute.js');


const app = express();

app.use(express.json());

app.use('/annonceur', accountAnnonceurApi);
app.use('/admin',accountAdminApi);
app.use('/',accountSharedApi);

app.listen(8002, () => {
    console.log('gestion des comptes is listening to port 8002')
})