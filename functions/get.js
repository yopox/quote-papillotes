const getQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    return ({
        author: quotes[random].author,
        text: quotes[random].text,
    });
};

let quotes = [
    {
        author: 'Arthur Helps',
        locale: 'fr',
        text: 'Les paroles sages tombent quelques fois dans l\'oreille d\'un sourd ; mais un mot gentil n\'est jamais perdu.',
    },
    {
        author: 'Confucius',
        locale: 'fr',
        text: 'Je ne cherche pas à connaître les réponses, je cherche à comprendre les questions.',
    },
    {
        author: 'Voltaire',
        locale: 'fr',
        text: 'J\'ai décidé d\'être heureux, c\'est meilleure pour la santé.',
    },
    {
        author: 'Marcel Proust',
        locale: 'fr',
        text: 'Le véritable voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux.',
    },
    {
        author: 'Anonyme',
        locale: 'fr',
        text: 'Le remède à l\'ennui, c\'est la curiosité. La cusiosité elle, est sans remède.',
    },
    {
        author: 'Joseph Roux',
        locale: 'fr',
        text: 'Aimer savoir est humain, savoir aimer est divin.',
    },
    {
        author: 'William Shakespeare',
        locale: 'fr',
        text: 'L\'amour ne voit pas avec les yeux mais avec l\'ame.',
    },
    {
        author: 'Antoine de Saint-Exupéry',
        locale: 'fr',
        text: 'On ne voit bien qu\'avec le cœur. L\'essentiel est invisible pour les yeux.',
    },
    {
        author: 'Gandhi',
        locale: 'fr',
        text: 'La vie est un mystère qu\'il faut vivre, et non un problème à résoudre.',
    },
    {
        author: 'Proverbe chinois',
        locale: 'fr',
        text: 'Oublier ses ancêtres c\'est être un ruisseau sans source, un arbre sans racines.',
    },
    {
        author: 'Provebe chinois',
        locale: 'fr',
        text: 'Si tu veux être heureux, sois-le.',
    },
    {
        author: 'Confucius',
        locale: 'fr',
        text: 'Choisissez un travail que vous aimez et vous n\'aurez pas à travailler un seul jour de votre vie.',
    },
    {
        author: 'Anatole France',
        locale: 'fr',
        text: 'En art comme en amour, l\'instinct suffit.',
    },
    {
        author: 'A. Jackson',
        locale: 'fr',
        text: 'Un seul homme armé de courage vaut une majorité.',
    },
    {
        author: 'Confucius',
        locale: 'fr',
        text: 'Le plus grand voyageur est celui qui a su faire une fois le tour de lui-même.',
    },
    {
        author: 'Jean-Jaques Rousseau',
        locale: 'fr',
        text: 'On jouit moins de ce que l\'on obtient que de ce qu\'on espère.',
    },
    {
        author: 'Philippe de Commines',
        locale: 'fr',
        text: 'Je me suis souvent repenti d\'avoir parlé, mais jamais de \'être tu.',
    },
    {
        author: 'Sénèque',
        locale: 'fr',
        text: 'Hâte-toi de bien vivre et songe que chaque jour est à lui seul une vie.',
    },
    {
        author: 'Proverbe indien',
        locale: 'fr',
        text: 'Fais du bien à ton corps pour que ton âme ait envie d\'y rester ',
    },
    {
        author: 'Proverbe brésilien',
        locale: 'fr',
        text: 'La bonne volonté raccourcit le chemin.',
    },
    {
        author: 'Joseph Joubert',
        locale: 'fr',
        text: 'Ferme les yeux et tu verras.',
    },
    {
        author: 'Edmond Rostand',
        locale: 'fr',
        text: 'C\'est la nuit qu\'il est beau de croire à la lumière.',
    },
    {
        author: 'Nietzsche',
        locale: 'fr',
        text: 'Il y a toujours un peu de folie dans l\'amour mais il y a toujours un peu de raison dans la folie.',
    },
    {
        author: 'Proverbre français',
        locale: 'fr',
        text: 'La table est l\'entremetteuse de l\'amitié.',
    },
    {
        author: 'Baden-Powell',
        locale: 'fr',
        text: 'Un sourir est une clef secrète qui ouvre bien des coeurs.',
    },
    {
        author: 'Proverbe allemand',
        locale: 'fr',
        text: 'Nul n\'est plus chanceux que celui qui croit à sa chance.',
    },
    {
        author: 'Proverbe russe',
        locale: 'fr',
        text: 'Si votre coeur est une rose, votre bouche dira des mots parfumés.',
    },
    {
        author: 'Batasar Gracian',
        locale: 'fr',
        text: 'Un grain de gaieté assaisone tout.',
    },
    {
        author: 'Gilbert Keith Chesterton',
        locale: 'fr',
        text: 'Le monde ne mourra jamais par manque de merveilles mais uniquement par manque d\'émerveillement.',
    },
    {
        author: 'Théodore Roosevelt',
        locale: 'fr',
        text: 'Le seul homme à ne jamais faire d\'erreur est celui qui ne fait rien.',
    },
    {
        author: 'Jean Giraudoux',
        locale: 'fr',
        text: 'Le bonheur est une petite chose que l\'on grignotte, assis, par tere, au soleil.',
    }
];

exports.handler = async function (event, context) {
    let quote = getQuote();
    return {
        statusCode: 200,
        body: JSON.stringify({ quote })
    };
};