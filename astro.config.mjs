import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import react from "@astrojs/react";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), react(), alpinejs()]
});