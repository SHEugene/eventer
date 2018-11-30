module.exports = {
    "env": {
        "es6": true,
        "node": true
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
        ]
    }
};