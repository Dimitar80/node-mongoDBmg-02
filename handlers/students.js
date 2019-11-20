const mStudenti = require('../models/students');

const getAll = (req, res) => {
    mStudenti.getAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send(err);
    });
}

const getOne = (req, res) => {
    // console.log(req)
    mStudenti.getOne(req.params.id)
    .then(data => {
        res.status(200).send(data);
        console.log(data)
    })
    .catch(err => {
        res.status(500).send(err);
    });
}

const save = (req, res) => {
    var data = req.body;
    let er = 0;
    if(data.first_name == undefined || data.first_name.length == 0){er++;}
    if(data.last_name == undefined || data.last_name.length == 0){er++;}
    if(data.email == undefined || data.email.length == 0){er++;}
    if(data.birthday == undefined || data.birthday.length == 0){er++;}
    if(data.average_grade == undefined || data.average_grade.length == 0){er++;}
    if(data.courses == undefined || data.courses.length == 0 ){er++;}
    if(data.city == undefined || data.city.length == 0 ){er++;}

    if(er == 0){
        mStudenti.save(data)
        .then(() => {
            res.status(201).send('Created');
        })
        .catch(err => {
            res.status(500).send(err);
        });
    } else {
        res.status(400).send('Bad request');
    }
}

const replace = (req, res) => {
    var data = req.body;
    // console.log(data)
    // Validacija //
    let er = 0;
    if(data.first_name == undefined || data.first_name.length == 0){er++;}
    if(data.last_name == undefined || data.last_name.length == 0){er++;}
    if(data.email == undefined || data.email.length == 0){er++;}
    if(data.birthday == undefined || data.birthday.length == 0){er++;}
    if(data.average_grade == undefined || data.average_grade.length == 0){er++;}
    if(data.courses == undefined || data.courses.length == 0 ){er++;}
    if(data.city == undefined || data.city.length == 0 ){er++;}

    if(er == 0){
        mStudenti.replace(req.params.id, data)
        .then(() => {
            res.status(204).send();
            // console.log(data)
        })
        .catch(err => {
            res.status(500).send(err);
        });
    } else {
        res.status(400).send('Bad request');
    }
}

const update = (req, res) => {
    mStudenti.replace(req.params.id, req.body)
    .then(() => {
        res.status(204).send();
        // console.log(req.body)
    })
    .catch(err => {
        res.status(500).send(err);
    });
}


const remove = (req, res) => {
    mStudenti.remove(req.params.id)
    .then(() => {
        res.status(204).send('Deleted');
    })
    .catch(err => {
        res.status(500).send(err);
    });
}

module.exports = {
    getAll,
    getOne,
    save,
    replace,
    update,
    remove
}