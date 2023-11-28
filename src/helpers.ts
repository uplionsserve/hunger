export async function getCMSData(dataType: string) {
	try {
		const dataRes = await fetch(
			`${import.meta.env.CMS_URL}/api/hunger-data-${dataType}`,
			{
				headers: {
					Authorization: `api-keys API-Key ${import.meta.env.CMS_API_KEY}`,
				},
			},
		)
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
		const pageRes = await fetch(
			`${import.meta.env.CMS_URL}/api/globals/hunger-pages-${pageType}`,
			{
				headers: {
					Authorization: `api-keys API-Key ${import.meta.env.CMS_API_KEY}`,
				},
			},
		)
		if (pageRes.ok) {
			return await pageRes.json()
		} else {
			throw new Error(`Error fetching page: ${pageRes.statusText}`)
		}
	} catch (error) {
		console.log(error)
	}
}
