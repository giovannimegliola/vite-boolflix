<template>
  <header>
    <div class="container">
      <div class="row d-flex justify-content-between">
        <div class="col-6 mt-3 mb-3">
          <h1>BOOLFLIX</h1>
        </div>
        <div class="col-6 mt-4 mb-2">
          <form @submit.prevent="searchContent">
            <div class="input-group">
              <input type="search" class="form-control rounded" placeholder="Cerca Film e Serie TV nel nostro catalogo" aria-label="Search" v-model="store.searchText" @keyup.enter="$emit('search')" required/>
              <button type="button" class="btn btn-danger mybtn" @click="$emit('search')">Cerca</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { store } from "../data/store.js";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss">
header {
  h1 {
    color: #e50914;
  }
  .mybtn{
  background-color: #e50914;
  color: white;
  }
}
</style>
