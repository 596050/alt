'use client'

import { ReactNode } from 'react'

import ThemeProvider from './provider-theme'

export function Providers({ children }: { children: ReactNode }) {
	return <ThemeProvider>{children}</ThemeProvider>
}
