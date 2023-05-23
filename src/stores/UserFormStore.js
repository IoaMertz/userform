import {defineStore} from 'pinia'


export const useUserFromStore = defineStore('userFormStore'{
     state: () => ({count:0,userForItems:[]}),
     actions: {
        increment(){
            this.count++;
        },
        fillFormItems(){
            
        }
     }
});