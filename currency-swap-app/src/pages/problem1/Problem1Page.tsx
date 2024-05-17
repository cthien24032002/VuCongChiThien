// @flow
import * as React from 'react';
import './style.scss'
import { Input } from 'antd';
type Props = {
  
};
var sum_to_n_a = function(n:number) {
    let result = 0
    for(var i = 1 ; i<=n ; i++){
        result += i
    }
    return  result
};

var sum_to_n_a_second = function(n:number) {
    let result = 0
    for(var i = 0 ; i<n ; i++){
        result += n - i
    }
    return  result
};

var sum_to_n_b = function(n:number) {
    const result = n * (n + 1) / 2;
    return result
}


var sum_to_n_c = function(n:number):any {  // reference
    if (n === 1) {
        return 1;
    }
    else if(n <0)
    {
        return 0;
    }
     else {
        return n + sum_to_n_c(n - 1);
    }
};

export function Problem1Container(props: Props) {
    const[value,setValue] = React.useState<number>(0)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (/^-?\d*\.?\d*$/.test(inputValue)) {
            const numberValue = Number(inputValue);
            if (!isNaN(numberValue)) {
                setValue(numberValue)
            }
        }
    };
  return (
    <div className='problem1Page'>
        <div className="problem1Page__container">
            <h1 className="problem1Page__title">Result number</h1>
            <ul className="problem1Page__list-result">
                <li className="problem1Page__list-result__result">
                    Result A = <span>{sum_to_n_a(value)}</span>
                </li>
                <li className="problem1Page__list-result__result">
                    Result B = <span>{sum_to_n_b(value)}</span>
                </li>
                <li className="problem1Page__list-result__result">
                    Result C = <span>{sum_to_n_c(value)}</span>
                </li>
            </ul>
            <Input
                className='problem1Page_input'
                value={value}
                onChange={handleChange}
                placeholder="Input a number"
                maxLength={16}
            />
        </div>
    </div>
  );
};