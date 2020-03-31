<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        {{title}}
      </h1>
    </div>
    <div>
      <p>count={{count}}</p>
      <button v-if="count > '0'" @click="takeCount">▼</button>
      <button @click="addCount">▲</button>
    </div>
    <div>
      <p v-if="data1 == 'A'">Aです</p>
      <p v-else-if="data1 == 'B'">Bです</p>
      <p v-else>それ以外です</p>
　　</div>
     <n-link to="table" class="button--grey">砂場1</n-link>
  </div>
</template>

<script lang='js'>
const hogehoge = 'test'
console.log(hogehoge);

export default {
  asyncData(){
  return{
    title:hogehoge,
    data1:'C'    
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
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
