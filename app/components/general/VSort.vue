<template>
	<button class="v-sort" @click="onChange">
		<span :class="{ 'text-green-main': value }">
			<slot />
		</span>

		<div class="v-sort__icons">
			<IconArrowUp class="v-sort__icon" :class="isActive('asc')" />

			<IconArrowDown class="v-sort__icon" :class="isActive('des')" />
		</div>
	</button>
</template>

<script setup lang="ts">
import type { ISortItem } from '@/types/types.ts';

import IconArrowUp from '@/components/icons/IconArrowUp.vue';
import IconArrowDown from '@/components/icons/IconArrowDown.vue';

const { name = 'sort', value = '' } = defineProps<ISortItem>();

const emit = defineEmits<{
	(e: 'change', item: ISortItem): void;
}>();

const isActive = (name: string) => (value === name ? 'v-sort__icon--active' : '');

const onChange = () => {
	if (!value) emit('change', { name, value: 'asc' });
	if (value === 'asc') emit('change', { name, value: 'des' });
	if (value === 'des') emit('change', { name, value: '' });
};
</script>

<style lang="scss">
.v-sort {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	border: 0;
	background: transparent;
	cursor: pointer;

	&__icons {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	&__icon--active {
		color: color('green-main');
	}
}
</style>
