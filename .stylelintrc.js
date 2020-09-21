module.exports = {
	extends: ["stylelint-config-airbnb", "stylelint-config-rational-order"],
	plugins: ["stylelint-order", "stylelint-scss"],
	rules: {
		// Дополнительные правила
		"indentation": "tab",
		'max-nesting-depth': [3, {
			ignore: ["pseudo-classes"]
		  }],
		'block-no-empty': true,
		'at-rule-empty-line-before': [
			'always', {
				// Allow mixins to have an empty line before
				ignoreAtRules: ['import', 'first-nested'],
			}
		],
		'value-no-vendor-prefix': true,
		'value-list-comma-space-after': 'always-single-line',
		'shorthand-property-no-redundant-values': true,
		"media-query-list-comma-newline-after": "always-multi-line",
	}
}