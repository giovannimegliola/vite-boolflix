<template>
  <div class="mycard">
    <div class="mycard-inner">
      <div class="mycard-front">
        <img v-if="myMovie.poster_path" :src="`https://image.tmdb.org/t/p/w342/${myMovie.poster_path}`"/>
        <div v-else class="mypost text-white">
          Poster non disponibile
        </div>
      </div>
      <div class="mycard-back mt-5" :class="{ 'mypost-back': !myMovie.poster_path }">
        <ul>
          <li>
            Titolo Film:<br />
            <strong>{{ myMovie.title }}</strong>
          </li>
          <li class="mt-2">
            Titolo Originale:<br />
            <strong>{{ myMovie.original_title }}</strong>
          </li>
          <li class="mt-2">
            Lingua:
            <span :class="`${getFlagCode(myMovie.original_language)}`"></span>
          </li>
          <li class="mt-2">
            Voto:
            <i v-for="n in 5" :key="n" class="fa-star" :class="{'fa-solid': n <= Math.ceil(myMovie.vote_average / 2), 'fa-regular': n > Math.ceil(myMovie.vote_average / 2),}" style="color: #ffff00"></i>
          </li>
        </ul>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  props: {
    myMovie: Object,
    language: String 
  },
  data (){
      return {
        flags: [
          'en',
          'es',
          'fr',
          'it',
          'de'
        ],
      }
    },
  methods: {
    getFlagCode (){
        let flag = `/public/images/${this.language}.png`;
        if (!this.flags.includes(this.language)){
          flag = `/public/images/fake.png`;
        }
        return flag;
      },
  },
};
</script>

<style scoped>
.mycard {
  background-color: transparent;
  margin-bottom: 500px;
  filter: drop-shadow(0 0 10px rgba(255, 13, 0, 0.5));
}

.mycard-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s; 
  transform-style: preserve-3d;
}

.mycard:hover .mycard-inner {
  transform: rotateY(180deg);
}

.mycard-front,
.mycard-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; 
}

.mycard-back {
  background-color: #000;
  color: white;
  transform: rotateY(180deg);
  font-size: 15px;
}

.mycard:hover .mycard-front img {
  filter: brightness(0%);
}

.mycard-back ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding-top: 20%;
  width: 300px;
  overflow-wrap: break-word;
  margin: auto;
}

.mypost {
  color: #e50914;
  font-size: 20px;
  padding-bottom: 50px;
  padding-top: 50px;
  background-color: #e50914;
} 

.mycard:hover .mypost {
  opacity: 0;
}

.mycard:hover .mycard-back img {
  filter: brightness(0%);
  padding: 50px;
  background-color: #e50914;
}

 .mypost-back {
  color: white;
  font-size: 15px;
  padding-bottom: 350px;
  background-color: #e50914;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} 

</style>
