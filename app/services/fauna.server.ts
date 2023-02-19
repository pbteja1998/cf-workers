import faunadb from 'faunadb'

export function getFaunaClient(): faunadb.Client {
  
  return new faunadb.Client({
    secret: FAUNADB_SECRET,
    scheme: 'https',
    domain:'db.fauna.com',
  })
}

export { query as q } from 'faunadb'
