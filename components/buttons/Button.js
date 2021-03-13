import styled from 'styled-components';
import { variants } from './theme';

const getDisabledStyles = ({ isLoading, theme }) => {
  if (isLoading === true) {
    return `
      &:disabled {
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled {
      background-color: ${theme.colors.primaryBright};
      border-color: ${theme.colors.primaryBright};
      box-shadow: none;
      cursor: not-allowed;
    }
  `;
};

const removePointerEvents = ({ disabled, as }) => {
  if (disabled && as && as !== 'button') {
    return `
      pointer-events: none;
    `;
  }

  return '';
};

const getButtonVariantProp = (prop) => ({ theme, variant = variants.PRIMARY }) => {
  return theme.button[variant][prop];
};

const Button = styled.button`
  align-items: center;
  background-color: ${getButtonVariantProp('background')};
  border: ${getButtonVariantProp('border')};
  border-radius: 6px;
  box-shadow: ${getButtonVariantProp('boxShadow')};
  color: ${getButtonVariantProp('color')};
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 14px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};
  height: ${({ size }) => (size === 'lg' ? '48px' : '36px')};
  line-height: 1;
  letter-spacing: 0.03em;
  justify-content: center;
  outline: 0;
  padding: ${({ size }) => (size === 'lg' ? '16px 24px' : '8px 16px')};
  transition: background-color 0.2s;
  opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};

  &:hover:not(:disabled):not(.button--disabled):not(:active) {
    background-color: ${getButtonVariantProp('backgroundHover')};
    border-color: ${getButtonVariantProp('borderColorHover')};
  }

  &:focus:not(:active) {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primaryBright};
  }

  &:active {
    background-color: ${getButtonVariantProp('backgroundActive')};
    box-shadow: ${getButtonVariantProp('boxShadowActive')};
  }

  ${getDisabledStyles}
  ${removePointerEvents}
`;

export default Button;
