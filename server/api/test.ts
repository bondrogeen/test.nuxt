import { defineEventHandler, getQuery } from 'h3';
import { list } from '../../temp';
import type { IFilter, IRoomItem } from '@/types/types.ts';

interface IFilterQuery extends IFilter {
	page?: number;
	limit?: number;
}

const isRoom = (item: IRoomItem, room: string | undefined) => (room ? +room === item.room : true);

const isSquare = (item: IRoomItem, squareMin: number | undefined, squareMax: number | undefined) => (squareMin && squareMax ? +squareMin < item.square && +squareMax > item.square : true);

const isPrice = (item: IRoomItem, priceMin: number | undefined, priceMax: number | undefined) => (priceMin && priceMax ? +priceMin < item.price && +priceMax > item.price : true);

export default defineEventHandler(async (event) => {
	const query = getQuery(event);
	const { page = 1, limit = 10, squareMin, squareMax, priceMin, priceMax, room }: IFilterQuery = query;

	const items: IRoomItem[] = list.reduce((acc, i: IRoomItem) => {
		if (isRoom(i, room) && isSquare(i, squareMin, squareMax) && isPrice(i, priceMin, priceMax)) {
			acc.push(i);
		}
		return acc;
	}, []);

	const pagination = {
		page: +page,
		total: Math.ceil(items.length / limit),
		length: items.length,
	};
	return { items: items.slice((+page - 1) * limit, +page * limit), pagination };
});
