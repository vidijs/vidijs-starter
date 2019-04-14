import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


export const DARK_PALETTE = 'dark';
export const LIGHT_PALETTE = 'light';
export const DEFAULT_PALETTE = LIGHT_PALETTE;

const createPaletteTheme = paletteType => createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: paletteType,
  },
  overrides: {
    MuiCard: {
      root: {
        marginTop: 10,
        marginBottom: 10,
      },
    },
    MuiCardHeader: paletteType === 'dark' ? {
      root: {
        backgroundColor: '#212121',
        color: '#fafafa',
        borderBottom: '1px solid #303030',
      },
    } : {
      root: {
        backgroundColor: '#fafafa',
        borderBottom: '1px solid #eaeded',
      },
    },
  },
});


const ThemeContext = React.createContext({
  theme: createPaletteTheme(DEFAULT_PALETTE),
  palette: DEFAULT_PALETTE,
  togglePalette: () => null,
});

export function ThemeProvider({ children }) {
  const [palette, setPalette] = React.useState(DEFAULT_PALETTE);
  const [theme, setTheme] = React.useState(createPaletteTheme(DEFAULT_PALETTE));
  const togglePalette = () => {
    let newPalette = DARK_PALETTE;
    if (palette === DARK_PALETTE) {
      newPalette = LIGHT_PALETTE;
    }
    const newTheme = createPaletteTheme(newPalette);
    setTheme(newTheme);
    setPalette(newPalette);
  };
  return (
    <ThemeContext.Provider value={{ theme, palette, togglePalette }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          {children}
        </CssBaseline>
      </MuiThemeProvider>
    </ThemeContext.Provider>

  );
}

export default ThemeContext;
