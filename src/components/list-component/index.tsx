import { FC, ChangeEvent, memo, useCallback } from 'react'
import { Div, FlexColumnCenter, FlexRowCenter, H1, Span } from 'styled-wrappers'
import { ListType } from 'types'

import Input from 'components/input'

interface ListComponentProps {
  list: ListType[]
  setVal: (arg: ListType[]) => void
  title: string
}

const ListComponent: FC<ListComponentProps> = ({ list, setVal, title }) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, ind: number, arr: ListType[]) => {
      const newArr = [...arr]

      newArr[ind].value = e.target.value

      if (ind + 1 === newArr.length) {
        newArr.push({ id: newArr[ind].id + 1, value: '' })
      }

      if (!e.target.value.trim()) {
        newArr.pop()
      }
      setVal(newArr)
    },
    [setVal]
  )

  return (
    <FlexColumnCenter>
      <H1
        margin="10px 0"
        padding="10px 0"
        border
        minWidth="100%"
        fontSize="16px"
      >
        {title}
      </H1>

      <Div
        border
        padding="10px 0"
        minHeight="35vh"
        minWidth="250px"
        maxHeight="35vh"
        overflow="auto"
      >
        {list.map((item: ListType, i: number, arr: ListType[]) => (
          <FlexRowCenter key={item.id}>
            <Span margin="0 0 0 5px">{item.id}</Span>
            <Input
              margin="5px 10px"
              value={item.value}
              onChange={(e) => handleChange(e, i, arr)}
            />
          </FlexRowCenter>
        ))}
      </Div>
    </FlexColumnCenter>
  )
}

export default memo(ListComponent)
