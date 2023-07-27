'use client'

import styled from 'styled-components'

const Test = styled.div`
  color: green
`

const TestComponent = ({ children }) => {
    return (
        <Test>
            {children}
        </Test>
    )
}

export default TestComponent