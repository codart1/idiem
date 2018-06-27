import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import img from '../assets/img/edm.jpeg'
import { Jumbo, Player } from '../components/organisms'
import { H } from '../components/atoms'

const Wrapper = styled.section`
  background-color: black;
`

const IndexPage = () => (
  <Wrapper>
    <Jumbo img={img}>
      <div className="section">
        <div className="columns is-centered">
          <div className="column is-half">
            {/* <H is={2} className="has-text-centered">Bộ sưu tập nhạc EDM hay đến từ producer VN</H> */}
            <H is={2} className="has-text-centered">Best playlist ever ever ever and ever</H>
            <Player/>
          </div>
        </div>
      </div>
    </Jumbo>
    <div>blaahahahahaahaha</div>
  </Wrapper>
)

export default IndexPage
