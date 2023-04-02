'use client'

import { ThemeCustomization } from '@packages/ui-components'
import { createContext } from 'react'

import type { ReactNode } from 'react'

export const enum ThemeDescriptor {
	dark = 'dark',
	light = 'light',
}

export type ThemeContextProps = { descriptor?: ThemeDescriptor }

const ThemeContext = createContext<ThemeContextProps>({
	descriptor: ThemeDescriptor.light,
})

export default function ThemeProvider({
	children,
	descriptor = ThemeDescriptor.light,
}: { children: ReactNode } & ThemeContextProps) {
	return (
		<ThemeCustomization>
			<ThemeContext.Provider value={{ descriptor }}>
				{children}
			</ThemeContext.Provider>
		</ThemeCustomization>
	)
}
