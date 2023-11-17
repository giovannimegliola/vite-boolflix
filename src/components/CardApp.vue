<template>
  <div class="card bg-transparent" @click="toggleCard">
    <div v-if="front">
      <img :src="getImage" :alt="title" class="img-fluid d-block">
    </div>
    <div v-else>
      <h3>{{ title }}</h3>
      <p>
        <img :src="getFlag" :alt="language + 'flag'" class="flag" > 
      </p>
      <p>
        <i v-for="n in 5" :key="n" class="fa-star" :class="(n<= getVote) ? 'fa-solid' : 'fa-regular' "></i>
      </p>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'CardApp',
    props:[
      'title',
      'vote',
      'language',
      'image',
      'overview'
    ],
    data (){
      return {
        flags: [
          'en',
          'es',
          'fr',
          'it',
          'de'
        ],
        imgPath: "https://image.tmdb.org/t/p/w342",
        front: true
      }
    },
    computed: {
      getVote: function (){
        return Math.ceil(this.vote /2);
      },
      getFlag (){
        let flag = `/public/images/${this.language}.png`;
        if (!this.flags.includes(this.language)){
          flag = `/public/images/fake.png`;
        }
        return flag;
      },
      getImage(){
        return this.imgPath + this.image;
      }

    },
    methods:{
      toggleCard(){
        this.front = !this.front;
      }
    }
    
  }
</script>

<style lang="scss" scoped>
img.flag{
  width: 40px;
}

</style>