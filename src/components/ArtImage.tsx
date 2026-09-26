import React from 'react';

interface ArtImageProps {
  type: 
    | 'hero' 
    | 'about' 
    | 'animal-welfare' 
    | 'environment' 
    | 'community' 
    | 'education' 
    | 'paw' 
    | 'clean' 
    | 'plant' 
    | 'feeding'
    | 'dog-rescue' 
    | 'garden' 
    | 'care-drive';
  className?: string;
  alt?: string;
}

export const ArtImage: React.FC<ArtImageProps> = ({ type, className = '', alt = 'Vetta Club action' }) => {
  // Rich editorial SVG art scenes with warm, natural palette and documentary depth
  const renderVisual = () => {
    switch (type) {
      case 'hero':
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 1200 680" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img" aria-label={alt}>
            <defs>
              <linearGradient id="heroBg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#142B1F" />
                <stop offset="45%" stopColor="#1D422F" />
                <stop offset="100%" stopColor="#2E5C43" />
              </linearGradient>
              <radialGradient id="sunGlow" cx="75%" cy="30%" r="65%">
                <stop offset="0%" stopColor="#F9DF98" stopOpacity="0.5" />
                <stop offset="40%" stopColor="#DCA86A" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#1D422F" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="warmGround" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#0B1A12" />
                <stop offset="60%" stopColor="#1E382A" />
                <stop offset="100%" stopColor="#2B4E3C" />
              </linearGradient>
              <linearGradient id="blanketGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#C96847" />
                <stop offset="100%" stopColor="#943F24" />
              </linearGradient>
            </defs>
            <rect width="1200" height="680" fill="url(#heroBg)" />
            <rect width="1200" height="680" fill="url(#sunGlow)" />

            {/* Background trees and warm courtyard architecture */}
            <path d="M0 450 C200 420 400 460 650 430 C900 400 1100 440 1200 420 L1200 680 L0 680 Z" fill="url(#warmGround)" />
            
            {/* Soft background foliage shapes */}
            <circle cx="150" cy="300" r="140" fill="#244E38" fillOpacity="0.6" />
            <circle cx="280" cy="280" r="180" fill="#1C402E" fillOpacity="0.7" />
            <circle cx="950" cy="260" r="220" fill="#28563E" fillOpacity="0.45" />
            <circle cx="1100" cy="320" r="160" fill="#1A3B29" fillOpacity="0.7" />

            {/* Sunlight rays subtle beams */}
            <path d="M850 0 L1050 680 L800 680 Z" fill="#FFE8AA" fillOpacity="0.06" />
            <path d="M720 0 L900 680 L680 680 Z" fill="#FFE8AA" fillOpacity="0.04" />

            {/* Silhouette of volunteers helping animal with deep warmth */}
            <g transform="translate(420, 240)">
              {/* Volunteer 1 (kneeling down tenderly) */}
              <circle cx="180" cy="110" r="42" fill="#E8D2BD" />
              <path d="M140 160 C150 140 210 140 220 160 L240 260 C240 280 120 280 120 260 Z" fill="#4B6B58" />
              <path d="M130 190 C150 220 190 240 220 230" stroke="#E8D2BD" strokeWidth="18" strokeLinecap="round" />
              
              {/* The rescued indie dog sitting with trust */}
              <ellipse cx="270" cy="270" rx="65" ry="45" fill="#C58A54" />
              <circle cx="310" cy="230" r="26" fill="#C58A54" />
              {/* Dog ears floppy and gentle */}
              <path d="M305 215 C295 200 285 220 295 235 Z" fill="#996030" />
              {/* Warm red/terracotta supportive wrap/bandage */}
              <path d="M245 250 C260 235 295 240 300 270 C285 285 255 280 245 250 Z" fill="url(#blanketGrad)" />
              {/* Dog wagging tail */}
              <path d="M210 275 C190 260 195 240 205 235" stroke="#C58A54" strokeWidth="12" strokeLinecap="round" />
              
              {/* Volunteer 2 (standing slightly behind holding medical supplies / water bowl) */}
              <circle cx="100" cy="65" r="38" fill="#DDBFA5" />
              <path d="M70 110 C80 95 130 95 140 110 L155 230 C155 245 60 245 60 230 Z" fill="#D9822B" fillOpacity="0.85" />
              <ellipse cx="145" cy="170" rx="18" ry="8" fill="#F4EDE0" />
            </g>

            {/* Foreground environmental blades and organic flora */}
            <path d="M0 620 Q120 560 240 680 L0 680 Z" fill="#0B1A12" />
            <path d="M150 680 Q220 590 280 680 Z" fill="#142F21" />
            <path d="M960 680 Q1050 580 1200 640 L1200 680 Z" fill="#0B1A12" />
            <circle cx="850" cy="180" r="5" fill="#FFEAA7" fillOpacity="0.8" />
            <circle cx="780" cy="220" r="3" fill="#FFEAA7" fillOpacity="0.7" />
            <circle cx="920" cy="140" r="4" fill="#FFEAA7" fillOpacity="0.5" />
          </svg>
        );

      case 'about':
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 600 480" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img" aria-label={alt}>
            <defs>
              <linearGradient id="aboutSoil" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4A3428" />
                <stop offset="60%" stopColor="#2F2119" />
                <stop offset="100%" stopColor="#1B130E" />
              </linearGradient>
              <linearGradient id="warmAmbience" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFF2D6" />
                <stop offset="100%" stopColor="#E2CCA8" />
              </linearGradient>
              <linearGradient id="leafGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7DBB6A" />
                <stop offset="100%" stopColor="#2E693B" />
              </linearGradient>
            </defs>
            <rect width="600" height="480" fill="url(#warmAmbience)" />
            {/* Rich dark textured soil layer */}
            <path d="M0 260 C150 240 320 270 600 240 L600 480 L0 480 Z" fill="url(#aboutSoil)" />
            
            {/* Warm sunlight burst */}
            <circle cx="300" cy="90" r="140" fill="#FFEDB8" fillOpacity="0.5" />
            
            {/* Central Young Plant / Sapling */}
            <path d="M300 320 C298 250 296 200 292 140" stroke="#5C8548" strokeWidth="8" strokeLinecap="round" />
            {/* Leaves unfolding */}
            <path d="M292 180 C240 160 240 120 290 140" fill="url(#leafGreen)" />
            <path d="M292 180 C345 160 345 120 295 140" fill="url(#leafGreen)" />
            <path d="M294 140 C280 100 310 90 300 135" fill="#88C76D" />
            
            {/* Diverse caring hands encircling the plant */}
            {/* Left hands */}
            <path d="M80 340 C140 310 230 310 270 330 C270 350 220 370 140 370 Z" fill="#D79E78" />
            <path d="M120 380 C180 340 250 345 280 355 C270 375 220 395 150 410 Z" fill="#C4845D" />
            
            {/* Right hands */}
            <path d="M520 330 C460 300 370 305 330 330 C330 350 380 370 460 370 Z" fill="#E8B998" />
            <path d="M480 380 C420 345 350 345 320 360 C330 380 380 398 450 410 Z" fill="#B3734F" />

            {/* Dew drops / water droplets glistening */}
            <circle cx="280" cy="155" r="4" fill="#FFFFFF" fillOpacity="0.85" />
            <circle cx="310" cy="165" r="3" fill="#FFFFFF" fillOpacity="0.8" />
          </svg>
        );

      case 'animal-welfare':
      case 'paw':
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 500 360" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img" aria-label={alt}>
            <defs>
              <linearGradient id="awBg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F5EDE4" />
                <stop offset="100%" stopColor="#DFD1C2" />
              </linearGradient>
            </defs>
            <rect width="500" height="360" fill="url(#awBg)" />
            <circle cx="380" cy="120" r="160" fill="#EAD9C8" />
            
            {/* Caring Volunteer arms and gentle Indie Dog */}
            <g transform="translate(60, 40)">
              {/* Warm cozy blanket */}
              <path d="M80 180 C120 150 260 160 320 200 L310 290 L70 290 Z" fill="#B8583B" fillOpacity="0.9" />
              <path d="M100 200 C150 180 230 185 280 215" stroke="#D37E64" strokeWidth="6" strokeDasharray="10 6" />

              {/* Dog Head and Eyes with loving peaceful expression */}
              <ellipse cx="190" cy="140" rx="55" ry="42" fill="#D19056" />
              <circle cx="225" cy="130" r="30" fill="#D19056" />
              {/* Nose and friendly muzzle */}
              <ellipse cx="250" cy="145" rx="16" ry="12" fill="#BA7338" />
              <ellipse cx="258" cy="142" rx="7" ry="5" fill="#2E1C12" />
              {/* Floppy ear */}
              <path d="M175 110 C155 80 135 125 155 145 Z" fill="#A86127" />
              {/* Closed peaceful eyes */}
              <path d="M215 128 Q225 122 232 129" stroke="#2E1C12" strokeWidth="3" strokeLinecap="round" />

              {/* Human hands gently supporting head */}
              <path d="M260 170 C280 185 285 210 270 230 C240 220 230 180 260 170 Z" fill="#E8BD9B" />
              <path d="M140 180 C120 195 110 220 125 240 C150 230 165 200 140 180 Z" fill="#D6A582" />
            </g>

            {/* Gentle medical cross badge icon overlay indicator in corner */}
            <circle cx="440" cy="60" r="24" fill="#183B2B" />
            <path d="M440 48 L440 72 M428 60 L452 60" stroke="#FAF9F5" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
        );

      case 'environment':
      case 'plant':
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 500 360" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img" aria-label={alt}>
            <defs>
              <linearGradient id="envGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#204A36" />
                <stop offset="50%" stopColor="#173B2A" />
                <stop offset="100%" stopColor="#0E2419" />
              </linearGradient>
            </defs>
            <rect width="500" height="360" fill="url(#envGrad)" />
            
            {/* Morning mist and sun shafts */}
            <circle cx="400" cy="80" r="100" fill="#FFEDB0" fillOpacity="0.25" />
            <path d="M350 0 L450 360 L280 360 Z" fill="#FFEBB0" fillOpacity="0.08" />

            {/* Forest canopy silhouettes */}
            <circle cx="80" cy="180" r="100" fill="#2E6349" fillOpacity="0.6" />
            <circle cx="210" cy="150" r="130" fill="#26543E" fillOpacity="0.75" />
            <circle cx="380" cy="190" r="120" fill="#1E4331" fillOpacity="0.8" />

            {/* Tree planting volunteers on hillside */}
            <path d="M0 240 Q250 200 500 250 L500 360 L0 360 Z" fill="#143122" />
            
            {/* Volunteer planting sapling */}
            <g transform="translate(180, 160)">
              <circle cx="60" cy="40" r="16" fill="#F4D2BA" />
              <path d="M45 60 C50 50 70 50 75 60 L85 105 L35 105 Z" fill="#E6A15C" />
              {/* Sapling with tree-guard stakes */}
              <line x1="110" y1="65" x2="110" y2="120" stroke="#7AC672" strokeWidth="4" strokeLinecap="round" />
              <ellipse cx="110" cy="60" rx="20" ry="25" fill="#8AD682" />
              {/* Water can */}
              <rect x="130" y="85" width="22" height="24" rx="4" fill="#A4C2BC" />
              <line x1="152" y1="88" x2="162" y2="80" stroke="#A4C2BC" strokeWidth="3" />
            </g>
          </svg>
        );

      case 'community':
      case 'care-drive':
      case 'feeding':
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 500 360" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img" aria-label={alt}>
            <defs>
              <linearGradient id="commGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4A3425" />
                <stop offset="50%" stopColor="#36251A" />
                <stop offset="100%" stopColor="#241710" />
              </linearGradient>
            </defs>
            <rect width="500" height="360" fill="url(#commGrad)" />
            
            {/* Warm festival lamps & community tent glow */}
            <circle cx="250" cy="110" r="120" fill="#FFC97A" fillOpacity="0.28" />
            
            {/* Community Pavilion silhouettes */}
            <path d="M50 140 L250 80 L450 140 L440 280 L60 280 Z" fill="#5E4331" fillOpacity="0.4" />
            
            {/* Serving warm nourishment and gathering */}
            <g transform="translate(100, 140)">
              {/* Steaming pot of nutrition */}
              <ellipse cx="150" cy="110" rx="40" ry="22" fill="#D38235" />
              <path d="M110 110 C110 145 190 145 190 110 Z" fill="#9C5919" />
              {/* Warm gentle steam */}
              <path d="M140 90 Q135 70 145 55" stroke="#FFE9C7" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.6" />
              <path d="M155 92 Q162 72 154 52" stroke="#FFE9C7" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.6" />
              
              {/* People reaching out in trust & support */}
              <circle cx="60" cy="65" r="18" fill="#E8B896" />
              <path d="M45 88 C50 78 70 78 75 88 L85 140 L35 140 Z" fill="#3D6B52" />
              
              <circle cx="240" cy="65" r="18" fill="#D29977" />
              <path d="M225 88 C230 78 250 78 255 88 L265 140 L215 140 Z" fill="#BA5D3F" />
            </g>
          </svg>
        );

      case 'education':
      case 'clean':
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 500 360" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img" aria-label={alt}>
            <defs>
              <linearGradient id="eduGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1E3E3B" />
                <stop offset="100%" stopColor="#112423" />
              </linearGradient>
            </defs>
            <rect width="500" height="360" fill="url(#eduGrad)" />
            <circle cx="250" cy="140" r="140" fill="#75C2B6" fillOpacity="0.2" />

            {/* Clean street / youth circle with notebook & green plants */}
            <g transform="translate(110, 100)">
              {/* Clean sunlit park bench & children listening */}
              <rect x="40" y="110" width="200" height="12" rx="4" fill="#D4A771" />
              <line x1="60" y1="122" x2="60" y2="160" stroke="#735532" strokeWidth="6" />
              <line x1="220" y1="122" x2="220" y2="160" stroke="#735532" strokeWidth="6" />

              {/* Young volunteer teacher explaining */}
              <circle cx="80" cy="60" r="18" fill="#F4CDAF" />
              <path d="M65 82 C70 74 90 74 95 82 L105 130 L55 130 Z" fill="#2E6B56" />

              {/* Child listening with interest */}
              <circle cx="180" cy="70" r="15" fill="#E0A785" />
              <path d="M168 88 C172 82 188 82 192 88 L200 130 L160 130 Z" fill="#BA5D3F" />

              {/* Bird perched freely on tree branch */}
              <path d="M220 30 Q240 25 245 40 Q230 45 220 30 Z" fill="#F0C265" />
            </g>
          </svg>
        );

      case 'dog-rescue':
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 500 360" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img" aria-label={alt}>
            <rect width="500" height="360" fill="#F7F1E8" />
            {/* Living room window sunlight */}
            <rect x="280" y="40" width="160" height="180" rx="8" fill="#FFF9E6" stroke="#D8C8B4" strokeWidth="6" />
            <line x1="360" y1="40" x2="360" y2="220" stroke="#D8C8B4" strokeWidth="4" />
            <line x1="280" y1="130" x2="440" y2="130" stroke="#D8C8B4" strokeWidth="4" />

            {/* Warm green armchair */}
            <path d="M80 200 C80 150 120 130 200 130 C280 130 320 150 320 200 L340 300 L60 300 Z" fill="#2F5743" />
            <path d="M100 230 C130 210 270 210 300 230 L290 280 L110 280 Z" fill="#224232" />

            {/* Sheru sleeping peacefully curled up */}
            <ellipse cx="200" cy="220" rx="55" ry="36" fill="#C58548" />
            <circle cx="240" cy="205" r="22" fill="#C58548" />
            <path d="M228 190 C220 180 212 195 220 205 Z" fill="#965624" />
            <path d="M245 208 Q252 205 256 210" stroke="#331E12" strokeWidth="2.5" />
            <ellipse cx="260" cy="214" rx="5" ry="4" fill="#331E12" />
          </svg>
        );

      case 'garden':
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 500 360" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img" aria-label={alt}>
            <rect width="500" height="360" fill="#EAF0E8" />
            {/* Garden wooden trellis with climbing vines */}
            <line x1="60" y1="40" x2="440" y2="40" stroke="#8E7155" strokeWidth="6" />
            <line x1="120" y1="40" x2="120" y2="300" stroke="#8E7155" strokeWidth="4" />
            <line x1="250" y1="40" x2="250" y2="300" stroke="#8E7155" strokeWidth="4" />
            <line x1="380" y1="40" x2="380" y2="300" stroke="#8E7155" strokeWidth="4" />

            {/* Rich marigolds and green lush vegetation */}
            <circle cx="100" cy="260" r="45" fill="#3B704F" />
            <circle cx="160" cy="240" r="55" fill="#4B8662" />
            <circle cx="250" cy="250" r="60" fill="#356847" />
            <circle cx="340" cy="235" r="50" fill="#48815E" />
            <circle cx="410" cy="260" r="45" fill="#2E5A3D" />

            {/* Bright orange marigold flowers */}
            <circle cx="150" cy="215" r="14" fill="#F49322" />
            <circle cx="180" cy="235" r="11" fill="#FFB733" />
            <circle cx="230" cy="210" r="16" fill="#F49322" />
            <circle cx="280" cy="225" r="13" fill="#FFB733" />
            <circle cx="360" cy="205" r="15" fill="#F49322" />

            {/* Wooden park bench made of pallets */}
            <rect x="180" y="270" width="140" height="12" rx="3" fill="#A8815B" />
            <line x1="200" y1="282" x2="200" y2="330" stroke="#5E432A" strokeWidth="6" />
            <line x1="300" y1="282" x2="300" y2="330" stroke="#5E432A" strokeWidth="6" />
          </svg>
        );

      default:
        return (
          <div className="w-full h-full bg-[#EAE6DD] flex items-center justify-center text-[#55695E]">
            <span className="text-sm font-medium tracking-wide">Vetta Club Action</span>
          </div>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {renderVisual()}
    </div>
  );
};
