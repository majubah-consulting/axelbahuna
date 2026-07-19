const SITE_EMAIL = 'baudry@majubahconsulting.com';

const imageDimensions = {
  landscape: { thumb: [700, 525], full: [1448, 1086] },
  square: { thumb: [700, 700], full: [1254, 1254] },
  portrait: { thumb: [560, 700], full: [1122, 1402] }
};

const works = [
  {
    slug: 'portrait-fauteuil-rouge', category: 'portraits', format: 'square',
    fr: { title: 'Portrait au fauteuil rouge', label: 'Portraits', alt: 'Un portrait de profil installé dans un fauteuil rouge, entouré de feuillage', description: 'Le rouge du siège, le noir du vêtement et les verts du feuillage structurent une image intime où le profil se détache avec douceur.' },
    en: { title: 'Portrait in the red armchair', label: 'Portraits', alt: 'A profile portrait seated in a red armchair, surrounded by foliage', description: 'The red seat, black clothing and green foliage shape an intimate image in which the profile emerges gently.' }
  },
  {
    slug: 'village-africain', category: 'afrique', format: 'landscape',
    fr: { title: 'Village africain', label: 'Inspirations africaines', alt: 'Une scène de village aux tons de terre animée par plusieurs silhouettes', description: 'Une scène de terre, d’architecture et de mouvement qui rappelle la mémoire des paysages de l’enfance.' },
    en: { title: 'African village', label: 'African inspirations', alt: 'An earth-toned village scene animated by several figures', description: 'A scene of earth, architecture and movement that recalls the landscapes of childhood.' }
  },
  {
    slug: 'toilette-au-bord-de-eau', category: 'afrique', format: 'square',
    fr: { title: 'La toilette au bord de l’eau', label: 'Inspirations africaines', alt: 'Une scène quotidienne au bord de l’eau entre un adulte et un enfant', description: 'Une scène quotidienne construite autour du geste, de l’eau et du lien entre l’adulte et l’enfant.' },
    en: { title: 'Washing by the water', label: 'African inspirations', alt: 'An everyday scene by the water between an adult and a child', description: 'An everyday scene built around gesture, water and the bond between an adult and a child.' }
  },
  {
    slug: 'vaches-dans-le-verger', category: 'animaux', format: 'landscape',
    fr: { title: 'Vaches dans le verger', label: 'Animaux de Normandie', alt: 'Des vaches normandes dans un verger planté de pommiers', description: 'Les animaux, les pommiers et la lumière du pré composent un paysage profondément normand.' },
    en: { title: 'Cows in the orchard', label: 'Animals of Normandy', alt: 'Norman cows in an orchard planted with apple trees', description: 'The animals, apple trees and meadow light form a distinctly Norman landscape.' }
  },
  {
    slug: 'portrait-vache-holstein', category: 'animaux', format: 'portrait',
    fr: { title: 'Face à face', label: 'Animaux', alt: 'Le portrait rapproché d’une vache Holstein sur fond vert', description: 'Le portrait rapproché transforme la vache en véritable personnage et met l’accent sur son regard.' },
    en: { title: 'Face to face', label: 'Animals', alt: 'A close portrait of a Holstein cow against a green background', description: 'The close-up portrait turns the cow into a character in her own right and draws attention to her gaze.' }
  },
  {
    slug: 'portrait-cheval', category: 'animaux', format: 'square',
    fr: { title: 'Portrait de cheval', label: 'Animaux', alt: 'La tête harnachée d’un cheval peinte avec précision', description: 'Un travail précis sur la tête, le harnachement, les reflets et la puissance contenue de l’animal.' },
    en: { title: 'Horse portrait', label: 'Animals', alt: 'A precisely painted view of a horse’s harnessed head', description: 'A precise study of the head, harness, reflections and the animal’s contained strength.' }
  },
  {
    slug: 'basse-cour', category: 'animaux', format: 'landscape',
    fr: { title: 'La basse-cour', label: 'Animaux et nature', alt: 'Des poules dispersées dans une étendue verte', description: 'Une scène vivante et colorée où les poules animent l’étendue verte du paysage.' },
    en: { title: 'The farmyard', label: 'Animals and nature', alt: 'Hens scattered across a green expanse', description: 'A lively, colourful scene in which the hens animate the green landscape.' }
  },
  {
    slug: 'rue-normande', category: 'normandie', format: 'landscape',
    fr: { title: 'Rue normande', label: 'Villes et architecture', alt: 'Une rue bordée de façades à colombages et de véhicules', description: 'Colombages, façades et véhicules construisent une mémoire urbaine attentive aux détails.' },
    en: { title: 'Norman street', label: 'Towns and architecture', alt: 'A street lined with half-timbered façades and vehicles', description: 'Half-timbering, façades and vehicles build an urban memory attentive to detail.' }
  },
  {
    slug: 'maison-normande', category: 'normandie', format: 'landscape',
    fr: { title: 'Maison normande', label: 'Paysages', alt: 'Une maison normande au centre d’un jardin arboré', description: 'La maison devient le centre calme d’un jardin structuré par les chemins, les arbres et les ombres.' },
    en: { title: 'Norman house', label: 'Landscapes', alt: 'A Norman house at the centre of a tree-filled garden', description: 'The house becomes the quiet centre of a garden shaped by paths, trees and shadows.' }
  },
  {
    slug: 'bateau-rouge', category: 'normandie', format: 'landscape',
    fr: { title: 'Le bateau rouge', label: 'Rivages', alt: 'Un bateau à coque rouge et voile jaune sur l’eau', description: 'La coque rouge et la voile jaune donnent toute son énergie à une scène de port et de reflets.' },
    en: { title: 'The red boat', label: 'Shores', alt: 'A boat with a red hull and yellow sail on the water', description: 'The red hull and yellow sail give energy to a scene of harbour and reflections.' }
  },
  {
    slug: 'route', category: 'normandie', format: 'landscape',
    fr: { title: 'La route', label: 'Paysages contemporains', alt: 'Un camion avance sur une route bordée d’arbres sous un ciel ouvert', description: 'Un camion, une route et des arbres : un sujet quotidien transformé par la perspective et le ciel.' },
    en: { title: 'The road', label: 'Contemporary landscapes', alt: 'A truck travels along a tree-lined road beneath an open sky', description: 'A truck, a road and trees: an everyday subject transformed by perspective and sky.' }
  },
  {
    slug: 'remington-rand', category: 'objets', format: 'portrait',
    fr: { title: 'Remington Rand', label: 'Objets', alt: 'Une machine à écrire Remington Rand peinte dans une composition colorée', description: 'La machine à écrire devient une composition graphique où la mécanique dialogue avec la couleur.' },
    en: { title: 'Remington Rand', label: 'Objects', alt: 'A Remington Rand typewriter painted in a colourful composition', description: 'The typewriter becomes a graphic composition in which mechanics and colour interact.' }
  },
  {
    slug: 'livres-et-bougie', category: 'objets', format: 'landscape',
    fr: { title: 'Livres et bougie', label: 'Nature morte', alt: 'Des livres anciens éclairés par la flamme d’une bougie', description: 'La flamme et les reliures anciennes créent une atmosphère silencieuse, presque méditative.' },
    en: { title: 'Books and candle', label: 'Still life', alt: 'Old books illuminated by a candle flame', description: 'The flame and old bindings create a quiet, almost meditative atmosphere.' }
  },
  {
    slug: 'voiture-ancienne', category: 'objets', format: 'landscape',
    fr: { title: 'La voiture ancienne', label: 'Objets et patrimoine', alt: 'Une automobile ancienne devant une architecture normande', description: 'Une automobile de collection mise en scène devant une architecture normande.' },
    en: { title: 'The vintage car', label: 'Objects and heritage', alt: 'A vintage car in front of Norman architecture', description: 'A collector’s car staged in front of Norman architecture.' }
  },
  {
    slug: 'tortue-verte', category: 'animaux', format: 'landscape',
    fr: { title: 'Tortue verte', label: 'Animaux', alt: 'Une tortue verte se déplace dans un espace bleu', description: 'La tortue semble traverser l’espace bleu dans un mouvement calme et puissant.' },
    en: { title: 'Green turtle', label: 'Animals', alt: 'A green turtle moves through a blue space', description: 'The turtle appears to cross the blue space with a calm, powerful movement.' }
  },
  {
    slug: 'chien-de-chasse', category: 'animaux', format: 'landscape',
    fr: { title: 'Le chien de chasse', label: 'Animaux', alt: 'Un chien de chasse se tient dans une posture attentive', description: 'Une posture attentive et fière, saisie dans une lumière chaude.' },
    en: { title: 'The hunting dog', label: 'Animals', alt: 'A hunting dog stands in an attentive pose', description: 'An attentive, proud stance captured in warm light.' }
  },
  {
    slug: 'place-de-village', category: 'normandie', format: 'landscape',
    fr: { title: 'Place de village', label: 'Normandie', alt: 'Une place calme entourée de maisons à colombages', description: 'Une place ouverte, des maisons à colombages et un calme presque suspendu.' },
    en: { title: 'Village square', label: 'Normandy', alt: 'A quiet square surrounded by half-timbered houses', description: 'An open square, half-timbered houses and an almost suspended calm.' }
  },
  {
    slug: 'route-vers-le-dome', category: 'normandie', format: 'landscape',
    fr: { title: 'La route vers le dôme', label: 'Lisieux', alt: 'Une route bordée d’arbres mène vers la silhouette de la basilique', description: 'Une route bordée d’arbres conduit le regard vers la silhouette de la basilique.' },
    en: { title: 'The road to the dome', label: 'Lisieux', alt: 'A tree-lined road leads towards the outline of the basilica', description: 'A tree-lined road draws the eye towards the outline of the basilica.' }
  },
  {
    slug: 'estuaire', category: 'normandie', format: 'landscape',
    fr: { title: 'À marée basse', label: 'Rivages', alt: 'Des bateaux reposent à marée basse sous un ciel chargé', description: 'Les bateaux reposent sous un ciel chargé, dans une atmosphère silencieuse et contemplative.' },
    en: { title: 'At low tide', label: 'Shores', alt: 'Boats rest at low tide beneath a heavy sky', description: 'The boats rest beneath a heavy sky in a quiet, contemplative atmosphere.' }
  },
  {
    slug: 'ville-europeenne', category: 'normandie', format: 'portrait',
    fr: { title: 'La ville calme', label: 'Villes', alt: 'Une architecture urbaine baignée d’une lumière douce', description: 'Une architecture urbaine saisie dans une lumière douce et une palette apaisée.' },
    en: { title: 'The quiet town', label: 'Towns', alt: 'Urban architecture bathed in soft light', description: 'Urban architecture captured in soft light and a calm palette.' }
  },
  {
    slug: 'portrait-vibrant', category: 'portraits', format: 'square',
    fr: { title: 'Portrait vibrant', label: 'Portraits', alt: 'Un visage de profil entouré de couleurs et de motifs', description: 'Un visage de profil, entouré d’un champ de couleurs et de motifs.' },
    en: { title: 'Vibrant portrait', label: 'Portraits', alt: 'A face in profile surrounded by colours and patterns', description: 'A face in profile surrounded by a field of colours and patterns.' }
  },
  {
    slug: 'poules-sous-pommier', category: 'animaux', format: 'landscape',
    fr: { title: 'Sous le pommier', label: 'Animaux et nature', alt: 'Une poule et ses poussins sous un pommier dans un verger', description: 'Une poule et ses poussins trouvent refuge dans la lumière d’un verger.' },
    en: { title: 'Under the apple tree', label: 'Animals and nature', alt: 'A hen and her chicks beneath an apple tree in an orchard', description: 'A hen and her chicks find shelter in the light of an orchard.' }
  }
];

const timeline = [
  { year: { fr: '1954', en: '1954' }, title: { fr: 'Naissance à Kinshasa', en: 'Born in Kinshasa' }, text: { fr: 'Axel grandit dans le quartier de Kifuma. Le dessin s’impose très tôt dans son enfance.', en: 'Axel grows up in the Kifuma neighbourhood. Drawing becomes part of his life at an early age.' } },
  { year: { fr: '1976', en: '1976' }, title: { fr: 'Départ pour la Belgique', en: 'Departure for Belgium' }, text: { fr: 'À vingt-deux ans, il rejoint son frère et découvre une nouvelle lumière européenne.', en: 'At twenty-two, he joins his brother and discovers a new European light.' } },
  { year: { fr: '1978', en: '1978' }, title: { fr: 'Arrivée en France', en: 'Arrival in France' }, text: { fr: 'Axel s’installe à Paris, où il vit pendant environ cinq ans.', en: 'Axel settles in Paris, where he lives for about five years.' } },
  { year: { fr: '1983', en: '1983' }, title: { fr: 'Installation à Lisieux', en: 'Settling in Lisieux' }, text: { fr: 'La Normandie devient son territoire de vie, d’observation et de création.', en: 'Normandy becomes the place where he lives, observes and creates.' } },
  { year: { fr: '1994', en: '1994' }, title: { fr: 'Cours d’arts plastiques', en: 'Visual arts classes' }, text: { fr: 'Dans les anciens locaux de l’usine Wonder à Lisieux, il approfondit la technique, les pinceaux et la couleur.', en: 'In the former Wonder factory premises in Lisieux, he develops his technique and his understanding of brushes and colour.' } },
  { year: { fr: '1996', en: '1996' }, title: { fr: 'Première exposition connue', en: 'First known exhibition' }, text: { fr: 'L’Imprimerie Pascal accueille ses œuvres. Il rejoint ensuite l’Académie des arts de Lisieux.', en: 'The Imprimerie Pascal hosts his works. He later joins the Académie des arts de Lisieux.' } },
  { year: { fr: 'Au fil des années', en: 'Over the years' }, title: { fr: 'Expositions régulières', en: 'Regular exhibitions' }, text: { fr: 'Lisieux, Blangy-le-Château, Broglie, Pont-Audemer, Honfleur, Bernay, Cabourg, Caen, Chartres, Paris et Saint-Denis.', en: 'Lisieux, Blangy-le-Château, Broglie, Pont-Audemer, Honfleur, Bernay, Cabourg, Caen, Chartres, Paris and Saint-Denis.' } },
  { year: { fr: '2020', en: '2020' }, title: { fr: 'Église Saint-Jacques', en: 'Saint-Jacques Church' }, text: { fr: 'Des œuvres sont présentées dans ce lieu historique de Lisieux.', en: 'Works are presented in this historic Lisieux venue.' } },
  { year: { fr: '2022', en: '2022' }, title: { fr: 'Retraite', en: 'Retirement' }, text: { fr: 'Axel peut enfin consacrer une grande partie de son temps à la peinture.', en: 'Axel can finally devote a large part of his time to painting.' } },
  { year: { fr: '2024', en: '2024' }, title: { fr: 'Hommage à Yvette Roudy', en: 'Tribute to Yvette Roudy' }, text: { fr: 'Une œuvre est présentée plusieurs mois dans les jardins de l’Hôtel de Ville de Lisieux.', en: 'A work is displayed for several months in the gardens of Lisieux Town Hall.' } },
  { year: { fr: 'Aujourd’hui', en: 'Today' }, title: { fr: 'Créer et transmettre', en: 'Creating and passing on' }, text: { fr: 'Il travaille à de grands paysages, des animaux et une collection destinée à sa famille.', en: 'He works on large landscapes, animals and a collection intended for his family.' } }
];

const translations = {
  en: {
    skipLink: 'Skip to content', brandSubtitle: 'Painter · Normandy', menu: 'Menu', mainNavLabel: 'Main navigation',
    navArtist: 'The artist', navWorks: 'Works', navJourney: 'Journey', navExhibitions: 'Exhibitions', navContact: 'Contact',
    heroImageAlt: 'Axel Bahuna painting a landscape of Norman cows in his studio', heroEyebrow: 'From Kinshasa to the landscapes of Normandy', heroQuote: '“In every painting, I first look for the light.”', discoverWorks: 'Discover the works', discoverStory: 'Learn more', scrollLabel: 'Scroll to the next section',
    portraitImageAlt: 'Black-and-white artistic portrait of Axel Bahuna in a studio', artistEyebrow: 'The artist', artistTitle: 'Painting, simply', bornKinshasa: 'Born in Kinshasa',
    artistP1: 'Axel Bahuna is a figurative painter based in Saint-Désir, near Lisieux. Since childhood, he has drawn, observed and painted without limiting himself to a single category.',
    artistP2: 'Born in Kinshasa in 1954, he moved to Belgium in 1976 and France in 1978. After five years in Paris, he settled in Lisieux in 1983. Normandy became his territory of life and creation: streets, half-timbered houses, orchards, ports, horses and, above all, cows.',
    artistP3: 'His work brings together several kinds of light: the bright light of his African memories and the changing light of the Norman countryside. Acrylic is now his preferred medium.',
    artistQuote: '“I never asked myself whether I was an artist. I simply kept painting.”',
    universeEyebrow: 'His world', universeTitle: 'Nature, faces and light', universeText: 'Norman landscapes, animals, portraits, African scenes, towns and everyday objects: Axel chooses a subject when it catches his eye. Technique builds the painting; emotion gives it strength.',
    worksEyebrow: 'Gallery', worksTitle: 'Selected works', worksIntro: 'A selection of paintings grouped by theme. Titles are editorial when no official title is known.', filtersLabel: 'Filter works', filterAll: 'All', filterNormandy: 'Normandy', filterAnimals: 'Animals', filterPortraits: 'Portraits', filterAfrica: 'Africa', filterObjects: 'Objects',
    journeyEyebrow: 'Journey', journeyTitle: 'From one light to another', journeyIntro: 'A patient journey from childhood in Kinshasa to full-time artistic practice in Normandy.',
    studioImageAlt: 'Axel Bahuna painting in his studio', studioEyebrow: 'In the studio', studioTitle: 'Silence, duration and returning to the work', studioP1: 'There is no fixed time to begin a painting. Work depends on availability, state of mind and daylight. Once immersed, Axel can paint for eight hours in a row.', studioP2: 'A work may be set aside for weeks, months or even years before being revisited. The public may see it as finished while the painter still sees what it could become.', studioQuote: '“For an artist, a work is never truly finished.”',
    exhibitionsEyebrow: 'Exhibitions and archives', exhibitionsTitle: 'A journey shaped by encounters', exhibitionsIntro: 'From the Imprimerie Pascal to Saint-Jacques Church, from Blangy-le-Château to Honfleur, his journey has taken shape through exhibitions and encounters.',
    archive1Alt: 'Art exhibition in Saint-Jacques Church in Lisieux', archive1Title: 'Saint-Jacques Church, Lisieux', archive1Text: 'Exhibition in Lisieux in 2020.',
    archive2Alt: 'Tribute portrait to Yvette Roudy displayed in Lisieux', archive2Title: 'Tribute to Yvette Roudy', archive2Text: 'Public presentation in Lisieux, 2024.',
    archive3Alt: 'Axel Bahuna meeting a journalist', archive3Title: 'Press and encounters', archive3Text: 'A meeting around his work, date to be confirmed.',
    archive4Alt: 'Palette and tubes of acrylic paint in the studio', archive4Title: 'Studio tools', archive4Text: 'Acrylic paint, palette and visual references.',
    legacyEyebrow: 'Legacy', legacyTitle: 'What he wishes to leave behind', legacyText: 'Axel imagines a family collection of twenty to thirty large works: landscapes, forests, animals and Norman scenes that would not be intended for sale. A lasting trace entrusted to his children.', legacyQuote: '“I would like people to say that I made beautiful things.”',
    contactEyebrow: 'Contact', contactTitle: 'Talk about a work', contactText: 'This website presents Axel Bahuna’s artistic journey and universe. It is not an online shop. To request information about a work, propose an exhibition or send a message to the artist, please use the form.', contactLocation: 'Saint-Désir · Near Lisieux · Normandy', formName: 'Name', formEmail: 'Email', formSubject: 'Subject', formMessage: 'Message', subjectArtwork: 'Information about a work', subjectExhibition: 'Exhibition proposal', subjectPress: 'Press or cultural project', subjectOther: 'Other request', formSend: 'Contact the artist', formNote: 'The form opens your email software. No message is stored by the website.',
    footerTagline: 'Painter · Saint-Désir, Normandy', backTop: 'Back to top', legal: 'Legal notice', rights: 'All rights reserved.', lightboxClose: 'Close detailed view'
  }
};

const metadata = {
  fr: {
    title: 'Axel Bahuna — Artiste peintre en Normandie',
    description: 'Découvrez le parcours et les œuvres d’Axel Bahuna, artiste peintre installé près de Lisieux : paysages normands, animaux, portraits et inspirations africaines.',
    ogTitle: 'Axel Bahuna — Artiste peintre',
    ogDescription: 'De Kinshasa aux paysages de Normandie : parcours, œuvres et expositions d’Axel Bahuna.',
    ogLocale: 'fr_FR'
  },
  en: {
    title: 'Axel Bahuna — Painter in Normandy',
    description: 'Discover the journey and works of Axel Bahuna, a painter based near Lisieux: Norman landscapes, animals, portraits and African inspirations.',
    ogTitle: 'Axel Bahuna — Painter',
    ogDescription: 'From Kinshasa to the landscapes of Normandy: the journey, works and exhibitions of Axel Bahuna.',
    ogLocale: 'en_GB'
  }
};

let lang = 'fr';
let currentFilter = 'all';
let lastLightboxTrigger = null;

const gallery = document.querySelector('#gallery');
const galleryStatus = document.querySelector('#gallery-status');
const timelineEl = document.querySelector('#timeline');
const lightbox = document.querySelector('#lightbox');
const lightboxImg = lightbox.querySelector('img');
const lightboxTitle = lightbox.querySelector('#lightbox-title');
const lightboxCategory = lightbox.querySelector('.lightbox-category');
const lightboxDescription = lightbox.querySelector('#lightbox-description');
const langToggle = document.querySelector('.lang-toggle');
const filterButtons = [...document.querySelectorAll('.filter')];
const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

const revealObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('reveal-pending');
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12 })
  : null;

function observeReveals(root = document) {
  root.querySelectorAll('.reveal:not(.visible):not(.reveal-pending)').forEach((element) => {
    if (!revealObserver) {
      element.classList.add('visible');
      return;
    }
    element.classList.add('reveal-pending');
    revealObserver.observe(element);
  });
}

function formatGalleryCount(count) {
  if (lang === 'en') return `${count} ${count === 1 ? 'work' : 'works'} displayed`;
  return `${count} ${count === 1 ? 'œuvre affichée' : 'œuvres affichées'}`;
}

function openArtwork(work, trigger) {
  const content = work[lang];
  const [width, height] = imageDimensions[work.format].full;
  lastLightboxTrigger = trigger;
  lightboxImg.src = `assets/images/artworks/${work.slug}.webp`;
  lightboxImg.alt = '';
  lightboxImg.width = width;
  lightboxImg.height = height;
  lightboxTitle.textContent = content.title;
  lightboxCategory.textContent = content.label;
  lightboxDescription.textContent = content.description;
  lightbox.showModal();
}

function createArtworkCard(work) {
  const content = work[lang];
  const [width, height] = imageDimensions[work.format].thumb;
  const card = document.createElement('article');
  const image = document.createElement('img');
  const overlay = document.createElement('div');
  const label = document.createElement('small');
  const title = document.createElement('h3');
  const trigger = document.createElement('a');

  card.className = 'art-card reveal';
  card.dataset.category = work.category;
  image.src = `assets/images/artworks/${work.slug}-thumb.webp`;
  image.alt = content.alt;
  image.width = width;
  image.height = height;
  image.loading = 'lazy';
  image.decoding = 'async';
  overlay.className = 'art-overlay';
  label.textContent = content.label;
  title.textContent = content.title;
  trigger.className = 'art-card-trigger';
  trigger.href = `assets/images/artworks/${work.slug}.webp`;
  trigger.setAttribute('aria-haspopup', 'dialog');
  trigger.setAttribute('aria-label', lang === 'fr' ? `Voir l’œuvre : ${content.title}` : `View work: ${content.title}`);
  trigger.addEventListener('click', (event) => {
    if (typeof lightbox.showModal !== 'function') return;
    event.preventDefault();
    openArtwork(work, trigger);
  });

  overlay.append(label, title);
  card.append(image, overlay, trigger);
  return card;
}

function renderWorks(filter = currentFilter) {
  currentFilter = filter;
  const visibleWorks = works.filter((work) => filter === 'all' || work.category === filter);
  const fragment = document.createDocumentFragment();
  visibleWorks.forEach((work) => fragment.append(createArtworkCard(work)));
  gallery.replaceChildren(fragment);
  galleryStatus.textContent = formatGalleryCount(visibleWorks.length);
  observeReveals(gallery);
}

function renderTimeline() {
  const fragment = document.createDocumentFragment();
  timeline.forEach((entry) => {
    const item = document.createElement('div');
    const year = document.createElement('div');
    const copy = document.createElement('div');
    const title = document.createElement('h3');
    const text = document.createElement('p');
    item.className = 'timeline-item reveal';
    year.className = 'timeline-year';
    copy.className = 'timeline-copy';
    year.textContent = entry.year[lang];
    title.textContent = entry.title[lang];
    text.textContent = entry.text[lang];
    copy.append(title, text);
    item.append(year, copy);
    fragment.append(item);
  });
  timelineEl.replaceChildren(fragment);
  observeReveals(timelineEl);
}

function updateMetadata() {
  const content = metadata[lang];
  document.title = content.title;
  document.querySelector('meta[name="description"]').content = content.description;
  document.querySelector('meta[property="og:title"]').content = content.ogTitle;
  document.querySelector('meta[property="og:description"]').content = content.ogDescription;
  document.querySelector('meta[property="og:locale"]').content = content.ogLocale;
}

function translateStaticContent() {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    if (!element.dataset.fr) element.dataset.fr = element.textContent.trim();
    const key = element.dataset.i18n;
    element.textContent = lang === 'fr' ? element.dataset.fr : (translations.en[key] || element.dataset.fr);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    if (!element.dataset.frAriaLabel) element.dataset.frAriaLabel = element.getAttribute('aria-label');
    const key = element.dataset.i18nAriaLabel;
    element.setAttribute('aria-label', lang === 'fr' ? element.dataset.frAriaLabel : (translations.en[key] || element.dataset.frAriaLabel));
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    if (!element.dataset.frAlt) element.dataset.frAlt = element.getAttribute('alt');
    const key = element.dataset.i18nAlt;
    element.setAttribute('alt', lang === 'fr' ? element.dataset.frAlt : (translations.en[key] || element.dataset.frAlt));
  });
}

function applyLanguage(nextLanguage) {
  lang = nextLanguage;
  document.documentElement.lang = lang;
  translateStaticContent();
  updateMetadata();
  langToggle.textContent = lang === 'fr' ? 'EN' : 'FR';
  langToggle.setAttribute('aria-label', lang === 'fr' ? 'Afficher le site en anglais' : 'View the site in French');
  renderWorks(currentFilter);
  renderTimeline();
}

function setMenuOpen(open) {
  nav.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((candidate) => {
      const isActive = candidate === button;
      candidate.classList.toggle('active', isActive);
      candidate.setAttribute('aria-pressed', String(isActive));
    });
    renderWorks(button.dataset.filter);
  });
});

lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
lightbox.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  event.preventDefault();
  lightbox.close();
});
lightbox.addEventListener('close', () => {
  lightboxImg.removeAttribute('src');
  if (lastLightboxTrigger?.isConnected) lastLightboxTrigger.focus();
  lastLightboxTrigger = null;
});

const header = document.querySelector('.site-header');
const updateHeader = () => header.classList.toggle('scrolled', scrollY > 40);
addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

menuBtn.addEventListener('click', () => setMenuOpen(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));
document.addEventListener('click', (event) => {
  if (!nav.classList.contains('open')) return;
  if (nav.contains(event.target) || menuBtn.contains(event.target)) return;
  setMenuOpen(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape' || !nav.classList.contains('open')) return;
  setMenuOpen(false);
  menuBtn.focus();
});
addEventListener('resize', () => {
  if (innerWidth > 900) setMenuOpen(false);
}, { passive: true });

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const subject = encodeURIComponent(form.elements.subject.selectedOptions[0].textContent);
  const nameLabel = lang === 'fr' ? 'Nom' : 'Name';
  const emailLabel = lang === 'fr' ? 'E-mail' : 'Email';
  const body = encodeURIComponent(`${nameLabel} : ${data.get('name')}\n${emailLabel} : ${data.get('email')}\n\n${data.get('message')}`);
  location.href = `mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`;
});

langToggle.addEventListener('click', () => applyLanguage(lang === 'fr' ? 'en' : 'fr'));

applyLanguage('fr');
observeReveals();
