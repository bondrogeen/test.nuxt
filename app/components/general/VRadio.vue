<template>
	<div class="v-radio">
		<label v-for="item of items" :key="item.id">
			<input :id="item.name" type="radio" :name="name" :value="item.value" :disabled="item.disabled" :checked="value === item.value" @click="onChange(item)" />

			<span class="v-radio__item">
				{{ item.name }}
			</span>
		</label>
	</div>
</template>

<script setup lang="ts">
import type { IRangeItem } from '@/types/types.ts';

interface Props {
	items?: IRangeItem[];
	value?: string;
	name?: string;
}

const { items = [], name = 'radio', value = '' } = defineProps<Props>();

const emit = defineEmits<{
	(e: 'change', item: IRangeItem): void;
}>();

const onChange = (item: IRangeItem) => {
	emit('change', item);
};
</script>

<style lang="scss">
.v-radio {
	display: flex;
	gap: 16px;
	input {
		height: 0;
		width: 0;
		visibility: hidden;
	}

	label {
		display: flex;
	}

	& input:checked ~ .v-radio__item {
		color: color('white');
		background-color: color('green-main');
		box-shadow: 0px 6px 20px 0px color('green-light1');
	}

	& input:disabled ~ .v-radio__item {
		color: color('gray-light1');
		background-color: color('white');
		cursor: default;
	}

	&__item {
		display: block;

		height: 44px;
		width: 44px;

		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background: white;

		transition: all 0.2s ease-out;

		cursor: pointer;

		&:hover {
			background-color: color('green-light1');
		}
	}
}
</style>
