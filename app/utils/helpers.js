

export function formatAmount(amount, cur = 'USD'){
   const newMoney = new Intl.NumberFormat('en-US', { style: 'currency', currency: cur }).format(
        amount
      )
return newMoney
}