// @ts-check
import { defineConfig } from 'astro/config'

const isProd = process.env.CI === 'true'

const config = {}

if (isProd) {
	config.site = 'https://ponochovny.github.io'
	config.base = 'astro-test'
}

// https://astro.build/config
export default defineConfig(config)
