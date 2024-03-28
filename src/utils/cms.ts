import type {
	HungerDataPartner,
	HungerDataProgram,
	HungerPagesAbout,
	HungerPagesDonate,
	HungerPagesHome,
} from "@/payloadTypes"

export async function fetchCMSJson(slug: string): Promise<any> {
	const { PUBLIC_CMS_URL, CMS_API_KEY } = import.meta.env

	try {
		const cmsResponse = await fetch(
			`${PUBLIC_CMS_URL}/api/${slug}?limit=1024`,
			{
				headers: {
					Authorization: `api-keys API-Key ${CMS_API_KEY}`,
				},
			},
		)

		const cmsJson = await cmsResponse.json()

		return cmsJson
	} catch (error) {
		console.log("Error fetching CMS data: ", error)
	}
}

export async function getPrograms(): Promise<Array<HungerDataProgram>> {
	try {
		const programsCollection = await fetchCMSJson("hunger-data-programs")
		const programs: Array<HungerDataProgram> = programsCollection.docs ?? []

		return programs
	} catch (error) {
		console.log(error)

		return []
	}
}

export async function getPartners(): Promise<Array<HungerDataPartner>> {
	try {
		const partnersCollection = await fetchCMSJson("hunger-data-partners")
		const partners: Array<HungerDataPartner> = partnersCollection.docs ?? []

		return partners
	} catch (error) {
		console.log(error)

		return []
	}
}

export async function getHomePage(): Promise<HungerPagesHome> {
	try {
		const homePage: HungerPagesHome = await fetchCMSJson(
			"globals/hunger-pages-home",
		)

		return homePage
	} catch (error) {
		console.log(error)

		return {
			id: -1,
			title: "Healthy Food _For All._",
		}
	}
}

export async function getAboutPage(): Promise<HungerPagesAbout> {
	try {
		const aboutPage: HungerPagesAbout = await fetchCMSJson(
			"globals/hunger-pages-about",
		)

		return aboutPage
	} catch (error) {
		console.log(error)

		return {
			id: -1,
		}
	}
}

export async function getDonatePage(): Promise<HungerPagesDonate> {
	try {
		const donatePage: HungerPagesDonate = await fetchCMSJson(
			"globals/hunger-pages-donate",
		)

		return donatePage
	} catch (error) {
		console.log(error)

		return {
			id: -1,
		}
	}
}
