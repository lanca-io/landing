import { useState, useEffect } from 'react'

type MediaQueryListMap = {
	isPhone: MediaQueryList
	isTablet: MediaQueryList
}

type MediaQueryMatches = {
	isPhone: boolean
	isTablet: boolean
}

const useMediaQuery = (): MediaQueryMatches => {
	const queries: Record<keyof MediaQueryListMap, string> = {
		isPhone: '(max-width: 480px)',
		isTablet: '(max-width: 992px)',
	}

	const [matches, setMatches] = useState<MediaQueryMatches>({
		isPhone: false,
		isTablet: false,
	})

	useEffect(() => {
		const mediaQueryLists: MediaQueryListMap = {
			isPhone: window.matchMedia(queries.isPhone),
			isTablet: window.matchMedia(queries.isTablet),
		}

		const documentChangeHandler = () => {
			setMatches({
				isPhone: mediaQueryLists.isPhone.matches,
				isTablet: mediaQueryLists.isTablet.matches,
			})
		}

		documentChangeHandler()

		Object.values(mediaQueryLists).forEach(mql => mql.addEventListener('change', documentChangeHandler))

		return () => {
			Object.values(mediaQueryLists).forEach(mql => mql.removeEventListener('change', documentChangeHandler))
		}
	}, [])

	return matches
}

export default useMediaQuery
