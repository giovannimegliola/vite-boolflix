<template>
  <header >
    <div class="container">

      <div class="row d-flex justify-content-between">
        <div class="col-6 mt-3 mb-3">
          <h1>BOOLFLIX</h1>
        </div>

        <div class="col-6 mt-4 mb-2">

          <form >
            <div class="input-group">
            <input v-model="store.query" type="text" class="form-control rounded" placeholder="Cerca nel nostro catalogo Film e Serie TV" aria-label="Search" @keyup.enter="$emit('performSearch')"  />
              <button @click="$emit('performSearch')" type="submit" class="btn mybtn">Search</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { store } from '../data/store';
  export default {
    name: "HeaderApp",
    data () {
      return {
        store,
      }
    },  
  }
</script>

<style lang="scss" scoped>

header{
  background-color: black;
}

h1{
 color: #E50914;
}

.mybtn{
  background-color: #E50914;
  color: white;
}

</style>