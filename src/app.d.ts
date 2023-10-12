// See https://kit.svelte.dev/docs/types#app

import type { ubuilder } from "$lib/server/ubuilder";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			siteId: string,
			user: any,
			filters: any,
			api: ReturnType<typeof ubuilder>
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
