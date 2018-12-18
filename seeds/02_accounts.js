exports.seed = (knex, Promise) => {
  return knex('accounts').del()
    .then(() => {
      return knex('accounts').insert([
        { id: 1, acct_name: 'personal', bank_name: 'Galvanize First National', acct_type: 'checking', user_id: 2 },
        { id: 2, acct_name: 'medical health savings', bank_name: 'Galvanize First National', acct_type: 'savings', user_id: 4 },
        { id: 3, acct_name: 'retirement', bank_name: 'Galvanize First National', acct_type: 'savings', user_id: 3 },
        { id: 4, acct_name: 'biz expenses', bank_name: 'Galvanize First National', acct_type: 'checking', user_id: 4 }
      ])
    })
}
