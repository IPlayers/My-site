<template>
  <div class="cv-page">
    <div class="top-bar">
      <button @click="$router.go(-1)" class="back-button">← Retour</button>
    </div>

    <h1 class="cv-title">Mon Curriculum Vitæ</h1>

    <main class="cv-content">
      <div class="cv-columns">
        <!-- Colonne gauche : image du CV -->
        <div class="cv-image">
          <h2 class="cv-download-title">Télécharge mon CV via l'image ↓</h2>
          <img
            src="@/assets/CV_2025.png"
            alt="CV"
            @click="openModalAt($event)"
            style="cursor:pointer;"
          />
        </div>
        <!-- Colonne droite : contenu dynamique -->
        <section class="cv-dynamique">
          <h2 class="cv-dynamique-title">Détails et explications</h2>
          <div class="cv-toggle-btns">
            <button @click="expandAll" class="cv-toggle-btn">Tout déplier</button>
            <button @click="collapseAll" class="cv-toggle-btn">Tout replier</button>
          </div>

          <h3 class="cv-dynamique-subtitle">Compétences - Techniques</h3>
          <div v-for="(item, index) in competencesTechniques" :key="'tech-'+index">
            <div @click="toggleSection('tech', index)" class="cv-item">
              <strong>{{ item.title }}</strong>
            </div>
            <div v-show="isVisible('tech', index)" class="cv-detail">
              <p v-html="item.detail"></p>
            </div>
          </div>

          <h3 class="cv-dynamique-subtitle">Expériences professionnelles - Consultant EDI</h3>
          <div v-for="(item, index) in consultantEdi" :key="'edi-'+index">
            <div @click="toggleSection('edi', index)" class="cv-item">
              <strong>{{ item.title }}</strong>
            </div>
            <div v-show="isVisible('edi', index)" class="cv-detail">
              <p v-html="item.detail"></p>
            </div>
          </div>

          <h3 class="cv-dynamique-subtitle">Projets personnels</h3>
          <div v-for="(item, index) in autresExperiences" :key="'autres-'+index">
            <div @click="toggleSection('autres', index)" class="cv-item">
              <strong>{{ item.title }}</strong>
            </div>
            <div v-show="isVisible('autres', index)" class="cv-detail">
              <p v-html="item.detail"></p>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- Modal de choix du format -->
    <div v-if="showModal" class="cv-modal-overlay" @click.self="closeModal">
      <div
        class="cv-modal"
        :style="{
          position: 'fixed',
          left: modalX + 'px',
          top: modalY + 'px',
          width: '320px',
          maxWidth: '90vw'
        }"
      >
        <h3>Choisissez le format de téléchargement</h3>
        <button @click="downloadFile('png')" class="modal-btn">PNG</button>
        <button @click="downloadFile('pdf')" class="modal-btn">PDF</button>
        <button @click="closeModal" class="modal-close">Annuler</button>
        <div
          class="cv-modal-arrow"
          :style="{ left: arrowOffset + 'px' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: {},
      showModal: false,
      modalX: 0,
      modalY: 0,

      competencesTechniques: [
        { title: "Bases de données SQL/NoSQL",
        detail: "J'ai pu en avoir l'utilisation à de multiples reprises lors de projets. Également une maîtrise via MySQL pour MariaDB ou SQLite pour app mobile."
          + "Lors de la fin de mon cycle d'ingénieurie, mon option m'a permis d'avoir une initiation au NoSQL pour du bigdata via MondoGB." },

        { title: "Python (IA et automatisation)",
        detail: "Le python est le premier langage sur lequel j'ai programmé au lycée,"
          + " je l'ai toujours utilisé nativement et encore aujourd'hui pour plusieurs projets où j'ai besoin d'une automatisation de quoi que ce soit sur des pages web ou sur des applis perso."
          + " J'ai aussi pu apprivoiser certaines IA avec Python." },

        { title: "JS (application mobile et web)",
        detail: "J'ai pu exploré le JS sous plusieurs angles, avec et sans framework comme ce site avec VueJS."
          + " J'ai également pu avoir à toucher à React JS et Angular JS dans le contexte de projets coopératifs." },

        { title: "Typescript",
        detail: "Comme décrit, mon utilisation du typescript s'est toujours faite avec Angular et" 
          + " principalement dans la création d'applications mobiles en tant que projets personnels sur plusieurs domaines comme des jeux." },

        { title: "C++ / C# avec Unreal Engine et Unity",
        detail: "Ma première appréciation du C++ s'est fait à travers l'application de ce que j'avais pu apprendre en POO avec JAVA sur une application initialement en C."
          + " Cela m'a ouvert la porte à plusieurs projets réalisés sous Unreal Engine. Pour une plus grande expertise dans le domaine des jeux-vidéos,"
          + " je me suis donc formé pour mieux comprendre les blue prints pour Unreal Engine ainsi que le C# pour avoir le choix d'utiliser Unity à la place de UE si nécessaire."
          + " Je n'ai utilisé Unreal Engine que dans le cadre professionnel en tant que part d'un plus grand projet alors que j'ai pu explorer plus en détails Unity à travers des projets persos ainsi que des projets de groupe de plus grande ampleur lors de mes études." },

        { title: "C : Programmation d'un drone",
        detail: "Lors de ma formation à l'IUT pour l'informatique industrielle, j'utilisais principalement le C."
          + " J'ai pu comprendre comment l'optimisation de la mémoire pouvait avoir une place importante et le projet final de mon diplôme s'est principalement tourné autour de ça et j'ai donc pu finaliser le développement du programme de commande d'un quadricoptère." },

        { title: "EDI / SAP",
        detail: "Plus détails ci-dessous dans la partie <i>Expériences professionnelles - Consultant EDI<i>." },

        { title: "PHP (Laravel) / HTML, CSS",
        detail: "L'intégralité de mon expérience lors de mon alternance de 3ème année d'école d'ingénieur s'est porté autour de ces technos."
          + " J'ai pu appliquer ces technologies pour la maintenance et l'adaptation d'un site web existant à certaines demandes ainsi qu'à la création de A à Z d'un espace FAQ."
          + " L'HTML/CSS étant au centre de n'importe quel projet que j'ai pu faire comme ce site, je reste informé des dernières versions et de leurs évolutions."
          + "Dernièrement, j'ai aussi pu utiliser php dans d'autres projets web personnels qui nécessitaient une certaine permissivité que procure le php." }

      ],

      consultantEdi: [
        { title: "Intégration & Déploiement flux EDI entre ERP internes et partenaires externes",
        detail: "Mise en place de flux EDI entre ERP internes et partenaires externes (clients, fournisseurs, logisticiens)."
          + " Développement et paramétrage de mappings EDI (EDIFACT, ANSI X12, XML, CSV) et intégration des flux dans SAP PI/PO."
          + " Participation aux phases de recette, tests unitaires et validation des flux avant déploiement des flux sur des environnements de pré-production et production." },

        { title: "Support et maintenance de niveau 3 et documentation.",
        detail: "Support niveau 2/3 : analyse et résolution des anomalies techniques liées à l’échange de fichiers."
          + " Documentation des flux et surveillance des flux (monitoring des échanges en temps réel)." },

        { title: "Sécurité & conformité des connexions et gestion des certificats",
        detail: "Mise en place de connexions sécurisées : AS2, SFTP, HTTPS en suivant les conformités RGPD et normes sectorielles."
          + " Gestion des certificats de chiffrement et signature." },

        { title: "Collaboration & projets, coordination fonctionnelle et animation de réunions techniques",
        detail: "Coordination avec les équipes fonctionnelles et techniques pour le déploiement de nouveaux partenaires."
          + " Participation à des projets de migration (changement de plateforme ou de partenaire)."
          + " Création de spécifications techniques EDI à partir de cahiers des charges métiers."
          + " Animation de réunions techniques avec les partenaires pour la validation des échanges." }

      ],

      autresExperiences: [
        { title: "Manager d'équipes esports de 2012 à 2022",
        detail: "Pour plus de détails, <a href='https://ton-site.fr/esport' target='_blank' rel='noopener noreferrer' style='color:#FFD700;text-decoration:underline;'>rendez-vous sur la partie Esport de mon site</a>." },

        { title: "Coach d'équipes et personnel esport entre 2018 et 2024",
        detail: "Pour plus de détails, <a href='https://ton-site.fr/esport' target='_blank' rel='noopener noreferrer' style='color:#FFD700;text-decoration:underline;'>rendez-vous sur la partie Esport de mon site</a>." },

        { title: "Joueur semi pro sur Rocket League (2022 / top 5000 EU : top 0.1%) et League of Legends (2025 / top 2000 EU : top 0.05%)",
        detail: "Pour plus de détails, <a href='https://maximemoiroud.fr/esport' target='_blank' rel='noopener noreferrer' style='color:#FFD700;text-decoration:underline;'>rendez-vous sur la partie Esport de mon site</a>." },

        { title: "Joueur, coach et arbitre de basket entre 2012 et 2018",
        detail: "A Voiron, Joueur de basket au niveau départemental de 2012 à 2013 puis niveau régional de 2014 à 2016.<br> Diplôme d'arbitre officiel départemental d'Isère obtenu en 2016 et exercé jusqu'en 2018.<br> Coach d'une équipe départementale en 2017." }

      ],

      arrowOffset: 0,
    };
  },
  methods: {
    toggleSection(section, index) {
      const key = `${section}-${index}`;
      this.visible[key] = !this.visible[key];
    },
    isVisible(section, index) {
      return this.visible[`${section}-${index}`];
    },
    closeModal() {
      this.showModal = false;
    },
    downloadFile(format) {
      let file, filename;
      if (format === 'png') {
        file = require('@/assets/CV_2025.png');
        filename = 'CV_Maxime_MOIROUD.png';
      } else if (format === 'pdf') {
        file = '/CV_2025.pdf'; // Chemin relatif depuis public/
        filename = 'CV_Maxime_MOIROUD.pdf';
      }
      // Création d'un lien temporaire pour le téléchargement
      const link = document.createElement('a');
      link.href = file;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      this.closeModal();
    },
    openModalAt(event) {
      const modalWidth = 320;
      const modalHeight = 220;
      let x = event.clientX - modalWidth / 2;
      let y = event.clientY - modalHeight - 42; // 42px pour la pointe sous la modale (42 car... ;) )

      // Empêche la modale de sortir de l'écran horizontalement
      x = Math.max(16, Math.min(window.innerWidth - modalWidth - 16, x));
      // Empêche la modale de sortir en haut
      y = Math.max(16, y);

      // La pointe doit être centrée sous la souris
      this.arrowOffset = event.clientX - x;

      this.modalX = x;
      this.modalY = y;
      this.showModal = true;
    },
    expandAll() {
      // Ouvre tous les items de toutes les sections
      [
        { arr: this.competencesTechniques, prefix: 'tech' },
        { arr: this.consultantEdi, prefix: 'edi' },
        { arr: this.autresExperiences, prefix: 'autres' }
      ].forEach(section => {
        section.arr.forEach((_, idx) => {
          this.visible[`${section.prefix}-${idx}`] = true;
        });
      });
    },
    collapseAll() {
      // Ferme tous les items de toutes les sections
      [
        { arr: this.competencesTechniques, prefix: 'tech' },
        { arr: this.consultantEdi, prefix: 'edi' },
        { arr: this.autresExperiences, prefix: 'autres' }
      ].forEach(section => {
        section.arr.forEach((_, idx) => {
          this.visible[`${section.prefix}-${idx}`] = false;
        });
      });
    }
  }
};
</script>

<style scoped>
.cv-page {
  background: linear-gradient(180deg, #0f172a, #1e293b);
  min-height: 100vh;
  color: #f2f2f2;
  padding: 2rem;
}

.cv-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.div-btn {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.back-button {
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background-color: #FFD700;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.back-button:hover {
  background-color: white;
  color: #000;
}

.cv-content {
  max-width: 100rem;
  margin: 0 auto;
  width: 100%;
}

.cv-columns {
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
  justify-content: center; /* centre le groupe de colonnes */
  align-items: flex-start;
}

.cv-image {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0,0,0,0.5);
  border-radius: 18px;
  padding: 2rem 1.2rem;
  min-width: 260px;
  /* max-width: 350px;  <-- retire cette ligne */
  box-shadow: 0 8px 24px rgba(0,0,0,0.10);
  margin-left: 0.5rem; /* ajoute une petite marge à gauche */
}

.cv-download-title {
  margin-bottom: 1rem;
  text-align: center;
  color: #ffffff;
}

.cv-image a {
  display: block;
  width: 100%;
  border-radius: 12px;
  transition: box-shadow 0.2s;
}

.cv-image img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: contain;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  cursor: pointer;
  transition: box-shadow 0.2s;
}

.cv-dynamique-title {
  margin-bottom: 1.5rem;
  text-align: center;
  color: #FFffff;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.cv-dynamique-subtitle {
  font-size: 1.15rem;
  margin-top: 2rem;
  margin-bottom: 0.8rem;
  color: #fff;
  font-weight: 600;
  text-align: left;
  border-left: 4px solid #FFD700;
  padding-left: 0.7rem;
}

.cv-item {
  cursor: pointer;
  padding: 0.5rem;
  margin: 0.3rem 0;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: background-color 0.3s ease;
  font-size: 1rem;
}

.cv-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.cv-detail {
  margin-left: 1rem;
  margin-top: 0.3rem;
  color: #f2f2f2;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.4);
  border-left: 4px solid #ffffff;
  border-radius: 4px;
}

.cv-dynamique {
  flex: 1 1 50%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  border-radius: 18px;
  padding: 2rem 1.5rem;
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
  min-width: 0;
  margin-left: 2rem; /* espace entre les deux colonnes */
}

.cv-toggle-btns {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
}

.cv-toggle-btn {
  padding: 0.5rem 1.2rem;
  background: #FFD700;
  color: #1e293b;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}
.cv-toggle-btn:hover {
  background: #fffbe7;
}

/* Modal styles */
.cv-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.cv-modal {
  position: fixed;
  background: #1e293b;
  padding: 2rem 2.5rem;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  text-align: center;
  z-index: 1001;
  /* Pour la bulle, arrondi plus marqué */
  border-bottom-left-radius: 32px 24px;
  border-bottom-right-radius: 32px 24px;
}

.cv-modal h3 {
  color: #FFD700;
  margin-bottom: 1.5rem;
}

.modal-btn {
  margin: 0 1rem;
  padding: 0.7rem 2rem;
  background: #FFD700;
  color: #1e293b;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background 0.2s;
}

.modal-btn:hover {
  background: #fffbe7;
}

.modal-close {
  display: block;
  margin: 1.5rem auto 0 auto;
  background: none;
  color: #fff;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: underline;
}

.cv-modal-arrow {
  position: absolute;
  top: 100%;
  /* left sera défini dynamiquement */
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 18px solid transparent;
  border-right: 18px solid transparent;
  border-top: 18px solid #1e293b;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.18));
}

/* Responsive : passe en colonne sur petit écran */
@media (max-width: 900px) {
  .cv-columns {
    flex-direction: column;
    gap: 1.5rem;
  }
  .cv-image, .cv-dynamique {
    max-width: 100%;
    padding: 1rem;
  }
  .cv-dynamique {
    margin-left: 0; /* Ajoute cette ligne pour enlever la marge à gauche */
  }
}

/* Styles spécifiques pour les petits écrans (mobile) */
@media (max-width: 600px) {
  .cv-modal {
    left: 50% !important;
    top: 30vh !important;
    transform: translate(-50%, 0) !important;
    width: 95vw !important;
    min-width: 0 !important;
    max-width: 98vw !important;
  }
}
</style>
