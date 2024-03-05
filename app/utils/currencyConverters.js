const EURUSD = 1.1;
const GBPUSD = 1.2;
const EURGBP = 1.05


export function correctPrice(givenCur, changeToCur, amount){
  if(givenCur === '€' && changeToCur === '$'){
    return Math.ceil(+amount * EURUSD)
  }
  if(givenCur === '€' && changeToCur === '£'){
    return Math.ceil(+amount * EURGBP)
  }
  if(givenCur === '£' && changeToCur === '€'){
    return Math.ceil(+amount / EURGBP)
  }
  if(givenCur === '$' && changeToCur === '€'){
    return Math.ceil(+amount / EURUSD)
  }
  if(givenCur === '£' && changeToCur === '$'){
    return Math.ceil(+amount * GBPUSD)
  }
  if(givenCur === '$' && changeToCur === '£'){
    return Math.ceil(+amount / GBPUSD)
  }
  if(givenCur !== '$' || givenCur !== '£' || givenCur === '€'){
    return Math.ceil(+amount)
  }
  if(givenCur ===  changeToCur){
    return amount
  }
}

export function correctShipping(givenCur, changeToCur, amount){
  if(givenCur === '€' && changeToCur === '$'){
    return (+amount * EURUSD).toFixed(2)
  }
  if(givenCur === '€' && changeToCur === '£'){
    return (+amount * EURGBP).toFixed(2)
  }
  if(givenCur === '£' && changeToCur === '€'){
    return (+amount / EURGBP).toFixed(2)
  }
  if(givenCur === '$' && changeToCur === '€'){
    return (+amount / EURUSD).toFixed(2)
  }
  if(givenCur === '£' && changeToCur === '$'){
    return (+amount * GBPUSD).toFixed(2)
  }
  if(givenCur === '$' && changeToCur === '£'){
    return (+amount / GBPUSD).toFixed(2)
  }
  if(givenCur ===  changeToCur){
    return amount
  }
}


export const getHistory = (history, cur) => {
    const newHistory = history?.map((his) => {
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
    if(sys === '€'){
      return 'eur'
    }
    if(sys === '£'){
      return 'gbp'
    }
  }

  export function currencyWordToSymbols(word){
    if(word === 'usd'){
      return '$'
    }
    if(word === 'eur'){
      return '€'
    }
    if(word === 'gbp'){
      return '£'
    }
  }
