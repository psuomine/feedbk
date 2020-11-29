import { extendTheme } from '@chakra-ui/react';

const customTheme = {
  styles: {
    global: {
      'html, body': {
        height: '100%',
        background: '#fff',
        color: '#37334D'
      }
    }
  },
  fonts: {
    body: "'Inter', sans-serif"
  },
  colors: {
    brand: {
      50: '#F6F6FE',
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
        500: '#EBEBEC'
      }
    },
    text: {
      gray: {
        300: '#D2D6DC',
        600: '#6B7280',
        900: '#32343D'
      }
    }
  }
};

export default extendTheme(customTheme);
