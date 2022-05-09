const router = require('express').Router();

const { route } = require('express/lib/application');
const { BlockComment } = require('jade/lib/nodes');
//Load task model
const Task = require('../../models/Task');

// @route GET api/task/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('Task route testing.'));

// @route GET api/tasks
// @description Get all tasks
// @access Public
router.get('/', (req, res) => {
    Task.find()
        .then(task => res.json(task))
        .catch(err => res.status(404).json({notasksfound: 'No tasks found'}));
});

// @route GET api/tasks/:id
// @description Get single task by id
// @access Public
router.get('/:id', (req, res) => {
    Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.status(404).json({notasksfound: 'No tasks found'}))
});

// @route GET api/tasks
// @description add/save task
// @access Public
router.post('/', (req, res) => {
    Task.create(req.body)
        .then(task => res.json({msg: 'Task added successfully'}))
        .catch(err => res.status(400).json({ error: 'Unable to add this task'}));
});

// @route GET api/tasks/:id
// @description Update task
// @access Public
router.put('/:id', (req, res) => {
    Task.findByIdAndUpdate(req.params.id, req.body)
        .then(task => res.json({ msg: 'Updated successfully' }))
        .catch(err => res.status(400).json({error: 'Unable to update the database'}));
});

// @route GET api/tasks/:id
// @description Delete task by id
// @access Public
router.delete('/:id', (req, res) => {
    Task.findByIdAndRemove(req.params.id, req.body)
        .then(task => res.json({ mgs: 'Task deketed successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a book'}));
});

module.exports = router;
