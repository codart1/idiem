import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import img from '../assets/img/edm.jpeg'
import { baseColors } from '../config';

const Wrapper = styled.div`
  background-color: black;
`
const Header = styled.div`
  filter: blur(4px);
  background-position: center;
  background-size: cover;
  height: 100vh;
  background-image: url(${img});

  &:before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: #0000007d;
  }
`

const IndexPage = () => (
  <Wrapper>
    <Header>
      <h1>Idiem is a handpicked music collection</h1>
    </Header>
    <div>
      blaahahahahaahaha
    </div>
  </Wrapper>
)

export default IndexPage
