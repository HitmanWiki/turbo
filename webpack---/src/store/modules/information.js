import Parse from "@/helpers/Parse";
import Web3 from '@/helpers/Web3';

const state = {
    status: [],
    orders: {
        pageSize: 5,
        page: 0,
        data: []
    },
};
const getters = {
    status: (state) => state.status,
    orders: (state) => state.orders,
};
const actions = {
    async fetchStatus({
        commit
    }) {
        const statusQuery = Parse.getQuery('Status');
        const source = Web3.getLevel().canUseAccount() ? 'account' : 'wallet';
        statusQuery.equalTo('network', Web3.getNetwork().network);
        statusQuery.equalTo('source', source);
        statusQuery.matches('owner', Web3.address, 'i');
        const status = await statusQuery.find();
        commit('SET', ['status', status]);
    },
    async fetchOrders({
        state,
        commit
    }, {
        pageSize,
        page
    }) {
        pageSize = pageSize || 5;
        page = page || 1;
        const orderQuery = Parse.getQuery('Order');
        const source = Web3.getLevel().canUseAccount() ? 'account' : 'wallet';
        orderQuery.equalTo('network', Web3.getNetwork().network);
        orderQuery.equalTo('source', source);
        orderQuery.matches('owner', Web3.address, 'i');
        orderQuery.skip(pageSize * (page - 1))
        orderQuery.limit(pageSize);
        orderQuery.descending("createdAt");

        const orders = await orderQuery.find();
        let data = {};
        if (page == 1) {
            data = {
                pageSize: pageSize,
                page: page,
                data: orders
            }
        } else {
            data = {
                pageSize: pageSize,
                page: page,
                data: [
                    ...state.orders.data,
                    ...orders
                ]
            }
        }
        commit('SET', ['orders', data]);
    },
};
const mutations = {
    SET(state, [key, value]) {
        state[key] = value;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}