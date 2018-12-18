exports.seed = (knex, Promise) => {
  return knex('transactions').del()
    .then(() => knex('accounts').del())
    .then(() => knex('users').del())
}
