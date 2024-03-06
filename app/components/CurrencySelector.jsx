import { useState } from 'react';
import { currencySymbolToWords } from '../utils/currencyConverters';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function CurrencySelector({ currencies, onCurrencyChange, userCurrency }){
 const [isOpen, setIsOpen] = useState(false);
 const [selectedCurrency, setSelectedCurrency] = useState(currencySymbolToWords(userCurrency));

 const toggleOpen = () => setIsOpen(!isOpen);

 const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency.label);
    onCurrencyChange(currency.value);
    toggleOpen();
 };

 return (
    <div className="dropdown z-50">
      <button className='uppercase flex items-center space-x-2' onClick={toggleOpen}><p>{selectedCurrency}</p><ChevronDownIcon className='h-5 text-black' /></button>
      {isOpen && (
        <div className="dropdown-menu z-50">
          {currencies.map((currency, i) => (
            <button key={currency.label + i} onClick={() => handleCurrencyChange(currency)}>
              {currency.label}
            </button>
          ))}
        </div>
      )}
    </div>
 );
};
