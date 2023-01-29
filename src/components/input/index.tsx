import { FC, ChangeEvent } from 'react'
import styled from 'styled-components/macro'

interface InputProps {
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
  height?: string
  width?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  placeholder?: string
  margin?: string
  padding?: string
}

const InputField = styled.input<InputProps>`
  border: 1px solid rgba(134, 117, 79, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  height: ${({ height }) => height || '36px'};
  margin: ${({ margin }) => margin || '10px'};
  padding: ${({ padding }) => padding || '5px 15px'};
`

const Input: FC<InputProps> = ({
  onChange,
  height = '36px',
  width = '100%',
  type = 'text',
  placeholder,
  value,
  margin,
  padding,
}) => {
  return (
    <InputField
      margin={margin}
      padding={padding}
      onChange={onChange}
      height={height}
      width={width}
      type={type}
      value={value}
      placeholder={placeholder || ''}
    />
  )
}

export default Input
