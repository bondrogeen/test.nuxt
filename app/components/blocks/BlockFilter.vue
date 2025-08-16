<template>
	<div class="block-filter">
		<VRadio :value="roomField" name="room" :items="items" @change="onChangeRoom" />

		<BlockRange :model-value="price" :min="1000000" :max="10000000" :step="100000" @change="onChangePrice"> Стоимость квартиры, ₽ </BlockRange>

		<BlockRange :model-value="square" :min="15" :max="150" @change="onChangeSquare"> Площадь, м² </BlockRange>

		<div>
			<button class="block-filter__clear" @click="onReset">
				Сбросить параметры

				<IconClose />
			</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import type { Ref } from 'vue';

import type { IRangeItem, IFilter } from '@/types/types.ts';

import VRadio from '@/components/general/VRadio.vue';
import BlockRange from '@/components/blocks/BlockRange.vue';

import IconClose from '@/components/icons/IconClose.vue';

interface Props {
	query?: IFilter;
}

const { query = {} } = defineProps<Props>();

const emit = defineEmits<{
	(e: 'change', item: IFilter): void;
}>();

type TypeRange = [number, number];

const items: IRangeItem[] = [
	{ id: 1, name: '1к', value: '1', disabled: false },
	{ id: 2, name: '2к', value: '2', disabled: false },
	{ id: 3, name: '3к', value: '3', disabled: false },
	{ id: 4, name: '4к', value: '4', disabled: true },
];

const defFilters: IFilter = { room: '', priceMin: 0, priceMax: 0, squareMin: 0, squareMax: 0 };

const defPrice: TypeRange = [1000000, 10000000];
const defSquare: TypeRange = [15, 150];

const roomField: Ref<string> = ref('');
const price: Ref<TypeRange> = ref([...defPrice]);
const square: Ref<TypeRange> = ref([...defSquare]);

const filters: Ref<IFilter> = ref({ ...defFilters });

const { room, priceMin, priceMax, squareMin, squareMax } = query;
if (room) {
	roomField.value = room;
}
if (priceMin && priceMax) {
	price.value = [priceMin, priceMax];
}
if (squareMin && squareMax) {
	square.value = [squareMin, squareMax];
}

const onSend = () => {
	const data: IFilter = Object.entries(filters.value).reduce((acc, item) => {
		const [key, value] = item;
		if (value) {
			acc[key] = value;
		}
		return acc;
	}, {});
	emit('change', data);
};

const onChangeRoom = ({ value }: IRangeItem) => {
	roomField.value = value;
	filters.value.room = value;
	onSend();
};
const onChangePrice = (value: [number, number]) => {
	price.value = value;
	const [priceMin, priceMax] = value;
	filters.value.priceMin = priceMin;
	filters.value.priceMax = priceMax;
	onSend();
};
const onChangeSquare = (value: [number, number]) => {
	square.value = value;
	const [priceMin, priceMax] = value;
	filters.value.squareMin = priceMin;
	filters.value.squareMax = priceMax;
	onSend();
};

const onReset = () => {
	roomField.value = '';
	price.value = [...defPrice];
	square.value = [...defSquare];
	filters.value = { ...defFilters };
	onSend();
};
</script>

<style lang="scss">
.block-filter {
	display: flex;
	flex-direction: column;
	gap: 24px;

	padding: 20px;

	border-radius: 10px;
	background: linear-gradient(135deg, rgba(174, 228, 178, 0.3) 0%, rgba(149, 208, 161, 0.3) 100%);

	@include above($lg) {
		padding: 40px;
	}

	&__clear {
		height: 30px;
		padding: 0 16px;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		border: 0;
		background: transparent;
		cursor: pointer;
	}
}
</style>
