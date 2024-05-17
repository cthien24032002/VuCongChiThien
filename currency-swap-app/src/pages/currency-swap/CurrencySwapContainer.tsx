// @flow
import { useEffect, useState } from 'react';
import { NumericInputDisable, NumericInputEnable } from './InputNumber';
import './style.scss'
import { useQuery } from '@tanstack/react-query';
import { getPrices } from '../../service/api/pricesApi';
import SwapList from './SwapList';

type Props = {
  
};

type currencyType= {currency:string,price: number}

const exchangeRatioRecipe= (pricesDefault:number,pricesConvertDefault:number)=>{
    return (pricesDefault/pricesConvertDefault)
}

export function CurrencySwapContainer(props: Props) {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoDataCurrency'],
    queryFn:getPrices
  })

  const [prices,setPrices] = useState<number>(1)
  const [pricesConvert,setPricesConvert] = useState<number>(0)

  const [currency,setCurrency] = useState<currencyType>({currency: "",price: 0})
  const [currencyConvert,setCurrencyConvert] = useState<currencyType>({currency: "",price: 0})

  const [exchangeRatio,setExchangeRatio] =useState<number>(0)

  
  const handlerCurrent = ({currency,price}:currencyType)=>{
    setCurrency({currency,price})
  }

  const handlerCurrentConvert = ({currency,price}:currencyType)=>{
    setCurrencyConvert({currency,price})
  }
  
  useEffect(()=>{
    if(currency.currency && currencyConvert.currency){
      const newExchangeRatio = exchangeRatioRecipe(currency.price, currencyConvert.price);
      setPricesConvert(prices * newExchangeRatio);
      setExchangeRatio(newExchangeRatio); 
    }
  },[prices,currency,currencyConvert])

  return (
    <div className='currency-swap'>
      <div className="currency-swap__container">
        <h1 className="currency-swap__title">
          Currency Conversion Tool
        </h1>
        <div className="list-currency">
          <div className="list-currency__swap-list">
            <NumericInputEnable value={prices} onChange={setPrices}/>
            <SwapList data={data}  handlerChangeInput={handlerCurrent}/>
          </div>
          <div className="list-currency__swap-list">
            <NumericInputDisable value={pricesConvert} onChange={()=>{}}/>
            <SwapList data={data}  handlerChangeInput={handlerCurrentConvert}/>
          </div>
        </div>
        <div className="currency-swap__exchange-ratio">
          <div className="exchange-ratio__main">
              {exchangeRatio != 0 ?
                <p> {prices} {currency.currency} = {pricesConvert} {currencyConvert.currency} </p>
                :
                <p>No data</p>
              }
            </div>
        </div>
      </div>
    </div>
  );
};