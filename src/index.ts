const parser = require('ua-parser-js');

export default {
	async fetch(request, env, ctx): Promise<Response> {

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

	},
} satisfies ExportedHandler<Env>;
