<template>
  <div class="mycard">
    <div class="mycard-inner" :class="{ 'prevent-rotate': !mySerie.poster_path }">
      <div class="mycard-front">
        <img v-if="mySerie.poster_path" :src="`https://image.tmdb.org/t/p/w342/${mySerie.poster_path}`" />
        <div v-else class="mypost text-white">
          Poster non disponibile
        </div>
      </div>
      <div class="mycard-back mt-5" :class="{ 'mypost-back': !mySerie.poster_path }">
        <ul>
          <li>
            Titolo Serie:<br />
            <strong>{{ mySerie.name }}</strong>
          </li>
          <li class="mt-2">
            Titolo Originale:<br />
            <strong>{{ mySerie.original_name }}</strong>
          </li>
          <li class="mt-2">
            Lingua:
            <img :src="getFlagCode" :alt="language" class="flag" >
          </li>
          <li class="mt-2">
            Voto:
            <i v-for="n in 5" :key="n" class="fa-star" :class="{'fa-solid': n <= Math.ceil(mySerie.vote_average / 2), 'fa-regular': n > Math.ceil(mySerie.vote_average / 2), }" style="color: yellow"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  props: {
    mySerie: Object,
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
        let flag = `/public/images/${this.mySerie.language}.png`;
        if (!this.flags.includes(this.mySerie.language)){
          flag = `/public/images/fake.png`;
        }
        return flag;
      },
  },
};
</script>

<style scoped>
img.flag{
  width: 10px;
}
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
