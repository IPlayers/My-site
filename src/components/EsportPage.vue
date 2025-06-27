<template>
  <div class="esport-section">
    <button @click="navigateToMainPage" class="back-button">← Retour</button>
    <div class="esport-logos-bottom">
      <img
        v-for="jeu in jeux"
        :key="jeu.nom"
        :src="require(`@/assets/logo_jeux/${jeu.logo}`)"
        :alt="jeu.nom"
        class="esport-logo"
        @click="onLogoClick(jeu)"
      />
    </div>

    <!-- Fenêtre modale -->
    <div
      v-if="jeuSelectionne"
      class="esport-modal"
      @click.self="fermerFenetre"
    >
      <div class="esport-modal-content">
        <button class="modal-close-btn" @click="fermerFenetre">✕</button>
        <h2>{{ jeuSelectionne }}</h2>
        <p>Ici tu peux mettre une description, des images, ou tout autre contenu lié à {{ jeuSelectionne }}.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EsportPage',
  data() {
    return {
      jeux: [
        { nom: 'League of Legends', logo: 'LoL_logo.png' },
        { nom: 'Rocket League', logo: 'RL_logo.png' },
        { nom: 'World of Warcraft', logo: 'WoW_logo.png' },
        { nom: 'Call of Duty', logo: 'CoD_logo.png' }
      ],
      jeuSelectionne: null // Pour la modale
    };
  },
  methods: {
    navigateToMainPage() {
      this.$router.push({ name: 'MainPage' });
    },
    onLogoClick(jeu) {
      // Si déjà ouvert, referme la modale
      if (this.jeuSelectionne === jeu.nom) {
        this.jeuSelectionne = null;
      } else {
        this.jeuSelectionne = jeu.nom;
      }
    },
    fermerFenetre() {
      this.jeuSelectionne = null;
    }
  }
}
</script>

<style scoped>

@keyframes dynamicBackground {
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
}

.esport-section {
  background-image: url("../assets/spaceman2.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  color: #eee;
  font-family: Arial, sans-serif;
  position: relative;
  overflow: hidden;
}

.esport-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: inherit;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
  transform-origin: center;
  animation: dynamicBackground 10s ease-in-out infinite;
}

/* On isole les éléments au-dessus du fond animé */
.esport-section > * {
  position: relative;
  z-index: 1;
}

.esport-logos-bottom {
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  display: flex;
  gap: 2.5rem;
  z-index: 200;
}

.logo {
  position: absolute;
  transform: translate(-50%, -50%);
}

/* Positionnement stable en pixels relatifs à l’écran */
.logo-topleft {
  top: 30%;
  left: 30%;
}
.logo-bottomleft {
  bottom: 20%;
  left: 30%;
}
.logo-topright {
  top: 30%;
  right: 20%;
}
.logo-bottomright {
  bottom: 20%;
  right: 20%;
}

.esport-logo {
  pointer-events: auto;
  width: 110px;
  height: 110px;
  object-fit: contain;
  border-radius: 16px;
  background: rgba(0,0,0,0.25);
  box-shadow: 0 4px 16px rgba(0,0,0,0.18);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.esport-logo:hover {
  transform: scale(1.08);
  box-shadow: 0 8px 32px #FFD70099;
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
  z-index: 2;
}

.back-button:hover {
  background-color: #0056b3;
}

/* Fenêtre modale */
.esport-modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(20, 20, 30, 0.1);
  z-index: 100;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  animation: fadeIn 0.2s;
  padding-top: 8vh;
  padding-bottom: 0;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.esport-modal-content {
  background: #1e293b;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.35);
  padding: 3rem 2.5rem 2.5rem 2.5rem;
  min-width: 60vw;
  min-height: 60vh;
  max-width: 95vw;
  max-height: 90vh;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 300; /* la fenêtre passe au-dessus des logos */
  margin-bottom: 40px; /* espace pour les logos du bas */
}

.modal-close-btn {
  position: absolute;
  top: 18px;
  right: 18px;
  background: #FFD700;
  color: #1e293b;
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  z-index: 2;
}
.modal-close-btn:hover {
  background: #fffbe7;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .esport-logo {
    width: 70px;
    height: 70px;
  }
  .esport-logos-bottom {
    gap: 1.2rem;
    bottom: 20px;
  }
  .logo-topleft {
    top: 30%;
    left: 30%;
  }
  .logo-bottomleft {
    bottom: 30%;
    left: 30%;
  }
  .logo-topright {
    top: 30%;
    right: 30%;
  }
  .logo-bottomright {
    bottom: 30%;
    right: 30%;
  }
  .esport-modal-content {
    min-width: 90vw;
    min-height: 60vh;
    padding: 1.2rem 0.5rem 1.5rem 0.5rem;
  }
}

</style>