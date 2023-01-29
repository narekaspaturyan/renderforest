import { useState, FC } from 'react'
import {
  FlexRowCenter,
  FullScreenContainer,
  H1,
  FlexColumnCenter,
} from 'styled-wrappers'

import { ListType } from 'types'

import ListComponent from 'components/list-component'

const App: FC = () => {
  const [pros, setPros] = useState<ListType[]>(() => [{ id: 1, value: '' }])
  const [cons, setCons] = useState<ListType[]>(() => [{ id: 1, value: '' }])

  return (
    <FullScreenContainer>
      <FlexColumnCenter minWidth="200px">
        <FlexRowCenter border radius="4px" padding="10px 0" margin="10px 0">
          <H1>Should I learn React?</H1>
        </FlexRowCenter>

        <FlexRowCenter flexDirection="column">
          <ListComponent title="Pros" list={pros} setVal={setPros} />
          <ListComponent title="Cons" list={cons} setVal={setCons} />
        </FlexRowCenter>
      </FlexColumnCenter>
    </FullScreenContainer>
  )
}

export default App
