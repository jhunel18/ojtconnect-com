import { useState } from 'react'

const useToggle = ({initialValue}) => {
    const[state, setState] = useState(initialValue)

    const toggleState = () => {
        setState((prev) => !prev)
    }
  return {state, setState, toggleState}
}

export default useToggle