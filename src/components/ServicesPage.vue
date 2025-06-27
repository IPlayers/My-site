<template>
  <div class="services-section">
    <button @click="navigateToMainPage" class="back-button">← Retour</button>
    <div class="services-content">
      <h1>Services</h1>
      <p>Découvrez les services que je propose pour vous aider.</p>

      <section id="consulting" class="service-block">
        <h2>Consulting</h2>
        <p>
          Conseil et accompagnement sur vos projets numériques, stratégie, organisation, transformation digitale, gestion de projet, etc.
        </p>
        <ul>
          <li>Audit de vos besoins et de votre organisation</li>
          <li>Proposition de solutions adaptées</li>
          <li>Suivi et pilotage de projet</li>
          <li>Accompagnement au changement</li>
          <li>Veille technologique et recommandations</li>
        </ul>
        <h3>Exemples d'interventions</h3>
        <p>
          - Mise en place d'une stratégie digitale pour une PME<br>
          - Optimisation des processus métiers<br>
          - Formation des équipes à de nouveaux outils numériques
        </p>
      </section>

      <section id="intervenant" class="service-block">
        <h2>Intervenant</h2>
        <p>
          Interventions en écoles, conférences, ateliers ou formations sur l’esport, le numérique, la gestion de projet, etc.
        </p>
        <ul>
          <li>Conférences sur l’esport et ses enjeux</li>
          <li>Ateliers pratiques sur la gestion de projet agile</li>
          <li>Formations à la cybersécurité</li>
          <li>Animation de tables rondes et débats</li>
        </ul>
        <h3>Quelques thèmes abordés</h3>
        <p>
          - L’esport en France et dans le monde<br>
          - Les métiers du numérique<br>
          - L’innovation dans l’éducation
        </p>
      </section>

      <section id="devweb" class="service-block">
        <h2>Développement web</h2>
        <p>
          Création de sites web modernes, applications, maintenance et optimisation. Du site vitrine à l’application métier sur-mesure.
        </p>
        <ul>
          <li>Développement front-end (Vue.js, React, HTML/CSS/JS)</li>
          <li>Développement back-end (Node.js, PHP, Laravel...)</li>
          <li>Intégration d’API et de services tiers</li>
          <li>Optimisation SEO et performance</li>
          <li>Maintenance et évolutions</li>
        </ul>
        <h3>Réalisations possibles</h3>
        <p>
          - Création d’un site e-commerce<br>
          - Développement d’un espace client sécurisé<br>
          - Mise en place d’un blog professionnel<br>
          - Refonte graphique et technique d’un site existant
        </p>
      </section>
    </div>
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
  min-height: 100vh;
  color: #eee;
  font-family: Arial, sans-serif;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 60px;
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

.services-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem 2rem 2rem;
}

.service-block {
  background: rgba(30,41,59,0.92);
  border-radius: 16px;
  margin: 3rem 0;
  padding: 3rem 2rem;
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
  font-size: 1.15rem;
}

@media (max-width: 900px) {
  .services-content {
    padding: 1rem 0.5rem;
  }
}
</style>