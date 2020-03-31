<template>
<div>
  <div>
    <button @click="pushBtn()">表示切り替え</button>
  </div>
  <p v-if="isPush === true">hoge</p>
  <p v-else>fuga</p>
   <p>持ってる数字:{{number}}</p>
    <input v-model="message2" placeholder="14110を超えると文字が出る">
    <p v-if="number < message2">数字超えた</p>
    <p>引いた数字:{{ number - message2 }}</p>
  <div>
    <p>{{testcard.name}}の所持数:{{testcard.amount - count}}</p>
    <p>
      <button v-if="count > '0'" @click="takeCount">▼</button>
      <button v-else :disabled="true">▼</button>
      送る枚数:{{count}}
      <button v-if="count < testcard.amount" @click="addCount">▲</button>
      <button v-else :disabled="true">▲</button>
      <button>移動</button>
    </p>
  </div>
  <div>
    <n-link to="APItest" class="button--grey">砂場2</n-link>
  </div>
  <div>
    <input type="checkbox" v-model="a">承認
    <button class="btn-primary" :disabled="!a">
      送信
    </button>
    <a v-if="a === true">checkされた</a>
  </div>
  <div>
    <table border="1">
    <tr>
      <th>ID</th>
      <th>名前</th>
    </tr>  
    <tr v-for="items in item" :key="items.id">
      <td v-if="items.id > number">成功</td>
      <td v-else>{{items.id}}</td>
      <td>{{items.name}}</td>
    </tr>
    </table> 
  </div>    
</div>
</template>





<script lang="js">
  export default {
      async asyncData ({ $axios }) {
        const { data } = await $axios.get(`https://www.land.mlit.go.jp/webland/api/CitySearch?area=14`)
        return { 
            message: data.status,
            item: data.data,
            number: 14110,
            user: true,
            message2: '',
            isPush: false,
            a: false,
            Text_Price: '1',
            isActive: '1',
            testcard:{
              name: 'タルモゴイフ',
              price: '6000',
              amount: '4'
            }
        }          
      },        
      computed: {
            count () { return this.$store.state.counter.count }
      },
        methods: {
            addCount (e) {
              this.$store.commit('counter/add')
            },
            takeCount (e) {
              this.$store.commit('counter/take')
            },
            pushBtn(){
              this.isPush = !this.isPush;
            },
        }    

  }
</script>
