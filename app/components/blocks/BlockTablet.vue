<template>
	<div class="block-tablet">
		<div class="block-tablet__header">
			<div class="block-tablet__plan">Планировка</div>
			<div class="block-tablet__name">Квартира</div>
			<VSort class="block-tablet__square" :value="sort.square" name="square" @change="onSort">S, м²</VSort>
			<VSort class="block-tablet__floor" :value="sort.floor" name="floor" @change="onSort">Этаж</VSort>
			<VSort class="block-tablet__price" :value="sort.price" name="price" @change="onSort">Цена, ₽</VSort>
		</div>

		<div class="block-tablet__list">
			<CardRoom v-for="item of sortList" :key="item.id" v-bind="item" />
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { ref, computed } from 'vue';

import type { IRoomItem, ISortItem, NumericKey } from '@/types/types.ts';

import CardRoom from '@/components/cards/CardRoom.vue';
import VSort from '@/components/general/VSort.vue';

interface Props {
	list: IRoomItem[];
}

const { list } = defineProps<Props>();

type SortKey = NumericKey<IRoomItem>;

const sortByType = (arr: IRoomItem[], type: string, key: SortKey) => {
	return [...arr].sort((a, b) => (type === 'asc' ? a[key] - b[key] : b[key] - a[key]));
};

const sort: Ref<{ [key: string]: string }> = ref({ square: '', floor: '', price: '' });

const sortList = computed(() => {
	let arr: IRoomItem[] = [...list];
	if (sort.value.floor) arr = sortByType(arr, sort.value.floor, 'floor');
	if (sort.value.square) arr = sortByType(arr, sort.value.square, 'square');
	if (sort.value.price) arr = sortByType(arr, sort.value.price, 'price');
	return arr;
});

const onSort = ({ name, value }: ISortItem) => {
	if (!name || value === undefined) return;
	sort.value = { square: '', floor: '', price: '' };
	sort.value[name] = value;
};
</script>

<style lang="scss">
.block-tablet {
	&__list {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	&__header {
		display: flex;
		gap: 20px;
		padding-bottom: 16px;
		@include above($lg) {
			margin-bottom: 16px;
			border-bottom: 1px solid color('border');
		}
	}

	&__plan {
		flex: 0 0 80px;
	}
	&__name {
		flex: 1 1 auto;
	}
	&__plan,
	&__name {
		display: none;
		@include above($xl) {
			display: block;
		}
	}

	&__square,
	&__floor,
	&__price {
		@include above($xl) {
			flex: 0 0 120px;
		}
	}
}
</style>
