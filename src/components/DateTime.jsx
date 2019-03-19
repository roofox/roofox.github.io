import React from "react"
import PropTypes from "prop-types"
import { format } from "date-fns"
import styled from "styled-components"
import EsLocale from "date-fns/locale/es"

const Time = styled.time`
  font-size: 1rem;
  display: block;

  @media only screen and (max-width: 29.999rem) {
    font-size: 0.7rem;
  }
`

const DateTime = ({ children: date, format: dateFormat }) => (
  <Time>
    {format(date, dateFormat, {
      locale: EsLocale,
    })}
  </Time>
)

DateTime.propTypes = {
  children: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
}

export default DateTime
