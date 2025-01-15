<template>
  <div class="main-page">
    <h1 class="page-title">Bienvenue sur mon site</h1>
    <div class="grid-container">

      <div class="btn-flip top-left" data-back="Back" data-front="Front" @click="navigateTo('CvPage')"></div>

      <div class="btn-flip top-right" data-back="Back" data-front="Front"></div>

      <div class="btn btn-three">
          <span>HOVER ME</span>
      </div>

      <div class="grid-item top-left" @click="navigateTo('CvPage')">Mon CV</div>
      <div class="grid-item top-right" @click="navigateTo('AssociationPage')">Mon association</div>
      <div class="grid-item bottom-left" @click="navigateTo('ServicesPage')">Mes services</div>
      <div class="grid-item bottom-right" @click="navigateTo('EsportPage')">Mon expérience Esport</div>

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
btn three
*=============================================================================
*/

.btn-three {
  color: #FFF;
  transition: all 0.5s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-three::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(255,255,255,0.5);
  transition: all 0.5s;
}
.btn-three:hover::before {
  opacity: 0 ;
  transform: scale(0.1,0.1);
}
.btn-three::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.5s;
  border: 1px solid rgba(255,255,255,0.5);
  background-color: rgba(0,0,0,0.5);
  transform: scale(0.1,0.1);
}
.btn-three:hover::after {
  opacity: 1;
  transform: scale(1,1);
}

/*
*=============================================================================
btn flip
*=============================================================================
*/


.btn-flip {
  opacity: 1;
  outline: 0;
  color: #fff;
  position: relative;
  text-align: center;
  letter-spacing: 1px;
  display: inline-block;
  text-decoration: none;
  font-family: "Open Sans";
  text-transform: uppercase;
  cursor: pointer;
}

.btn-flip:after {
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  color: #323237;
  display: block;
  transition: 0.5s;
  position: absolute;
  background: #adadaf;
  content: attr(data-back);
  
  height: 100%;
}
.btn-flip:before {
  top: 0;
  left: 0;
  opacity: 1;
  color: #adadaf;
  display: block;
  padding: 0 30px;
  transition: 0.5s;
  position: relative;
  background: #323237;
  content: attr(data-front);
  
  height: 100%;
}

.btn-flip.top-left:hover:after {
  opacity: 1;
  transform: translateX(0) translateY(0) rotateX(0) rotateY(0);
}

.btn-flip.top-left:hover:before {
  opacity: 0;
  transform: translateX(0) translateY(0) rotateX(90deg) rotateY(-90deg);
}

.btn-flip.top-left:after {
  transform: translateX(0) translateY(0) rotateX(0) rotateY(0);
}

.btn-flip.top-left:before {
  transform: translateY(0) rotateX(0) translateX(0) RotateY(0);
}

.btn-flip.top-right:hover:after {
  opacity: 1;
  transform: translateX(0) translateY(0) rotateX(0) rotateY(0);
}

.btn-flip.top-right:hover:before {
  opacity: 0;
  transform: translateX(50%) translateY(-50%) rotateX(0) rotateY(0);
}

.btn-flip.top-right:after {
  transform: translateX(0) translateY(0) rotateX(0) rotateY(0);
}

.btn-flip.top-right:before {
  transform: translateY(0) rotateX(0) translateX(0) RotateY(0);
}

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
}

.page-title {
  margin-bottom: 20px;
  font-size: 2em;
  color: #eeeeee;
}

.grid-container {
  display: grid;
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
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 1.5em;
  transition: background-color 0.5s;
}

.grid-item.bottom-left {
  background-color: #99ff99; /* Vert clair */
}

.grid-item.bottom-right {
  background-color: #ffcc99; /* Orange clair */
}

.grid-item:hover {
  opacity: 0.8;
}
</style>