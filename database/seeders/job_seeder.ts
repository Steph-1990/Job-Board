import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Company from '#models/company'
import Job from '#models/job'
import User from '#models/user'

export default class extends BaseSeeder {
  public async run() {
    const recruterUser = await User.findByOrFail('id', '2')

    await Job.truncate(true)
    const companies = await Company.all()

    for (const company of companies) {
      let jobsData: {
        title: string
        description: string
        location: string
        salary_min: number
        salary_max: number
        job_type: string
        owner_id: number
      }[]

      switch (company.name) {
        case 'MoutonShear Inc.':
          jobsData = [
            {
              title: 'Maître Tondeur de Moutons',
              description: `### Votre rôle dans l'équipe
En tant que Maître Tondeur de Moutons chez **MoutonShear Inc.**, vous serez au cœur de notre mission de transformer la tonte de moutons en un véritable art. Vous parcourrez les plus beaux pâturages du monde, équipé des dernières tondeuses high-tech, pour offrir à nos clients une expérience de tonte inoubliable. Vous travaillerez avec une équipe internationale de tondeurs passionnés, échangerez des techniques de coupe innovantes et participerez à des concours de stylisme ovins.

### Ce que nous offrons
- **Formation continue** en techniques de tonte avancées, y compris les styles les plus excentriques.
- **Voyages internationaux** vers des destinations pastorales exotiques.
- **Uniformes stylés** et équipements de tonte de pointe.
- **Opportunités de carrière** pour devenir une icône dans le monde de la mode ovine.

### Ce que nous recherchons
- Expérience démontrée en tonte de moutons, avec un portfolio de coupes réussies.
- Passion pour la mode et le bien-être animal.
- Capacité à communiquer avec les moutons (la maîtrise du bêlement est un plus).
- Permis de conduire international pour les déplacements fréquents.`,
              location: 'Global',
              salary_min: 35000,
              salary_max: 50000,
              job_type: 'full_time',
              owner_id: recruterUser.id,
            },
            {
              title: 'Styliste Ovin',
              description: `### Votre mission
Chez **MoutonShear Inc.**, nous croyons que chaque mouton mérite de se sentir fabuleux. En tant que Styliste Ovin, vous créerez des designs de tonte innovants, définirez les tendances de la mode ovine et collaborerez avec des moutons stars pour des événements spéciaux. Vous aurez l'opportunité de voir vos créations défiler lors de nos célèbres 'Sheep Fashion Weeks'.

### Avantages
- **Exposition internationale** dans le milieu de la mode animale.
- **Collaborations exclusives** avec des marques de luxe pour animaux.
- **Ateliers créatifs** pour développer vos compétences artistiques.
- **Ambiance de travail ludique** avec des collègues passionnés.

### Profil recherché
- Diplôme en design de mode ou expérience équivalente.
- Portfolio démontrant votre créativité (les designs sur autres animaux sont acceptés).
- Sens aigu du détail et de l'esthétique.
- Amour inconditionnel pour les moutons et leur toison.`,
              location: 'Paris',
              salary_min: 40000,
              salary_max: 55000,
              job_type: 'full_time',
              owner_id: recruterUser.id,
            },
          ]
          break

        case "Tract'Air Pneus":
          jobsData = [
            {
              title: 'Ingénieur en Pneumatiques Surdimensionnés',
              description: `### Votre rôle
En tant qu'Ingénieur en Pneumatiques Surdimensionnés chez **Tract'Air Pneus**, vous serez responsable de la conception de pneus qui repoussent les limites de la taille et de la fonctionnalité. Vous travaillerez sur des projets ambitieux comme des pneus flottants, lumineux, et même parlants. Votre mission sera de transformer chaque tracteur en une bête de compétition.

### Ce que nous offrons
- **Laboratoire d'innovation** avec accès aux technologies les plus avancées.
- **Essais sur le terrain** avec des tracteurs équipés de nos pneus géants.
- **Équipe dynamique** composée d'ingénieurs et de designers créatifs.
- **Participation à des salons internationaux** de l'agriculture et de l'innovation.

### Profil recherché
- Diplôme en ingénierie mécanique ou génie des matériaux.
- Expérience en conception de pneumatiques ou produits similaires.
- Esprit créatif et goût pour les défis techniques.
- Capacité à penser en grand... vraiment très grand.`,
              location: 'Lyon',
              salary_min: 50000,
              salary_max: 70000,
              job_type: 'full_time',
              owner_id: recruterUser.id,
            },
            {
              title: 'Testeur de Pneus Extrêmes',
              description: `### Votre mission
Rejoignez **Tract'Air Pneus** en tant que Testeur de Pneus Extrêmes et mettez nos créations à l'épreuve dans les conditions les plus folles. Des marécages aux montagnes, vous conduirez des tracteurs équipés de nos pneus surdimensionnés pour en tester la résistance, la flottabilité, et peut-être même la capacité à rouler sur la lune (projet en cours).

### Avantages
- **Aventures garanties** dans des environnements variés.
- **Equipement de sécurité complet**, y compris combinaison spatiale si nécessaire.
- **Formation continue** en techniques de conduite extrême.
- **Assurance vie** (parce qu'on ne sait jamais).

### Profil recherché
- Expérience en conduite de tracteurs ou véhicules lourds.
- Goût du risque et esprit aventurier.
- Bonne condition physique.
- Sens de l'humour appréciable pour les situations improbables.`,
              location: 'Monde',
              salary_min: 40000,
              salary_max: 60000,
              job_type: 'contract',
              owner_id: recruterUser.id,
            },
          ]
          break

        case 'La Ferme 2.0':
          jobsData = [
            {
              title: 'Développeur IoT Agricole',
              description: `### Votre rôle
Au sein de **La Ferme 2.0**, vous serez chargé de développer des solutions IoT innovantes pour moderniser les exploitations agricoles. Vous créerez des capteurs intelligents pour les sols, des systèmes de suivi pour le bétail, et des applications mobiles pour gérer la ferme depuis un smartphone. Votre travail contribuera à rendre l'agriculture plus efficace et connectée.

### Ce que nous offrons
- **Environnement de travail stimulant** au croisement de la technologie et de l'agriculture.
- **Projets variés** allant de la programmation de drones à l'automatisation des serres.
- **Collaboration avec des agriculteurs** pour comprendre leurs besoins réels.
- **Horaires flexibles** et possibilité de télétravail (même depuis un champ).

### Profil recherché
- Expérience en développement embarqué et IoT.
- Connaissances en agriculture ou intérêt marqué pour le domaine.
- Esprit innovant et capacité à résoudre des problèmes complexes.
- Aptitude à travailler en équipe multidisciplinaire.`,
              location: 'Toulouse',
              salary_min: 45000,
              salary_max: 65000,
              job_type: 'full_time',
              owner_id: recruterUser.id,
            },
            {
              title: 'Spécialiste en IA Agricole',
              description: `### Votre mission
En tant que Spécialiste en IA Agricole, vous développerez des algorithmes intelligents pour optimiser les rendements, prévoir les maladies des cultures, et même interpréter les humeurs des vaches grâce à la reconnaissance faciale. Vous intégrerez l'équipe de R&D de **La Ferme 2.0** pour repousser les frontières de l'agriculture moderne.

### Avantages
- **Participation à des projets révolutionnaires** dans l'agritech.
- **Accès à des données agricoles massives** pour entraîner vos modèles.
- **Ambiance de start-up** avec l'odeur du foin en plus.
- **Séances de brainstorming** avec des poules philosophiques (facultatif).

### Profil recherché
- Expertise en intelligence artificielle et machine learning.
- Connaissance des techniques de vision par ordinateur.
- Passion pour l'innovation agricole.
- Capacité à expliquer des concepts complexes de manière simple (aux humains et aux animaux).`,
              location: 'Champ de',
              salary_min: 55000,
              salary_max: 80000,
              job_type: 'full_time',
              owner_id: recruterUser.id,
            },
          ]
          break

        case 'Poules & Co.':
          jobsData = [
            {
              title: 'Psychologue Aviaire',
              description: `### Votre rôle
En tant que Psychologue Aviaire chez **Poules & Co.**, vous aiderez nos amis à plumes à surmonter le stress quotidien de la vie en basse-cour. Vous organiserez des séances individuelles et de groupe, élaborerez des programmes de bien-être, et développerez des thérapies innovantes comme l'art-picorage ou le yoga du poulet.

### Ce que nous offrons
- **Environnement de travail unique** entouré de volailles attachantes.
- **Formation en techniques thérapeutiques** spécifiques aux oiseaux.
- **Possibilité de publier des articles** dans des revues scientifiques (oui, ça existe).
- **Repas bio** (œufs frais garantis).

### Profil recherché
- Diplôme en psychologie animale ou équivalent.
- Expérience avec les animaux de ferme, idéalement les volailles.
- Empathie exceptionnelle et patience infinie.
- Capacité à cacoter est un plus apprécié.`,
              location: 'Bretagne',
              salary_min: 35000,
              salary_max: 45000,
              job_type: 'part_time',
              owner_id: recruterUser.id,
            },
            {
              title: 'Coach de Développement Personnel pour Oies',
              description: `### Votre mission
Vous accompagnerez les oies dans leur quête de sens au sein de **Poules & Co.**. En tant que Coach, vous animerez des ateliers de méditation, des séminaires de leadership aviaire, et aiderez nos clientes à trouver leur voie, que ce soit en migration ou en management de troupeau.

### Avantages
- **Travail en plein air** dans un cadre bucolique.
- **Interactions enrichissantes** avec des oies charismatiques.
- **Possibilité de voyager** lors des migrations saisonnières.
- **Equipement fourni**, y compris bottes en caoutchouc élégantes.

### Profil recherché
- Certification en coaching ou développement personnel.
- Compréhension des dynamiques sociales chez les oiseaux.
- Enthousiasme et esprit positif.
- Aisance à communiquer (langage corporel apprécié).`,
              location: 'Camargue',
              salary_min: 30000,
              salary_max: 40000,
              job_type: 'contract',
              owner_id: recruterUser.id,
            },
          ]
          break

        case 'BioBeurk':
          jobsData = [
            {
              title: 'Sélectionneur de Légumes Moches',
              description: `### Votre rôle
Chez **BioBeurk**, vous serez chargé de parcourir les champs à la recherche des légumes les plus esthétiquement défavorisés. Vous sélectionnerez les spécimens les plus tordus, biscornus, et étranges pour notre clientèle qui apprécie la beauté intérieure. Votre œil aiguisé contribuera à réduire le gaspillage alimentaire en donnant une chance à ces merveilles de la nature.

### Ce que nous offrons
- **Travail en plein air** et connexion avec la nature.
- **Participation à un mouvement éthique** contre le gaspillage alimentaire.
- **Ambiance conviviale** au sein d'une équipe passionnée.
- **Dégustations régulières** des légumes sélectionnés.

### Profil recherché
- Amour pour les légumes sous toutes leurs formes.
- Sens de l'observation et attention aux détails insolites.
- Engagement pour des causes environnementales.
- Capacité à transporter des sacs de légumes (parfois très étranges).

### Salaire
- Entre 25 000€ et 35 000€ selon expérience.`,
              location: 'Normandie',
              salary_min: 25000,
              salary_max: 35000,
              job_type: 'seasonal',
              owner_id: recruterUser.id,
            },
            {
              title: 'Ambassadeur des Légumes Laids',
              description: `### Votre mission
En tant qu'Ambassadeur des Légumes Laids, vous représenterez **BioBeurk** lors d'événements, salons, et sur les réseaux sociaux. Vous sensibiliserez le public à l'importance de consommer des légumes moches, partagerez des recettes créatives, et animerez des ateliers pour enfants (et adultes) sur l'acceptation de la différence.

### Avantages
- **Visibilité médiatique** et opportunités de networking.
- **Formation en communication** et marketing éthique.
- **Participation à des événements fun** comme le 'Festival de la Carotte Tordue'.
- **Produits gratuits** pour tester nos légumes à la maison.

### Profil recherché
- Excellentes compétences en communication.
- Présence sur les réseaux sociaux appréciée.
- Enthousiasme contagieux pour notre cause.
- Créativité et sens de l'humour.

### Salaire
- Entre 30 000€ et 40 000€ avec possibilité de primes.`,
              location: 'Paris',
              salary_min: 30000,
              salary_max: 40000,
              job_type: 'full_time',
              owner_id: recruterUser.id,
            },
          ]
          break

        case 'Champignon Cloud':
          jobsData = [
            {
              title: 'Mycologue Informatique',
              description: `### Votre rôle
En tant que Mycologue Informatique chez **Champignon Cloud**, vous fusionnerez le monde des champignons et de la technologie. Vous serez responsable de la maintenance de nos serveurs biologiques, de l'optimisation de la croissance des mycéliums pour un stockage de données efficace, et de la supervision des processus de sauvegarde naturelle.

### Ce que nous offrons
- **Environnement de travail unique** dans des caves à champignons high-tech.
- **Projets innovants** mêlant biologie et informatique.
- **Formation croisée** en mycologie et IT.
- **Ambiance sereine** (les champignons ne font pas de bruit).

### Profil recherché
- Diplôme en biologie avec une spécialisation en mycologie ou informatique.
- Connaissances en infrastructures IT et data centers.
- Esprit innovant et ouvert aux idées non conventionnelles.
- Pas d'allergie aux champignons (évidemment).

### Salaire
- Entre 45 000€ et 65 000€ selon profil.`,
              location: 'Tours',
              salary_min: 45000,
              salary_max: 65000,
              job_type: 'full_time',
              owner_id: recruterUser.id,
            },
            {
              title: 'Technicien de Maintenance Souterrain',
              description: `### Votre mission
Rejoignez **Champignon Cloud** en tant que Technicien de Maintenance Souterrain. Vous assurerez le bon fonctionnement de nos installations souterraines, surveillerez les niveaux d'humidité, et veillerez à ce que nos serveurs champignons soient en pleine forme. Une part de votre travail consistera également à cueillir les champignons pour nos clients gourmands.

### Avantages
- **Travail dans un environnement frais** (parfait pour les chaudes journées d'été).
- **Produits frais** à emporter chez vous.
- **Équipe soudée** avec un esprit d'entraide.
- **Opportunités d'évolution** vers des postes plus techniques.

### Profil recherché
- Formation en maintenance industrielle ou similaire.
- Adaptabilité à un environnement souterrain.
- Sens de l'observation et réactivité.
- Appréciation pour les champignons sous toutes leurs formes.

### Salaire
- Entre 30 000€ et 40 000€ par an.`,
              location: 'Tours',
              salary_min: 30000,
              salary_max: 40000,
              job_type: 'full_time',
              owner_id: recruterUser.id,
            },
          ]
          break

        // Continue with other companies in the same fashion

        default:
          jobsData = []
      }

      await company.related('jobs').createMany(jobsData)
    }
  }
}
