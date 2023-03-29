export default function Head() {
	return (
		<>
			<meta charSet="utf-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5"
			/>
			<meta name="theme-color" content="#4285f4" />
			<meta name="description" content="Software and data consultants" />
			<meta name="keywords" content="Keywords" />

			<title>Strand | tech and data consultants</title>

			{/**
			 *
			 * LINKS
			 *
			 * */}
			{/* PWA icons and manifest */}
			<link rel="manifest" href="/manifest.json" />
			<link
				href="/icons/icon-16x16.png"
				rel="icon"
				type="image/png"
				sizes="16x16"
			/>
			<link
				href="/icons/icon-32x32.png"
				rel="icon"
				type="image/png"
				sizes="32x32"
			/>
			<link rel="apple-touch-icon" href="/apple-icon.png" />
			<link rel="icon" href="/favicon.ico" />

			{/* fonts */}
			<link
				rel="preload"
				href={`/FrutigerLTW01-55Roman.woff2`}
				as="font"
				crossOrigin=""
				type="font/woff2"
			/>
			<link
				rel="preload"
				href={`/FrutigerLTW01-65Bold.woff2`}
				as="font"
				crossOrigin=""
				type="font/woff2"
			/>
		</>
	)
}

// enable dark theme add to theme
// const isDarkSet = localStorage.theme === 'dark';
// const isThemeStored = 'theme' in localStorage;
// const isDarkPrefered = window.matchMedia('(prefers-color-scheme: dark)').matches;

// if (isDarkThemeSet || (!isThemeStored && isDarkPrefered)) {
//   document.documentElement.classList.add('dark')
// } else {
//   document.documentElement.classList.remove('dark')
// }

// toggle theme
// const themeSwitch = document.querySelector('.switch')

// themeSwitch.addEventListener('click', () => {
// 	document.documentElement.classList.toggle('dark')
// 	localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark'
// })
