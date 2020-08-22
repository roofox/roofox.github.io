import React from "react"
import PropTypes from "prop-types"
import { format, parseISO } from "date-fns"
import styled from "styled-components"
import EsLocale from "date-fns/locale/es"

const Time = styled.time`
  font-size: 0.9375rem;
  font-weight: 700;
  background-color: blue;
`

const Day = styled.span`
  line-height: 1;
  display: block;
  font-size: 4.333rem;
  color: ${(p) => p.theme.primaryColor1};
`

const MonthYear = styled.span`
  display: block;
  font-size: 1rem;
  margin-top: 5px;
`

const Date = () => (
  <Time>
    <Day>20</Day>
    <MonthYear>Agosto 2020</MonthYear>
  </Time>
)

Date.propTypes = {}

export default Date
