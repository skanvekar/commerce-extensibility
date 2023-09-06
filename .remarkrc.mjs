import remarkFrontmatter from 'remark-frontmatter';
import remarkLintFrontmatterSchema from 'remark-lint-frontmatter-schema';

const remarkConfig = {
	plugins: [
		remarkFrontmatter,
		[
			remarkLintFrontmatterSchema,
			{
				schemas: {
					/* One schema for many files */
					'./.github/linters/metadata.schema.yml': [
						/* Support glob patterns ———v */
						'./src/pages/**/*.md',
					],
				},
			},
		],
	],
};
export default remarkConfig;