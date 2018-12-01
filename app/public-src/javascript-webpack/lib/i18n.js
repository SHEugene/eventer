var I18n = require('i18n-2');
var localeRu = require('../../../locales/ru.json');
var localeEn = require('../../../locales/en.json');
var path = require('path');
var _ = require('lodash');
const univCookie = require('univ-cookie');
const i18nHelper = require('../../../lib/i18n-helper');

var i18n = new I18n({
	locales: {
		ru: localeRu,
		en: _.extend({}, localeRu, localeEn)
	},
	defaultLocale: 'ru',
	directory: path.join(__dirname, '../../../locales')
});

module.exports = {
	__: function (...args) {
		try {
			return i18n.__(...args);
		} catch (e) {
			console.error('i18n string ' + args[0]  + ' not found!', e);
			return args[0];
		}
	},
	__n: function (...args) {
		try {
			return i18n.__n(...args);
		} catch (e) {
			console.error('i18n string ' + args[0]  + ' not found!', e);
			return args[0];
		}
	},
	__safe: function (...args) {
		try {
			return i18nHelper.escapeSafe(i18n.__(...args));
		} catch (e) {
			console.error('i18n string ' + args[0]  + ' not found!', e);
			return args[0];
		}
	},
	guessLocale: function (acceptsLanguages) {
		if (univCookie.get('lang')) {
			return univCookie.get('lang');
		} else if (acceptsLanguages && acceptsLanguages.length > 0) {
			return removeSublocale(acceptsLanguages[0]);
		} else {
			return null;
		}
	},
	setGuessedLocale: function (acceptsLanguages) {
		this.setLocale(this.guessLocale(acceptsLanguages));
	},
	setLocale: function (locale) {
		i18n.setLocale(locale);
	},
	getLocale: function () {
		return i18n.getLocale();
	}
};

function removeSublocale (localeStr) {
	return localeStr.indexOf('-') !== -1 ? localeStr.split('-')[0] : localeStr;
}
