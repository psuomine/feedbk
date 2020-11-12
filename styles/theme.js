import { extendTheme } from '@chakra-ui/core';

const customTheme = {
  styles: {
    global: {
      'html, body': {
        height: '100%',
        background: '#F4F5F7'
      }
    }
  },
  fonts: {
    body: "'Inter', sans-serif"
  },
  colors: {
    brand: {
      500: '#5750ED',
      600: '#372FEA'
    },
    error: {
      100: '#FFFBFA',
      300: '#E38F7D',
      500: '#D12702'
    },
    border: {
      default: '#D2D6DC',
      focus: '#266EBC'
    },
    bg: {
      gray: {
        100: '#F9FAFB',
        700: '#374151',
        800: '#252F3F',
        900: '#161E2E'
      }
    },
    text: {
      gray: {
        300: '#D2D6DC',
        600: '#6B7280'
      }
    }
  }
};

export default extendTheme(customTheme);
