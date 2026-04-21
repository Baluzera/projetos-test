// Imagens estilo "adesivo de máquina de academia" para cada exercício
// Criadas em SVG minimalista

const imagensExercicios = {
    // PEITO - ALTA
    "Supino Inclinado": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">SUPINO INCLINADO</text>
        <!-- Banco -->
        <rect x="20" y="50" width="60" height="8" rx="2" fill="#4a4a6a"/>
        <!-- Pessoa deitada -->
        <ellipse cx="50" cy="45" rx="15" ry="8" fill="#ff6b6b"/>
        <circle cx="50" cy="32" r="8" fill="#ff6b6b"/>
        <!-- Barra -->
        <rect x="15" y="38" width="70" height="4" rx="2" fill="#ffd93d"/>
        <!-- Setas indicando movimento -->
        <path d="M30 30 L30 25 L35 27" stroke="#4ecdc4" stroke-width="2" fill="none"/>
        <path d="M70 30 L70 25 L65 27" stroke="#4ecdc4" stroke-width="2" fill="none"/>
    </svg>`,
    
    "Crucifixo Inclinado": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">CRUCIFIXO INCL.</text>
        <rect x="20" y="50" width="60" height="8" rx="2" fill="#4a4a6a"/>
        <ellipse cx="50" cy="45" rx="15" ry="8" fill="#ff6b6b"/>
        <circle cx="50" cy="32" r="8" fill="#ff6b6b"/>
        <!-- Braços abertos -->
        <path d="M35 40 L15 35" stroke="#ffd93d" stroke-width="3"/>
        <path d="M65 40 L85 35" stroke="#ffd93d" stroke-width="3"/>
    </svg>`,
    
    "Peck Deck Inclinado": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">PECK DECK</text>
        <!-- Máquina -->
        <rect x="25" y="60" width="50" height="30" rx="5" fill="#2d2d4a"/>
        <circle cx="30" cy="50" r="8" fill="#ff6b6b"/>
        <circle cx="70" cy="50" r="8" fill="#ff6b6b"/>
        <!-- Alças -->
        <path d="M30 42 L30 35" stroke="#ffd93d" stroke-width="3"/>
        <path d="M70 42 L70 35" stroke="#ffd93d" stroke-width="3"/>
    </svg>`,
    
    // PEITO - MÉDIA
    "Supino Reto": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">SUPINO RETO</text>
        <!-- Banco -->
        <rect x="15" y="55" width="70" height="6" rx="2" fill="#4a4a6a"/>
        <!-- Pessoa -->
        <ellipse cx="50" cy="50" rx="18" ry="10" fill="#ff6b6b"/>
        <circle cx="50" cy="35" r="10" fill="#ff6b6b"/>
        <!-- Barra -->
        <rect x="10" y="42" width="80" height="5" rx="2" fill="#ffd93d"/>
    </svg>`,
    
    "Peck Deck": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">PECK DECK</text>
        <!-- Máquina -->
        <rect x="20" y="65" width="60" height="25" rx="5" fill="#2d2d4a"/>
        <circle cx="35" cy="55" r="10" fill="#ff6b6b"/>
        <circle cx="65" cy="55" r="10" fill="#ff6b6b"/>
        <path d="M35 45 L35 38" stroke="#ffd93d" stroke-width="3"/>
        <path d="M65 45 L65 38" stroke="#ffd93d" stroke-width="3"/>
    </svg>`,
    
    "Crucifixo": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">CRUCIFIXO</text>
        <rect x="15" y="55" width="70" height="6" rx="2" fill="#4a4a6a"/>
        <ellipse cx="50" cy="50" rx="18" ry="10" fill="#ff6b6b"/>
        <circle cx="50" cy="35" r="10" fill="#ff6b6b"/>
        <!-- Braços abertos em arco -->
        <path d="M32 42 Q20 35 12 42" stroke="#ffd93d" stroke-width="3" fill="none"/>
        <path d="M68 42 Q80 35 88 42" stroke="#ffd93d" stroke-width="3" fill="none"/>
    </svg>`,
    
    // PEITO - BAIXA
    "Supino Declinado": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">SUPINO DECLINADO</text>
        <!-- Banco inclinado -->
        <path d="M20 50 L80 60" stroke="#4a4a6a" stroke-width="6"/>
        <!-- Pessoa -->
        <ellipse cx="50" cy="48" rx="15" ry="8" fill="#ff6b6b"/>
        <circle cx="50" cy="32" r="8" fill="#ff6b6b"/>
        <rect x="10" y="38" width="80" height="4" rx="2" fill="#ffd93d"/>
    </svg>`,
    
    "Pulley Baixo": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">PULLEY BAIXO</text>
        <!-- Máquina pulley -->
        <rect x="30" y="70" width="40" height="25" rx="3" fill="#2d2d4a"/>
        <rect x="35" y="55" width="30" height="15" rx="2" fill="#3d3d5a"/>
        <!-- Pessoa sentada -->
        <circle cx="50" cy="45" r="10" fill="#ff6b6b"/>
        <!-- Cabo -->
        <line x1="50" y1="55" x2="50" y2="35" stroke="#ffd93d" stroke-width="2"/>
    </svg>`,
    
    "Supino com Halteres": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">SUPINO HALTERES</text>
        <rect x="15" y="55" width="70" height="6" rx="2" fill="#4a4a6a"/>
        <ellipse cx="50" cy="50" rx="18" ry="10" fill="#ff6b6b"/>
        <circle cx="50" cy="35" r="10" fill="#ff6b6b"/>
        <!-- Halteres -->
        <rect x="8" y="40" width="12" height="8" rx="2" fill="#ffd93d"/>
        <rect x="80" y="40" width="12" height="8" rx="2" fill="#ffd93d"/>
    </svg>`,
    
    // COSTAS - DORSAL
    "Puxada Aberta": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">PUXADA ABERTA</text>
        <!-- Máquina -->
        <rect x="30" y="70" width="40" height="30" rx="3" fill="#2d2d4a"/>
        <!-- Barra -->
        <rect x="20" y="60" width="60" height="6" rx="3" fill="#ffd93d"/>
        <!-- Pessoa -->
        <circle cx="50" cy="40" r="12" fill="#6b5bff"/>
        <path d="M50 50 L50 70" stroke="#6b5bff" stroke-width="8"/>
        <!-- Setas indicando puxada -->
        <path d="M35 55 L50 55" stroke="#4ecdc4" stroke-width="2"/>
    </svg>`,
    
    "Pulley Ventral": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">PULLEY VENTRAL</text>
        <rect x="30" y="70" width="40" height="30" rx="3" fill="#2d2d4a"/>
        <rect x="20" y="55" width="60" height="8" rx="3" fill="#ffd93d"/>
        <circle cx="50" cy="38" r="12" fill="#6b5bff"/>
        <path d="M50 48 L50 65" stroke="#6b5bff" stroke-width="10"/>
    </svg>`,
    
    "Pull-up": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">PULL-UP</text>
        <!-- Barra fixa -->
        <rect x="20" y="25" width="60" height="4" fill="#ffd93d"/>
        <!-- Pessoa悬空 -->
        <circle cx="50" cy="55" r="10" fill="#6b5bff"/>
        <path d="M50 65 L50 85" stroke="#6b5bff" stroke-width="6"/>
        <path d="M42 90 L42 105" stroke="#6b5bff" stroke-width="5"/>
        <path d="M58 90 L58 105" stroke="#6b5bff" stroke-width="5"/>
    </svg>`,
    
    // COSTAS - LOMBAD.A
    "Remada Curvada": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">REMADA CURVADA</text>
        <!-- Halteres no chão -->
        <rect x="25" y="95" width="8" height="15" rx="2" fill="#ffd93d"/>
        <rect x="67" y="95" width="8" height="15" rx="2" fill="#ffd93d"/>
        <!-- Pessoa inclinada -->
        <path d="M30 100 Q50 60 70 100" stroke="#6b5bff" stroke-width="10" fill="none"/>
        <!-- Barra -->
        <rect x="20" y="50" width="60" height="4" fill="#ffd93d"/>
    </svg>`,
    
    "Stiff": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">STIFF</text>
        <!-- Halteres -->
        <rect x="30" y="90" width="6" height="20" rx="2" fill="#ffd93d"/>
        <rect x="64" y="90" width="6" height="20" rx="2" fill="#ffd93d"/>
        <!-- Pessoa inclinada -->
        <path d="M35 95 Q50 55 65 95" stroke="#6b5bff" stroke-width="10" fill="none"/>
    </svg>`,
    
    "Remada Unilateral": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">REMADA UNILAT.</text>
        <!-- Banco -->
        <rect x="10" y="70" width="35" height="8" rx="2" fill="#4a4a6a"/>
        <!-- Pessoa -->
        <path d="M25 70 L25 55" stroke="#6b5bff" stroke-width="8"/>
        <circle cx="25" cy="45" r="10" fill="#6b5bff"/>
        <!-- Haltere -->
        <rect x="55" y="60" width="10" height="20" rx="3" fill="#ffd93d"/>
    </svg>`,
    
    // COSTAS - TRAPÉZIO
    "Elevação Lateral": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">ELEV. LATERAL</text>
        <!-- Pessoa em pé -->
        <circle cx="50" cy="35" r="10" fill="#6b5bff"/>
        <path d="M50 45 L50 75" stroke="#6b5bff" stroke-width="8"/>
        <path d="M40 105 L40 85" stroke="#6b5bff" stroke-width="5"/>
        <path d="M60 105 L60 85" stroke="#6b5bff" stroke-width="5"/>
        <!-- Halteres levantados -->
        <rect x="30" y="25" width="8" height="12" rx="2" fill="#ffd93d"/>
        <rect x="62" y="25" width="8" height="12" rx="2" fill="#ffd93d"/>
    </svg>`,
    
    "Face Pull": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">FACE PULL</text>
        <!-- Cabo resistência -->
        <path d="M30 80 Q30 40 70 40" stroke="#ffd93d" stroke-width="3" fill="none"/>
        <circle cx="70" cy="40" r="3" fill="#ffd93d"/>
        <!-- Pessoa -->
        <circle cx="50" cy="65" r="12" fill="#6b5bff"/>
        <line x1="50" y1="77" x2="50" y2="105" stroke="#6b5bff" stroke-width="8"/>
    </svg>`,
    
    "Shrugs": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">SHrugs</text>
        <!-- Halteres -->
        <rect x="25" y="90" width="10" height="20" rx="2" fill="#ffd93d"/>
        <rect x="65" y="90" width="10" height="20" rx="2" fill="#ffd93d"/>
        <!-- Pessoa -->
        <circle cx="50" cy="40" r="12" fill="#6b5bff"/>
        <line x1="50" y1="52" x2="50" y2="85" stroke="#6b5bff" stroke-width="10"/>
    </svg>`,
    
    // OMBRO
    "Desenvolvimento Militar": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">DESENVOLVIMENTO</text>
        <circle cx="50" cy="35" r="10" fill="#2ecdc4"/>
        <path d="M50 45 L50 75" stroke="#2ecdc4" stroke-width="8"/>
        <path d="M35 105 L35 85" stroke="#2ecdc4" stroke-width="5"/>
        <path d="M65 105 L65 85" stroke="#2ecdc4" stroke-width="5"/>
        <!-- Halteres overhead -->
        <rect x="30" y="20" width="14" height="10" rx="2" fill="#ffd93d"/>
        <rect x="56" y="20" width="14" height="10" rx="2" fill="#ffd93d"/>
    </svg>`,
    
    "Arnold Press": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">ARNOLD PRESS</text>
        <circle cx="50" cy="38" r="10" fill="#2ecdc4"/>
        <path d="M50 48 L50 80" stroke="#2ecdc4" stroke-width="8"/>
        <path d="M35 105 L35 85" stroke="#2ecdc4" stroke-width="5"/>
        <path d="M65 105 L65 85" stroke="#2ecdc4" stroke-width="5"/>
        <!-- Halteres em rotação -->
        <rect x="25" y="25" width="12" height="8" rx="2" fill="#ffd93d"/>
        <rect x="63" y="25" width="12" height="8" rx="2" fill="#ffd93d"/>
    </svg>`,
    
    "Elevação Frontal": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">ELEV. FRONTAL</text>
        <circle cx="50" cy="35" r="10" fill="#2ecdc4"/>
        <path d="M50 45 L50 75" stroke="#2ecdc4" stroke-width="8"/>
        <path d="M35 105 L35 85" stroke="#2ecdc4" stroke-width="5"/>
        <path d="M65 105 L65 85" stroke="#2ecdc4" stroke-width="5"/>
        <!-- Halteres levantados -->
        <rect x="42" y="18" width="16" height="10" rx="2" fill="#ffd93d"/>
    </svg>`,
    
    "Elevação Lateral": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">ELEV. LATERAL</text>
        <circle cx="50" cy="35" r="10" fill="#2ecdc4"/>
        <path d="M50 45 L50 75" stroke="#2ecdc4" stroke-width="8"/>
        <path d="M35 105 L35 85" stroke="#2ecdc4" stroke-width="5"/>
        <path d="M65 105 L65 85" stroke="#2ecdc4" stroke-width="5"/>
        <!-- Braços levantados lateralmente -->
        <rect x="25" y="25" width="12" height="8" rx="2" fill="#ffd93d"/>
        <rect x="63" y="25" width="12" height="8" rx="2" fill="#ffd93d"/>
    </svg>`,
    
    "Elevação Posterior": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">ELEV. POSTERIOR</text>
        <circle cx="50" cy="35" r="10" fill="#2ecdc4"/>
        <path d="M50 45 L50 75" stroke="#2ecdc4" stroke-width="8"/>
        <path d="M35 105 L35 85" stroke="#2ecdc4" stroke-width="5"/>
        <path d="M65 105 L65 85" stroke="#2ecdc4" stroke-width="5"/>
        <!-- Halteres para trás -->
        <rect x="20" y="55" width="10" height="8" rx="2" fill="#ffd93d"/>
        <rect x="70" y="55" width="10" height="8" rx="2" fill="#ffd93d"/>
    </svg>`,
    
    // BRAÇOS - BÍCEPS
    "Rosca Direta": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">ROSCA DIRETA</text>
        <circle cx="50" cy="35" r="10" fill="#be5de5"/>
        <path d="M50 45 L50 75" stroke="#be5de5" stroke-width="8"/>
        <path d="M40 105 L40 85" stroke="#be5de5" stroke-width="5"/>
        <path d="M60 105 L60 85" stroke="#be5de5" stroke-width="5"/>
        <!-- Braço dobrado -->
        <path d="M25 65 Q35 50 50 50" stroke="#ffd93d" stroke-width="4" fill="none"/>
    </svg>`,
    
    "Rosca Martelo": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">ROSCA MARTELO</text>
        <circle cx="50" cy="35" r="10" fill="#be5de5"/>
        <path d="M50 45 L50 75" stroke="#be5de5" stroke-width="8"/>
        <path d="M40 105 L40 85" stroke="#be5de5" stroke-width="5"/>
        <path d="M60 105 L60 85" stroke="#be5de5" stroke-width="5"/>
        <!-- Posição martelo -->
        <rect x="30" y="55" width="8" height="18" rx="3" fill="#ffd93d"/>
        <rect x="62" y="55" width="8" height="18" rx="3" fill="#ffd93d"/>
    </svg>`,
    
    "Rosca Concentrada": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">ROSCA CONC.</text>
        <!-- Banco -->
        <rect x="20" y="70" width="60" height="8" rx="2" fill="#4a4a6a"/>
        <!-- Pessoa sentada -->
        <circle cx="35" cy="55" r="10" fill="#be5de5"/>
        <path d="M35 65 L35 80" stroke="#be5de5" stroke-width="8"/>
        <path d="M35 90 L35 105" stroke="#be5de5" stroke-width="6"/>
        <!-- Braço apoiado -->
        <line x1="35" y1="72" x2="65" y2="65" stroke="#ffd93d" stroke-width="4"/>
    </svg>`,
    
    // BRAÇOS - TRÍCEPS
    "Tríceps Pulley": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">TRÍCEPS PULL.</text>
        <!-- Máquina -->
        <rect x="30" y="50" width="40" height="15" rx="2" fill="#2d2d4a"/>
        <!-- Cabo -->
        <line x1="50" y1="65" x2="50" y2="80" stroke="#ffd93d" stroke-width="3"/>
        <!-- Pessoa -->
        <circle cx="50" cy="95" r="10" fill="#be5de5"/>
    </svg>`,
    
    "Tríceps Banco": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">TRÍCEPS BANCO</text>
        <!-- Banco -->
        <rect x="20" y="85" width="60" height="8" rx="2" fill="#4a4a6a"/>
        <!-- Pessoa -->
        <path d="M40 85 L30 65" stroke="#be5de5" stroke-width="8"/>
        <path d="M60 85 L70 65" stroke="#be5de5" stroke-width="8"/>
        <circle cx="50" cy="50" r="8" fill="#be5de5"/>
    </svg>`,
    
    "Dip": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">DIP</text>
        <!-- Barras paralelas -->
        <rect x="25" y="30" width="6" height="60" rx="2" fill="#ffd93d"/>
        <rect x="69" y="30" width="6" height="60" rx="2" fill="#ffd93d"/>
        <!-- Pessoa -->
        <circle cx="50" cy="60" r="8" fill="#be5de5"/>
        <path d="M50 68 L50 50" stroke="#be5de5" stroke-width="6"/>
    </svg>`,
    
    // ABDÔMEN
    "Crunch": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">CRUNCH</text>
        <!-- Chão -->
        <rect x="20" y="100" width="60" height="6" rx="2" fill="#4a4a6a"/>
        <!-- Pessoa deitada -->
        <ellipse cx="50" cy="90" rx="20" ry="10" fill="#f4a261"/>
        <circle cx="50" cy="75" r="10" fill="#f4a261"/>
        <!-- Pernas dobradas -->
        <path d="M35 95 Q50 80 65 95" stroke="#f4a261" stroke-width="8" fill="none"/>
    </svg>`,
    
    "Crunch Oblíquo": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">CRUNCH OBLÍQUO</text>
        <rect x="20" y="100" width="60" height="6" rx="2" fill="#4a4a6a"/>
        <ellipse cx="50" cy="90" rx="20" ry="10" fill="#f4a261"/>
        <circle cx="50" cy="75" r="10" fill="#f4a261"/>
        <path d="M50 75 L30 70" stroke="#ffd93d" stroke-width="4"/>
    </svg>`,
    
    "Prancha": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">PRANCHA</text>
        <!-- Pessoa em prancha -->
        <circle cx="25" cy="70" r="8" fill="#f4a261"/>
        <line x1="33" y1="70" x2="80" y2="70" stroke="#f4a261" stroke-width="10"/>
        <!-- Cotovelos -->
        <circle cx="35" cy="78" r="4" fill="#f4a261"/>
        <circle cx="80" cy="78" r="4" fill="#f4a261"/>
    </svg>`,
    
    "Elevação de Perna": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">ELEV. PIERNA</text>
        <rect x="20" y="100" width="60" height="6" rx="2" fill="#4a4a6a"/>
        <ellipse cx="50" cy="90" rx="18" ry="10" fill="#f4a261"/>
        <!-- Pernas elevidas -->
        <line x1="50" y1="80" x2="50" y2="50" stroke="#f4a261" stroke-width="6"/>
    </svg>`,
    
    "Russian Twist": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">RUSSIAN TWIST</text>
        <!-- Pessoa sentada inclinada -->
        <circle cx="50" cy="60" r="10" fill="#f4a261"/>
        <path d="M50 70 L50 100" stroke="#f4a261" stroke-width="8"/>
        <!-- Rotação -->
        <path d="M40 65 L25 60" stroke="#ffd93d" stroke-width="4"/>
        <path d="M60 65 L75 60" stroke="#ffd93d" stroke-width="4"/>
    </svg>`,
    
    // GLÚTEOS
    "Agachamento": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">AGACHAMENTO</text>
        <circle cx="50" cy="35" r="10" fill="#e76f51"/>
        <path d="M50 45 L50 75" stroke="#e76f51" stroke-width="8"/>
        <path d="M40 105 L40 85" stroke="#e76f51" stroke-width="5"/>
        <path d="M60 105 L60 85" stroke="#e76f51" stroke-width="5"/>
        <!-- Posição agachada -->
        <path d="M50 75 Q40 90 40 105" stroke="#e76f51" stroke-width="6" fill="none"/>
    </svg>`,
    
    "Elevação Pélvica": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">ELEV. PÉLVICA</text>
        <!-- Chão -->
        <rect x="20" y="100" width="60" height="6" rx="2" fill="#4a4a6a"/>
        <!-- Pessoa -->
        <ellipse cx="50" cy="80" rx="20" ry="12" fill="#e76f51"/>
        <!-- Quadris levantados -->
        <path d="M50 80 L50 55" stroke="#e76f51" stroke-width="8"/>
    </svg>`,
    
    "Stiff": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">STIFF</text>
        <!-- Halteres -->
        <rect x="30" y="95" width="8" height="20" rx="2" fill="#ffd93d"/>
        <rect x="62" y="95" width="8" height="20" rx="2" fill="#ffd93d"/>
        <!-- Pessoa -->
        <path d="M35 100 Q50 55 65 100" stroke="#e76f51" stroke-width="10" fill="none"/>
    </svg>`,
    
    "Ponte": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">PONTE</text>
        <rect x="20" y="95" width="60" height="6" rx="2" fill="#4a4a6a"/>
        <ellipse cx="50" cy="75" rx="22" ry="15" fill="#e76f51"/>
        <path d="M50 60 L50 40" stroke="#e76f51" stroke-width="8"/>
    </svg>`,
    
    "Step Up": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">STEP UP</text>
        <!-- Step -->
        <rect x="60" y="85" width="30" height="20" rx="3" fill="#4a4a6a"/>
        <!-- Pessoa subindo -->
        <circle cx="50" cy="35" r="10" fill="#e76f51"/>
        <path d="M50 45 L50 75" stroke="#e76f51" stroke-width="8"/>
        <path d="M40 100 L45 85" stroke="#e76f51" stroke-width="5"/>
        <path d="M60 100 L75 95" stroke="#e76f51" stroke-width="5"/>
    </svg>`,
    
    // COXAS
    "Leg Press": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">LEG PRESS</text>
        <!-- Máquina -->
        <rect x="20" y="50" width="60" height="40" rx="5" fill="#2d2d4a"/>
        <!-- Pessoa -->
        <circle cx="50" cy="55" r="10" fill="#48cae4"/>
        <path d="M50 65 L50 80" stroke="#48cae4" stroke-width="8"/>
        <!-- Plataforma -->
        <rect x="30" y="85" width="40" height="6" rx="2" fill="#ffd93d"/>
    </svg>`,
    
    "Extensor": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">EXTENSOR</text>
        <!-- Máquina -->
        <rect x="25" y="50" width="50" height="30" rx="3" fill="#2d2d4a"/>
        <circle cx="50" cy="85" r="8" fill="#48cae4"/>
        <path d="M50 77 L50 90" stroke="#48cae4" stroke-width="6"/>
    </svg>`,
    
    "Flexor": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">FLEXOR</text>
        <!-- Máquina -->
        <rect x="25" y="60" width="50" height="30" rx="3" fill="#2d2d4a"/>
        <circle cx="50" cy="50" r="8" fill="#48cae4"/>
        <path d="M50 58 L50 80" stroke="#48cae4" stroke-width="6"/>
    </svg>`,
    
    "Lunge": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">LUNGE</text>
        <circle cx="50" cy="35" r="10" fill="#48cae4"/>
        <path d="M50 45 L50 75" stroke="#48cae4" stroke-width="8"/>
        <!-- Pernas em posição de lunge -->
        <path d="M50 75 L30 100" stroke="#48cae4" stroke-width="6"/>
        <path d="M50 75 L70 100" stroke="#48cae4" stroke-width="6"/>
    </svg>`,
    
    // PANTURRILHAS
    "Elevação em Pé": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">ELEV. PANTURRILHA</text>
        <!-- Degrau -->
        <rect x="30" y="85" width="40" height="20" rx="3" fill="#4a4a6a"/>
        <circle cx="50" cy="35" r="10" fill="#06d6a0"/>
        <path d="M50 45 L50 75" stroke="#06d6a0" stroke-width="8"/>
        <path d="M40 105 L40 80" stroke="#06d6a0" stroke-width="5"/>
        <path d="M60 105 L60 80" stroke="#06d6a0" stroke-width="5"/>
    </svg>`,
    
    "Elevação Sentado": `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="15" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">ELEV. SENTADO</text>
        <!-- Banco -->
        <rect x="20" y="75" width="60" height="8" rx="2" fill="#4a4a6a"/>
        <!-- Pessoa sentada -->
        <circle cx="35" cy="55" r="10" fill="#06d6a0"/>
        <path d="M35 65 L35 80" stroke="#06d6a0" stroke-width="8"/>
        <path d="M35 90 L35 105" stroke="#06d6a0" stroke-width="6"/>
    </svg>`
};

// Função para obter imagem de um exercício
function getImagemExercicio(nome) {
    return imagensExercicios[nome] || `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="120" fill="#1a1a2e"/>
        <text x="50" y="60" text-anchor="middle" fill="#666" font-size="12">?</text>
    </svg>`;
}