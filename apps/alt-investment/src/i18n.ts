export const defaultLocale = 'en-US'
export const locales = ['en-US', 'en-GB', 'en-CA', 'fr-CA'] as const
export type ValidLocale = (typeof locales)[number]

type PathnameLocale = {
	pathname: string
	locale?: never
}

type ISOLocale = {
	pathname?: never
	locale: string
}

type LocaleSource = PathnameLocale | ISOLocale

export const getLocalePartsFrom = ({ pathname, locale }: LocaleSource) => {
	if (locale) {
		const localeParts = locale.toLowerCase().split('-')
		return {
			lang: localeParts[0],
			country: localeParts[1],
		}
	} else {
		const pathnameParts = pathname!.toLowerCase().split('/')
		return {
			lang: pathnameParts[1],
			country: pathnameParts[2],
		}
	}
}

const dictionaries: Record<ValidLocale, any> = {
	'en-US': () =>
		import('@/dictionaries/en-US.json').then((module) => module.default),
	'en-CA': () =>
		import('@/dictionaries/en-CA.json').then((module) => module.default),
	'fr-CA': () =>
		import('@/dictionaries/fr-CA.json').then((module) => module.default),
	'en-GB': () =>
		import('@/dictionaries/en-GB.json').then((module) => module.default),
} as const

export const getTranslator = async (locale: ValidLocale = defaultLocale) => {
	const dictionary = await dictionaries?.[locale]?.()

	const defaultDictionary =
		locale !== defaultLocale
			? await import(`@/dictionaries/${defaultLocale}.json`)
			: ''

	return (key: string, params?: { [key: string]: string | number }) => {
		let translation = key
			.split('.')
			.reduce((obj, key) => obj?.[key], dictionary)
		if (!translation && locale !== defaultLocale) {
			translation = key
				.split('.')
				.reduce((obj, key) => obj?.[key], defaultDictionary)
			if (!translation) {
				return key
			}
		}
		if (params && Object.entries(params).length) {
			Object.entries(params).forEach(([key, value]) => {
				translation = translation!.replace(`{{ ${key} }}`, String(value))
			})
		}

		return translation
	}
}
