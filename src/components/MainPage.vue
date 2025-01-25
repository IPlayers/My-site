<template>
  <div class="main-page">
    <h1 class="page-title">Bienvenue sur mon site</h1>
    <div class="grid-container">

      <div class="btn btn-three first" @click="navigateTo('CvPage')">
      </div>
      <div class="btn btn-three second" @click="navigateTo('AssociationPage')">
        <div class="logoAE">
        </div>
      </div>
      <div class="btn btn-three third" @click="navigateTo('ServicesPage')">
      </div>
      <div class="btn btn-three fourth" @click="navigateTo('EsportPage')">
      </div>

    </div>
  </div>
</template>


<script>
export default {
  name: 'MainPage',
  props: {
    //msg: String
  },
  methods: {
    navigateTo(page) {
      this.$router.push({ name: page });
    }
  }
}

</script>

<style scoped>

/*
*=============================================================================
original
*=============================================================================
*/

.main-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  color: #eee;
  font-size: 4vw;
  text-align: center; 
  background-size: cover;
  background-position: center center;
  background-repeat: repeat;
  background-image: url("../assets/magicpattern-starry-night.png");
  
}

.page-title {
  margin-bottom: 20px;
  font-size: 6vw;
}

.grid-container {
  display: flex;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  width: 90%;
  height: 90%;
  margin-bottom: 60px;
}

.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.5s;
  position: relative;
}

.logoAE {
  position: absolute;
  z-index: 1;
  background-size: cover;
  background-position: center center;
  background-repeat: repeat;
  background-image: url("../assets/AE_logo.png");
  content: '';
}

/*
*=============================================================================
btn three
*=============================================================================
*/

.btn-three {
  transition: all 0.5s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  width: 25%;
}
.btn-three::before {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
}
.btn-three:hover::before {
  opacity: 0 ;
  transform: scale(0.1,0.1);
}
.btn-three::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.5s;
  transform: scale(0.1,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5%;
}
.btn-three:hover::after {
  opacity: 1;
  transform: scale(1,1);
}

.btn-three.first::before{
  background-size: cover;
  background-position: center center;
  background-repeat: repeat;
  background-image: url("../assets/magicpattern-confetti.png");
  content: 'CV';
  
}
.btn-three.first::after{
  background-size: cover;
  background-position: center center;
  background-repeat: repeat;
  background-image: url("../assets/magicpattern-confetti.png");
  content: 'Pro';
}

.btn-three.second::before{
  background-size: contain;
  background-position: center center;
  background-repeat: repeat;
  background-image: url("../assets/AEBG.png");
  content: 'Mon association';
}
.btn-three.second::after{
  background-size: contain;
  background-position: center center;
  background-repeat: repeat;
  background-image: url("../assets/AEBG.png");
  content: 'Alpes Esport';
}

.btn-three.third::before{
  background-size: cover;
  background-position: center center;
  background-repeat: repeat;
  background-image: url("../assets/magicpattern-wave-generator.png");
  content: 'Services';
}
.btn-three.third::after{
  background-size: cover;
  background-position: center center;
  background-repeat: repeat;
  background-image: url("../assets/magicpattern-wave-generator.png");
  content: 'Mes services';
}

.btn-three.fourth::before{
  background-size: cover;
  background-position: center center;
  background-repeat: repeat;
  background-image: url("../assets/magicpattern-grid-pattern-before.png");
  content: 'Esport';
}
.btn-three.fourth::after{
  background-size: cover;
  background-position: center center;
  background-repeat: repeat;
  background-image: url("../assets/magicpattern-grid-pattern-after.png");
  content: 'Mon parcours';
}

</style>