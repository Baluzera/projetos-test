// ============================================
// FAVORITOS - Sistema para salvar exercícios favoritos
// ============================================

const Favoritos = {
    // Salvar favorito
    adicionar: function(exercicio) {
        let favoritos = this.obter();
        if (!favoritos.includes(exercicio)) {
            favoritos.push(exercicio);
            localStorage.setItem('fitguide_favoritos', JSON.stringify(favoritos));
            return true;
        }
        return false;
    },

    // Remover favorito
    remover: function(exercicio) {
        let favoritos = this.obter();
        const index = favoritos.indexOf(exercicio);
        if (index > -1) {
            favoritos.splice(index, 1);
            localStorage.setItem('fitguide_favoritos', JSON.stringify(favoritos));
            return true;
        }
        return false;
    },

    // Obter lista de favoritos
    obter: function() {
        const stored = localStorage.getItem('fitguide_favoritos');
        return stored ? JSON.parse(stored) : [];
    },

    // Verificar se é favorito
    eFavorito: function(exercicio) {
        return this.obter().includes(exercicio);
    },

    // Limpar todos
    limpar: function() {
        localStorage.removeItem('fitguide_favoritos');
    }
};

// ============================================
// PROGRESSO - Sistema para acompanhar exercícios feitos
// ============================================

const Progresso = {
    // Registrar exercício como feito
    registrar: function(exercicio, musculo, data = new Date()) {
        let progresso = this.obter();
        const registro = {
            exercicio: exercicio,
            musculo: musculo,
            data: data.toISOString(),
            timestamp: Date.now()
        };
        progresso.push(registro);
        localStorage.setItem('fitguide_progresso', JSON.stringify(progresso));
        return true;
    },

    // Obter todo o progresso
    obter: function() {
        const stored = localStorage.getItem('fitguide_progresso');
        return stored ? JSON.parse(stored) : [];
    },

    // Obter exercícios feitos hoje
    obterHoje: function() {
        const hoje = new Date().toDateString();
        return this.obter().filter(p => new Date(p.data).toDateString() === hoje);
    },

    // Obter exercícios da semana
    obterSemana: function() {
        const umaSemanaAtras = Date.now() - (7 * 24 * 60 * 60 * 1000);
        return this.obter().filter(p => p.timestamp > umaSemanaAtras);
    },

    // Verificar se exercício foi feito recentemente
    concluidoRecentemente: function(exercicio, dias = 7) {
        const limite = Date.now() - (dias * 24 * 60 * 60 * 1000);
        return this.obter().some(p => 
            p.exercicio === exercicio && p.timestamp > limite
        );
    },

    // Obter estatísticas
    getEstatisticas: function() {
        const tudo = this.obter();
        const hoje = this.obterHoje();
        const semana = this.obterSemana();
        
        // Contar exercícios únicos
        const unicos = [...new Set(tudo.map(p => p.exercicio))];
        
        return {
            total: tudo.length,
            hoje: hoje.length,
            semana: semana.length,
            unicos: unicos.length
        };
    },

    // Limpar progresso do dia
    limparHoje: function() {
        const hoje = new Date().toDateString();
        let progresso = this.obter().filter(p => 
            new Date(p.data).toDateString() !== hoje
        );
        localStorage.setItem('fitguide_progresso', JSON.stringify(progresso));
    },

    // Limpar tudo
    limpar: function() {
        localStorage.removeItem('fitguide_progresso');
    }
};

// ============================================
// CRONÔMETRO - Timer para séries
// ============================================

const Cronometro = {
    tempoTotal: 0,
    tempoRestante: 0,
    interval: null,
    emExecucao: false,
    callback: null,

    // Iniciar timer
    iniciar: function(segundos, callback = null) {
        this.parar();
        this.tempoRestante = segundos;
        this.tempoTotal = segundos;
        this.callback = callback;
        this.emExecucao = true;
        
        this.interval = setInterval(() => {
            this.tempoRestante--;
            this.atualizarDisplay();
            
            if (this.tempoRestante <= 0) {
                this.parar();
                this.tocarAlarme();
                if (this.callback) this.callback();
            }
        }, 1000);
        
        this.atualizarDisplay();
    },

    // Pausar
    pausar: function() {
        if (this.interval) {
            clearInterval(this.interval);
            this.emExecucao = false;
        }
    },

    // Continuar
    continuar: function() {
        if (this.tempoRestante > 0 && !this.emExecucao) {
            this.emExecucao = true;
            this.interval = setInterval(() => {
                this.tempoRestante--;
                this.atualizarDisplay();
                
                if (this.tempoRestante <= 0) {
                    this.parar();
                    this.tocarAlarme();
                    if (this.callback) this.callback();
                }
            }, 1000);
        }
    },

    // Parar/Resetar
    parar: function() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        this.emExecucao = false;
    },

    // Resetar
    resetar: function() {
        this.parar();
        this.tempoRestante = this.tempoTotal;
        this.atualizarDisplay();
    },

    // Atualizar display
    atualizarDisplay: function() {
        const display = document.getElementById('cronometroDisplay');
        if (display) {
            display.textContent = this.formatarTempo(this.tempoRestante);
        }
        
        const botao = document.getElementById('cronometroBotao');
        if (botao) {
            botao.textContent = this.emExecucao ? '⏸️ Pausar' : '▶️ Iniciar';
        }
    },

    // Formatar tempo
    formatarTempo: function(segundos) {
        const mins = Math.floor(segundos / 60);
        const segs = segundos % 60;
        return `${mins.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}`;
    },

    // toca alarme
    tocarAlarme: function() {
        // Vibração se disponível
        if (navigator.vibrate) {
            navigator.vibrate([200, 100, 200]);
        }
        
        // Som (opcional - usando AudioContext)
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            oscillator.frequency.value = 880;
            oscillator.type = 'sine';
            gainNode.gain.value = 0.3;
            
            oscillator.start();
            setTimeout(() => {
                oscillator.stop();
                audioCtx.close();
            }, 500);
        } catch (e) {
            console.log('Audio não suportado');
        }
    },

    // Pegar tempo atual
    getTempo: function() {
        return this.tempoRestante;
    },

    // Ver se está em execução
    isEmExecucao: function() {
        return this.emExecucao;
    }
};

// ============================================
// CRIAR BOTÕES NA INTERFACE
// ============================================

function criarBotoesFerramentas() {
    // Verificar se já existem
    if (document.getElementById('toolsBar')) return;
    
    // Criar barra de ferramentas
    const toolsBar = document.createElement('div');
    toolsBar.id = 'toolsBar';
    toolsBar.className = 'tools-bar';
    toolsBar.innerHTML = `
        <button class="tool-btn" onclick="toggleFavoritos()" title="Favoritos">
            ❤️ <span id="favoritosCount">${Favoritos.obter().length}</span>
        </button>
        <button class="tool-btn" onclick="toggleProgresso()" title="Progresso">
            ✅ <span id="progressoHoje">${Progresso.obterHoje().length}</span>
        </button>
        <button class="tool-btn" onclick="toggleCronometro()" title="Cronômetro">
            ⏱️ <span id="cronometroDisplay">00:00</span>
        </button>
        <input type="number" id="timerInput" placeholder="Seg" min="10" max="300" value="60" style="width:60px">
        <button class="tool-btn" id="cronometroBotao" onclick="controlarCronometro()">▶️</button>
    `;
    
    // Adicionar ao body
    document.body.appendChild(toolsBar);
    
    // Estilos
    const style = document.createElement('style');
    style.textContent = `
        .tools-bar {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 10px;
            padding: 12px 16px;
            background: var(--bg-secondary);
            border-radius: 50px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            z-index: 1000;
        }
        .tool-btn {
            padding: 8px 14px;
            border-radius: 20px;
            font-weight: 600;
            background: var(--bg-tertiary);
            transition: all 0.2s;
        }
        .tool-btn:hover {
            background: var(--accent);
        }
        #timerInput {
            padding: 8px;
            border-radius: 15px;
            background: var(--bg-tertiary);
            color: var(--text-primary);
            border: none;
            font-size: 14px;
        }
    `;
    document.head.appendChild(style);
}

// Controlar cronômetro
function controlarCronometro() {
    if (Cronometro.isEmExecucao()) {
        Cronometro.pausar();
    } else if (Cronometro.getTempo() === 0) {
        const segundos = parseInt(document.getElementById('timerInput').value) || 60;
        Cronometro.iniciar(segundos, () => {
            // Callback quando terminar
            alert('⏰ Tempo完成!');
        });
    } else {
        Cronometro.continuar();
    }
}

// Toggle Favoritos
function toggleFavoritos() {
    const modal = document.getElementById('favoritosModal');
    if (!modal) {
        criarModalFavoritos();
    }
    modal.classList.toggle('active');
}

// Toggle Progresso
function toggleProgresso() {
    const modal = document.getElementById('progressoModal');
    if (!modal) {
        criarModalProgresso();
    }
    modal.classList.toggle('active');
}

// Toggle Cronômetro
function toggleCronometro() {
    const input = document.getElementById('timerInput');
    if (!input.value) {
        input.value = 60;
    }
    Cronometro.iniciar(parseInt(input.value));
}

// Criar modal de favoritos
function criarModalFavoritos() {
    const modal = document.createElement('div');
    modal.id = 'favoritosModal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal" style="max-width:400px">
            <button class="modal-close" onclick="toggleFavoritos()">&times;</button>
            <div class="modal-header">
                <h2>❤️ Meus Favoritos</h2>
            </div>
            <div class="modal-body" id="favoritosLista">
                <p style="color:var(--text-secondary)">Nenhum favorito ainda.</p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    atualizarListaFavoritos();
}

// Criar modal de progresso
function criarModalProgresso() {
    const modal = document.createElement('div');
    modal.id = 'progressoModal';
    modal.className = 'modal-overlay';
    const stats = Progresso.getEstatisticas();
    modal.innerHTML = `
        <div class="modal" style="max-width:400px">
            <button class="modal-close" onclick="toggleProgresso()">&times;</button>
            <div class="modal-header">
                <h2>✅ Meu Progresso</h2>
            </div>
            <div class="modal-body">
                <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:20px">
                    <div style="text-align:center;padding:15px;background:var(--bg-tertiary);border-radius:10px">
                        <div style="font-size:24px;font-weight:bold">${stats.hoje}</div>
                        <div style="font-size:12px;color:var(--text-secondary)">Hoje</div>
                    </div>
                    <div style="text-align:center;padding:15px;background:var(--bg-tertiary);border-radius:10px">
                        <div style="font-size:24px;font-weight:bold">${stats.semana}</div>
                        <div style="font-size:12px;color:var(--text-secondary)">Semana</div>
                    </div>
                    <div style="text-align:center;padding:15px;background:var(--bg-tertiary);border-radius:10px">
                        <div style="font-size:24px;font-weight:bold">${stats.total}</div>
                        <div style="font-size:12px;color:var(--text-secondary)">Total</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// Atualizar lista de favoritos
function atualizarListaFavoritos() {
    const lista = document.getElementById('favoritosLista');
    if (!lista) return;
    
    const favoritos = Favoritos.obter();
    if (favoritos.length === 0) {
        lista.innerHTML = '<p style="color:var(--text-secondary)">Nenhum favorito ainda.</p>';
    } else {
        lista.innerHTML = favoritos.map(f => `
            <div style="padding:10px;margin-bottom:8px;background:var(--bg-tertiary);border-radius:8px;display:flex;justify-content:space-between;align-items:center">
                <span>${f}</span>
                <button onclick="Favoritos.remover('${f}');atualizarListaFavoritos()" style="color:red;background:none;border:none;cursor:pointer">❌</button>
            </div>
        `).join('');
    }
    
    // Atualizar contador
    const contador = document.getElementById('favoritosCount');
    if (contador) contador.textContent = favoritos.length;
}

// Adicionar aos exercícios (chamar quando clicar em exercício)
function adicionarAosFavoritos(nomeExercicio) {
    if (Favoritos.adicionar(nomeExercicio)) {
        atualizarListaFavoritos();
    }
}

// Inicializar quando a página carregar
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        criarBotoesFerramentas();
    }, 1000);
});