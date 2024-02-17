const EURUSD = 1.1;
const GBPUSD = 1.2;
const USDUSD = 1;


export function correctPrice(givenCur, changeToCur, amount){
  if(givenCur === '€' && changeToCur === '$'){
    return Math.ceil(amount * EURUSD)
  }
  if(givenCur === '£' && changeToCur === '$'){
    return Math.ceil(amount * GBPUSD)
  }
  if(givenCur ===  changeToCur){
    return amount
  }
}

export const getHistory = (history, cur) => {
    const newHistory = history.map((his) => {
        const newHis = {
            ...his,
            price : correctPrice(his.currency, cur, his.price),
            currency : cur,
        }

        return newHis
    })

    return newHistory
  }

  export function currencySymbolToWords(sys){
    if(sys === '$'){
      return 'usd'
    }
    if(sys === '₦'){
      return 'ngn'
    }
    if(sys === '€'){
      return 'eur'
    }
    if(sys === '£'){
      return 'gbp'
    }
  }
