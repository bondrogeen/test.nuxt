export const filterPrice = (value: number | string, language = 'ru', currency = '₽') => {
	if (value) {
		return `${value.toLocaleString(language, { maximumFractionDigits: 2, minimumFractionDigits: 0 })} ${currency}`;
	} else {
		return value;
	}
};
