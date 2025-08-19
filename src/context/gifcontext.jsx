import React, { createContext } from 'react'

const gifcontext = createContext();

const gifprovider = ({children}) => (
    
        <gifcontext.Provider>{children}</gifcontext.Provider>

    
)

export default gifprovider
