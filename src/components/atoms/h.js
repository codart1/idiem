import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  .title {
    color: #${({ theme }) => theme.baseColors.statement};
  }
`

const H = ({ is, children, ...props }) => {
  const Tag = `H${is}`

  return (
    <Wrapper {...props}>
      <Tag className={`title is-${is}`}>{children}</Tag>
    </Wrapper>
  )
}

console.log(PropTypes)
H.propTypes = {
  is: PropTypes.number.isRequired
}

export default H
