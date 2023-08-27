const assert = require('assert')
const ExchangeService = require('../services/exchangeService')
const exchangeService = ExchangeService.getInstance()

describe('Exchange API', async () => {
  it('should convert currency correctly', async () => {
    const source = 'USD'
    const target = 'JPY'
    const amount = '$1525'

    const result = await exchangeService.exchange(source, target, amount)

    assert.strictEqual(result.msg, 'success')
    assert.strictEqual(result.amount, '$170,496.53')
  })

  it('should handle invalid source currency', async () => {
    const source = 'KRW'
    const target = 'JPY'
    const amount = '$1525'

    const result = await exchangeService.exchange(source, target, amount)

    assert.strictEqual(result.msg, 'Invalid source or target currency')
  })


  it('should handle invalid amount', async () => {
    const source = 'USD'
    const target = 'JPY'
    const amount = '$'

    const result = await exchangeService.exchange(source, target, amount)

    assert.strictEqual(result.msg, 'Invalid amount')
  })

})

