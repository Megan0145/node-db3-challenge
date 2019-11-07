const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
  addStep
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

function findSteps(schemeID) {
  return db("steps as st")
    .join("schemes as sch", "sch.id", "st.scheme_id")
    .select(
      "st.id as id",
      "sch.scheme_name",
      "st.step_number",
      "st.instructions"
    )
    .where({ "st.scheme_id": schemeID })
    .orderBy("st.step_number");
}

function add(schemeData) {
  return db("schemes")
    .insert(schemeData)
    .then(ids => {
      return findById(ids[0]);
    });
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(() => {
      return findById(id);
    });
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}

// insert into steps(step_number, instructions, scheme_id)
// values(4, "Another step", 1)

function addStep(stepdata, id) {
  return db("steps")
  .insert({
    step_number: stepdata.step_number,
    instructions: stepdata.instructions,
    scheme_id: id
  })
}
