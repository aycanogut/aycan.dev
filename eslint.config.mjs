import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: ['dist/', '.astro/', 'node_modules/'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    // Pass the TS parser as an imported module (not a bare string) so editor
    // integrations resolve it from the project root — under pnpm's strict
    // layout the string form isn't resolvable, which makes the Astro
    // frontmatter fall back to a non-TS parse ("'interface' is reserved").
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    // `<script>` blocks: `define:vars` injects vars at runtime (so `no-undef`
    // can't see them), and the GA `gtag` snippet relies on `arguments`.
    files: ['**/*.astro/*.js', '**/*.astro/*.ts'],
    rules: {
      'no-undef': 'off',
      'prefer-rest-params': 'off',
    },
  },
  prettier,
);
