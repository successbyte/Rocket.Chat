import { getDefaultLanguageOption } from './getDefaultLanguageOption';

describe('getDefaultLanguageOption', () => {
	it('uses a language-fixed translator for the Default label', () => {
		const fixedTranslate = jest.fn(() => 'الافتراضي');
		const i18nextInstance = {
			getFixedT: jest.fn(() => fixedTranslate),
		};

		const option = getDefaultLanguageOption(i18nextInstance, 'ar');

		expect(i18nextInstance.getFixedT).toHaveBeenCalledWith('ar');
		expect(fixedTranslate).toHaveBeenCalledWith('Default');
		expect(option).toEqual({
			en: 'Default',
			name: 'الافتراضي',
			ogName: 'الافتراضي',
			key: '',
		});
	});
});
