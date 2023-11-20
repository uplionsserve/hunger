export async function getCMSData(dataType: string) {
	try {
		const dataRes = await fetch(`${import.meta.env.CMS_URI_DATA}-${dataType}`)
		if (dataRes.ok) {
			return await dataRes.json()
		} else {
			throw new Error(`Error fetching data: ${dataRes.statusText}`)
		}
	} catch (error) {
		console.log(error)
	}
}

export async function getCMSPage(pageType: string) {
	try {
		const pageRes = await fetch(`${import.meta.env.CMS_URI_PAGES}-${pageType}`)
		if (pageRes.ok) {
			return await pageRes.json()
		} else {
			throw new Error(`Error fetching page: ${pageRes.statusText}`)
		}
	} catch (error) {
		console.log(error)
	}
}
