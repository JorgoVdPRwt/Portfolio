import {defineStore} from 'pinia';
import { createPinia, setActivePinia } from "pinia";
import piniaPluginPersistState from 'pinia-plugin-persist-state';

const pinia = createPinia();
pinia.use(piniaPluginPersistState);
setActivePinia(pinia); 

export default pinia;

export const usePiniaStore = defineStore('pinia', {
    data() {
        return {
        }
    },
});