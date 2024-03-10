module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"no-multiple-empty-lines": [
			"error",
			{ "max": 1 }
		],
		"no-trailing-spaces": "error",
		"no-multi-spaces": "error",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": ["error"],
		"no-undef": "off",
	},
	"ignorePatterns": [
		"dist/",
		"node_modules/",
		".eslintrc.js",
	]
};
