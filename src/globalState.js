import React,{createContext} from 'react'

export const GlobalState = createContext()

export  function Provider(props) {
    const [open, setOpen] = React.useState(false)

    const values = {
        open,
        setOpen,
    }

    return (
        <GlobalState.Provider value={values}>
            {props.children}
        </GlobalState.Provider>
    )
}
