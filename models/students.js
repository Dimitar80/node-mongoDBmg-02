const mongoose = require('mongoose');

const Student = mongoose.model(
    'student', 
    new mongoose.Schema({
        first_name: String,
        last_name: String,
        email: String,
        birthday: Date,
        city: String,
        average_grade: Number,
        courses: [String]
        
    }, 
    {
        collection: 'students'
    })
);

// All methods //
// get method //
const getAll = () => {
    return new Promise((success, fail) => {
        Student.find({}, (err, data) => {
            if(err){
                return fail(err);
            }
            return success(data);
        });
    });
};

// get method //
const getOne = (id) => {
    return new Promise((success, fail) => {
        Student.findById(id, (err, data) => {
            if(err){
                return fail(err);
            }
            return success(data);
        });
    });
};

// post method //
const save = (data) => {
    return new Promise((success, fail) => {
        var s = new Student(data);
        s.save(data, err => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

// put method //
const replace = (id, data) => {
    return new Promise((success, fail) => {
        Student.updateOne({_id: id}, data, err => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

// patch method //
const update = (id, data) => {
    return new Promise((success, fail) => {
        Student.updateOne({_id: id}, data, err => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

// delete method //
const remove = (id) => {
    return new Promise((success, fail) => {
        Student.deleteOne({_id: id}, err => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};




module.exports = {
    getAll,
    getOne,
    save,
    replace,
    update,
    remove
};