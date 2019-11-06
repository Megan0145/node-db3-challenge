const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps
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
