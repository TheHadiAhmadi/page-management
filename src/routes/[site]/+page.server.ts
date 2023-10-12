import type { Page } from '$lib/types/index.js';

export async function load({locals, params}) {

    console.log(locals.api.getPages({}))
    return {
        // pages: await locals.db('u-pages').query({where: locals.filters}).then(res => res.data)
        pages: await locals.api.getPages({where: locals.filters}).then(res => res.data)
    }
}


export const actions = {
    async addPage({locals, request}) {
        const body = await request.json();


        console.log('should add page')
        // await locals.db<Page>('u-pages').insert({
        //     title: body.title,
        //     slug: body.slug?.startsWith('/') ? body.slug?.substring(1) : body.slug,
        //     dir: 'ltr',
        //     description: '',
        //     load: [],
        //     slot: []
        // })
        return {success: true}

    }
}