<template>
  <div class="main-page">
    <h1 class="page-title">Bienvenue sur mon site</h1>
    <div class="grid-container">

      <div class="btn btn-three top-left" @click="navigateTo('CvPage')">
      </div>
      <div class="btn btn-three top-right" @click="navigateTo('AssociationPage')">
      </div>
      <div class="btn btn-three bottom-left" @click="navigateTo('ServicesPage')">
      </div>
      <div class="btn btn-three bottom-right" @click="navigateTo('EsportPage')">
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
  
}
.btn-three::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
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
}
.btn-three:hover::after {
  opacity: 1;
  transform: scale(1,1);
}

.btn-three.top-left::before{
  background: linear-gradient(#FFFFFF,#FFD700);
  content: 'CV';
}
.btn-three.top-left::after{
  background: linear-gradient(#FFD700,#FFFFFF);
  content: 'Pro';
}

.btn-three.top-right::before{
  background: linear-gradient(#89CFF0, #0057B7);
  opacity: 1;
  content: 'Mon association';
}
.btn-three.top-right::after{
  background: linear-gradient(180deg, #0057B7, #89CFF0);
  content: 'Alpes Esport';
}

.btn-three.bottom-left::before{
  background-color: #FFD700;
  background-image: radial-gradient(circle at center center, #FFD700, #FFD700), repeating-radial-gradient(circle at center center, #FFD700, #FFD700, 23px, transparent 46px, transparent 23px);
  background-blend-mode: multiply;
  content: 'Services';
}
.btn-three.bottom-left::after{
  background-color: #FFD700;
  background-image: radial-gradient(circle at center center, #FFD700, #FFD700), repeating-radial-gradient(circle at center center, #FFD700, #FFD700, 40px, transparent 80px, transparent 40px);
  background-blend-mode: multiply;
  content: 'Mes services';
}

.btn-three.bottom-right::before{
  background: linear-gradient(#000000, #FFD700 );
  content: 'Esport';
}
.btn-three.bottom-right::after{
  background: linear-gradient(#FFD700, #000000);
  content: 'Mon parcours';
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
  background-color: #FFD700;
  background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #FFD700 15px ), repeating-linear-gradient( #0057B755, #0057B7 );
  /*
  background: linear-gradient(170deg, rgba(49, 57, 73, 0.8) 20%, rgba(49, 57, 73, 0.5) 20%, rgba(49, 57, 73, 0.5) 35%, rgba(41, 48, 61, 0.6) 35%, rgba(41, 48, 61, 0.8) 45%, rgba(31, 36, 46, 0.5) 45%, rgba(31, 36, 46, 0.8) 75%, rgba(49, 57, 73, 0.5) 75%), linear-gradient(45deg, rgba(20, 24, 31, 0.8) 0%, rgba(41, 48, 61, 0.8) 50%, rgba(82, 95, 122, 0.8) 50%, rgba(133, 146, 173, 0.8) 100%) #313949;
  */
  color: #333;
  font-family: Arial, sans-serif;
  text-align: center;
}

.page-title {
  margin-bottom: 20px;
  font-size: 2em;
  color: #123456;
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
  position: relative;
}

</style>