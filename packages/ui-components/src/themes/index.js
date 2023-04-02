'use client'

import { CacheProvider } from '@emotion/react'
import { useMemo } from 'react'

// material-ui
import { CssBaseline, StyledEngineProvider } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

// project import
import createEmotionCache from './create-emotion-cache'
import componentsOverride from './overrides'
import Palette from './palette'
import CustomShadows from './shadows'
import Typography from './typography'

// ==============================|| DEFAULT THEME - MAIN  ||============================== //

const clientSideEmotionCache = createEmotionCache()

export default function ThemeCustomization({ children }) {
	const theme = Palette('light', 'default')

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const themeTypography = Typography(`'Public Sans', sans-serif`)
	const themeCustomShadows = useMemo(() => CustomShadows(theme), [theme])

	const themeOptions = useMemo(
		() => ({
			breakpoints: {
				values: {
					xs: 0,
					sm: 768,
					md: 1024,
					lg: 1266,
					xl: 1536,
				},
			},
			direction: 'ltr',
			mixins: {
				toolbar: {
					minHeight: 60,
					paddingTop: 8,
					paddingBottom: 8,
				},
			},
			palette: theme.palette,
			customShadows: themeCustomShadows,
			typography: themeTypography,
		}),
		[theme, themeTypography, themeCustomShadows]
	)

	const themes = createTheme(themeOptions)
	themes.components = componentsOverride(themes)

	return (
		<CacheProvider value={clientSideEmotionCache}>
			<StyledEngineProvider injectFirst>
				<ThemeProvider theme={themes}>
					<CssBaseline />
					{children}
				</ThemeProvider>
			</StyledEngineProvider>
		</CacheProvider>
	)
}
