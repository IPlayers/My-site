<template>
  <div class="esport-section">
    <button @click="navigateToMainPage" class="back-button">Retour à la page principale</button>
    <h1>Mon Parcours Esport</h1>
    <p>Découvrez mes réalisations dans le monde de l'Esport.</p>
  </div>
  <!-- Définir une div sur le spaceman pour éviter du contenu dessus -->
   <!-- Des onglets/fenêtres horizontales à déplier pour avoir le contenu -->
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

@keyframes dynamicBackground {
  0% {
    background-size: 100%;
  }
  50% {
    background-size: 105%;
  }
  100% {
    background-size: 100%;
  }
}

.esport-section {
  background-size: cover;
  background-position: center center;
  background-repeat: repeat;
  background-image: url("../assets/spaceman2.jpg");
  height: 100vh;
  color: #eee;
  font-family: Arial, sans-serif;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: dynamicBackground 8s ease-in-out infinite; /* Animation de défilement */
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