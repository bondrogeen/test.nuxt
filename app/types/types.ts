export interface IRangeItem {
	id: number;
	name: string;
	value: string;
	disabled?: boolean;
}
export interface ISortItem {
	name?: string;
	value?: string;
}
export interface IRoomItem {
	id: number;
	room: number;
	number: number;
	price: number;
	floor: number;
	floors: number;
	square: number;
	image: string;
}
export interface IFilter {
	squareMin?: number;
	squareMax?: number;
	priceMin?: number;
	priceMax?: number;
	room?: string;
}

export type NumericKey<T> = {
	[K in keyof T]: T[K] extends number ? K : never;
}[keyof T];
