var app  = require('../../server');
var express = require('express');
var fs = require('fs');
// Use to validate given schema
var Validator = require('common-schema-validation');
// Path of task json file
const TASK_FILE = app.get('env') + '/assets/others/bug-feature-update.json';
var router = express.Router();

// Tash Schmea
var taskSchema = {
    id: {
        type: Number,
        required: false
    },
    component: {
        type: String,
        required: true,
        length: {
            min: 4,
            max: 40
        }
    },
    description: {
        type: String,
        required: false,
        length: {
            max: 140
        }
    },
    typeId: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
};
// Read file and take a callback as param
function readFile(cb) {
    fs.readFile(TASK_FILE, function(err, data) {
        if (err) throw err;
        cb(data);
    })
}
// Common function to delete and save data in task json file
function saveAndDelete(type, result, cb) {
    readFile((data) => {
        // Parse file data into JSON
        data = JSON.parse(data || '[]');
        var id = result.id;
        // If id exist means it is the case of delete and update
        if (id) {
            // Get index of deleted or updated record
            let index = data.findIndex((ob) => (ob.id === id));
            // If index found
            if (index > -1)
                type == 'delete' ? data.splice(index, 1) : (data[index] = result);
            // Otherwise call callback with fail status
            else {
                cb({
                    status: 'ko',
                    message: 'Record not found!',
                    data
                });
                return;
            }
        } 
        // If id not exist means it is the case save new record
        else {
            // Create new id as current timestamp
            result.id = +new Date();
            // Add Record at first position
            data.unshift(result);
        }
        // Write data into task json file after updation(Add/Delete/Update)
        fs.writeFile(TASK_FILE, JSON.stringify(data, undefined, 2), 'utf8', (op) => {
            cb({
                status: 'ok',
                message: (id ? (type == 'delete' ? 'Delete' : 'Update') : 'Save') + ' successfully!',
                data
            });
        });
    })
}
// To get task list
router.get('/list', function(req, res) {
    readFile((data) => {
        res.status(200).send(JSON.parse(data || '[]'));
    })
})
// To add or update record and Set middleware to validate input
router.post('/save', [new Validator(taskSchema, true)], function(req, res) {
    saveAndDelete('save', req.body, (response) => {
        res.send(response);
    })
})
// To delete record by id
router.delete('/delete/:id', function(req, res) {
    saveAndDelete('delete', {
        id: +req.params.id
    }, (response) => {
        res.send(response);
    })
})

module.exports = router
