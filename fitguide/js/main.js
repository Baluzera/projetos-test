// Three.js e Interatividade do FitGuide

// ============================================
// THREE.JS - BONECO 3D INTERATIVO
// ============================================

let scene, camera, renderer, body3D;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let autoRotate = true;
let raycaster, mouse;
let muscleParts = {};
let hoveredPart = null;

// Cores por grupo muscular
const muscleColors = {
    peito: 0x2997ff,
    costas: 0x5ac8fa,
    ombro: 0x30d158,
    bracos: 0xbf5af2,
    abdomen: 0xff9f0a,
    gluteos: 0xff375f,
    coxas: 0x64d2ff,
    panturrilhas: 0x32d74b
};

// Mapeamento de partes do corpo
const bodyParts = {
    peito: [
        { name: 'peito_alta', pos: [0, 1.1, 0.25], size: [0.25, 0.15, 0.12], tipo: 'peito', porcao: 'Alta' },
        { name: 'peito_media', pos: [0, 0.95, 0.28], size: [0.32, 0.18, 0.15], tipo: 'peito', porcao: 'Média' },
        { name: 'peito_baixa', pos: [0, 0.8, 0.25], size: [0.28, 0.15, 0.12], tipo: 'peito', porcao: 'Baixa' }
    ],
    costas: [
        { name: 'costas_dorsal', pos: [0, 1.05, -0.25], size: [0.3, 0.2, 0.1], tipo: 'costas', porcao: 'Dorsal/Largura' },
        { name: 'costas_lombada', pos: [0, 0.85, -0.2], size: [0.25, 0.18, 0.1], tipo: 'costas', porcao: 'Lombada' },
        { name: 'costas_trapezio', pos: [0, 1.3, -0.15], size: [0.35, 0.15, 0.08], tipo: 'costas', porcao: 'Trapézio' }
    ],
    ombro: [
        { name: 'ombro_ant_e', pos: [-0.35, 1.15, 0.12], size: [0.12, 0.1, 0.1], tipo: 'ombro', porcao: 'Anterior' },
        { name: 'ombro_ant_d', pos: [0.35, 1.15, 0.12], size: [0.12, 0.1, 0.1], tipo: 'ombro', porcao: 'Anterior' },
        { name: 'ombro_lat_e', pos: [-0.38, 1.15, 0], size: [0.1, 0.1, 0.1], tipo: 'ombro', porcao: 'Lateral' },
        { name: 'ombro_lat_d', pos: [0.38, 1.15, 0], size: [0.1, 0.1, 0.1], tipo: 'ombro', porcao: 'Lateral' },
        { name: 'ombro_post_e', pos: [-0.35, 1.15, -0.12], size: [0.12, 0.1, 0.1], tipo: 'ombro', porcao: 'Posterior' },
        { name: 'ombro_post_d', pos: [0.35, 1.15, -0.12], size: [0.12, 0.1, 0.1], tipo: 'ombro', porcao: 'Posterior' }
    ],
    bracos: [
        { name: 'bracos_biceps_e', pos: [-0.42, 0.95, 0.08], size: [0.08, 0.12, 0.08], tipo: 'bracos', porcao: 'Bíceps' },
        { name: 'bracos_biceps_d', pos: [0.42, 0.95, 0.08], size: [0.08, 0.12, 0.08], tipo: 'bracos', porcao: 'Bíceps' },
        { name: 'bracos_triceps_e', pos: [-0.42, 0.95, -0.08], size: [0.08, 0.12, 0.08], tipo: 'bracos', porcao: 'Tríceps' },
        { name: 'bracos_triceps_d', pos: [0.42, 0.95, -0.08], size: [0.08, 0.12, 0.08], tipo: 'bracos', porcao: 'Tríceps' },
        { name: 'bracos_antebra_e', pos: [-0.45, 0.7, 0], size: [0.055, 0.15, 0.055], tipo: 'bracos', porcao: 'Antebraço' },
        { name: 'bracos_antebra_d', pos: [0.45, 0.7, 0], size: [0.055, 0.15, 0.055], tipo: 'bracos', porcao: 'Antebraço' }
    ],
    abdomen: [
        { name: 'abdomen_sup', pos: [0, 0.75, 0.18], size: [0.2, 0.12, 0.1], tipo: 'abdomen', porcao: 'Superior' },
        { name: 'abdomen_inf', pos: [0, 0.55, 0.15], size: [0.18, 0.15, 0.08], tipo: 'abdomen', porcao: 'Inferior' },
        { name: 'abdomen_obliq_e', pos: [-0.15, 0.65, 0.15], size: [0.08, 0.18, 0.08], tipo: 'abdomen', porcao: 'Oblíquos' },
        { name: 'abdomen_obliq_d', pos: [0.15, 0.65, 0.15], size: [0.08, 0.18, 0.08], tipo: 'abdomen', porcao: 'Oblíquos' }
    ],
    gluteos: [
        { name: 'gluteos_max_e', pos: [-0.12, 0.45, -0.12], size: [0.12, 0.12, 0.08], tipo: 'gluteos', porcao: 'Máximo' },
        { name: 'gluteos_max_d', pos: [0.12, 0.45, -0.12], size: [0.12, 0.12, 0.08], tipo: 'gluteos', porcao: 'Máximo' },
        { name: 'gluteos_med_e', pos: [-0.18, 0.5, -0.08], size: [0.08, 0.08, 0.06], tipo: 'gluteos', porcao: 'Médio' },
        { name: 'gluteos_med_d', pos: [0.18, 0.5, -0.08], size: [0.08, 0.08, 0.06], tipo: 'gluteos', porcao: 'Médio' },
        { name: 'gluteos_min_e', pos: [-0.12, 0.42, -0.06], size: [0.06, 0.06, 0.04], tipo: 'gluteos', porcao: 'Mínimo' },
        { name: 'gluteos_min_d', pos: [0.12, 0.42, -0.06], size: [0.06, 0.06, 0.04], tipo: 'gluteos', porcao: 'Mínimo' }
    ],
    coxas: [
        { name: 'coxas_quad_e', pos: [-0.12, 0.25, 0.1], size: [0.1, 0.18, 0.1], tipo: 'coxas', porcao: 'Quadríceps' },
        { name: 'coxas_quad_d', pos: [0.12, 0.25, 0.1], size: [0.1, 0.18, 0.1], tipo: 'coxas', porcao: 'Quadríceps' },
        { name: 'coxas_isq_e', pos: [-0.12, 0.25, -0.08], size: [0.1, 0.18, 0.08], tipo: 'coxas', porcao: 'Isquiotibiais' },
        { name: 'coxas_isq_d', pos: [0.12, 0.25, -0.08], size: [0.1, 0.18, 0.08], tipo: 'coxas', porcao: 'Isquiotibiais' },
        { name: 'coxas_adut_e', pos: [-0.06, 0.25, 0], size: [0.06, 0.18, 0.06], tipo: 'coxas', porcao: 'Adutores' },
        { name: 'coxas_adut_d', pos: [0.06, 0.25, 0], size: [0.06, 0.18, 0.06], tipo: 'coxas', porcao: 'Adutores' }
    ],
    panturrilhas: [
        { name: 'pant_gas_e', pos: [-0.1, 0.05, 0.05], size: [0.07, 0.12, 0.07], tipo: 'panturrilhas', porcao: 'Gastrocnêmio' },
        { name: 'pant_gas_d', pos: [0.1, 0.05, 0.05], size: [0.07, 0.12, 0.07], tipo: 'panturrilhas', porcao: 'Gastrocnêmio' },
        { name: 'pant_soleo_e', pos: [-0.1, 0.02, 0.03], size: [0.05, 0.08, 0.05], tipo: 'panturrilhas', porcao: 'Sóleo' },
        { name: 'pant_soleo_d', pos: [0.1, 0.02, 0.03], size: [0.05, 0.08, 0.05], tipo: 'panturrilhas', porcao: 'Sóleo' }
    ]
};

function init3D() {
    const container = document.getElementById('body3d-container');
    if (!container) return;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1d1d1f);

    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0.8, 3);
    camera.lookAt(0, 0.7, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Luzes
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight2.position.set(-5, 3, -5);
    scene.add(directionalLight2);

    // Criar corpo 3D
    createBody();

    // Raycaster para clique
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    // Eventos
    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('click', onClick);
    renderer.domElement.addEventListener('touchstart', onTouchStart);
    renderer.domElement.addEventListener('touchmove', onTouchMove);
    renderer.domElement.addEventListener('touchend', onTouchEnd);

    window.addEventListener('resize', onResize);

    animate();
}

function createBody() {
    body3D = new THREE.Group();

    // Cabeça
    const headGeo = new THREE.SphereGeometry(0.12, 32, 32);
    const headMat = new THREE.MeshStandardMaterial({ color: 0xffd5b8 });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.set(0, 1.55, 0);
    body3D.add(head);

    // Pescoço
    const neckGeo = new THREE.CylinderGeometry(0.06, 0.08, 0.1, 16);
    const neckMat = new THREE.MeshStandardMaterial({ color: 0xffd5b8 });
    const neck = new THREE.Mesh(neckGeo, neckMat);
    neck.position.set(0, 1.35, 0);
    body3D.add(neck);

    // Tronco (Base)
    const torsoGeo = new THREE.CylinderGeometry(0.22, 0.18, 0.5, 16);
    const torsoMat = new THREE.MeshStandardMaterial({ color: 0xffd5b8 });
    const torso = new THREE.Mesh(torsoGeo, torsoMat);
    torso.position.set(0, 1.05, 0);
    body3D.add(torso);

    // Quadril
    const hipGeo = new THREE.CylinderGeometry(0.18, 0.16, 0.2, 16);
    const hip = new THREE.Mesh(hipGeo, torsoMat);
    hip.position.set(0, 0.55, 0);
    body3D.add(hip);

    // Braços (base)
    const armGeo = new THREE.CylinderGeometry(0.045, 0.04, 0.4, 16);
    const armMat = new THREE.MeshStandardMaterial({ color: 0xffd5b8 });

    const leftArm = new THREE.Mesh(armGeo, armMat);
    leftArm.position.set(-0.35, 0.95, 0);
    leftArm.rotation.z = 0.1;
    body3D.add(leftArm);

    const rightArm = new THREE.Mesh(armGeo, armMat);
    rightArm.position.set(0.35, 0.95, 0);
    rightArm.rotation.z = -0.1;
    body3D.add(rightArm);

    // Antebraços
    const forearmGeo = new THREE.CylinderGeometry(0.035, 0.03, 0.35, 16);

    const leftForearm = new THREE.Mesh(forearmGeo, armMat);
    leftForearm.position.set(-0.42, 0.68, 0);
    body3D.add(leftForearm);

    const rightForearm = new THREE.Mesh(forearmGeo, armMat);
    rightForearm.position.set(0.42, 0.68, 0);
    body3D.add(rightForearm);

    // Pernas (base)
    const legGeo = new THREE.CylinderGeometry(0.07, 0.055, 0.35, 16);

    const leftLeg = new THREE.Mesh(legGeo, armMat);
    leftLeg.position.set(-0.1, 0.32, 0);
    body3D.add(leftLeg);

    const rightLeg = new THREE.Mesh(legGeo, armMat);
    rightLeg.position.set(0.1, 0.32, 0);
    body3D.add(rightLeg);

    // Panturrilhas
    const calfGeo = new THREE.CylinderGeometry(0.05, 0.04, 0.25, 16);

    const leftCalf = new THREE.Mesh(calfGeo, armMat);
    leftCalf.position.set(-0.1, 0.08, 0);
    body3D.add(leftCalf);

    const rightCalf = new THREE.Mesh(calfGeo, armMat);
    rightCalf.position.set(0.1, 0.08, 0);
    body3D.add(rightCalf);

    // Adicionar partes musculares interativas
    for (const [tipo, parts] of Object.entries(bodyParts)) {
        muscleParts[tipo] = [];
        parts.forEach(part => {
            const geo = new THREE.BoxGeometry(...part.size);
            const mat = new THREE.MeshStandardMaterial({
                color: muscleColors[part.tipo],
                transparent: true,
                opacity: 0.7,
                emissive: muscleColors[part.tipo],
                emissiveIntensity: 0.1
            });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(...part.pos);
            mesh.userData = {
                nome: part.name,
                tipo: part.tipo,
                porcao: part.porcao,
                originalColor: muscleColors[part.tipo]
            };
            muscleParts[part.tipo].push(mesh);
            body3D.add(mesh);
        });
    }

    scene.add(body3D);
}

function animate() {
    if (!renderer) return;
    requestAnimationFrame(animate);

    if (autoRotate && !isDragging) {
        body3D.rotation.y += 0.003;
    }

    // Atualizar cor do hover
    updateHover();

    renderer.render(scene, camera);
}

function updateHover() {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(body3D.children);

    if (intersects.length > 0) {
        const obj = intersects[0].object;
        if (obj.userData && obj.userData.tipo) {
            document.body.style.cursor = 'pointer';
            obj.material.emissiveIntensity = 0.4;
            if (hoveredPart !== obj) {
                if (hoveredPart) hoveredPart.material.emissiveIntensity = 0.1;
                hoveredPart = obj;
            }
            return;
        }
    }

    document.body.style.cursor = 'default';
    if (hoveredPart) {
        hoveredPart.material.emissiveIntensity = 0.1;
        hoveredPart = null;
    }
}

function onMouseDown(e) {
    isDragging = true;
    autoRotate = false;
    previousMousePosition = { x: e.clientX, y: e.clientY };
}

function onMouseMove(e) {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        body3D.rotation.y += deltaX * 0.01;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    }
}

function onMouseUp() {
    isDragging = false;
    setTimeout(() => { autoRotate = true; }, 3000);
}

function onClick(e) {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(body3D.children);

    if (intersects.length > 0) {
        const obj = intersects[0].object;
        if (obj.userData && obj.userData.tipo) {
            openMuscleModal(obj.userData.tipo);
        }
    }
}

function onTouchStart(e) {
    if (e.touches.length === 1) {
        isDragging = true;
        autoRotate = false;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
}

function onTouchMove(e) {
    e.preventDefault();
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((e.touches[0].clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.touches[0].clientY - rect.top) / rect.height) * 2 + 1;

    if (isDragging) {
        const deltaX = e.touches[0].clientX - previousMousePosition.x;
        body3D.rotation.y += deltaX * 0.01;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
}

function onTouchEnd() {
    isDragging = false;
    setTimeout(() => { autoRotate = true; }, 3000);
}

function onResize() {
    const container = document.getElementById('body3d-container');
    if (!container || !camera || !renderer) return;

    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

// ============================================
// MODAL DE SELEÇÃO DE MÚSCULO
// ============================================

function openMuscleModal(tipo) {
    const data = exercicios[tipo];
    if (!data) return;

    const modal = document.getElementById('muscleModal');
    const title = document.getElementById('muscleModalTitle');
    const list = document.getElementById('muscleList');

    title.textContent = data.nome;
    title.dataset.tipo = tipo;

    list.innerHTML = data.subdivisoes.map(sub => `
        <button class="subdivision-btn" data-sub="${sub.nome}" onclick="showSubdivision('${tipo}', '${sub.nome}')">
            <span class="sub-name">${sub.nome}</span>
            <span class="sub-desc">${sub.descricao}</span>
            <span class="sub-arrow">›</span>
        </button>
    `).join('');

    modal.classList.add('active');
}

function showSubdivision(tipo, subdivisao) {
    const data = exercicios[tipo];
    const sub = data.subdivisoes.find(s => s.nome === subdivisao);
    if (!sub) return;

    const modal = document.getElementById('exerciseListModal');
    const title = document.getElementById('exerciseListTitle');
    const list = document.getElementById('exerciseList');

    title.textContent = `${data.nome} - ${sub.nome}`;
    title.dataset.tipo = tipo;
    title.dataset.sub = subdivisao;

    list.innerHTML = sub.exercicios.map((ex, i) => `
        <div class="exercise-item" onclick="showExerciseDetail(${i}, '${tipo}', '${sub.nome}')">
            <div class="exercise-info">
                <span class="exercise-name">${ex.nome}</span>
                <span class="exercise-level">${ex.nivel}</span>
            </div>
            <span class="exercise-arrow">›</span>
        </div>
    `).join('');

    document.getElementById('muscleModal').classList.remove('active');
    modal.classList.add('active');
}

function showExerciseDetail(index, tipo, subdivisao) {
    const data = exercicios[tipo];
    const sub = data.subdivisoes.find(s => s.nome === subdivisao);
    const ex = sub.exercicios[index];
    if (!ex) return;

    const modal = document.getElementById('exerciseDetailModal');
    const title = document.getElementById('exerciseDetailTitle');
    const level = document.getElementById('exerciseDetailLevel');
    const series = document.getElementById('exerciseDetailSeries');
    const instructions = document.getElementById('exerciseDetailInstructions');
    const videoFrame = document.getElementById('exerciseDetailVideo');

    title.textContent = ex.nome;
    level.textContent = ex.nivel;
    series.textContent = ex.series;
    instructions.innerHTML = ex.instrucoes.map(i => `<li>${i}</li>`).join('');
    videoFrame.src = ex.video;

    document.getElementById('exerciseListModal').classList.remove('active');
    modal.classList.add('active');
}

// ============================================
// NAVEGAÇÃO DAS ABAS
// ============================================

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(tabId).classList.add('active');

        // Inicializar 3D quando mudar para musculação
        if (tabId === 'musculacao') {
            setTimeout(() => {
                if (!scene) init3D();
            }, 100);
        }
    });
});

// ============================================
// CORRIDA
// ============================================

document.querySelectorAll('.corrida-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.corrida;
        document.querySelectorAll('.corrida-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.corrida-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(tab).classList.add('active');
    });
});

document.querySelectorAll('.distance-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const distance = btn.dataset.distance;
        document.querySelectorAll('.distance-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.plan-info').forEach(p => p.style.display = 'none');
        btn.classList.add('active');
        document.getElementById(`plan${distance}`).style.display = 'block';
    });
});

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

// ============================================
// YOGA
// ============================================

document.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const level = btn.dataset.level;
        document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.yoga-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(level).classList.add('active');
    });
});

// ============================================
// ALONGAMENTO
// ============================================

document.querySelectorAll('.region-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const region = btn.dataset.region;
        document.querySelectorAll('.region-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.stretch-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(region).classList.add('active');
    });
});

// ============================================
// MODAIS - FECHAR
// ============================================

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
}

document.querySelectorAll('.modal-close, .modal-overlay').forEach(el => {
    el.addEventListener('click', (e) => {
        if (e.target === el) closeAllModals();
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
});

// ============================================
// THEME TOGGLE
// ============================================

const themeToggle = document.getElementById('themeToggle');

if (localStorage.getItem('theme') === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
}

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

// ============================================
// INICIALIZAÇÃO
// ============================================

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (document.getElementById('musculacao')) {
            init3D();
        }
    }, 500);
});

// Carregar Three.js dynamicamente
const threeScript = document.createElement('script');
threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
threeScript.onload = () => {
    console.log('Three.js loaded');
};
document.head.appendChild(threeScript);