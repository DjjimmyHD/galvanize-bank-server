
exports.up = (knex, Promise) => {
  return knex.schema.createTable('accounts', (account) => {
    account.increments()
    account.string('acct_name')
    account.string('bank_name')
    account.string('acct_type')
    account
      .integer('user_id')
      .references('users.id')
      .onDelete('cascade')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('accounts')
}
