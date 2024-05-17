import { Input, Tooltip } from "antd";

interface NumericInputProps {
    style?: React.CSSProperties;
    value: number;
    onChange: (value: number) => void;
  }
  
const formatNumber = (value: number) => new Intl.NumberFormat().format(value);
  
export const NumericInputEnable = (props: NumericInputProps) => {
    const { value, onChange } = props;
    const onSearch = (value: string) => {
      console.log('search:', value);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      if (/^-?\d*\.?\d*$/.test(inputValue)) {
      const numberValue = Number(inputValue);
      if (!isNaN(numberValue)) {
        onChange(numberValue);
      }
    }
    };
    
   
    return (
      <Tooltip trigger={['focus']} title={'Value to convert'} placement="topLeft" overlayClassName="numeric-input">
        <Input
          value={value}
          onChange={handleChange}
          placeholder="Input a number"
          maxLength={16}
        />
      </Tooltip>
    );
  };


export const NumericInputDisable = (props: NumericInputProps) => {
    const { value, onChange } = props;
    const valueValidate = isNaN(value)?0:value
    return (
      <Tooltip trigger={['focus']} title={''} placement="topLeft" overlayClassName="numeric-input">
        <Input disabled
          value={valueValidate}
          onChange={()=>{}}
          onBlur={()=>{}}
          placeholder="Input a number"
          maxLength={16}
        />
      </Tooltip>
    );
  };