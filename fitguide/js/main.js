// DADOS DOS EXERCÍCIOS
const exercicios = {
    peito: [
        {
            nome: "Supino Reto",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/rLPMixrJb4U",
            instrucoes: [
                "Deite no banco com os pés no chão",
                "Segure a barra com as mãos ligeiramente mais largas que os ombros",
                "Abaixe a barra até o peito lentamente",
                "Empurre para cima até os braços ficarem estendidos",
                "Mantenha o controle durante todo o movimento"
            ],
            series: "4 series x 8-12 repetições"
        },
        {
            nome: "Supino Inclinado",
            nivel: "Intermediário",
            video: "https://www.youtube.com/embed/hDallpM9Xc0",
            instrucoes: [
                "Ajoelhe no banco inclinado (30-45 graus)",
                "Segure os halteres com os braços estendidos",
                "Abaixe os halteres até o peito",
                "Eleve de volta mantendo o controle"
            ],
            series: "3 series x 10-12 repetições"
        },
        {
            nome: "Crucifixo",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/eG11X3MSqUI",
            instrucoes: [
                "Deite no banco plano ou sentato",
                "Segure os halteres acima do peito",
                "Abaixe os braços em arco até sentir alongamento",
                "Retorne à posição inicial"
            ],
            series: "3 series x 12 repetições"
        },
        {
            nome: "Pulley Baixo",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/_5L46x graspHandle",
            instrucoes: [
                "Sente no equipamento com as coxas fixas",
                "Segure a barra com as mãos mais largas que os ombros",
                "Puxe a barra até o peito",
                "Retorne lentamente"
            ],
            series: "3 series x 12 repetições"
        },
        {
            nome: "Peck Deck",
            nivel: "Intermediário",
            video: "https://www.youtube.com/embed/KVJFlTStOkg",
            instrucoes: [
                "Sente no equipamento com o peito apoiado",
                "Segure as alças com os cotovelos",
                "Feche os braços frente ao peito",
                "Retorne lentamente控制和"
            ],
            series: "3 series x 12 repetições"
        },
        {
            nome: "Supino com Halteres",
            nivel: "Intermediário",
            video: "https://www.youtube.com/embed/hDallpM9Xc0",
            instrucoes: [
                "Deite no banco com os halteres na altura do peito",
                "Segure os halteres com as palmas Facing frente",
                "Empurre os halteres para cima",
                "Abaixe com controle"
            ],
            series: "3 series x 10-12 repetições"
        }
    ],
    costas: [
        {
            nome: "Pulley Ventral",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/XvH7jTUnS_M",
            instrucoes: [
                "Sente no equipamento com os joelhos fixos",
                "Segure a barra com as mãos，宽 que os ombros",
                "Puxe a barra até o umbiligo",
                "Retorne lentamente"
            ],
            series: "4 series x 10-12 repetições"
        },
        {
            nome: "Remada Curvada",
            nivel: "Intermediário",
            video: "https://www.youtube.com/embed/FM8E8c7gZcQ",
            instrucoes: [
                "Dobre o tronco para frente (45 graus)",
                "Segure a barra com as mãos na largura dos ombros",
                "Puxe a barra até o abdômen",
                "Retorne lentamente"
            ],
            series: "4 series x 8-12 repetições"
        },
        {
            nome: "Pull-up",
            nivel: "Avançado",
            video: "https://www.youtube.com/embed/eCp18K1z1iU",
            instrucoes: [
                "Segure a barra com as mãos mais largas que os ombros",
                "Suspenda o corpo",
                "Puxe o queixo acima da barra",
                "Desça com controle"
            ],
            series: "3 series x max repetições"
        },
        {
            nome: "Remada Unilateral",
            nivel: "Intermediário",
            video: "https://www.youtube.com/embed/nd8d3E6rSyM",
            instrucoes: [
                "Apoie um joelho e uma mão no banco",
                "Segure o haltere com a outra mão",
                "Puxe o haltere até o quadril",
                "Retorne lentamente"
            ],
            series: "3 series x 12 cada lado"
        },
        {
            nome: "Lat Machine",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/JMw6X6VK3hI",
            instrucoes: [
                "Sente com as coxas sob o rolo",
                "Segure a barra aberta",
                "Puxe a barra até o peito",
                "Retorne lentamente"
            ],
            series: "4 series x 12 repetições"
        },
        {
            nome: "Puxada Aberta",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/JMw6X6VK3hI",
            instrucoes: [
                "Sente no equipamento",
                "Segure a barra com as mãos bem abertas",
                "Puxe para baixo até o peito",
                "Retorne lentamente"
            ],
            series: "3 series x 12 repetições"
        }
    ],
    ombro: [
        {
            nome: "Desenvolvimento Militar",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/qEwK8g9Rl2s",
            instrucoes: [
                "Em pé com os halteres na altura dos ombros",
                "Empurre os halteres para cima",
                "Encontre acima da cabeça",
                "Abaixe com controle"
            ],
            series: "4 series x 10-12 repetições"
        },
        {
            nome: "Elevação Lateral",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/3hK2ZkXR7kQ",
            instrucoes: [
                "Em pé com halteres ao lado do corpo",
                "Eleve os braços lateralmente até a altura dos ombros",
                "Mantenha ligeira flexão nos cotovelos",
                "Retorne lentamente"
            ],
            series: "3 series x 12-15 repetições"
        },
        {
            nome: "Elevação Frontal",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/6PALXAT2JpI",
            instrucoes: [
                "Em pé com halteres na frente das coxas",
                "Eleve os halteres at�� a altura dos ombros",
                "Mantenha os cotovelos ligeiramente dobrados",
                "Retorne lentamente"
            ],
            series: "3 series x 12 repetições"
        },
        {
            nome: "Face Pull",
            nivel: "Intermediário",
            video: "https://www.youtube.com/embed/rep8NRBT8t8",
            instrucoes: [
                "Ataque a corda na altura do peito",
                "Puxe a corda hacia o rosto",
                "Separe as mãos no final do movimento",
                "Retorne com controle"
            ],
            series: "3 series x 15 repetições"
        },
        {
            nome: "Arnold Press",
            nivel: "Intermediário",
            video: "https://www.youtube.com/embed/QzF12F_BWzE",
            instrucoes: [
                "Sente com halteres na altura dos ombros, palmas frente a ti",
                "Empurre para cima girando as palmas para fora",
                "Inverter o movimento ao descer",
                "Retorne à posição inicial"
            ],
            series: "3 series x 10-12 repetições"
        },
        {
            nome: "Elevação Posterior",
            nivel: "Intermediário",
            video: "https://www.youtube.com/embed/h7fxtpV4qPs",
            instrucoes: [
                "Dobre o tronco para frente",
                "Segure os halteres com os braços estendidos",
                "Eleve os halteres para trás",
                "Retorne lentamente"
            ],
            series: "3 series x 12 repetições"
        }
    ],
    bracos: [
        {
            nome: "Rosca Direta",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/kpP8NRqTh6c",
            instrucoes: [
                "Em pé com halteres, braços estendidos",
                "Dobre os cotovelos elevando os halteres",
                "Não mova os braços superiores",
                "Retorne lentamente"
            ],
            series: "3 series x 12 repetições"
        },
        {
            nome: "Rosca Martelo",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/Ps3QbG8F4X8",
            instrucoes: [
                "Em pé com halteres ao lado, palmas uma hacia a outra",
                "Dobre os cotovelos",
                "Mantenha as palmas Facing uma hacia a outra",
                "Retorne lentamente"
            ],
            series: "3 series x 12 repetições"
        },
        {
            nome: "Tríceps Pulley",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/2z8Jmcr0AsY",
            instrucoes: [
                "Em pé, segure a corda acima da cabeça",
                "Abaixe a corda dobrando os cotovelos",
                "Estenda os braços",
                "Retorne lentamente"
            ],
            series: "3 series x 12 repetições"
        },
        {
            nome: "Rosca Inversa",
            nivel: "Intermediário",
            video: "https://www.youtube.com/embed/6P5SZl2uPzY",
            instrucoes: [
                "Em pé com halteres, palmas para baixo",
                "Dobre os cotovelos bringing os halteres aos ombros",
                "Retorne lentamente"
            ],
            series: "3 series x 12 repetições"
        },
        {
            nome: "Dip",
            nivel: "Avançado",
            video: "https://www.youtube.com/embed/2z8Jmcr0AsY",
            instrucoes: [
                "Apoie as mãos no banco atrás de ti",
                "Desça dobrando os cotovelos",
                "Empurre para cima",
                "Mantenha o corpo próximo ao banco"
            ],
            series: "3 series x max repetições"
        },
        {
            nome: "Tríceps Banco",
            nivel: "Intermediário",
            video: "https://www.youtube.com/embed/6X7Uf52kd3U",
            instrucoes: [
                "Coloque as mãos no banco atrás de ti",
                "Estenda as pernas",
                "Abaixe o corpo dobrando os cotovelos",
                "Empurre para cima"
            ],
            series: "3 series x 10-12 repetições"
        }
    ],
    abdomen: [
        {
            nome: "Crunch",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/Xd6mR8vFD6U",
            instrucoes: [
                "Deite no chão com os joelhos dobrados",
                "Coloque as mãos atrás da cabeça",
                "Eleve os ombros do chão",
                "Retorne lentamente"
            ],
            series: "3 series x 20 repetições"
        },
        {
            nome: "Crunch Oblíquo",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/dw3D8GkF4X8",
            instrucoes: [
                "Deite com as pernas dobradas",
                "Coloque as mãos atrás da cabeça",
                "Eleve o ombro direito hacia o joelho esquerdo",
                "Alternar os lados"
            ],
            series: "3 series x 20 repetições"
        },
        {
            nome: "Elevação de Perna",
            nivel: "Intermediário",
            video: "https://www.youtube.com/embed/J8D3D8Q8V8E",
            instrucoes: [
                "Deite no chão completamente",
                "Mantenha as pernas estendidas",
                "Eleve as pernas ate 90 graus",
                "Retorne lentamente"
            ],
            series: "3 series x 15 repetições"
        },
        {
            nome: "Prancha",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/pSHjTRCQxMw",
            instrucoes: [
                "Coloque os antebraços no chão",
                "Alinhe os ombros com os cotovelos",
                "Mantenha o corpo reto",
                "Segure a posição"
            ],
            series: "3 series x 30-60 segundos"
        },
        {
            nome: "Russian Twist",
            nivel: "Intermediário",
            video: "https://www.youtube.com/embed/wk7X8Q8V8X8",
            instrucoes: [
                "Sente com os joelhos doblados",
                "Incline o tronco para trás",
                "Gire o tronco de um lado para o outro",
                "Toque o chão a cada lado"
            ],
            series: "3 series x 20 repetições"
        },
        {
            nome: "Mountain Climber",
            nivel: "Intermediário",
            video: "https://www.youtube.com/embed/nQ3D8X8P8X8",
            instrucoes: [
                "Posicione em quatro pontos",
                "Dobre um joelho hacia o peito",
                "Alternar as pernas rapidamente",
                "Manter oCore engajado"
            ],
            series: "3 series x 20 repetições"
        }
    ],
    gluteos: [
        {
            nome: "Agachamento",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/UXJrBG2RzQA",
            instrucoes: [
                "Em pé com os pés na largura dos ombros",
                "Desça como se fosse sentar em uma cadeira",
                "Mantenha os joelhos alinhados com os pés",
                "Retorne à posição inicial"
            ],
            series: "4 series x 12-15 repetições"
        },
        {
            nome: "Stiff",
            nivel: "Intermediário",
            video: "https://www.youtube.com/embed/7j-ixU7U5X8",
            instrucoes: [
                "Em pé com os pés na largura dos ombros",
                "Dobre o tronco para frente",
                "Desca os halteres até os joelhos",
                "Mantenha as pernas retas"
            ],
            series: "3 series x 12 repetições"
        },
        {
            nome: "Elevação Pélvica",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/w8yU7Q8G8X8",
            instrucoes: [
                "Deite com os joelhos dobrados",
                "Place os pés no chão",
                "Eleve o quadril",
                "Aperte os gluteos no topo"
            ],
            series: "3 series x 15 repetições"
        },
        {
            nome: "Ponte",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/w8yU7Q8G8X8",
            instrucoes: [
                "Deite de costas com os joelhos dobrados",
                "Eleve o quadril",
                "Segure por 2 segundos",
                "Retorne lentamente"
            ],
            series: "3 series x 15 repetições"
        },
        {
            nome: "Step Up",
            nivel: "Intermediário",
            video: "https://www.youtube.com/embed/X8R8G8G8X8",
            instrucoes: [
                "Fique em frente a um step ou banco",
                "Suba com uma perna",
                "Estenda a perna no topo",
                "Desça e repita"
            ],
            series: "3 series x 12 cada perna"
        },
        {
            nome: "Cadeira Adutora",
            nivel: "Intermediário",
            video: "https://www.youtube.com/embed/Y8R8G8G8X8",
            instrucoes: [
                "Sente na cadeira adutora",
                "Pressione as coxas una hacia a outra",
                "Mantenha o movimento controlado"
            ],
            series: "3 series x 15 repetições"
        }
    ],
    coxas: [
        {
            nome: "Leg Press",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/Awd5C3G8P8X8",
            instrucoes: [
                "Sente no leg press com os pés na plataforma",
                "Libere a segurança",
                "Abaixe o peso dobrando os joelhos",
                "Empurre para cima sem locking os joelhos"
            ],
            series: "4 series x 12 repetições"
        },
        {
            nome: "Extensor",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/B8R8G8G8X8",
            instrucoes: [
                "Sente no extensor com os tornozelos sob o acolchoado",
                "Estenda as pernas",
                "Mantenha o movimento controlado"
            ],
            series: "3 series x 15 repetições"
        },
        {
            nome: "Flexor",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/C8R8G8G8X8",
            instrucoes: [
                "Deite de bruços no equipamento de flexor",
                "Dobre os joelhos bringing os tornozelos aos glúteos",
                "Retorne lentamente"
            ],
            series: "3 series x 15 repetições"
        },
        {
            nome: "Agachamento Hack",
            nivel: "Intermediário",
            video: "https://www.youtube.com/embed/D8R8G8G8X8",
            instrucoes: [
                "Posicione os halteres no chão atrás de ti",
                "Agache pegando os halteres",
                "Mantenha as costas retas"
            ],
            series: "3 series x 12 repetições"
        },
        {
            nome: "Lunge",
            nivel: "Intermediário",
            video: "https://www.youtube.com/embed/E8R8G8G8X8",
            instrucoes: [
                "Em pé",
                "Dê um passo adelante",
                "Desça até os dois joelhos ficarem a 90 graus",
                "Retorne e repita"
            ],
            series: "3 series x 12 cada perna"
        },
        {
            nome: "Bulgarian Split",
            nivel: "Avançado",
            video: "https://www.youtube.com/embed/F8R8G8G8X8",
            instrucoes: [
                "Coloque o pé traseiro no banco",
                "Desça em lunge",
                "Mantenha o joelho dianteiro sobre o tornozelo",
                "Empurre para cima"
            ],
            series: "3 series x 10 cada perna"
        }
    ],
    panturrilhas: [
        {
            nome: "Elevação em Pé",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/G8R8G8G8X8",
            instrucoes: [
                "Fique em uma borda com os calcanhares fora",
                "Desça os calcanhares abaixo da borda",
                "Eleva-se na ponta dos pés",
                "Retorne lentamente"
            ],
            series: "4 series x 15-20 repetições"
        },
        {
            nome: "Elevação Sentado",
            nivel: "Iniciante",
            video: "https://www.youtube.com/embed/H8R8G8G8X8",
            instrucoes: [
                "Sente noaparelho com os tornozelos sob o acolchoado",
                "Coloque os joelhos sob as coxas",
                "Eleve os calcanhares",
                "Retorne lentamente"
            ],
            series: "4 series x 15-20 repetições"
        },
        {
            nome: "Leg Press Panturrilha",
            nivel: "Intermediário",
            video: "https://www.youtube.com/embed/J8R8G8G8X8",
            instrucoes: [
                "Sente no leg press",
                "Coloque os pés na parte superior da plataforma",
                "Flexione os tornozelos completamente",
                "Estenda os tornozelos"
            ],
            series: "4 series x 15-20 repetições"
        }
    ]
};

//theme toggle
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (localStorage.getItem('theme') === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
}

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

// NAV TABS
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;
        
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// HUMAN BODY ROTATION
const rotateBtns = document.querySelectorAll('.rotate-btn');
const bodyImages = document.querySelectorAll('.body-image');

rotateBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const view = btn.dataset.rotate;
        
        rotateBtns.forEach(b => b.classList.remove('active'));
        bodyImages.forEach(img => img.classList.remove('active'));
        
        btn.classList.add('active');
        
        const targetImg = document.querySelector(`.body-image[data-view="${view === 'front' ? 'frente' : view === 'side' ? 'lado' : 'costas'}"]`);
        if (targetImg) targetImg.classList.add('active');
    });
});

// MUSCLE BUTTONS
const muscleBtns = document.querySelectorAll('.muscle-btn');

muscleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const muscle = btn.dataset.muscle;
        showExercises(muscle);
    });
});

function showExercises(muscle) {
    const exercises = exercicios[muscle];
    if (!exercises) return;
    
    const modal = document.getElementById('exerciseModal');
    const title = document.getElementById('modalTitle');
    const level = document.getElementById('modalLevel');
    const instructions = document.getElementById('modalInstructions');
    const series = document.getElementById('modalSeries');
    const videoFrame = document.getElementById('videoFrame');
    
    // Show first exercise
    const ex = exercises[0];
    title.textContent = ex.nome;
    level.textContent = ex.nivel;
    series.textContent = ex.series;
    videoFrame.src = ex.video;
    
    instructions.innerHTML = ex.instrucoes.map(i => `<li>${i}</li>`).join('');
    
    modal.classList.add('active');
}

// CORRIDA TABS
const corridaTabBtns = document.querySelectorAll('.corrida-tab-btn');
const corridaContents = document.querySelectorAll('.corrida-content');

corridaTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.corrida;
        
        corridaTabBtns.forEach(b => b.classList.remove('active'));
        corridaContents.forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(tab).classList.add('active');
    });
});

// DISTANCE SELECTOR
const distanceBtns = document.querySelectorAll('.distance-btn');
const planInfos = document.querySelectorAll('.plan-info');

distanceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const distance = btn.dataset.distance;
        
        distanceBtns.forEach(b => b.classList.remove('active'));
        planInfos.forEach(p => p.style.display = 'none');
        
        btn.classList.add('active');
        document.getElementById(`plan${distance}`).style.display = 'block';
    });
});

// CALCULATE RITMO
function calcularRitmo() {
    const distancia = parseFloat(document.getElementById('ritmoDistancia').value);
    const meta = document.getElementById('ritmoMeta').value;
    
    if (!meta) return;
    
    const [horas, minutos] = meta.split(':').map(Number);
    const totalMinutos = horas * 60 + minutos;
    
    const ritmoMinutos = totalMinutos / distancia;
    const ritmoMin = Math.floor(ritmoMinutos);
    const ritmoSeg = Math.round((ritmoMinutos - ritmoMin) * 60);
    
    document.getElementById('ritmoValor').textContent = `${String(ritmoMin).padStart(2, '0')}:${String(ritmoSeg).padStart(2, '0')}`;
}

// YOGA LEVELS
const levelBtns = document.querySelectorAll('.level-btn');
const yogaContents = document.querySelectorAll('.yoga-content');

levelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const level = btn.dataset.level;
        
        levelBtns.forEach(b => b.classList.remove('active'));
        yogaContents.forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(level).classList.add('active');
    });
});

// ALONGAMENTO REGIONS
const regionBtns = document.querySelectorAll('.region-btn');
const stretchContents = document.querySelectorAll('.stretch-content');

regionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const region = btn.dataset.region;
        
        regionBtns.forEach(b => b.classList.remove('active'));
        stretchContents.forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(region).classList.add('active');
    });
});

// MODAL CLOSE
function closeModal() {
    document.getElementById('exerciseModal').classList.remove('active');
    document.getElementById('videoFrame').src = '';
}

document.querySelector('.modal-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Initialize first body view
document.querySelector('.body-image[data-view="frente"]').classList.add('active');
document.querySelector('.rotate-btn[data-rotate="front"]').classList.add('active');

// Initialize first distance
document.querySelector('.distance-btn[data-distance="5k"]').classList.add('active');