import { colors } from '@/theme/colors';

export const variants = { PRIMARY: 'primary', SECONDARY: 'secondary' };

export const button = {
  [variants.PRIMARY]: {
    background: colors.primary,
    backgroundActive: colors.primaryDark,
    backgroundHover: colors.primaryDark,
    border: 0,
    borderColorHover: 'currentColor',
    boxShadow: 'inset 0px -1px 0px rgba(14, 14, 44, 0.4)',
    boxShadowActive: 'inset 0px -1px 0px rgba(14, 14, 44, 0.4)',
    color: '#FFFFFF'
  },
  [variants.SECONDARY]: {
    background: 'transparent',
    backgroundActive: 'transparent',
    backgroundHover: '#EEE',
    border: `1px solid ${colors.borderColor}`,
    boxShadow: 'none',
    boxShadowActive: 'none',
    color: `${colors.text}`
  }
};
