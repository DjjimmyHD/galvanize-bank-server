exports.up = (knex, Promise) => {
    return knex.schema.createTable('transactions', (transaction) => {
        transaction.increments()
        transaction.string('title', 8)
        transaction.boolean('status')
        transaction.decimal('amount')
        transaction
            .integer('account_id')
            .references('accounts.id')
            .onDelete('cascade')
    })
}

exports.down = (knex, Promise) => {
    return knex.schema.dropTableIfExists('transactions')
}