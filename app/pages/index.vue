<template>
	<div class="page-home">
		<div class="page-home__main">
			<h1 class="page-home__title">Квартиры</h1>

			<BlockTablet :list="list" />

			<div v-if="isMore">
				<button class="page-home__more" @click="getMore">Загрузить еще</button>
			</div>
		</div>

		<div class="page-home__filter">
			<BlockFilter :query="route.query" @change="onFilter" />
		</div>

		<button v-if="showButtonUp" class="page-home__up" @click="onScrollToUp">
			<IconUp />
		</button>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';

import type { IFilter } from '@/types/types.ts';

import { useAppStore } from '@/stores/AppStore';

import BlockFilter from '@/components/blocks/BlockFilter.vue';
import BlockTablet from '@/components/blocks/BlockTablet.vue';

import IconUp from '@/components/icons/IconUp.vue';

const app = useAppStore();
const { list, pagination } = storeToRefs(app);

const route = useRoute();
const router = useRouter();

app.getList({ query: route.query });

const showButtonUp = ref(false);

const isMore = computed(() => {
	const { page, total } = pagination.value;
	return page < total;
});

const getMore = () => app.getMore({ query: route.query });

const onFilter = (query: IFilter) => {
	router.push({ query: { ...query } });
};

watch(
	() => route.query,
	() => {
		app.getList({ query: route.query });
	},
	{ deep: true }
);

const onScrollToUp = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleIntersect = (entries) => {
	entries.forEach((entry) => {
		showButtonUp.value = !entry.isIntersecting;
	});
};

onMounted(() => {
	const el = document.querySelector('.page-home__title');
	if (el) {
		const observer = new IntersectionObserver(handleIntersect);
		observer.observe(el);
	}
});
</script>

<style lang="scss">
.page-home {
	display: grid;
	grid-template-columns: 1fr;
	gap: 28px;

	@include above($md) {
		grid-template-columns: 1fr 318px;
		gap: 28px;
	}

	@include above($lg) {
		grid-template-columns: 1fr 399px;
		gap: 80px;
	}

	&__title {
		font-weight: 700;
		font-size: 54px;
		line-height: 55px;
		margin-bottom: 24px;

		@include above($lg) {
			margin-bottom: 48px;
		}
	}

	&__more {
		padding: 8px 24px;
		font-size: 16px;
		line-height: 24px;
		border: 1px solid #0b173933;
		margin-top: 24px;
		border-radius: 24px;
	}

	&__up {
		position: fixed;
		right: 32px;
		bottom: 32px;
		z-index: 999;
	}
}
</style>
