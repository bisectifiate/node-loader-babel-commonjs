export const load = async (url, context, defaultLoad) => {
	const original = await defaultLoad(url, context, defaultLoad);

 	if (/node:/.test(url)) return original;
	if (/node_modules/.test(url)) return original;

	const {format, source} = original;
	if (format !== 'module' && format !== 'commonjs') return original;

	return {
		format: 'module',
		source: source === null ? '' : source,
	};
};
