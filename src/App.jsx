import React from 'react'
import TextBoxFullWidthComp from './shared/components/TextBoxFullWidthComp'
import TextBoxSizeableComp from './shared/components/TextBoxSizeableComp'
import ButtonIconComp from './shared/components/ButtonIconComp'
import CheckboxComp from './shared/components/CheckboxComp'

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const App = () => {
  return (
    <>
      <TextBoxFullWidthComp label={"Username"} id={"username"} />
      <TextBoxSizeableComp label={"Password"} id={"password"} width={"auto"} height={"auto"} />
      <ButtonIconComp size={"large"} logo={<FacebookRoundedIcon fontSize='large' />} color={"primary"}></ButtonIconComp>
      <CheckboxComp />
    </>
  )
}

export default App