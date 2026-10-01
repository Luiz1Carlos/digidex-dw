
const digimons = [
    // ==========================================
    // 1. AGUMON E LINHA CLÁSSICA
    // ==========================================
    {
        id: 1,
        nome: "Agumon",
        nivel: "Rookie",
        atributo: "Vaccine",
        tipo: "Reptile",
        tipos: ["Fire"],
        evoluiDe: [],
        evoluiPara: ["Greymon"],
        imagem: "assets/images/agumon.png",
        descricao: "Um Digimon dinossauro que cospe pequenas bolas de fogo."
    },
    {
        id: 2,
        nome: "Greymon",
        nivel: "Champion",
        atributo: "Vaccine",
        tipo: "Dinosaur",
        tipos: ["Fire"],
        evoluiDe: ["Agumon"],
        evoluiPara: ["MetalGreymon"],
        imagem: "assets/images/greymon.png",
        descricao: "Um Digimon dinossauro que possui um crânio resistente como capacete."
    },
    {
        id: 3,
        nome: "MetalGreymon",
        nivel: "Ultimate",
        atributo: "Vaccine",
        tipo: "Cyborg",
        tipos: ["Fire", "Machine"],
        evoluiDe: ["Greymon"],
        evoluiPara: ["WarGreymon"],
        imagem: "assets/images/metalgreymon.png",
        descricao: "Um Greymon aprimorado com partes mecânicas e armamentos poderosos."
    },
    {
        id: 4,
        nome: "WarGreymon",
        nivel: "Mega",
        atributo: "Vaccine",
        tipo: "Dragonkin",
        tipos: ["Fire"],
        evoluiDe: ["MetalGreymon"],
        evoluiPara: [],
        imagem: "assets/images/wargreymon.png",
        descricao: "Um guerreiro lendário equipado com as poderosas garras Dramon Killers."
    },

    // ==========================================
    // 2. GABUMON E LINHA CLÁSSICA
    // ==========================================
    {
        id: 5,
        nome: "Gabumon",
        nivel: "Rookie",
        atributo: "Data",
        tipo: "Reptile",
        tipos: ["Ice"],
        evoluiDe: [],
        evoluiPara: ["Garurumon"],
        imagem: "assets/images/gabumon.png",
        descricao: "Um Digimon tímido que veste a pele de um Garurumon."
    },
    {
        id: 6,
        nome: "Garurumon",
        nivel: "Champion",
        atributo: "Vaccine",
        tipo: "Beast",
        tipos: ["Ice"],
        evoluiDe: ["Gabumon"],
        evoluiPara: ["WereGarurumon"],
        imagem: "assets/images/garurumon.png",
        descricao: "Uma fera veloz que percorre ambientes gelados."
    },
    {
        id: 7,
        nome: "WereGarurumon",
        nivel: "Ultimate",
        atributo: "Vaccine",
        tipo: "Beast Man",
        tipos: ["Ice"],
        evoluiDe: ["Garurumon"],
        evoluiPara: ["MetalGarurumon"],
        imagem: "assets/images/weregarurumon.png",
        descricao: "Um guerreiro lupino especializado em combate corpo a corpo."
    },
    {
        id: 8,
        nome: "MetalGarurumon",
        nivel: "Mega",
        atributo: "Data",
        tipo: "Cyborg",
        tipos: ["Ice", "Machine"],
        evoluiDe: ["WereGarurumon"],
        evoluiPara: [],
        imagem: "assets/images/metalgarurumon.png",
        descricao: "Um Digimon mecânico com armamentos avançados e ataques congelantes."
    },

    // ==========================================
    // 3. LINHA DE BYOMON
    // ==========================================
    {
        id: 9,
        nome: "Biyomon",
        nivel: "Rookie",
        atributo: "Vaccine",
        tipo: "Bird",
        tipos: ["Fire", "Wind"],
        evoluiDe: [],
        evoluiPara: ["Birdramon"],
        imagem: "assets/images/biyomon.png",
        descricao: "Um pequeno Digimon pássaro que sonha em voar grandes distâncias."
    },
    {
        id: 10,
        nome: "Birdramon",
        nivel: "Champion",
        atributo: "Vaccine",
        tipo: "Giant Bird",
        tipos: ["Fire", "Wind"],
        evoluiDe: ["Biyomon"],
        evoluiPara: ["Garudamon"],
        imagem: "assets/images/birdramon.png",
        descricao: "Uma enorme ave de fogo capaz de voar pelos céus."
    },
    {
        id: 11,
        nome: "Garudamon",
        nivel: "Ultimate",
        atributo: "Vaccine",
        tipo: "Bird Man",
        tipos: ["Fire", "Wind"],
        evoluiDe: ["Birdramon"],
        evoluiPara: ["Phoenixmon"],
        imagem: "assets/images/garudamon.png",
        descricao: "Um guerreiro alado que protege o equilíbrio entre o céu e a terra."
    },
    {
        id: 12,
        nome: "Phoenixmon",
        nivel: "Mega",
        atributo: "Vaccine",
        tipo: "Holy Bird",
        tipos: ["Fire", "Wind"],
        evoluiDe: ["Garudamon"],
        evoluiPara: [],
        imagem: "assets/images/phoenixmon.png",
        descricao: "Uma ave sagrada associada ao fogo e à renovação."
    },

    // ==========================================
    // 4. LINHA DE TENTOMON
    // ==========================================
    {
        id: 13,
        nome: "Tentomon",
        nivel: "Rookie",
        atributo: "Vaccine",
        tipo: "Insect",
        tipos: ["Electric"],
        evoluiDe: [],
        evoluiPara: ["Kabuterimon"],
        imagem: "assets/images/tentomon.png",
        descricao: "Um Digimon insetoide que utiliza eletricidade em seus ataques."
    },
    {
        id: 14,
        nome: "Kabuterimon",
        nivel: "Champion",
        atributo: "Vaccine",
        tipo: "Insect",
        tipos: ["Electric"],
        evoluiDe: ["Tentomon"],
        evoluiPara: ["MegaKabuterimon"],
        imagem: "assets/images/kabuterimon.png",
        descricao: "Um poderoso inseto com um grande chifre e força física elevada."
    },
    {
        id: 15,
        nome: "MegaKabuterimon",
        nivel: "Ultimate",
        atributo: "Vaccine",
        tipo: "Insect",
        tipos: ["Electric"],
        evoluiDe: ["Kabuterimon"],
        evoluiPara: ["HerculesKabuterimon"],
        imagem: "assets/images/megakabuterimon.png",
        descricao: "Um Digimon insetoide blindado com grande poder elétrico."
    },
    {
        id: 16,
        nome: "HerculesKabuterimon",
        nivel: "Mega",
        atributo: "Vaccine",
        tipo: "Insect",
        tipos: ["Electric"],
        evoluiDe: ["MegaKabuterimon"],
        evoluiPara: [],
        imagem: "assets/images/herculeskabuterimon.png",
        descricao: "Um Digimon insetoide gigantesco com força e resistência excepcionais."
    },

    // ==========================================
    // 5. LINHA DE PALMON
    // ==========================================
    {
        id: 17,
        nome: "Palmon",
        nivel: "Rookie",
        atributo: "Data",
        tipo: "Vegetation",
        tipos: ["Plant"],
        evoluiDe: [],
        evoluiPara: ["Togemon"],
        imagem: "assets/images/palmon.png",
        descricao: "Um Digimon vegetal com flores nas mãos e raízes nos pés."
    },
    {
        id: 18,
        nome: "Togemon",
        nivel: "Champion",
        atributo: "Data",
        tipo: "Vegetation",
        tipos: ["Plant"],
        evoluiDe: ["Palmon"],
        evoluiPara: ["Lillymon"],
        imagem: "assets/images/togemon.png",
        descricao: "Um Digimon parecido com um cacto, coberto por espinhos."
    },
    {
        id: 19,
        nome: "Lillymon",
        nivel: "Ultimate",
        atributo: "Data",
        tipo: "Fairy",
        tipos: ["Plant"],
        evoluiDe: ["Togemon"],
        evoluiPara: ["Rosemon"],
        imagem: "assets/images/lillymon.png",
        descricao: "Uma fada vegetal capaz de controlar poderes relacionados às plantas."
    },
    {
        id: 20,
        nome: "Rosemon",
        nivel: "Mega",
        atributo: "Data",
        tipo: "Fairy",
        tipos: ["Plant"],
        evoluiDe: ["Lillymon"],
        evoluiPara: [],
        imagem: "assets/images/rosemon.png",
        descricao: "Uma Digimon fada associada às rosas, à beleza e ao poder natural."
    },

    // ==========================================
    // 6. LINHA DE GOMAMON
    // ==========================================
    {
        id: 21,
        nome: "Gomamon",
        nivel: "Rookie",
        atributo: "Vaccine",
        tipo: "Sea Animal",
        tipos: ["Water", "Ice"],
        evoluiDe: [],
        evoluiPara: ["Ikkakumon"],
        imagem: "assets/images/gomamon.png",
        descricao: "Um Digimon marinho brincalhão com garras e pelos claros."
    },
    {
        id: 22,
        nome: "Ikkakumon",
        nivel: "Champion",
        atributo: "Vaccine",
        tipo: "Sea Animal",
        tipos: ["Water", "Ice"],
        evoluiDe: ["Gomamon"],
        evoluiPara: ["Zudomon"],
        imagem: "assets/images/ikkakumon.png",
        descricao: "Uma criatura marinha com um grande chifre e corpo robusto."
    },
    {
        id: 23,
        nome: "Zudomon",
        nivel: "Ultimate",
        atributo: "Vaccine",
        tipo: "Sea Animal",
        tipos: ["Water", "Ice"],
        evoluiDe: ["Ikkakumon"],
        evoluiPara: ["Vikemon"],
        imagem: "assets/images/zudomon.png",
        descricao: "Um Digimon poderoso que luta usando um martelo gigantesco."
    },
    {
        id: 24,
        nome: "Vikemon",
        nivel: "Mega",
        atributo: "Vaccine",
        tipo: "Beast Man",
        tipos: ["Ice", "Water"],
        evoluiDe: ["Zudomon"],
        evoluiPara: [],
        imagem: "assets/images/vikemon.png",
        descricao: "Um guerreiro de aparência viking que domina o combate físico."
    },

    // ==========================================
    // 7. LINHA DE PATAMON
    // ==========================================
    {
        id: 25,
        nome: "Patamon",
        nivel: "Rookie",
        atributo: "Data",
        tipo: "Mammal",
        tipos: ["Wind"],
        evoluiDe: [],
        evoluiPara: ["Angemon"],
        imagem: "assets/images/patamon.png",
        descricao: "Um pequeno Digimon com orelhas grandes que utiliza para voar."
    },
    {
        id: 26,
        nome: "Angemon",
        nivel: "Champion",
        atributo: "Vaccine",
        tipo: "Angel",
        tipos: ["Holy"],
        evoluiDe: ["Patamon"],
        evoluiPara: ["MagnaAngemon"],
        imagem: "assets/images/angemon.png",
        descricao: "Um Digimon angelical que combate as forças das trevas."
    },
    {
        id: 27,
        nome: "MagnaAngemon",
        nivel: "Ultimate",
        atributo: "Vaccine",
        tipo: "Archangel",
        tipos: ["Holy"],
        evoluiDe: ["Angemon"],
        evoluiPara: ["Seraphimon"],
        imagem: "assets/images/magnaangemon.png",
        descricao: "Um arcanjo que possui uma espada e poderes sagrados."
    },
    {
        id: 28,
        nome: "Seraphimon",
        nivel: "Mega",
        atributo: "Vaccine",
        tipo: "Seraph",
        tipos: ["Holy"],
        evoluiDe: ["MagnaAngemon"],
        evoluiPara: [],
        imagem: "assets/images/seraphimon.png",
        descricao: "Um dos Digimon angelicais de maior posição, envolto em uma armadura dourada."
    },

    // ==========================================
    // 8. LINHA DE GATOMON
    // ==========================================
    {
        id: 29,
        nome: "Salamon",
        nivel: "Rookie",
        atributo: "Vaccine",
        tipo: "Mammal",
        tipos: ["Holy"],
        evoluiDe: [],
        evoluiPara: ["Gatomon"],
        imagem: "assets/images/salamon.png",
        descricao: "Um pequeno Digimon canino associado à energia sagrada."
    },
    {
        id: 30,
        nome: "Gatomon",
        nivel: "Champion",
        atributo: "Vaccine",
        tipo: "Holy Beast",
        tipos: ["Holy"],
        evoluiDe: ["Salamon"],
        evoluiPara: ["Angewomon"],
        imagem: "assets/images/gatomon.png",
        descricao: "Uma Digimon felina ágil que usa uma luva sagrada em uma das patas."
    },
    {
        id: 31,
        nome: "Angewomon",
        nivel: "Ultimate",
        atributo: "Vaccine",
        tipo: "Angel",
        tipos: ["Holy"],
        evoluiDe: ["Gatomon"],
        evoluiPara: ["Magnadramon"],
        imagem: "assets/images/angewomon.png",
        descricao: "Uma Digimon angelical que utiliza poderes de luz."
    },
    {
        id: 32,
        nome: "Magnadramon",
        nivel: "Mega",
        atributo: "Vaccine",
        tipo: "Holy Dragon",
        tipos: ["Holy", "Wind"],
        evoluiDe: ["Angewomon"],
        evoluiPara: [],
        imagem: "assets/images/magnadramon.png",
        descricao: "Um gigantesco dragão sagrado ligado a poderes angelicais."
    },

    // ==========================================
    // 9. DIGIMON INDEPENDENTES E POPULARES
    // ==========================================
    {
        id: 33,
        nome: "Veemon",
        nivel: "Rookie",
        atributo: "Free",
        tipo: "Mini Dragon",
        tipos: ["Dragon"],
        evoluiDe: [],
        evoluiPara: ["ExVeemon"],
        imagem: "assets/images/veemon.png",
        descricao: "Um pequeno Digimon dragão conhecido por sua energia e coragem."
    },
    {
        id: 34,
        nome: "ExVeemon",
        nivel: "Champion",
        atributo: "Free",
        tipo: "Mythical Dragon",
        tipos: ["Dragon"],
        evoluiDe: ["Veemon"],
        evoluiPara: ["Paildramon"],
        imagem: "assets/images/exveemon.png",
        descricao: "Uma forma evoluída de Veemon com asas e grande força física."
    },
    {
        id: 35,
        nome: "Wormmon",
        nivel: "Rookie",
        atributo: "Free",
        tipo: "Larva",
        tipos: ["Insect"],
        evoluiDe: [],
        evoluiPara: ["Stingmon"],
        imagem: "assets/images/wormmon.png",
        descricao: "Um pequeno Digimon larval que pode desenvolver grande poder."
    },
    {
        id: 36,
        nome: "Stingmon",
        nivel: "Champion",
        atributo: "Free",
        tipo: "Insectoid",
        tipos: ["Insect"],
        evoluiDe: ["Wormmon"],
        evoluiPara: ["Dinobeemon"],
        imagem: "assets/images/stingmon.png",
        descricao: "Um Digimon insetoide ágil, equipado para combates rápidos."
    },
    {
        id: 37,
        nome: "Impmon",
        nivel: "Rookie",
        atributo: "Virus",
        tipo: "Evil",
        tipos: ["Dark"],
        evoluiDe: [],
        evoluiPara: ["Beelzemon"],
        imagem: "assets/images/impmon.png",
        descricao: "Um Digimon travesso que gosta de provocar os outros."
    },
    {
        id: 38,
        nome: "Beelzemon",
        nivel: "Mega",
        atributo: "Virus",
        tipo: "Demon Lord",
        tipos: ["Dark"],
        evoluiDe: ["Impmon"],
        evoluiPara: [],
        imagem: "assets/images/beelzemon.png",
        descricao: "Um poderoso senhor demônio que utiliza armas de fogo e uma motocicleta."
    },
    {
        id: 39,
        nome: "Renamon",
        nivel: "Rookie",
        atributo: "Data",
        tipo: "Beast Man",
        tipos: ["Dark", "Wind"],
        evoluiDe: [],
        evoluiPara: ["Kyubimon"],
        imagem: "assets/images/renamon.png",
        descricao: "Uma Digimon raposa ágil, disciplinada e habilidosa em combate."
    },
    {
        id: 40,
        nome: "Kyubimon",
        nivel: "Champion",
        atributo: "Data",
        tipo: "Beast",
        tipos: ["Fire"],
        evoluiDe: ["Renamon"],
        evoluiPara: ["Taomon"],
        imagem: "assets/images/kyubimon.png",
        descricao: "Uma raposa mística que controla chamas e energia espiritual."
    },

    // ==========================================
    // 10. OUTROS DIGIMON
    // ==========================================
    {
        id: 41,
        nome: "Guilmon",
        nivel: "Rookie",
        atributo: "Virus",
        tipo: "Reptile",
        tipos: ["Fire", "Dragon"],
        evoluiDe: [],
        evoluiPara: ["Growlmon"],
        imagem: "assets/images/guilmon.png",
        descricao: "Um Digimon dinossauro vermelho com garras e um símbolo no peito."
    },
    {
        id: 42,
        nome: "Growlmon",
        nivel: "Champion",
        atributo: "Virus",
        tipo: "Evil Dragon",
        tipos: ["Fire", "Dragon"],
        evoluiDe: ["Guilmon"],
        evoluiPara: ["WarGrowlmon"],
        imagem: "assets/images/growlmon.png",
        descricao: "Um dragão feroz com lâminas nos braços e grande força física."
    },
    {
        id: 43,
        nome: "WarGrowlmon",
        nivel: "Ultimate",
        atributo: "Virus",
        tipo: "Cyborg",
        tipos: ["Fire", "Machine"],
        evoluiDe: ["Growlmon"],
        evoluiPara: ["Gallantmon"],
        imagem: "assets/images/wargrowlmon.png",
        descricao: "Uma forma aprimorada de Growlmon equipada com armaduras mecânicas."
    },
    {
        id: 44,
        nome: "Gallantmon",
        nivel: "Mega",
        atributo: "Virus",
        tipo: "Holy Knight",
        tipos: ["Holy", "Dragon"],
        evoluiDe: ["WarGrowlmon"],
        evoluiPara: [],
        imagem: "assets/images/gallantmon.png",
        descricao: "Um cavaleiro sagrado que utiliza lança e escudo em batalha."
    },
    {
        id: 45,
        nome: "Terriermon",
        nivel: "Rookie",
        atributo: "Vaccine",
        tipo: "Beast",
        tipos: ["Wind"],
        evoluiDe: [],
        evoluiPara: ["Gargomon"],
        imagem: "assets/images/terriermon.png",
        descricao: "Um pequeno Digimon de orelhas compridas e personalidade tranquila."
    },
    {
        id: 46,
        nome: "Gargomon",
        nivel: "Champion",
        atributo: "Vaccine",
        tipo: "Beast Man",
        tipos: ["Machine"],
        evoluiDe: ["Terriermon"],
        evoluiPara: ["Rapidmon"],
        imagem: "assets/images/gargomon.png",
        descricao: "Um Digimon que possui armas nos braços e grande poder de fogo."
    },
    {
        id: 47,
        nome: "Rapidmon",
        nivel: "Ultimate",
        atributo: "Vaccine",
        tipo: "Cyborg",
        tipos: ["Machine"],
        evoluiDe: ["Gargomon"],
        evoluiPara: ["MegaGargomon"],
        imagem: "assets/images/rapidmon.png",
        descricao: "Um Digimon blindado que combina velocidade e armamentos."
    },
    {
        id: 48,
        nome: "MegaGargomon",
        nivel: "Mega",
        atributo: "Vaccine",
        tipo: "Machine",
        tipos: ["Machine"],
        evoluiDe: ["Rapidmon"],
        evoluiPara: [],
        imagem: "assets/images/megagargomon.png",
        descricao: "Um gigantesco Digimon mecânico equipado com armas pesadas."
    },
    {
        id: 49,
        nome: "Lopmon",
        nivel: "Rookie",
        atributo: "Data",
        tipo: "Beast",
        tipos: ["Wind"],
        evoluiDe: [],
        evoluiPara: ["Turuiemon"],
        imagem: "assets/images/lopmon.png",
        descricao: "Um pequeno Digimon de orelhas longas e aparência semelhante a um coelho."
    },
    {
        id: 50,
        nome: "Turuiemon",
        nivel: "Champion",
        atributo: "Data",
        tipo: "Beast Man",
        tipos: ["Martial Arts"],
        evoluiDe: ["Lopmon"],
        evoluiPara: ["Antylamon"],
        imagem: "assets/images/turuiemon.png",
        descricao: "Um Digimon lutador que utiliza técnicas de artes marciais."
    }
];
