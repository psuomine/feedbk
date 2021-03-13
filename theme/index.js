import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';
import { button } from '@/components/buttons/theme';

const theme = {
  colors,
  button
};

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.colors.text};
    font-family: "Inter";
  }
`;

export default theme;
