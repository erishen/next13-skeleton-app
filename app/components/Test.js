'use client'

import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Test = styled.div`
  color: red
`

const TestComponent = ({ children }) => {
    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
        setIsClient(true)
    }, [])

    if(isClient){
        return (
            <Test>
                {children}
            </Test>
        )
    } else {
        return null
    }
}

export default TestComponent