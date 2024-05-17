import * as React from 'react';
import './style.scss'

import{ Select}from"antd";


type Props = {
  data:{}[],
  handlerChangeInput:any,
};

function SwapList({data,handlerChangeInput}: Props) {
  
  const handerList= (value:any,item:any)=>{
    handlerChangeInput({
      currency:item.children,
      price:value
    })
  }
  const onSearch = (value: string) => {
    console.log('search:', value);
  };
  
  return (
    <div className='swap-list'>
      <Select 
        showSearch 
        defaultValue={"select state"}  
        className='swap-list__dropdown' 
        onChange={handerList}
        onSearch={onSearch}
        filterOption={(input, option) => 
          {
            console.log(option);
            
            return (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
          }
        }
      >
        {
          data?.map((item:any,index:number)=>{
            return(
              <Select.Option key={index} value={item.price} >{item.currency}</Select.Option>
            )
          })
        }
      </Select>
    </div>
  );
};
export default SwapList





