<template>
  <div class="cv-section">
    <button @click="navigateToMainPage" class="back-button">Retour à la page principale</button>
    <h1>Mon CV</h1>
    <p>Consultez mon parcours professionnel ici: Intégrer mon nouveau CV 
      (diviser par deux dans la longueur pour le responsive et
      dans la largeur pour le pc) et faire des sections cliquables sur le même cv avec des menus déroulants
      ou liens ou autres
    </p>
  </div>
  <!-- Faire des divs de formes géométriques pour agrémenter des infos -->
</template>

<script>
export default {
  name: 'CvPage',
  methods: {
    navigateToMainPage() {
      this.$router.push({ name: 'MainPage' });
    }
  }
}
</script>

<style scoped>

.cv-section {
  background-size: cover;
  background-position: center center;
  background-repeat: repeat;
  background-image: url("../assets/magicpattern-confetti.png");
  height: 100vh;
  padding: 20px;
  color: #999;
  font-family: Arial, sans-serif;
  text-align: center;
}

.back-button {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 10px 20px;
  background-color: #0057B7;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 1s;
}

.back-button:hover {
  background-color: #89CFF0;
}
</style>