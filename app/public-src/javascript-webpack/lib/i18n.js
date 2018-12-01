const I18n = require('i18n-2');
const localeRu = require('../../../locales/ru.json');
const localeEn = require('../../../locales/en.json');
const path = require('path');
const _ = require('lodash');


const i18n = new I18n({
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
	setLocale: function (locale) {
		i18n.setLocale(locale);
	},
	getLocale: function () {
		return i18n.getLocale();
	}
};
