<template>
	<div class="block-range">
		<div class="block-range__name">
			<slot />
		</div>

		<div class="block-range__min_max text-gray-main">
			<div>
				<span class="mr-2">от</span>
				<span>{{ filterPrice(modelValue[0], 'ru', '') }}</span>
			</div>

			<div>
				<span class="mr-2">до</span>
				<span>{{ filterPrice(modelValue[1], 'ru', '') }}</span>
			</div>
		</div>

		<div class="block-range__input">
			<Slider v-model="valueRange" :min="min" :max="max" :step="step" :tooltips="false" @change="onChange" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { filterPrice } from '@/utils/helpers.ts';
import Slider from '@vueform/slider';
import { computed } from 'vue';

interface Props {
	min?: number;
	max?: number;
	step?: number;
	modelValue: [number, number];
}

const { min = 0, max = 100, step = 1, modelValue } = defineProps<Props>();

const valueRange = computed({
	get: () => modelValue,
	set: (value) => {
		onChange(value);
	},
});

const emit = defineEmits<{
	(e: 'change', item: [number, number]): void;
}>();

const onChange = (item: [number, number]) => {
	emit('change', item);
};
</script>

<style lang="scss">
@import '@vueform/slider/themes/default.css';

.slider-horizontal {
	--slider-height: 4px !important;
}
.slider-handle {
	--slider-height: 6px !important;
	--slider-handle-height: 14px !important;
	--slider-handle-width: 14px !important;

	background-color: color('green-main');
	box-shadow: none !important;
}

.block-range {
	color: color('text-black');
	font-size: 14px;
	line-height: 20px;

	&__name {
		font-size: 13px;
		line-height: 18px;

		@include above($lg) {
			font-size: 14px;
			line-height: 20px;
		}
	}

	&__min_max {
		display: grid;
		grid-template-columns: repeat(2, 1fr);

		margin-top: 8px;
		margin-bottom: 6px;

		span {
			color: color('text-black');
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
		}
	}

	&__input {
		margin: 12px 0 5px 0;
	}
}
</style>
