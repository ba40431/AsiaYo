const ExchangeService = require('../services/exchangeService')
const exchangeService = ExchangeService.getInstance()

class ExchangeController {
  /**
   * 匯率轉換
   */
  async exchange(req, res, next) {
    try {
      const result = await exchangeService.exchange(req.query.source, req.query.target, req.query.amount)

      res.send(result)
    } catch (error) {
      next(error)
    }
  }

}

module.exports = ExchangeController