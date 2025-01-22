<template>
  <div class="esport-section">
    <button @click="navigateToMainPage" class="back-button">Retour à la page principale</button>
    <h1>Mon Parcours Esport</h1>
    <p>Découvrez mes réalisations dans le monde de l'Esport.</p>
  </div>
</template>

<script>
export default {
  name: 'EsportPage',
  methods: {
    navigateToMainPage() {
      this.$router.push({ name: 'MainPage' });
    }
  }
}
</script>

<style scoped>
.esport-section {
  background: linear-gradient(180deg, #FFD700, #000000);
  height: 100vh;
  color: white;
  font-family: Arial, sans-serif;
  text-align: center;
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