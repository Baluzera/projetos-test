const pilates = {
    nome: "Pilates",
    descricao: "Método Pilates para.core e flexibilidade",
    categorias: [
        {
            nome: "Iniciante",
            nivel: "Iniciante",
            exercicios: [
                {
                    nome: "The Hundred",
                    duracao: "1 minuto",
                    instrucoes: [
                        "Deite de costas",
                        "Levante as pernas a 45 graus",
                        "Levante a cabeça e ombros",
                        "Estenda os braços ao lado",
                        "Bata os braços 5x inspira → 5x expira",
                        "Repita por 1 minuto"
                    ],
                    beneficios: "Fortalece core, melhora respiração",
                   imagen: "hundred"
                },
                {
                    nome: "The Roll Up",
                    duracao: "30 segundos",
                    instrucoes: [
                        "Deite de costas, braços acima",
                        "Inspire e prepare",
                        "Expire e role a coluna",
                        "Sentou sem usar mãos",
                        "Retorne lentamente",
                        "Repita 5-10x"
                    ],
                    beneficios: "Flexibilidade da coluna",
                    imagen: "rollup"
                },
                {
                    nome: "Single Leg Stretch",
                    duracao: "1 minuto",
                    instrucoes: [
                        "Deite de costas",
                        "Puxe um joelho ao peito",
                        "Estenda a outra perna a 45 graus",
                        "Troque as pernas",
                        "Mantenha o ritmo",
                        "Continue alternando"
                    ],
                    beneficios: "Fortalece quadríceps e core",
                    imagen: "singleleg"
                },
                {
                    nome: "Dead Bug",
                    duracao: "1 minuto",
                    instrucoes: [
                        "Deite de costas",
                        "Levante pernas a 90 graus",
                        "Braços estendidos para arriba",
                        "Baixe um braço e perna juntos",
                        "Retorne e repita do outro lado",
                        "Mantenha core engajado"
                    ],
                    beneficios: "Estabilidade do core",
                    imagen: "deadbug"
                },
                {
                    nombre: "Bird Dog",
                    duracao: "1 minuto",
                    instrucoes: [
                        "Em quatro pontos",
                        "Estendabrazo direito + perna esquerda",
                        "Mantenha 2 segundos",
                        "Retorne e repita do outro lado",
                        "Core sempre engaged",
                        "Movimentos controlados"
                    ],
                    beneficios: "Equilíbrio e core",
                    imagen: "birddog"
                },
                {
                    nome: "Bridge",
                    duracao: "1 minuto",
                    instrucoes: [
                        "Deite de costas, joelhos dobrados",
                        "Pés no chão",
                        "Levante o quadril",
                        "Aperte os glúteos no topo",
                        "Desca lentamente",
                        "Repita 10x"
                    ],
                    beneficios: "Glúteos e posterior",
                    imagen: "bridge"
                }
            ]
        },
        {
            nome: "Intermediário",
            nivel: "Intermediário",
            exercicios: [
                {
                    nombre: "The Saw",
                    duracao: "1 minuto",
                    instrucoes: [
                        "Sente com pernas estendidas",
                        "Braços lateralmente",
                        "Gire o tronco para direita",
                        "Toque o pé oposto",
                        "Retorne e repita",
                        "5x cada lado"
                    ],
                    beneficios: "Rotação de coluna",
                    imagen: "saw"
                },
                {
                    nome: "Teaser",
                    duracao: "30 segundos",
                    instrucoes: [
                        "Deite de costas, braços acima",
                        "Levante pernas e tronco",
                        "Forma um V",
                        "Equilibre",
                        "Retorne的控制adamente",
                        "5x"
                    ],
                    beneficios: "Core intenso + equilíbrio",
                    imagen: "teaser"
                },
                {
                    nombre: "Scissors",
                    duracao: "1 minuto",
                    instrucoes: [
                        "Deite de costas",
                        "Levante uma perna a 45 graus",
                        "Baixe a outra quase toca chão",
                        "Alternelas rapidamente",
                        "Core engaged",
                        "30 segundos"
                    ],
                    beneficios: "Flexibilidade e core",
                    imagen: "scissors"
                },
                {
                    nome: "shoulder Bridge",
                    duracao: "1 minuto",
                    instrucoes: [
                        "Deite, levante as pernas",
                        "Cruze um tornozelo sobre o joelho",
                        "Levante o quadril",
                        "Pressione o joelho contra a mão",
                        "Respire e segure",
                        "5x cada lado"
                    ],
                    beneficios: "Glúteos e quadril",
                    imagen: "shoulderbridge"
                },
                {
                    nome: "Corridor",
                    duracao: "30 segundos",
                    instrucoes: [
                        "Deite de lado",
                        "Apoie o antebraço",
                        "Levante o quadril",
                        "Estenda as pernas",
                        "Forme uma linha reta",
                        "Segure 30s"
                    ],
                    beneficios: "Oblíquos",
                    imagen: "plank"
                },
                {
                    nome: "Mermaid",
                    duracao: "2 minutos",
                    instrucoes: [
                        "Sente de lado",
                        "Puxe os joelhos",
                        "Incline para um lado",
                        "Estenda o brazo acima",
                        "Curve lateralmente",
                        "5x cada lado"
                    ],
                    flexibilidade: "Coluna lateral",
                    imagen: "mermaid"
                }
            ]
        },
        {
            nome: "Avançado",
            nivel: "Avançado",
            exercicios: [
                {
                    nome: "Boomerang",
                    duracao: "1 minuto",
                    instrucoes: [
                        "Deite de costas",
                        "Levante as pernas",
                        "Levante o tronco",
                        "Agarre os tornozelos",
                        "Balance",
                        "10x"
                    ],
                    beneficios: "Core + flexibilidade",
                    imagen: "boomerang"
                },
                {
                    nome: "Corkscrew",
                    duracao: "1 minuto",
                    instrucoes: [
                        "Deite de costas",
                        "Levante as pernas",
                        "Faça circulações com as pernas",
                        "Não toque o chão",
                        "Mantenha core engaged",
                        "10x cada direção"
                    ],
                    beneficios: "Core + oblíquos",
                    imagen: "corkscrew"
                },
                {
                    nome: "Control",
                    duracao: "30 segundos",
                    instrucoes: [
                        "Em posição de prancha",
                        "Levante um braço",
                        "Levante a perna oposta",
                        "Equilibre",
                        "Segure",
                        "5x cada lado"
                    ],
                    beneficios: "Equilíbrio total",
                    imagen: "control"
                },
                {
                    nome: "Tea Pot",
                    duracao: "1 minuto",
                    instrucoes: [
                        "Deite de lado",
                        "Ajoelhe um joelho",
                        "Gire o tronco",
                        "Toque o chão com o ombro",
                        "Retorne e repita",
                        "10x cada lado"
                    ],
                    beneficios: "Rotação + oblíquos",
                    imagen: "teapot"
                },
                {
                    nome: "Stomach Massage",
                    duracao: "2 minutos",
                    instrucoes: [
                        "Deite de costas",
                        "Cruze as pernas",
                        "Balance as pernas",
                        "Vá para frente e para trás",
                        " massage a coluna",
                        "30 segundos"
                    ],
                    beneficios: "Massagem interna",
                    imagen: "stomach"
                },
                {
                    nome: "Hip Circle",
                    duracao: "1 minuto",
                    instrucoes: [
                        "Deite, joelhos dobrados",
                        "Faça circulações com joelhos",
                        "Um lado após o outro",
                        "Não levante quadris",
                        "Movimentos pequenos",
                        "20x cada direção"
                    ],
                    beneficios: "Mobilidade quadril",
                    imagen: "hip"
                }
            ]
        }
    ]
};