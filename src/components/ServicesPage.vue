<template>
  <div class="services-section">
    <button @click="navigateToMainPage" class="back-button">Retour à la page principale</button>
    <h1>Services</h1>
    <p>Découvrez les services que je propose pour vous aider.</p>
  </div>
</template>

<script>
export default {
  name: 'ServicesPages',
  methods: {
    navigateToMainPage() {
      this.$router.push({ name: 'MainPage' });
    }
  }
}
</script>

<style scoped>
.services-section {
  background-size: cover;
  background-position: center center;
  background-repeat: repeat;
  background-image: url("../assets/magicpattern-wave-generator.png");
  height: 100vh;
  color: #eee;
  text-align: center;
  font-family: Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-button {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>