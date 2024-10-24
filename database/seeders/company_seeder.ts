import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Company from '#models/company'

export default class extends BaseSeeder {
  public async run() {
    await Company.truncate(true)
    await Company.createMany([
      {
        name: 'MoutonShear Inc.',
        industry: 'Recrutement international de tondeurs de moutons',
        website: 'https://www.moutonshear.fr',
        description:
          "Chez MoutonShear Inc., nous rassemblons les meilleurs tondeurs de moutons du monde entier pour vous offrir une expérience de tonte véritablement inégalée et luxueuse. Avec des années d'expertise dans le maniement des tondeuses les plus sophistiquées, nos professionnels transforment la tonte de moutons en un art à part entière. Que votre troupeau soit petit ou que vous possédiez une véritable armée laineuse digne des plus grands pâturages d'Écosse, nous garantissons une tonte rapide, stylée et adaptée aux dernières tendances de la mode ovine. Nos tondeurs sont formés pour réaliser des coupes classiques, des dreadlocks, des mohawks, et même des teintures arc-en-ciel pour les moutons les plus audacieux qui souhaitent s'exprimer. En plus, nous proposons des services de spa pour moutons, incluant des massages relaxants et des soins de peau à base de produits naturels, afin que vos moutons se sentent aussi bien à l'intérieur qu'ils en ont l'air à l'extérieur. Faites de vos pâturages le défilé de mode le plus en vogue avec MoutonShear Inc.",
      },
      {
        name: "Tract'Air Pneus",
        industry: 'Fabricant de pneus pour tracteurs surdimensionnés',
        website: 'https://www.tractairpneus.com',
        description:
          "Tract'Air Pneus est le pionnier des pneus de tracteurs qui défient les lois de la physique et de la logique agricole. Nos pneus surdimensionnés, allant jusqu'à la taille de petites maisons, sont conçus pour traverser les champs les plus boueux, grimper les montagnes les plus abruptes et même flotter sur l'eau (dans certaines conditions expérimentales). Nous croyons fermement que votre tracteur mérite les meilleures 'chaussures', c'est pourquoi nos pneus sont aussi confortables que des pantoufles pour votre engin. En plus de la technologie anti-dérapante et auto-gonflante, nos pneus sont équipés de lumières LED pour éclairer vos champs la nuit et d'un système de son intégré pour diffuser de la musique country pendant que vous labourez. Avec Tract'Air Pneus, transformez votre tracteur en véritable monstre des champs qui fera l'envie de tous vos voisins.",
      },
      {
        name: 'La Ferme 2.0',
        industry: "Intégration de technologies high-tech dans l'agriculture traditionnelle",
        website: 'https://www.laferme20.tech',
        description:
          "La Ferme 2.0 révolutionne l'agriculture en apportant les dernières technologies directement dans vos champs, granges et étables. Nous équipons vos vaches de colliers GPS avec suivi de fréquence cardiaque, vos poules tweetent automatiquement chaque œuf pondu sur les réseaux sociaux, et vos tracteurs sont pilotés par intelligence artificielle avec reconnaissance faciale des mauvaises herbes. Imaginez une ferme où les drones surveillent les cultures, où les capteurs IoT mesurent l'humidité du sol en temps réel, et où les robots récoltent les fruits tout en chantant des chansons folkloriques. Nous pensons que la ferme du futur doit être aussi connectée qu'un smartphone, avec une application mobile pour contrôler chaque aspect de votre exploitation, de l'alimentation des animaux à la météo personnalisée de votre champ. Et bien sûr, un service client disponible 24/7 pour répondre à vos questions les plus pressantes, comme 'Mon coq ne s'est pas mis à jour, que faire ?' ou 'Comment synchroniser mes vaches avec mon calendrier ?'. Avec La Ferme 2.0, entrez dans l'ère numérique agricole en toute simplicité.",
      },
      {
        name: 'Poules & Co.',
        industry: 'Consulting en bien-être et psychologie aviaire',
        website: 'https://www.poulesandco.fr',
        description:
          "Poules & Co. est le premier cabinet de conseil dédié au bien-être mental et émotionnel de vos volailles. Nous offrons des séances de thérapie de groupe pour poules stressées par le surmenage de la ponte, des ateliers de méditation pour dindons anxieux à l'approche des fêtes, et des programmes de développement personnel pour oies en quête de sens existentiel. Nos psychologues aviaires sont diplômés des meilleures universités (du poulailler) et utilisent des techniques innovantes comme l'hypnose cluck-thérapie et la danse expressive des ailes. Parce qu'un animal heureux pond de meilleurs œufs et que le bonheur intérieur se reflète dans la qualité des plumes, nos experts sont là pour écouter les besoins profonds de vos amis à plumes. Nous organisons également des retraites de bien-être en pleine nature, des séances de yoga pour canards, et des conférences motivantes avec des perroquets inspirants. Avec Poules & Co., offrez à vos volailles une vie épanouie et riche en cacotements joyeux.",
      },
      {
        name: 'BioBeurk',
        industry: 'Production et distribution de légumes esthétiquement défavorisés',
        website: 'https://www.biobeurk.com',
        description:
          "BioBeurk est fier de vous proposer les légumes les plus authentiquement laids et tordus du marché. Nos carottes à trois jambes, nos patates en forme de cœur (ou d'autre chose), et nos tomates siamoises sont cultivées avec amour et sans aucun filtre ni modification génétique. Nous croyons que chaque légume mérite une chance d'être savouré, peu importe son apparence, et nous luttons contre les standards de beauté imposés par les supermarchés. En choisissant BioBeurk, vous soutenez les légumes qui ont été mis de côté simplement parce qu'ils ne correspondaient pas aux normes esthétiques. De plus, nos légumes moches ont souvent plus de goût et de caractère que leurs homologues parfaits. Nous organisons des événements comme 'Le Bal des Légumes Laids' et des concours de la plus étrange patate, pour célébrer la diversité et l'unicité de chaque produit de la terre. Rejoignez notre mouvement pour une alimentation plus inclusive et plus savoureuse.",
      },
      {
        name: 'Champignon Cloud',
        industry: 'Services de cloud computing hébergés dans des caves à champignons',
        website: 'https://www.champignoncloud.fr',
        description:
          "Champignon Cloud innove en hébergeant vos données dans des caves à champignons naturelles, profitant ainsi d'un environnement frais, humide, et idéal pour la croissance... de vos données. En combinant l'informatique de pointe avec la mycologie, nous avons créé des serveurs biologiques qui fonctionnent en symbiose avec des champignons bioluminescents. Non seulement nos serveurs consomment moins d'énergie grâce à la fraîcheur des caves, mais ils sont aussi capables de s'auto-réparer grâce aux propriétés régénératrices des mycéliums. Nos mycologues professionnels surveillent en permanence l'écosystème pour s'assurer que vos données poussent aussi vite que nos champignons shiitake. De plus, chaque client reçoit en cadeau un panier de champignons frais cultivés à côté de leurs données. Une solution écologique, innovante et délicieusement originale pour tous vos besoins en stockage et en calcul informatique.",
      },
      {
        name: 'Vache Coworking',
        industry: 'Espaces de travail collaboratifs pour bovins entrepreneurs',
        website: 'https://www.vachecoworking.com',
        description:
          "Vache Coworking est le premier espace de coworking dédié aux vaches ambitieuses souhaitant sortir du pré et entrer dans le monde des affaires. Offrant du foin de première qualité, des postes de travail ergonomiques adaptés aux cornes, des prises électriques sécurisées pour les sabots, et des salles de réunion insonorisées (parfaites pour les meuglements inspirés), nous fournissons l'environnement idéal pour que vos bovins puissent concrétiser leurs projets de start-up. Que ce soit pour développer une application mobile pour suivre la qualité de l'herbe en temps réel, écrire un livre sur la philosophie bovine, ou lancer une chaîne YouTube sur la rumination consciente, Vache Coworking est l'endroit où les idées prennent vie. Nous organisons également des ateliers de formation sur le marketing laitier, le réseautage entre espèces, et des séances de pitch devant des investisseurs (humains et animaux). Rejoignez notre communauté bovine innovante et changez le monde, une cloche à la fois.",
      },
      {
        name: 'AgriFutur',
        industry: 'Développement de robots agricoles multitâches',
        website: 'https://www.agrifutur.tech',
        description:
          "AgriFutur conçoit des robots agricoles capables de tout faire, ou presque : tondre les champs, traire les vaches, récolter les fruits, et même raconter des blagues pour divertir les ouvriers lors des longues journées de travail. Nos robots sont équipés de la dernière technologie en intelligence artificielle, leur permettant de s'adapter à toutes les situations, même les plus improbables, comme discuter philosophie avec un épouvantail ou danser sous la pluie pour irriger les cultures. Avec des fonctionnalités telles que la reconnaissance vocale des cochons et le pilotage automatique des tracteurs, nos robots rendent l'agriculture plus facile, plus amusante et résolument futuriste. De plus, ils sont programmés pour apprendre en continu, ce qui signifie qu'ils deviennent de plus en plus compétents au fil du temps, et peut-être même un peu trop. Mais ne vous inquiétez pas, nos ingénieurs veillent à ce qu'ils ne prennent pas le contrôle de la ferme... pour l'instant. Investissez dans AgriFutur et faites entrer votre exploitation dans le 22ème siècle dès aujourd'hui.",
      },
      {
        name: 'Porc & Pic',
        industry: 'Plateforme de partage de photos pour porcs',
        website: 'https://www.porcandpic.fr',
        description:
          "Porc & Pic est le réseau social ultime pour les porcs qui aiment partager leurs meilleurs moments avec le reste de la porcherie mondiale. Qu'il s'agisse de photos de bains de boue particulièrement juteux, de selfies groin à groin avec des amis, de recettes de cuisine (pour végétariens bien sûr), ou de défis tendance comme le '100 mètres en roulade', notre plateforme offre un espace sécurisé et convivial pour tous les cochons connectés. Avec des fonctionnalités comme les filtres spéciaux 'nez humide', les hashtags #CochonStylé, et la possibilité de suivre vos fermiers préférés, Porc & Pic est l'endroit où la communauté porcine se retrouve pour échanger et s'amuser. Nous organisons également des concours de popularité, des sondages sur la meilleure marque de glands, et des live streams depuis les meilleures porcheries du monde. Rejoignez-nous et découvrez un monde où les porcs sont les stars des réseaux sociaux.",
      },
      {
        name: 'BeeDrone',
        industry: 'Livraison express de miel par drones-abeilles',
        website: 'https://www.beedrone.io',
        description:
          "BeeDrone combine l'efficacité de la nature avec la technologie de pointe pour livrer du miel directement à votre domicile en un temps record. Nos drones-abeilles, inspirés par la forme aérodynamique des abeilles et programmés pour butiner les meilleurs nectars, survolent les villes et les campagnes pour vous apporter un miel frais, délicieux et entièrement traçable. Plus besoin de craindre les piqûres, nos drones sont aussi doux que leur miel et respectueux de l'environnement. En plus de la livraison, nos drones pollinisent les fleurs sur leur trajet, contribuant ainsi à la biodiversité. Vous pouvez suivre en temps réel le parcours de votre pot de miel depuis la ruche jusqu'à votre porte grâce à notre application mobile. Nous proposons également des abonnements mensuels pour ne jamais manquer de ce doux nectar. Avec BeeDrone, savourez le futur de la livraison tout en soutenant les populations d'abeilles et l'écosystème.",
      },
    ])
  }
}
