<template>
	<div class="card-room">
		<div class="card-room__info">
			<div class="card-room__name">{{ `${room}-комнатная №${number}` }}</div>

			<div class="card-room__square">{{ square }} м²</div>

			<div class="card-room__floor">
				<span class="text-black fw-500">{{ floor }}</span> из {{ floors }} этаж
			</div>

			<div class="card-room__price fw-500">{{ filterPrice(price) }}</div>
		</div>

		<div class="card-room__img">
			<picture>
				<img :src="image" alt="Планировка" />
			</picture>
		</div>
	</div>
</template>

<script setup lang="ts">
import { filterPrice } from '@/utils/helpers.ts';

import type { IRoomItem } from '@/types/types.ts';

const { room, number, price, floor, floors, square, image } = defineProps<IRoomItem>();
</script>

<style lang="scss">
.card-room {
	padding: 16px 24px;
	border-radius: 8px;
	border: 1px solid color('border');

	display: flex;
	flex-direction: column;
	gap: 20px;

	@include above($md) {
		flex-direction: row;
		border: none;
		border-bottom: 1px solid color('border');

		padding: 16px 0 25px;
		flex-direction: row-reverse;
	}
	@include above($lg) {
		border: none;
		border-bottom: 1px solid color('border');

		padding: 16px 0 25px;
		flex-direction: row-reverse;
	}

	&__info {
		display: flex;
		align-self: flex-start;
		gap: 16px 20px;
		flex-wrap: wrap;
		flex: 1 1 auto;
	}

	&__name {
		flex: 1 1 100%;
		@include above($xl) {
			flex: 1 1 auto;
		}
	}

	&__floor {
		color: color('gray-main');
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
