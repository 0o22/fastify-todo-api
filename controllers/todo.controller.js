'use strict';

const pool = require('../db');

async function getTodos(request, reply) {
  try {
    const { rows } = await pool.query('SELECT * FROM todos');

    reply.send(rows);
  } catch (err) {
    reply.status(500).send(err);
  }
}

async function createTodo(request, reply) {
  const { title, completed } = request.body;

  try {
    const { rows } = await pool.query(
      'INSERT INTO todos (title, completed) VALUES ($1, $2) RETURNING *',
      [title, completed]
    );

    reply.send(rows[0]);
  } catch (err) {
    reply.status(500).send(err);
  }
}

async function updateTodo(request, reply) {
  const { id } = request.params;
  const { title, completed } = request.body;

  try {
    const { rows } = await pool.query(
      'UPDATE todos SET title=$1, completed=$2 WHERE id=$3 RETURNING *',
      [title, completed, id]
    );

    reply.send(rows[0]);
  } catch (err) {
    reply.status(500).send(err);
  }
}

async function deleteTodo(request, reply) {
  const { id } = request.params;

  try {
    const { rows } = await pool.query(
      'DELETE FROM todos WHERE id=$1 RETURNING *',
      [id]
    );

    reply.send(rows[0]);
  } catch (err) {
    reply.status(500).send(err);
  }
}

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
