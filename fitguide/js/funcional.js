const funcional = {
    nome: "Funcional",
    descricao: "Exercícios funcionais do dia a dia",
    categorias: [
        {
            nome: "Movimentos Básicos",
            nivel: "Iniciante",
            exercicios: [
                {
                    nome: "Agachar/Sentar",
                    repeticoes: "15x",
                    instrucoes: [
                        "Fique em pé",
                        "Desca como se fosse sentar",
                        "Joelhos alinhados",
                        "Volte em pé",
                        "Use as pernas",
                        "15 repetições"
                    ],
                    beneficios: "Força para sentarse/levantar",
                    imagem: "squat"
                },
                {
                    nome: "Levantar objects",
                    repeticoes: "15x",
                    instrucoes: [
                        "Fique em pé com object ao chão",
                        "Dobre os joelhos",
                        "Mantenha as costas retas",
                        "Levante usando as pernas",
                        "Não arredondar as costas",
                        "15 repetições"
                    ],
                    beneficios: "Levantar correto",
                    imagem: "deadlift"
                },
                {
                    nome: "Gandhar",
                    repeticoes: "10x cada lado",
                    instrucoes: [
                        "De um passo adelante",
                        "Baixe o joelho traseiro",
                        "Alinhe os joelhos 90°",
                        "Retorne",
                        "Alternar as pernas",
                        "10x cada lado"
                    ],
                    beneficios: "Subir escadas, entrar no carro",
                    imagem: "lunge"
                },
                {
                    nome: "Empurrar",
                    repeticoes: "10x",
                    instrucoes: [
                        "Fique em pé",
                        "Estenda os braços",
                        "Imagine empurrar uma porta",
                        "Use o core",
                        "Não只用 os braços",
                        "10 repetições"
                    ],
                    beneficios: "Empurrar Objects",
                    imagem: "push"
                },
                {
                    nome: "Puxar",
                    repeticoes: "10x",
                    instrucoes: [
                        "Dobre levemente os joelhos",
                        "Puxe com as costas",
                        "Ombros para trás",
                        "Core engaged",
                        "Não только os braços",
                        "10 repetições"
                    ],
                    beneficios: "Puxar Objects",
                    imagem: "pull"
                },
                {
                    nome: "Agachar e Levantar",
                    repeticoes: "10x",
                    instrucoes: [
                        "Objeto no chão",
                        "Agache com as pernas",
                        "Mantenha object perto",
                        "Levante com as pernas",
                        "Core apertado",
                        "10 repetições"
                    ],
                    fundamentals: "Movimento mais usado"
                }
            ]
        },
        {
            nome: "Estabilidade",
            nivel: "Intermediário",
            exercicios: [
                {
                    nome: "Prancha Lateral",
                    duracao: "30 segundos cada lado",
                    instrucoes: [
                        "Deite de lado",
                        "Apoie no cotovelo",
                        "Levante o quadril",
                        "Forme uma linha reta",
                        "Não deixe cair",
                        "30 segundos"
                    ],
                    beneficios: "Estabilidade do quadril",
                    imagem: "sideplank"
                },
                {
                    nome: "Prancha com Rotação",
                    duracao: "1 minuto",
                    instrucoes: [
                        "Em posição de prancha",
                        "Gire o quadril para um lado",
                        "Toque o chão",
                        "Gire para o outro",
                        "Core firme",
                        "1 minuto"
                    ],
                    beneficios: "Rotação funcional",
                    imagem: "plank"
                },
                {
                    nome: "Dead Bug com Rotação",
                    duracao: "1 minuto",
                    instrucoes: [
                        "Deite de costas",
                        "Levante pernas e braços",
                        "Gire para um lado",
                        "Retorne",
                        "Gire para o outro",
                        "1 minuto"
                    ],
                    beneficios: "Controle do core",
                    imagem: "deadbug"
                },
                {
                    nome: "Pássaro-Cão",
                    duracao: "1 minuto",
                    instrucoes: [
                        "Em quatro pontos",
                        "Estenda braço + perna opostos",
                        "Mantenha equilíbrio",
                        "Core engaged",
                        "Não gire o quadril",
                        "1 minuto"
                    ],
                    beneficios: "Equilíbrio + core"
                },
                {
                    nome: "Bulgarian Split Squat",
                    duracao: "1 minuto",
                    instrucoes: [
                        "Pé traseiro no banco",
                        "Desca até 90°",
                        "Core firme",
                        "Não deixe o joelho passar",
                        "Alternar lado",
                        "1 minuto"
                    ],
                    beneficios: "Estabilidade unipodal"
                },
                {
                    nome: "Prancha com Toque",
                    duracao: "1 minuto",
                    instrucoes: [
                        "Em prancha",
                        "Toque o ombro oposto",
                        "Retorne",
                        "Toque o outro ombro",
                        "Core engaged",
                        "1 minuto"
                    ],
                    beneficios: "Coordenação + core"
                }
            ]
        },
        {
            nome: "Potência",
            nivel: "Intermediário",
            exercicios: [
                {
                    nome: "Saltos no lugar",
                    repeticoes: "10x",
                    instrucoes: [
                        "Em pé",
                        "Pule para cima",
                        "Largue os braços",
                        "Pouse suavemente",
                        "Joelhos levemente dobrados",
                        "10 saltos"
                    ],
                    beneficios: "Potência para correr, pular",
                    imagem: "jump"
                },
                {
                    nome: "Saltos Laterais",
                    repeticoes: "10 cada lado",
                    instrucoes: [
                        "Pule para um lado",
                        "Pouse em um pé",
                        "Pule para o outro",
                        "Mantenha equilíbrio",
                        "Core firme",
                        "10x cada lado"
                    ],
                    beneficios: "Direção + potência"
                },
                {
                    nome: "Corda (simulado)",
                    duracao: "1 minuto",
                    instrucoes: [
                        "Em pé",
                        "Pule一点点 acima",
                        "Mantenha Rhythm",
                        "Braços movimentando",
                        "1 minuto",
                        "Simula corda"
                    ],
                    beneficios: "Coordinação + cardio"
                },
                {
                    nome: "Skater",
                    repeticoes: "10 cada lado",
                    instrucoes: [
                        "Pule Lateriamente",
                        "Pouse em um pé",
                        "Equilibre",
                        "Mantenha velocidade",
                        "Core firme",
                        "10x cada lado"
                    ],
                    beneficios: "Agilidade + equilíbrio"
                },
                {
                    nome: "Box Jump (sem caixa)",
                    repeticoes: "10x",
                    instrucoes: [
                        "Em pé",
                        "Pule como se fosse sopra caixa",
                        "Levemente flexione os joelhos",
                        "Aterrisse suavemente",
                        "Core engaged",
                        "10x"
                    ],
                    beneficios: "Potência + absorção"
                },
                {
                    nome: "Multi-directional",
                    duracao: "1 minuto",
                    instrucoes: [
                        "Mova-se em direções",
                        "Frente, trás, lado, diagonal",
                        "Mantenha postura",
                        "Core engaged",
                        "Respire",
                        "1 minuto"
                    ],
                    beneficios: "Mobilidade completa"
                }
            ]
        },
        {
            nome: "日常生活 (Day-by-Day)",
            nivel: "Iniciante",
            exercicios: [
                {
                    nome: "Subir Escada",
                    duracao: "1-2 minutos",
                    instrucoes: [
                        "Step-a alternado",
                        "Use a perna toda",
                        "Core engajado",
                        "Não puxe com as mãos",
                        "Subadevagar",
                        "1-2 minutos"
                    ],
                    beneficios: "Diário - escadas",
                    imagem: "stairs"
                },
                {
                    nome: "Levantar Sacolas",
                    repeticoes: "10x",
                    instrucoes: [
                        "Curve os joelhos",
                        "Mantenha as costas retas",
                        "Levante com as pernas",
                        "Perto do corpo",
                        "Não torça",
                        "10x"
                    ],
                    beneficios: "Levantar compras"
                },
                {
                    nome: "Pegar Objects do Chão",
                    repeticoes: "10x",
                    instrucoes: [
                        "Dobre os joelhos",
                        "Mantenha costa reta",
                        "Pegue objects",
                        "Levante compernas",
                        "Não arredondar",
                        "10x"
                    ],
                    beneficios: "Pegar crianças/objetos"
                },
                {
                    nome: "Empurrar Carrinho",
                    duracao: "2 minutos",
                    instrucoes: [
                        "Posição deempurrar",
                        "Core engaged",
                        "Pernas levemente dobradas",
                        "Use o全身",
                        "Empurre e puxe",
                        "2 minutos"
                    ],
                    beneficios: "Carrinho,push"
                },
                {
                    nome: "Rotação do Tronco",
                    repeticoes: "20x",
                    instrucoes: [
                        "Em pé",
                        "Pivot os pés",
                        "Gire o tronco",
                        "Não Só gire os ombros",
                        "Core engaged",
                        "20x"
                    ],
                    beneficios: "Olhar para trás, trás"
                },
                {
                    nome: "Sentare Levantar",
                    duracao: "1 minuto",
                    instrucoes: [
                        "Sem usar as mãos",
                        "Sente na cadeira",
                        "Levante usando força",
                        "Pernas",
                        "Core engaged",
                        "1 minuto"
                    ],
                    beneficios: "Sentar/levantar cadeira"
                }
            ]
        }
    ]
};