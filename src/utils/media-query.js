import { generateMedia } from "styled-media-query"
import theme from '../styles/theme';
import { rem } from 'polished'

const media = generateMedia({
  xs: rem(theme.breakpoints.xs), // 15.625
  sm: rem(theme.breakpoints.sm), // 28.125
  md: rem(theme.breakpoints.md), // 48
  lg: rem(theme.breakpoints.lg), // 73.125
  xl: rem(theme.breakpoints.xl), // 90
})

export default media
