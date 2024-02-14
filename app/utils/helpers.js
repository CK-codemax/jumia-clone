

export function formatAmount(amount){
   const newMoney = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
        amount
      )
return newMoney
}