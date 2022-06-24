const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name FROM bookmarks LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {
    page
  };

  return {
    data,
    meta
  }
}

async function create(programmingLanguage) {
  const result = await db.query(
    `INSERT INTO users
    (name) 
    VALUES
    ("${programmingLanguage.name}")`
  );

  let message = 'Error in creating programming language';

  if (result.affectedRows) {
    message = `Programming language updated successfully with ${result}`
  }

  return {
    message
  };
}

async function update(id, programmingLanguage) {
  const result = await db.query(
    `UPDATE users 
    SET name="${programmingLanguage.name}", 
    role="${programmingLanguage.role}", 
    email="${programmingLanguage.email}", 
    password="${programmingLanguage.password}"
    WHERE id=${id}`
  );

  let message = 'Error in updating programming language';

  if (result.affectedRows) {
    message = `Programming language updated successfully with ${result}`;
  }

  return {
    message
  };
}

async function remove(id) {
  const result = await db.query(
    `DELETE FROM users WHERE id=${id}`
  );

  let message = 'Error in deleting programming language';

  if (result.affectedRows) {
    message = 'Programming language deleted successfully';
  }

  return {
    message
  };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove
}