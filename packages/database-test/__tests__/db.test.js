const databasePlugin = require('../lib').plugin

let db

beforeAll(() => {
  db = databasePlugin.register(null, {location: ':memory:'})
})

afterAll(async () => {
  let ok = await databasePlugin.deregister(null, {db: db})
  expect(ok).toBe(true)
})

describe('Database', () => {
  it('should work well', async () => {
    db.serialize(() => {
      db.run('CREATE TABLE lorem (info TEXT)')

      let stmt = db.prepare('INSERT INTO lorem VALUES (?)')

      for (let i = 0; i < 10; i++) {
        stmt.run('Ipsum ' + i)
      }

      stmt.finalize()

      db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
        expect(row.id).not.toBe(null)

        if (err) return null
      })

    })
  })
})
