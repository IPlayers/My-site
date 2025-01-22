<template>
  <div class="association-page">
    <button @click="navigateToMainPage" class="back-button">Retour à la page principale</button>
    <div class="titre">
      <h1>Mon Association</h1>
      <p>Rejoignez notre communauté pour construire ensemble !</p>
      <p>
        <a href="https://alpes-esport.fr" target="_blank" rel="noopener noreferrer">https://alpes-esport.fr</a>
      </p>
    </div>
    <div class="content">
      <div class="left-div">
        <h1>Mon rôle dans l'asssociation</h1>
        <p>{{ AssoText }}</p>
      </div>
      <div class="right-content">
        <div class="photo1" @click="redirectToAE">
          <img  
            src="../assets/Bannière twitter_Alpes Esport.jpg"
            alt="photo1"
            width="100%" 
            height="100%">
        </div>
        <div class="incrustation">
          <iframe 
            src="https://alpes-esport.fr" 
            width="100%" 
            height="100%">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {AssoText} from '../assets/AssoText.js';

export default {
  name: 'AssociationPage',
  data() {
    return {
      AssoText
    }
  },
  methods: {
    navigateToMainPage() {
      this.$router.push({ name: 'MainPage' });
    },
    redirectToAE() {
      window.open('https://alpes-esport.fr', '_blank');
    }
  }
}
</script>

<style scoped>

html, body {
  height: 100%;
  margin: 0;
  overflow: hidden;
  background-image: url('../assets/BannièreRemplie.png');
  background-size: contain;
  background-position: center;
}


.association-page {
  background: linear-gradient(180deg, #0057B7, #89CFF0);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding: 20px;
}


.back-button {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 10px 20px;
  background-color: #FFD700;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition : all 1s;
}

.back-button:hover {
  background-color: #FFFFFF;
}

.titre{
  margin-bottom: 20px;
}

.content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70%;
}

.left-div {
  width: 50%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8); /* Couleur de fond avec opacité */
  border: 2px solid #0057B7; /* Bordure de couleur */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre pour un effet de profondeur */
}

.right-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45%;
  height: 100%;
}

.incrustation {
  width: 100%;
  height: 100%;
}

.photo1{
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
}
</style>