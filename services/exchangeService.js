
const exchangeRates = {
	"TWD": {"TWD": 1, "JPY": 3.669, "USD": 0.03281},
	"JPY": {"TWD": 0.26956, "JPY": 1, "USD": 0.00885},
	"USD": {"TWD": 30.444, "JPY": 111.801, "USD": 1}
}

class PrivateExchangeService {
  constructor() {
    this.message = 'I am an instance'
  }

	/**
	 * 匯率轉換
	 * @param {string} source 
	 * @param {string} target 
	 * @param {string} amount 
	*/
  async exchange(source, target, amount) {
		try {
			if(!source || !target || !amount){
				return { msg: 'Invalid source, target, or amount'}
			}
			amount = parseFloat(amount.replace('$', '').replace(',', ''))

			if(!amount){
				return { msg: 'Invalid amount'}
			}
	
			if (!exchangeRates[source] || !exchangeRates[target]) {
				return { msg: 'Invalid source or target currency'}
			}
	
			const conversionRate = exchangeRates[source][target]
			let convertedAmount = this.#roundTo(amount * conversionRate, 2)
			const formattedAmount = parseFloat(convertedAmount).toLocaleString('en-US')
	
			return { msg: 'success', amount: `$${formattedAmount}` }
		} catch (error) {
			return { msg: 'Invalid amount or error occurred' }
		}

  }

	#roundTo( num, decimal ) {
		 return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal )
	}

}

class ExchangeService {
	constructor() {
		throw new Error('Use ExchangeService.getInstance()')
	}

	static getInstance() {
		if (!ExchangeService.instance) {
			ExchangeService.instance = new PrivateExchangeService()
		}

		return ExchangeService.instance
	}
}

module.exports = ExchangeService