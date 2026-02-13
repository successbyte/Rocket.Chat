type FixedTranslationFunction = (key: string) => string;

type FixedTranslatorProvider = {
	getFixedT: (language: string) => FixedTranslationFunction;
};

type LanguageOption = {
	en: string;
	name: string;
	ogName: string;
	key: string;
};

export const getDefaultLanguageOption = (i18nextInstance: FixedTranslatorProvider, language: string): LanguageOption => {
	const translateInLanguage = i18nextInstance.getFixedT(language);
	const defaultTranslation = translateInLanguage('Default');

	return {
		en: 'Default',
		name: defaultTranslation,
		ogName: defaultTranslation,
		key: '',
	};
};
