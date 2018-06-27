import styled from 'styled-components'
import React from 'react'

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
`

const Background = styled.div`
  filter: blur(4px);
  background-position: center;
  background-size: cover;
  background-image: url(${({ img }) => img});
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #0000007d;
  }
`

const Content = styled.div`
  position: relative;
  z-index: 2;
`

export default ({ children, ...props }) => (
  <Wrapper>
    <Background {...props} />
    <Content>{children}</Content>
  </Wrapper>
)
