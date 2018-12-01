module.exports = {
    "env": {
        "es6": true,
        "node": true,
		"browser": true,
		"mocha" : true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
			"experimentalObjectRestSpread": true
        },
        "ecmaVersion": 2017,
        "sourceType": "module",
    },
    "plugins": [
        "react"
    ],
    "rules": {
		/* JSX */
		"react/prop-types": [1, {
			"ignore": ["className", "children", "location", "params", "location*"]
		}],
        "indent": [
            "error",
            "tab"
        ],
		'no-console': 'off',
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
		"react/jsx-uses-react": "error",
	    "react/jsx-uses-vars": "error",
    },
	"parser": "babel-eslint",
};