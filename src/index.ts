const parser = require('ua-parser-js');
import { v4 as uuidv4 } from 'uuid';
import { generateSlug } from "random-word-slugs";

export default {
	async fetch(request, env, ctx,): Promise<Response> {
		const url = new URL(request.url);

		if (url.pathname === '/api/ua') {

			if (request.method === 'POST') {
				const payload = await request.json();
				let strToParse = (() => {
					if (payload['user-agent']) {
						return payload['user-agent'];
					}
					return request.headers.get('user-agent');
				})()
				let ua = parser(strToParse);
				return new Response(JSON.stringify(ua));
			} else if (request.method === 'GET') {
				let ua = parser(request.headers.get('user-agent'));
				return new Response(JSON.stringify(ua));
			}
		}
		if (url.pathname === '/api/uuid') {
			return new Response(JSON.stringify({
				success: true,
				id: uuidv4()
			}));
		}

		if (url.pathname === '/api/words') {
			let length = 3
			if (url.searchParams.has('length')) {
				length = parseInt(url.searchParams.get('length') ?? '3');
			}
			return new Response(JSON.stringify({
				success: true,
				slug: generateSlug(length)
			}));
		}
	},
} satisfies ExportedHandler<Env>;
