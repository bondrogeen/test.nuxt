import { defineStore } from 'pinia';
// import type { Ref } from 'vue';
// import type { IRoomItem } from '@/types/types.ts';


export const useAppStore = defineStore('app', () => {
	const list = ref([])
	const pagination = ref({})

	const getList = async (payload = {}) => {
		const { data } = await useFetch('/api/test', payload);
		list.value = data.value?.items || []
		pagination.value = data.value?.pagination || {}
	}

	const getMore = async ({ query }) => {
		const { page, total } = pagination.value

		console.log(page, total);
		console.log({ ...query, page: page + 1 });
		if (page > total) return

		const { data } = await useFetch('/api/test', { query: { ...query, page: page + 1 } });

		console.log(data.value);
		const items = data.value?.items || []
		list.value = [...list.value, ...items]
		pagination.value = data.value?.pagination || {}
	}


	return {
		list,
		pagination,
		getList,
		getMore,
	};
});
