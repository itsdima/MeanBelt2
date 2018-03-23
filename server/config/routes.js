const ctrl = require('../controllers/controller');
const path = require('path');

module.exports = (app) => {

    app.post('/pet', (req, res)=>{
        ctrl.addPet(req, res);
    });

    app.get('/pet', (req, res)=>{
        ctrl.getAll(req, res);
    });

    app.get('/pet/:id', (req, res)=>{
       ctrl.getOne(req, res);
    });

    app.put('/pet/:id', (req, res)=> {
        ctrl.update(req, res);
    });

    app.delete('/pet/:id', (req, res)=>{
        ctrl.remove(req, res);
    });

    app.put('/pet/like/:id', (req, res)=>{
        ctrl.like(req, res);
    })

    app.all('*', (req, res, next)=>{
        res.sendFile(path.resolve('./client/dist/index.html'));
    });

}