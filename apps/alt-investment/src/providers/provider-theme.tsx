'use client'

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
		<ThemeContext.Provider value={{ descriptor }}>
			{children}
		</ThemeContext.Provider>
	)
}
