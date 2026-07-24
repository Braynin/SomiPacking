import astro from "eslint-plugin-astro";

export default [
  {
    ignores: [".astro/**", "dist/**", ".vercel/**", ".netlify/**"],
  },
  ...astro.configs.recommended,
];
