import React from "react"
import PropTypes from "prop-types"
import { format, parseISO } from "date-fns"
import styled from "styled-components"
import EsLocale from "date-fns/locale/es"

const Time = styled.time`
  font-size: 1rem;
  width: 100%;
  display: block;
  text-align: center;
  padding: 0.25rem 0;
`

const DateTime = ({ children: date, format: dateFormat }) => (
  <Time>
    {format(parseISO(date), dateFormat, {
      locale: EsLocale,
    })}
  </Time>
)

DateTime.propTypes = {
  children: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
}

export default DateTime
