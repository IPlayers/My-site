<template>
  <div class="cv-section">
    <button @click="navigateToMainPage" class="back-button">Retour à la page principale</button>
    <h1>Mon CV</h1>
    <p>Consultez mon parcours professionnel ici.</p>
  </div>
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
  background: #FFFFFF;
  height: 100vh;
  padding: 20px;
  color: #333;
  font-family: Arial, sans-serif;
  text-align: center;
  border-top: 10px solid #FFD700;
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