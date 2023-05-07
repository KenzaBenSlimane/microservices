const express = require('express');
const authAnnonceurApi = require('./routes/annonceurRoute.js');
const authAdminApi = require('./routes/adminRoute.js');
const accountAdminApi = require('./routes/adminRoute.js');
const authSharedApi = require('./routes/sharedRoute.js');

const app = express();

app.use(express.json());

app.use('/annonceur', authAnnonceurApi);
app.use('/admin', authAdminApi, accountAdminApi);
app.use('/', authSharedApi);

app.listen(8001, () => {
    console.log('gestion d authentification is listening to port 8001')
})