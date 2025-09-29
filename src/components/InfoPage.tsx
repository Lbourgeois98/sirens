import React from 'react';
import { ArrowLeft, Anchor, Waves, Fish, Crown, Shell, Compass } from 'lucide-react';

interface InfoPageProps {
  page: string;
  onBackToHome: () => void;
}

const InfoPage: React.FC<InfoPageProps> = ({ page, onBackToHome }) => {
  const getPageContent = () => {
    switch (page) {
      case 'mermaid-legends':
        return {
          title: 'Mermaid Legends',
          icon: <Anchor className="w-12 h-12 text-sirens-gold mystical-glow" />,
          content: (
            <div className="space-y-6">
              <p className="elegant-text text-lg text-sirens-pearl leading-relaxed">
                Dive deep into the ancient tales of mermaids and sea sirens who have guided sailors 
                through treacherous waters for millennia. These mystical beings possess the power 
                to control the tides and speak with all creatures of the deep.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="enchanted-bubble">
                  <h3 className="fantasy-font text-xl text-sirens-gold mb-3">The Golden Siren</h3>
                  <p className="elegant-text text-sirens-pearl">
                    Legend speaks of a golden-tailed siren who guards the greatest treasures 
                    of the ocean depths, appearing only to those pure of heart.
                  </p>
                </div>
                
                <div className="enchanted-bubble">
                  <h3 className="fantasy-font text-xl text-sirens-teal mb-3">Song of the Deep</h3>
                  <p className="elegant-text text-sirens-pearl">
                    The haunting melodies of mermaid songs can calm the fiercest storms 
                    and reveal hidden underwater passages to lost kingdoms.
                  </p>
                </div>
              </div>
            </div>
          )
        };
        
      case 'ocean-depths':
        return {
          title: 'Ocean Depths Guide',
          icon: <Waves className="w-12 h-12 text-sirens-teal mystical-glow" />,
          content: (
            <div className="space-y-6">
              <p className="elegant-text text-lg text-sirens-pearl leading-relaxed">
                Explore the mysterious layers of our vast oceans, from the sunlit surface 
                to the abyssal depths where ancient creatures dwell in eternal darkness.
              </p>
              
              <div className="space-y-4">
                <div className="enchanted-bubble">
                  <h3 className="fantasy-font text-xl text-sirens-gold mb-3">Sunlight Zone (0-200m)</h3>
                  <p className="elegant-text text-sirens-pearl">
                    Where colorful coral reefs flourish and tropical fish dance in the warm currents.
                  </p>
                </div>
                
                <div className="enchanted-bubble">
                  <h3 className="fantasy-font text-xl text-sirens-teal mb-3">Twilight Zone (200-1000m)</h3>
                  <p className="elegant-text text-sirens-pearl">
                    Home to bioluminescent creatures that create their own magical light shows.
                  </p>
                </div>
                
                <div className="enchanted-bubble">
                  <h3 className="fantasy-font text-xl text-sirens-purple mb-3">Abyssal Zone (4000m+)</h3>
                  <p className="elegant-text text-sirens-pearl">
                    The deepest realm where ancient sea dragons and forgotten civilizations rest.
                  </p>
                </div>
              </div>
            </div>
          )
        };
        
      case 'aquatic-gaming':
        return {
          title: 'Aquatic Gaming Tips',
          icon: <Fish className="w-12 h-12 text-sirens-coral mystical-glow" />,
          content: (
            <div className="space-y-6">
              <p className="elegant-text text-lg text-sirens-pearl leading-relaxed">
                Master the art of underwater gaming with these essential tips for navigating 
                aquatic adventures and conquering the seven seas.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="enchanted-bubble">
                  <h3 className="fantasy-font text-xl text-sirens-gold mb-3">Underwater Navigation</h3>
                  <p className="elegant-text text-sirens-pearl">
                    Use sonar and underwater landmarks to navigate the depths. Follow the 
                    bioluminescent trails left by friendly sea creatures.
                  </p>
                </div>
                
                <div className="enchanted-bubble">
                  <h3 className="fantasy-font text-xl text-sirens-teal mb-3">Marine Life Interaction</h3>
                  <p className="elegant-text text-sirens-pearl">
                    Approach sea creatures slowly and calmly. Many will become allies 
                    if you show respect for their underwater domain.
                  </p>
                </div>
                
                <div className="enchanted-bubble">
                  <h3 className="fantasy-font text-xl text-sirens-coral mb-3">Treasure Hunting</h3>
                  <p className="elegant-text text-sirens-pearl">
                    Look for glinting objects in coral reefs and underwater caves. 
                    The most valuable treasures are often guarded by sea guardians.
                  </p>
                </div>
                
                <div className="enchanted-bubble">
                  <h3 className="fantasy-font text-xl text-sirens-purple mb-3">Deep Sea Survival</h3>
                  <p className="elegant-text text-sirens-pearl">
                    Manage your oxygen carefully and upgrade your diving equipment. 
                    Always have an escape route planned when exploring deep trenches.
                  </p>
                </div>
              </div>
            </div>
          )
        };
        
      case 'sea-creatures':
        return {
          title: 'Sea Creature Lore',
          icon: <Shell className="w-12 h-12 text-sirens-purple mystical-glow" />,
          content: (
            <div className="space-y-6">
              <p className="elegant-text text-lg text-sirens-pearl leading-relaxed">
                Discover the magnificent creatures that inhabit our oceans, from the smallest 
                seahorse to the mightiest kraken that dwells in the deepest trenches.
              </p>
              
              <div className="space-y-4">
                <div className="enchanted-bubble">
                  <h3 className="fantasy-font text-xl text-sirens-gold mb-3">🐙 The Great Kraken</h3>
                  <p className="elegant-text text-sirens-pearl">
                    Ancient guardian of the deep ocean trenches, this colossal octopus 
                    is said to control the ocean currents with its massive tentacles.
                  </p>
                </div>
                
                <div className="enchanted-bubble">
                  <h3 className="fantasy-font text-xl text-sirens-teal mb-3">🦈 Celestial Sharks</h3>
                  <p className="elegant-text text-sirens-pearl">
                    These mystical sharks have scales that shimmer like stars and can 
                    navigate by the constellations reflected on the ocean surface.
                  </p>
                </div>
                
                <div className="enchanted-bubble">
                  <h3 className="fantasy-font text-xl text-sirens-coral mb-3">🐠 Rainbow Reef Fish</h3>
                  <p className="elegant-text text-sirens-pearl">
                    Tropical fish that change colors with their emotions, creating 
                    spectacular light shows among the coral gardens.
                  </p>
                </div>
                
                <div className="enchanted-bubble">
                  <h3 className="fantasy-font text-xl text-sirens-purple mb-3">🐋 Song Whales</h3>
                  <p className="elegant-text text-sirens-pearl">
                    Majestic whales whose songs can be heard across entire ocean basins, 
                    carrying messages between distant underwater kingdoms.
                  </p>
                </div>
              </div>
            </div>
          )
        };
        
      case 'underwater-reviews':
        return {
          title: 'Underwater Game Reviews',
          icon: <Crown className="w-12 h-12 text-sirens-gold mystical-glow" />,
          content: (
            <div className="space-y-6">
              <p className="elegant-text text-lg text-sirens-pearl leading-relaxed">
                Expert reviews of the finest aquatic gaming experiences, rated by our 
                council of sea gaming masters and mermaid critics.
              </p>
              
              <div className="space-y-4">
                <div className="enchanted-bubble">
                  <h3 className="fantasy-font text-xl text-sirens-gold mb-3">⭐⭐⭐⭐⭐ Subnautica</h3>
                  <p className="elegant-text text-sirens-pearl mb-2">
                    "A masterpiece of underwater survival that captures the true terror 
                    and beauty of the deep ocean. Every dive feels like a real adventure."
                  </p>
                  <p className="mystical-text text-sm text-sirens-teal">- Marina Deepcurrent, Sea Gaming Expert</p>
                </div>
                
                <div className="enchanted-bubble">
                  <h3 className="fantasy-font text-xl text-sirens-teal mb-3">⭐⭐⭐⭐ ABZÛ</h3>
                  <p className="elegant-text text-sirens-pearl mb-2">
                    "A meditative journey through stunning underwater landscapes. 
                    Perfect for those seeking peace beneath the waves."
                  </p>
                  <p className="mystical-text text-sm text-sirens-teal">- Coral Wavesinger, Mermaid Critic</p>
                </div>
                
                <div className="enchanted-bubble">
                  <h3 className="fantasy-font text-xl text-sirens-coral mb-3">⭐⭐⭐⭐⭐ Endless Ocean Luminous</h3>
                  <p className="elegant-text text-sirens-pearl mb-2">
                    "The most realistic marine life simulation ever created. 
                    Swimming with virtual dolphins feels magical."
                  </p>
                  <p className="mystical-text text-sm text-sirens-teal">- Neptune Tidecaller, Ocean Sage</p>
                </div>
              </div>
            </div>
          )
        };
        
      case 'aquatic-community':
        return {
          title: 'Aquatic Gaming Community',
          icon: <Compass className="w-12 h-12 text-sirens-teal mystical-glow" />,
          content: (
            <div className="space-y-6">
              <p className="elegant-text text-lg text-sirens-pearl leading-relaxed">
                Join our thriving community of underwater gaming enthusiasts, where sea 
                captains and mermaids share their greatest aquatic adventures.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="enchanted-bubble">
                  <h3 className="fantasy-font text-xl text-sirens-gold mb-3">Deep Sea Explorers Guild</h3>
                  <p className="elegant-text text-sirens-pearl">
                    Connect with fellow deep sea adventurers and share your most 
                    thrilling underwater discoveries and close encounters.
                  </p>
                </div>
                
                <div className="enchanted-bubble">
                  <h3 className="fantasy-font text-xl text-sirens-teal mb-3">Mermaid Gaming Circle</h3>
                  <p className="elegant-text text-sirens-pearl">
                    A magical gathering place for aquatic gaming enthusiasts to 
                    discuss strategies and share gameplay videos.
                  </p>
                </div>
                
                <div className="enchanted-bubble">
                  <h3 className="fantasy-font text-xl text-sirens-coral mb-3">Treasure Hunters Society</h3>
                  <p className="elegant-text text-sirens-pearl">
                    Dedicated to finding the rarest underwater treasures and 
                    hidden secrets in aquatic gaming worlds.
                  </p>
                </div>
                
                <div className="enchanted-bubble">
                  <h3 className="fantasy-font text-xl text-sirens-purple mb-3">Ocean Racing League</h3>
                  <p className="elegant-text text-sirens-pearl">
                    Competitive underwater racing tournaments featuring submarines, 
                    sea creatures, and mystical water vehicles.
                  </p>
                </div>
              </div>
            </div>
          )
        };
        
      default:
        return {
          title: 'Unknown Page',
          icon: <Fish className="w-12 h-12 text-sirens-pearl" />,
          content: <p className="elegant-text text-sirens-pearl">Page not found.</p>
        };
    }
  };

  const pageContent = getPageContent();

  return (
    <div className="min-h-screen relative z-10">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={onBackToHome}
          className="mb-8 flex items-center gap-3 enchanted-button px-6 py-3 rounded-full
                   transform hover:scale-105 transition-all duration-300 treasure-shadow"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="mystical-text font-bold">Back to Sirens Fortune</span>
        </button>

        {/* Page Header */}
        <div className="text-center mb-12 enchanted-entrance">
          <div className="mb-6">
            {pageContent.icon}
          </div>
          <h1 className="fantasy-font text-4xl md:text-5xl text-sirens-gold mb-4 mystical-glow">
            {pageContent.title}
          </h1>
          <div className="w-24 h-1 bg-sirens-teal mx-auto rounded-full mystical-glow"></div>
        </div>

        {/* Page Content */}
        <div className="max-w-4xl mx-auto">
          <div className="mystical-bg underwater-border rounded-2xl p-8 treasure-shadow">
            {pageContent.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;