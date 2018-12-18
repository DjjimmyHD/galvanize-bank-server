exports.seed = (knex, Promise) => {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        { id: 1, username: 'p-biff', first_name: 'Patrick', last_name: 'Biffle', email: 'p-biff@gschool.com', password: '12345678' },
        { id: 2, username: 'spensei', first_name: 'Spencer', last_name: 'Romberg', email: 'spensei@gschool.com', password: '12345678' },
        { id: 3, username: 'matt-winzer', first_name: 'Matthew', last_name: 'Winzer', email: 'matt-winzer@gschool.com', password: '12345678' },
        { id: 4, username: 'james-schultz', first_name: 'James', last_name: 'Schultz', email: 'james-schultz@gschool.com', password: '12345678' }
      ])
    })
}
