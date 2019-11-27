import headerConfig from '../_utils/headerConfig';

module.exports = (req, res) => {
  const { name='hello' } = req.query
  const body = res.body || {}
  res.set(headerConfig)
  res.status(200).send({
    name: 'mintsquish',
    age: '20',
    req1: name,
    req2: body
  })
}