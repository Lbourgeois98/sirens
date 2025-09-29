import { Product } from '../types';

// Aquatic-themed Nintendo Switch games sorted by price (lowest to highest)
export const products: Product[] = [
  {
    id: '1',
    name: 'ABZÛ',
    price: 8,
    image: '/Pokemon Snap .jpeg',
    description: 'Dive into a vibrant underwater world filled with mystery and wonder. Explore the depths as a diver in this meditative oceanic adventure.',
    console: 'Nintendo Switch',
    generation: 8,
    releaseDate: '2017-08-02',
    category: 'popular',
    inStock: true,
    rating: 4.3,
    features: ['Underwater Exploration', 'Meditative Gameplay', 'Beautiful Ocean Life', 'Mystical Journey'],
    priceCategory: '$5-$10'
  },
  {
    id: '2',
    name: 'Subnautica',
    price: 15,
    image: '/Pokemon Scarlet.jpeg',
    description: 'Survive in an alien underwater world. Craft equipment, pilot submarines, and uncover the mysteries of planet 4546B.',
    console: 'Nintendo Switch',
    generation: 9,
    releaseDate: '2021-05-14',
    category: 'popular',
    inStock: true,
    rating: 4.7,
    features: ['Survival Horror', 'Underwater Base Building', 'Submarine Crafting', 'Alien Ocean'],
    priceCategory: '$10-$20'
  },
  {
    id: '3',
    name: 'Endless Ocean Luminous',
    price: 25,
    image: '/Pokemon Violet.jpeg',
    description: 'Explore the vast blue depths in this relaxing underwater adventure. Discover marine life and uncover oceanic mysteries.',
    console: 'Nintendo Switch',
    generation: 9,
    releaseDate: '2024-05-02',
    category: 'new',
    inStock: true,
    rating: 4.5,
    features: ['Ocean Exploration', 'Marine Life Discovery', 'Relaxing Gameplay', 'Multiplayer Diving'],
    priceCategory: '$20-$30'
  },
  {
    id: '4',
    name: 'Aquatica',
    price: 30,
    image: '/Detective Pikachu Returns.jpeg',
    description: 'Build and manage your underwater civilization. Command sea creatures and explore the depths of the ocean realm.',
    console: 'Nintendo Switch',
    generation: 8,
    releaseDate: '2023-03-15',
    category: 'popular',
    inStock: true,
    rating: 4.2,
    features: ['Underwater City Building', 'Sea Creature Management', 'Deep Sea Strategy', 'Aquatic Civilization'],
    priceCategory: '$25-$35'
  },
  {
    id: '5',
    name: 'Song of the Deep',
    price: 35,
    image: "/Pokemon Let's Go Pikachu.jpeg",
    description: 'A metroidvania-style underwater adventure. Pilot a submarine through mysterious depths to find your missing father.',
    console: 'Nintendo Switch',
    generation: 8,
    releaseDate: '2020-07-12',
    category: 'popular',
    inStock: true,
    rating: 4.4,
    features: ['Submarine Adventure', 'Metroidvania Style', 'Underwater Puzzles', 'Family Story'],
    priceCategory: '$30-$40'
  },
  {
    id: '6',
    name: 'Depth of Extinction',
    price: 40,
    image: "/Pokemon Let's Go Eevee.jpeg",
    description: 'Turn-based tactical combat in a flooded world. Lead your squad through underwater ruins and face aquatic mutants.',
    console: 'Nintendo Switch',
    generation: 8,
    releaseDate: '2022-09-25',
    category: 'popular',
    inStock: true,
    rating: 4.1,
    features: ['Turn-Based Strategy', 'Flooded World', 'Squad Combat', 'Underwater Tactics'],
    priceCategory: '$35-$45'
  },
  {
    id: '7',
    name: 'Aquanox Deep Descent',
    price: 45,
    image: '/pokemon brilliant diamond.jpeg',
    description: 'Pilot submarines in intense underwater combat. Fight for resources in the depths of a post-apocalyptic ocean.',
    console: 'Nintendo Switch',
    generation: 8,
    releaseDate: '2021-10-16',
    category: 'popular',
    inStock: true,
    rating: 4.0,
    features: ['Submarine Combat', 'Post-Apocalyptic Ocean', 'Resource Wars', 'Deep Sea Battles'],
    priceCategory: '$40-$50'
  },
  {
    id: '8',
    name: 'Maneater',
    price: 50,
    image: '/Pokemon Shining Pearl.jpeg',
    description: 'Play as a shark in this action RPG. Evolve and grow stronger as you terrorize the waters and seek revenge.',
    console: 'Nintendo Switch',
    generation: 9,
    releaseDate: '2021-05-25',
    category: 'popular',
    inStock: true,
    rating: 4.3,
    features: ['Shark RPG', 'Evolution System', 'Open Ocean', 'Revenge Story'],
    priceCategory: '$45-$55'
  },
  {
    id: '9',
    name: 'Subnautica: Below Zero',
    price: 55,
    image: '/pokemon legends arceus.jpeg',
    description: 'Return to planet 4546B in this arctic sequel. Survive in frozen seas and uncover new mysteries beneath the ice.',
    console: 'Nintendo Switch',
    generation: 9,
    releaseDate: '2021-05-14',
    category: 'new',
    inStock: true,
    rating: 4.6,
    features: ['Arctic Ocean', 'Ice Survival', 'New Mysteries', 'Frozen Depths'],
    priceCategory: '$50-$60'
  },
  {
    id: '10',
    name: 'Ecco the Dolphin',
    price: 60,
    image: '/Pokemon Sword Switch.jpeg',
    description: 'Classic dolphin adventure remastered. Use echolocation to navigate the ocean and communicate with sea life.',
    console: 'Nintendo Switch',
    generation: 7,
    releaseDate: '2023-08-10',
    category: 'popular',
    inStock: true,
    rating: 4.4,
    features: ['Dolphin Adventure', 'Echolocation Gameplay', 'Ocean Communication', 'Classic Remaster'],
    priceCategory: '$55-$65'
  },
  {
    id: '11',
    name: 'Aqua Moto Racing Utopia',
    price: 65,
    image: '/pokemon violet.jpeg',
    description: 'High-speed jet ski racing across stunning water environments. Master the waves in this aquatic racing experience.',
    console: 'Nintendo Switch',
    generation: 8,
    releaseDate: '2022-11-18',
    category: 'new',
    inStock: true,
    rating: 4.2,
    features: ['Jet Ski Racing', 'Water Physics', 'Stunning Environments', 'Aquatic Speed'],
    priceCategory: '$60-$70'
  },
  {
    id: '12',
    name: 'Diluvion: Resubmerged',
    price: 70,
    image: '/Pokken Tournament DX.jpeg',
    description: 'Explore a flooded world in your submarine. Trade, fight, and discover secrets in this underwater RPG adventure.',
    console: 'Nintendo Switch',
    generation: 8,
    releaseDate: '2020-03-06',
    category: 'popular',
    inStock: true,
    rating: 4.1,
    features: ['Submarine RPG', 'Flooded World', 'Trading System', 'Underwater Exploration'],
    priceCategory: '$65-$75'
  },
  {
    id: '13',
    name: 'Ocean\'s Heart',
    price: 75,
    image: '/pokemon legends z-a.jpeg',
    description: 'An oceanic adventure inspired by classic action RPGs. Explore islands, dive deep, and uncover ancient sea mysteries.',
    console: 'Nintendo Switch',
    generation: 9,
    releaseDate: '2024-12-31',
    category: 'new',
    inStock: true,
    rating: 4.8,
    features: ['Ocean Adventure', 'Island Exploration', 'Ancient Mysteries', 'Action RPG'],
    priceCategory: '$70-$80'
  },
  {
    id: '14',
    name: 'Splatoon 3: Deep Sea Expansion',
    price: 95,
    image: '/Pokemon Violet + The Hidden Treasure of Area Zero.jpeg',
    description: 'The ultimate aquatic battle experience! Dive into new underwater arenas and master the art of ink warfare.',
    console: 'Nintendo Switch',
    generation: 9,
    releaseDate: '2022-09-09',
    category: 'new',
    inStock: true,
    rating: 4.9,
    features: ['Ink Warfare', 'Underwater Arenas', 'Multiplayer Battles', 'Aquatic Combat'],
    priceCategory: '$90-$100'
  }
];

export const featuredProducts = products.filter(p => p.category === 'popular' || p.category === 'new').slice(0, 6);
export const newProducts = products.filter(p => p.category === 'new');
export const popularProducts = products.filter(p => p.category === 'popular');

// Debug function to check image paths
export const debugImagePaths = () => {
  console.log('🔍 Product Image Paths:');
  products.forEach(product => {
    console.log(`${product.name}: ${product.image}`);
  });
};