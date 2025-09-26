import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		projects: [
			{
				test: {
					name: 'browser',
					include: ['browser/*.test.ts'],
					browser: {
						// use webdriverio because playwright doesn't support chrome
						// we need chrome, because chromium/firefox don't have the necessary codecs
						provider: 'webdriverio',
						instances: [{ browser: 'chrome' }],
						enabled: true,
						viewport: {
							width: 1400,
							height: 900,
						},
					},
				},
			},
			{
				test: {
					name: 'node',
					include: ['node/*.test.ts'],
					environment: 'node',
				},
			},
		],

	},
});
