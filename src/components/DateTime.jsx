import React from "react"
import PropTypes from "prop-types"
import { format } from "date-fns"
import styled from "styled-components"
import EsLocale from "date-fns/locale/es"

const Time = styled.time`
  font-size: 1rem;
  width: 100%;
  display: block;
  text-align: right;
  padding: 1rem 0;
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
