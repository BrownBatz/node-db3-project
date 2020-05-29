const db = require('../knexconfig');

function find() {
    return db('schemes');
}

function findById(id){
    return db('schemes').where({ id: id });
}

function findSteps(id){
    return db('steps')
            .where({ scheme_id: id })
            .orderBy('step_number', 'asc');
}

function add(scheme){
    return db('schemes')
            .insert(scheme)
}

function addStep(stepData){
    return db('steps')
            .insert(stepData);
}

function update(changes, id){
    return db('schemes')
            .where({ id: id })
            .update(changes);
}

function remove(id){
    return db('schemes')
            .join('steps', 'schemes.id', '=', 'steps.scheme_id')
            .del();
    
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
}