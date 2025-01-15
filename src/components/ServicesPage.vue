<template>
  <div>
    <button @click="navigateToMainPage" class="back-button">Retour à la page principale</button>
    <h1>Services</h1>
    <p>Contenu de la Page 3</p>
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