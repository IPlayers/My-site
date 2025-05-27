<template>
  <div :class="['association-page', { dark: isDarkMode }]">
    <div class="top-bar">
      <button @click="navigateToMainPage" class="back-button">← Retour</button>
      <button @click="toggleDarkMode" class="dark-toggle">
        {{ isDarkMode ? '☀️ Light Mode' : '🌒 Dark Mode' }}
      </button>
    </div>

    <div class="titre">
      <h1>Mon Association</h1>
      <p>Rejoignez notre communauté pour construire ensemble !</p>
      <p>
        <a href="https://alpes-esport.fr" target="_blank" rel="noopener noreferrer">
          https://alpes-esport.fr
        </a>
      </p>
    </div>

    <div class="content">
      <div class="left-div">
        <h2>Mon rôle dans l'association</h2>
        <AssociationText />
      </div>

      <div class="right-content">
        <div class="photo1" @click="redirectToAE">
          <img  
            src="../assets/Bannière twitter_Alpes Esport.jpg"
            alt="Bannière Alpes Esport"
          />
        </div>
        <div class="incrustation">
          <iframe 
            src="https://alpes-esport.fr" 
            frameborder="0">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AssociationText from '../components/AssociationText.vue';

export default {
  name: 'AssociationPage',
  components: {
    AssociationText
  },
  data() {
    return {
      isDarkMode: false
    };
  },
  methods: {
    navigateToMainPage() {
      this.$router.push({ name: 'MainPage' });
    },
    redirectToAE() {
      window.open('https://alpes-esport.fr', '_blank');
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  }
};
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
  background-image: url('../assets/BannièreRemplie.png');
  background-size: cover;
  background-position: center;
  font-family: 'Segoe UI', sans-serif;
  overflow: hidden;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.association-page {
  position: fixed;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(29, 78, 216, 0.95), rgba(56, 189, 248, 0.95));
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: white;
}

.association-page.dark {
  background: linear-gradient(180deg, #0f172a, #1e293b);
  color: #f3f4f6;
}

.association-page.dark .left-div {
  background-color: rgba(30, 41, 59, 0.95);
  color: #f1f5f9;
}

.association-page.dark .back-button,
.association-page.dark .dark-toggle {
  background-color: #334155;
  color: #f8fafc;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.back-button, .dark-toggle {
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background-color: #FFD700;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.back-button:hover,
.dark-toggle:hover {
  background-color: #fff8c5;
}

.titre {
  text-align: center;
  margin-bottom: 20px;
}

.titre h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.titre p {
  margin: 5px 0;
  color: inherit;
}

.content {
  display: flex;
  gap: 20px;
  flex: 1;
  justify-content: center;
  align-items: stretch;
  overflow: hidden;
  max-height: calc(100vh - 200px);
  width: 100%;
}

.left-div {
  flex: 1 1 45%;
  max-width: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  color: #1e3a8a;
  text-align: left;
  overflow-y: auto;
  overflow-wrap: break-word;
  word-break: break-word;
}

.left-div h2 {
  margin-bottom: 15px;
  font-size: 1.8rem;
}

.right-content {
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
}

.photo1 {
  flex: 1;
}

.photo1 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.photo1:hover img {
  transform: scale(1.03);
}

.incrustation {
  flex: 1;
  overflow: hidden;
}

.incrustation iframe {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: none;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  html, body {
    overflow: auto;
  }

  .association-page {
    position: static;
    height: auto;
    min-height: 100vh;
    overflow-y: auto;
  }

  .content {
    flex-direction: column;
    max-height: none;
  }

  .left-div, .right-content {
    width: 100%;
    flex: none;
  }

  .left-div {
    padding-inline: 16px;
  }

  .photo1, .incrustation {
    height: 200px;
  }

  .incrustation {
    display: none;
  }

  .photo1 img {
    object-fit: cover;
  }
}
</style>
