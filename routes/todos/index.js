'use strict';

const todoControllers = require('../../controllers/todo.controller');

module.exports = async function (fastify, opts) {
  fastify.get('/', todoControllers.getTodos);
  fastify.post('/', todoControllers.createTodo);
  fastify.put('/:id', todoControllers.updateTodo);
  fastify.delete('/:id', todoControllers.deleteTodo);
};
