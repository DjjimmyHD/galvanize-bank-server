exports.seed = (knex, Promise) => {
  return knex('transactions').del()
    .then(() => {
      return knex('transactions').insert([
        { id: 1, title: 'vending', status: true, amount: 1.50, account_id: 1 },
        { id: 2, title: 'cable', status: false, amount: 79.00, account_id: 4 },
        { id: 3, title: 'park', status: false, amount: 20.00, account_id: 4 },
        { id: 4, title: 'rent', status: false, amount: 1900.00, account_id: 4 },
        { id: 5, title: 'netflix', status: true, amount: 1.50, account_id: 3 },
        { id: 6, title: 'food', status: true, amount: 150.00, account_id: 2 }
      ])
    })
}
