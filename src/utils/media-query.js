import { generateMedia } from "styled-media-query"
import theme from '../styles/theme';

const media = generateMedia({
  xs: theme.breakpoints.xs,
  sm: theme.breakpoints.sm,
  md: theme.breakpoints.md,
  lg: theme.breakpoints.lg,
  xl: theme.breakpoints.xl,
})

export default media

