'use client'

import styled from 'styled-components'

const Test = styled.div`
  color: green
`

const TestComponent = ({ children }) => {
    return (
        <Test>
            <div>erishen-test</div>
            {children}
        </Test>
    )
}

export default TestComponent