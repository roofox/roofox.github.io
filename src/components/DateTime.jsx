import React from "react"
import PropTypes from "prop-types"
import { format, parseISO } from "date-fns"
import styled from "styled-components"
import EsLocale from "date-fns/locale/es"

const Time = styled.time`
  font-size: 0.9rem;
  font-style: italic;
  font-weight: 100;
  width: 100%;
  display: block;
  text-align: ${(p) => p.align};
  color: ${(p) => p.theme.colors.body};
  padding: 0.25rem 0;
  &::before {
    content: ${(p) => p.startText ? `'${p.startText}'` : null};
  }
`

const DateTime = ({
  children: date,
  format: dateFormat,
  align = "center",
  startText = null,
}) => (
  <Time align={align} startText={startText}>
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
