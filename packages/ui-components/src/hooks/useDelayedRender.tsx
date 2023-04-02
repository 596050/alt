'use client'
import { useEffect, useState } from 'react'

export default function useDelayedRender<T>(
	asyncFun: () => Promise<T>,
	deps = []
) {
	const [output, setOutput] = useState<T>()

	useEffect(() => {
		;(async function () {
			try {
				setOutput(await asyncFun())
			} catch (e) {
				console.error(e)
			}
		})()
	}, deps)
	return output === undefined ? null : output
}
