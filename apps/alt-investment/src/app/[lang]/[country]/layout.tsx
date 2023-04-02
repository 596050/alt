import { AppProps } from 'next/app'

import React from 'react'

import ThemeProvider from '@/providers/provider-theme'
import './globals.css'

export interface Props extends AppProps {
	children: React.ReactNode
}

export default function RootLayout(props: Props) {
	const { children } = props

	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				<ThemeProvider>
					<>{children}</>
				</ThemeProvider>
			</body>
		</html>
	)
}
