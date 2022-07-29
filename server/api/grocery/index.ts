import qs from 'qs'
import { Grocery } from '~/domain/Grocery'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const { limit } = useQuery(event)

    const search: Object = {
        limit: limit
    }

    const query = qs.stringify(search)

    const response: [] = await $fetch(
        `${config.public.apiBase}/grocery?${query}`
    )

    const finalResponse: Grocery[] = response.map((g: any) => Grocery.create(g._id, g.name, g.image, g.type, g.local, g.months))
    return finalResponse
})
