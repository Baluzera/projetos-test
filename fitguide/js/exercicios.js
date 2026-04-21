const exercicios = {
    peito: {
        nome: "Peito",
        subdivisoes: [
            {
                nome: "Alta",
                descricao: "Porção superior do peito",
                exercicios: [
                    {
                        nome: "Supino Inclinado",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/hDallpM9Xc0",
                        instrucoes: [
                            "Ajoelhe no banco inclinado (30-45 graus)",
                            "Segure os halteres com os braços estendidos",
                            "Abaixe os halteres até o peito",
                            "Eleve de volta mantendo o controle"
                        ],
                        series: "4 series x 10-12 repetições"
                    },
                    {
                        nome: "Crucifixo Inclinado",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/eG11X3MSqUI",
                        instrucoes: [
                            "Deite no banco inclinado",
                            "Abra os braços em arco",
                            "Slowly baixe até sentir alongamento",
                            "Retorne à posição inicial"
                        ],
                        series: "3 series x 12 repetições"
                    },
                    {
                        nome: "Peck Deck Inclinado",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/KVJFlTStOkg",
                        instrucoes: [
                            "Sente no equipamento inclinado",
                            "Feche os braços frente ao peito",
                            "Retorne lentamente"
                        ],
                        series: "3 series x 12 repetições"
                    }
                ]
            },
            {
                nome: "Média",
                descricao: "Porção central do peito",
                exercicios: [
                    {
                        nome: "Supino Reto",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/rLPMixrJb4U",
                        instrucoes: [
                            "Deite no banco com os pés no chão",
                            "Segure a barra com as mãos ligeiramente mais largas",
                            "Abaixe a barra até o peito lentamente",
                            "Empurre para cima até os braços ficarem estendidos"
                        ],
                        series: "4 series x 8-12 repetições"
                    },
                    {
                        nome: "Peck Deck",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/KVJFlTStOkg",
                        instrucoes: [
                            "Sente no equipamento com o peito apoiado",
                            "Segure as alças com os cotovelos",
                            "Feche os braços frente ao peito",
                            "Retorne lentamente"
                        ],
                        series: "3 series x 12 repetições"
                    },
                    {
                        nome: "Crucifixo",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/eG11X3MSqUI",
                        instrucoes: [
                            "Deite no banco plano",
                            "Segure os halteres acima do peito",
                            "Abaixe os braços em arco",
                            "Retorne à posição inicial"
                        ],
                        series: "3 series x 12 repetições"
                    }
                ]
            },
            {
                nome: "Baixa",
                descricao: "Porção inferior do peito",
                exercicios: [
                    {
                        nome: "Supino Declinado",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/rLPMixrJb4U",
                        instrucoes: [
                            "Ajoelhe no banco declinado",
                            "Segure os halteres",
                            "Abaixe até o peito",
                            "Empurre para cima"
                        ],
                        series: "4 series x 10 repetições"
                    },
                    {
                        nome: "Pulley Baixo",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/XvH7jTUnS_M",
                        instrucoes: [
                            "Sente no equipamento",
                            "Puxe a barra até o peito",
                            "Retorne lentamente"
                        ],
                        series: "3 series x 12 repetições"
                    },
                    {
                        nome: "Supino com Halteres",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/hDallpM9Xc0",
                        instrucoes: [
                            "Deite no banco com os halteres",
                            "Empurre os halteres para cima",
                            "Abaixe com controle"
                        ],
                        series: "3 series x 10-12 repetições"
                    }
                ]
            }
        ]
    },
    costas: {
        nome: "Costas",
        subdivisoes: [
            {
                nome: "Dorsal/Largura",
                descricao: "Largura das costas (V-shape)",
                exercicios: [
                    {
                        nome: "Puxada Aberta",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/JMw6X6VK3hI",
                        instrucoes: [
                            "Sente no equipamento",
                            "Segure a barra bem aberta",
                            "Puxe para baixo até o peito",
                            "Retorne lentamente"
                        ],
                        series: "4 series x 12 repetições"
                    },
                    {
                        nome: "Pulley Ventral",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/XvH7jTUnS_M",
                        instrucoes: [
                            "Sente com os joelhos fixos",
                            "Puxe a barra até o umbiligo",
                            "Retorne lentamente"
                        ],
                        series: "4 series x 10-12 repetições"
                    },
                    {
                        nome: "Pull-up",
                        nivel: "Avançado",
                        video: "https://www.youtube.com/embed/eCp18K1z1iU",
                        instrucoes: [
                            "Segure a barra bem aberta",
                            "Suspenda o corpo",
                            "Puxe o queixo acima da barra",
                            "Desça com controle"
                        ],
                        series: "3 series x max repetições"
                    }
                ]
            },
            {
                nome: "Lombada",
                descricao: "Região lombar",
                exercicios: [
                    {
                        nome: "Remada Curvada",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/FM8E8c7gZcQ",
                        instrucoes: [
                            "Dobre o tronco para frente (45 graus)",
                            "Puxe a barra até o abdômen",
                            "Retorne lentamente"
                        ],
                        series: "4 series x 8-12 repetições"
                    },
                    {
                        nome: "Stiff",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/7j-ixU7U5X8",
                        instrucoes: [
                            "Em pé com halteres",
                            "Dobre o tronco para frente",
                            "Desça até os joelhos",
                            "Mantenha as pernas retas"
                        ],
                        series: "3 series x 12 repetições"
                    },
                    {
                        nome: "Remada Unilateral",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/nd8d3E6rSyM",
                        instrucoes: [
                            "Apoie um joelho no banco",
                            "Puxe o haltere até o quadril",
                            "Retorne lentamente"
                        ],
                        series: "3 series x 12 cada lado"
                    }
                ]
            },
            {
                nome: "Trapézio",
                descricao: "Trapézio e superior das costas",
                exercicios: [
                    {
                        nome: "Elevação Lateral",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/3hK2ZkXR7kQ",
                        instrucoes: [
                            "Em pé com halteres",
                            "Eleva os braços lateralmente",
                            "Mantenha os cotovelos fixos",
                            "Retorne lentamente"
                        ],
                        series: "3 series x 12-15 repetições"
                    },
                    {
                        nome: "Face Pull",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/rep8NRBT8t8",
                        instrucoes: [
                            "Ataque a corda na altura do peito",
                            "Puxe hacia o rosto",
                            "Separe as mãos",
                            "Retorne com controle"
                        ],
                        series: "3 series x 15 repetições"
                    },
                    {
                        nome: "Shrugs",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/3hK2ZkXR7kQ",
                        instrucoes: [
                            "Em pé com halteres",
                            "Eleve os ombros até as orelhas",
                            "Segure 2 segundos",
                            "Retorne"
                        ],
                        series: "3 series x 15 repetições"
                    }
                ]
            }
        ]
    },
    ombro: {
        nome: "Ombro",
        subdivisoes: [
            {
                nome: "Anterior",
                descricao: "Parte frontal do ombro",
                exercicios: [
                    {
                        nome: "Desenvolvimento Militar",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/qEwK8g9Rl2s",
                        instrucoes: [
                            "Em pé com halteres na altura dos ombros",
                            "Empurre para cima",
                            "Encontre acima da cabeça",
                            "Abaixe com controle"
                        ],
                        series: "4 series x 10-12 repetições"
                    },
                    {
                        nome: "Arnold Press",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/QzF12F_BWzE",
                        instrucoes: [
                            "Sente com halteres",
                            "Gire as palmas para fora ao empurrar",
                            "Inverter o movimento ao descer"
                        ],
                        series: "3 series x 10-12 repetições"
                    },
                    {
                        nome: "Elevação Frontal",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/6PALXAT2JpI",
                        instrucoes: [
                            "Em pé com halteres",
                            "Eleva até a altura dos ombros",
                            "Retorne lentamente"
                        ],
                        series: "3 series x 12 repetições"
                    }
                ]
            },
            {
                nome: "Lateral",
                descricao: "Parte lateral do ombro",
                exercicios: [
                    {
                        nome: "Elevação Lateral",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/3hK2ZkXR7kQ",
                        instrucoes: [
                            "Em pé com halteres ao lado",
                            "Eleva lateralmente até os ombros",
                            "Mantenha os cotovelos ligeiramente dobrados",
                            "Retorne lentamente"
                        ],
                        series: "3 series x 12-15 repetições"
                    },
                    {
                        nome: "Elevação Lateral Inclinado",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/3hK2ZkXR7kQ",
                        instrucoes: [
                            "Dobre ligeramente o tronco",
                            "Eleve lateralmente",
                            "Retorne lentamente"
                        ],
                        series: "3 series x 12 repetições"
                    },
                    {
                        nome: "Peck Deck",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/KVJFlTStOkg",
                        instrucoes: [
                            "Sente no equipamento",
                            "Abra os braços lateralmente",
                            "Retorne lentamente"
                        ],
                        series: "3 series x 12 repetições"
                    }
                ]
            },
            {
                nome: "Posterior",
                descricao: "Parte trasera do ombro",
                exercicios: [
                    {
                        nome: "Elevação Posterior",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/h7fxtpV4qPs",
                        instrucoes: [
                            "Dobre o tronco para frente",
                            "Eleva os halteres para trás",
                            "Retorne lentamente"
                        ],
                        series: "3 series x 12 repetições"
                    },
                    {
                        nome: "Face Pull",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/rep8NRBT8t8",
                        instrucoes: [
                            "Ataque a corda",
                            "Puxe hacia o rosto",
                            "Separe as mãos",
                            "Retorne"
                        ],
                        series: "3 series x 15 repetições"
                    },
                    {
                        nome: "Crucifixo Inverso",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/eG11X3MSqUI",
                        instrucoes: [
                            "Deite no banco",
                            "Abra os bra��os",
                            "Retorne lentamente"
                        ],
                        series: "3 series x 12 repetições"
                    }
                ]
            }
        ]
    },
    bracos: {
        nome: "Braços",
        subdivisoes: [
            {
                nome: "Bíceps",
                descricao: "Parte frontal do braço",
                exercicios: [
                    {
                        nome: "Rosca Direta",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/kpP8NRqTh6c",
                        instrucoes: [
                            "Em pé com halteres",
                            "Dobre os cotovelos",
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
                            "Em pé com halteres",
                            "Palmas uma hacia a outra",
                            "Dobre os cotovelos",
                            "Retorne lentamente"
                        ],
                        series: "3 series x 12 repetições"
                    },
                    {
                        nome: "Rosca Concentrada",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/kpP8NRqTh6c",
                        instrucoes: [
                            "Sente com haltere",
                            "Apoie o cotovelo na coxa",
                            "Dobre até o ombro",
                            "Retorne lentamente"
                        ],
                        series: "3 series x 12 cada lado"
                    }
                ]
            },
            {
                nome: "Tríceps",
                descricao: "Parte trasera do braço",
                exercicios: [
                    {
                        nome: "Tríceps Pulley",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/2z8Jmcr0AsY",
                        instrucoes: [
                            "Em pé, segure a corda",
                            "Abaixe dobrando os cotovelos",
                            "Estenda os braços",
                            "Retorne"
                        ],
                        series: "3 series x 12 repetições"
                    },
                    {
                        nome: "Tríceps Banco",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/6X7Uf52kd3U",
                        instrucoes: [
                            "Coloque as mãos no banco",
                            "Desça dobrando os cotovelos",
                            "Empurre para cima"
                        ],
                        series: "3 series x 10-12 repetições"
                    },
                    {
                        nome: "Dip",
                        nivel: "Avançado",
                        video: "https://www.youtube.com/embed/2z8Jmcr0AsY",
                        instrucoes: [
                            "Apoie as mãos no banco",
                            "Desça dobrando os cotovelos",
                            "Empurre para cima",
                            "Mantenha o corpo próximo"
                        ],
                        series: "3 series x max repetições"
                    }
                ]
            },
            {
                nome: "Antebraço",
                descricao: "Parte inferior do braço",
                exercicios: [
                    {
                        nome: "Rosca Inversa",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/6P5SZl2uPzY",
                        instrucoes: [
                            "Em pé com halteres",
                            "Palmas para baixo",
                            "Dobre os cotovelos",
                            "Retorne lentamente"
                        ],
                        series: "3 series x 12 repetições"
                    },
                    {
                        nome: "Wrist Curl",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/kpP8NRqTh6c",
                        instrucoes: [
                            "Sente com os antebraços nas coxas",
                            "Dobre os pulsos para cima",
                            "Retorne lentamente"
                        ],
                        series: "3 series x 15 repetições"
                    },
                    {
                        nome: "Wristcurl Inverso",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/kpP8NRqTh6c",
                        instrucoes: [
                            "Sente com os antebraços",
                            "Dobre os pulsos para baixo",
                            "Retorne"
                        ],
                        series: "3 series x 15 repetições"
                    }
                ]
            }
        ]
    },
    abdomen: {
        nome: "Abdômen",
        subdivisoes: [
            {
                nome: "Superior",
                descricao: "Parte superior do abdômen",
                exercicios: [
                    {
                        nome: "Crunch",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/Xd6mR8vFD6U",
                        instrucoes: [
                            "Deite com os joelhos dobrados",
                            "Eleva os ombros do chão",
                            "Mantenha o movimento controlado"
                        ],
                        series: "3 series x 20 repetições"
                    },
                    {
                        nome: "Crunch Oblíquo",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/dw3D8GkF4X8",
                        instrucoes: [
                            "Deite com as pernas dobradas",
                            "Eleva o ombro derecho hacia o joelho esquerdo",
                            "Alternar os lados"
                        ],
                        series: "3 series x 20 repetições"
                    },
                    {
                        nome: "Reversecrunch",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/Xd6mR8vFD6U",
                        instrucoes: [
                            "Deite no chão",
                            "Dobre os joelhos",
                            "Eleva os quadris",
                            "Retorne lentamente"
                        ],
                        series: "3 series x 15 repetições"
                    }
                ]
            },
            {
                nome: "Inferior",
                descricao: "Parte inferior do abdômen",
                exercicios: [
                    {
                        nome: "Elevação de Perna",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/J8D3D8Q8V8E",
                        instrucoes: [
                            "Deite completamente",
                            "Eleve as pernas até 90 graus",
                            "Retorne lentamente"
                        ],
                        series: "3 series x 15 repetições"
                    },
                    {
                        nome: "Bicycle",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/nQ3D8X8P8X8",
                        instrucoes: [
                            "Deite com as mãos na cabeça",
                            "Leve o joelho al tronco alternadamente",
                            "模仿 pedal de bicicleta"
                        ],
                        series: "3 series x 20 repetições"
                    },
                    {
                        nome: "Leg Raise",
                        nivel: "Avançado",
                        video: "https://www.youtube.com/embed/J8D3D8Q8V8E",
                        instrucoes: [
                            "Deite completo",
                            "Eleve as pernas retas",
                            "Baixe lentamente"
                        ],
                        series: "3 series x 10 repetições"
                    }
                ]
            },
            {
                nome: "Oblíquos",
                descricao: "Laterais do abdômen",
                exercicios: [
                    {
                        nome: "Russian Twist",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/wk7X8Q8V8X8",
                        instrucoes: [
                            "Sente com os joelhos dobrados",
                            "Incline o tronco",
                            "Gire de um lado para o outro"
                        ],
                        series: "3 series x 20 repetições"
                    },
                    {
                        nome: "Side Plank",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/pSHjTRCQxMw",
                        instrucoes: [
                            "Deite de lado",
                            "Apoie no cotovelo",
                            "Eleve o quadril",
                            "Segure 30 segundos"
                        ],
                        series: "3 series x 30 segundos"
                    },
                    {
                        nome: "Woodchop",
                        nivel: "Avançado",
                        video: "https://www.youtube.com/embed/wk7X8Q8V8X8",
                        instrucoes: [
                            "Em pé com cabo ou haltere",
                            "Gire o tronco",
                            "Mantenha os quadris parados"
                        ],
                        series: "3 series x 12 cada lado"
                    }
                ]
            }
        ]
    },
    gluteos: {
        nome: "Glúteos",
        subdivisoes: [
            {
                nome: "Máximo",
                descricao: "Glúteo máximo (principal)",
                exercicios: [
                    {
                        nome: "Agachamento",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/UXJrBG2RzQA",
                        instrucoes: [
                            "Em pé com os pés na largura dos ombros",
                            "Desça como se fosse sentar",
                            "Mantenha os joelhos alinhados",
                            "Retorne"
                        ],
                        series: "4 series x 12-15 repetições"
                    },
                    {
                        nome: "Elevação Pélvica",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/w8yU7Q8G8X8",
                        instrucoes: [
                            "Deite com os joelhos dobrados",
                            "Eleva o quadril",
                            "Aperte os glúteos no topo",
                            "Retorne lentamente"
                        ],
                        series: "3 series x 15 repetições"
                    },
                    {
                        nome: "Stiff",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/7j-ixU7U5X8",
                        instrucoes: [
                            "Em pé com halteres",
                            "Dobre o tronco para frente",
                            "Desca até os joelhos",
                            "Mantenha as pernas retas"
                        ],
                        series: "3 series x 12 repetições"
                    }
                ]
            },
            {
                nome: "Médio",
                descricao: "Glúteo médio (lateral)",
                exercicios: [
                    {
                        nome: "Step Up",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/X8R8G8G8X8",
                        instrucoes: [
                            "Fique em frente a um step",
                            "Suba com uma perna",
                            "Estenda no topo",
                            "Desça e repita"
                        ],
                        series: "3 series x 12 cada perna"
                    },
                    {
                        nome: "Ponte",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/w8yU7Q8G8X8",
                        instrucoes: [
                            "Deite com os joelhos dobrados",
                            "Eleva o quadril",
                            "Segure 2 segundos",
                            "Retorne"
                        ],
                        series: "3 series x 15 repetições"
                    },
                    {
                        nome: "Caminhada Lateral",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/UXJrBG2RzQA",
                        instrucoes: [
                            "Em pé com elástico",
                            "Dê passos laterais",
                            "Mantenha tensão"
                        ],
                        series: "3 series x 20 passos"
                    }
                ]
            },
            {
                nome: "Mínimo",
                descricao: "Glúteo mínimo (profundo)",
                exercicios: [
                    {
                        nome: "Cadeira Adutora",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/Y8R8G8G8X8",
                        instrucoes: [
                            "Sente na cadeira adutora",
                            "Pressione as coxas uma hacia a outra",
                            "Mantenha o movimento controlado"
                        ],
                        series: "3 series x 15 repetições"
                    },
                    {
                        nome: "Fire Hydrant",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/w8yU7Q8G8X8",
                        instrucoes: [
                            "Em quatro pontos",
                            "Dobre o joelho para o lado",
                            "Mantenha 90 graus",
                            "Retorne"
                        ],
                        series: "3 series x 15 cada lado"
                    },
                    {
                        nome: "Clamshell",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/w8yU7Q8G8X8",
                        instrucoes: [
                            "Deite de lado com joelhos dobrados",
                            "Abra o joelho superior",
                            "Retorne lentamente"
                        ],
                        series: "3 series x 15 cada lado"
                    }
                ]
            }
        ]
    },
    coxas: {
        nome: "Coxas",
        subdivisoes: [
            {
                nome: "Quadríceps",
                descricao: "Frente da coxa",
                exercicios: [
                    {
                        nome: "Leg Press",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/Awd5C3G8P8X8",
                        instrucoes: [
                            "Sente no leg press",
                            "Abaixe o peso dobrando os joelhos",
                            "Empurre sem trancar os joelhos"
                        ],
                        series: "4 series x 12 repetições"
                    },
                    {
                        nome: "Extensor",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/B8R8G8G8X8",
                        instrucoes: [
                            "Sente no extensor",
                            "Estenda as pernas",
                            "Mantenha o movimento controlado"
                        ],
                        series: "3 series x 15 repetições"
                    },
                    {
                        nome: "Agachamento",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/UXJrBG2RzQA",
                        instrucoes: [
                            "Em pé",
                            "Desça até 90 graus",
                            "Retorne"
                        ],
                        series: "4 series x 12 repetições"
                    }
                ]
            },
            {
                nome: "Isquiotibiais",
                descricao: "Parte de trás da coxa",
                exercicios: [
                    {
                        nome: "Flexor",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/C8R8G8G8X8",
                        instrucoes: [
                            "Deite de bruços",
                            "Dobre os joelhos",
                            "Traga os tornozelos aos glúteos",
                            "Retorne"
                        ],
                        series: "3 series x 15 repetições"
                    },
                    {
                        nome: "Stiff",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/7j-ixU7U5X8",
                        instrucoes: [
                            "Em pé com halteres",
                            "Dobre o tronco para frente",
                            "Mantenha as pernas retas"
                        ],
                        series: "3 series x 12 repetições"
                    },
                    {
                        nome: "Good Morning",
                        nivel: "Avançado",
                        video: "https://www.youtube.com/embed/7j-ixU7U5X8",
                        instrucoes: [
                            "Barra nos ombros",
                            "Dobre o tronco",
                            "Mantenha as pernas retas",
                            "Retorne"
                        ],
                        series: "3 series x 10 repetições"
                    }
                ]
            },
            {
                nome: "Adutores",
                descricao: "Interior da coxa",
                exercicios: [
                    {
                        nome: "Cadeira Adutora",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/Y8R8G8G8X8",
                        instrucoes: [
                            "Sente na cadeira adutora",
                            "Pressione as coxas una hacia a outra",
                            "Retorne lentamente"
                        ],
                        series: "3 series x 15 repetições"
                    },
                    {
                        nome: "Adutor Sumo",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/Y8R8G8G8X8",
                        instrucoes: [
                            "Em pé com os pés bem abertos",
                            "Agache",
                            "Mantenha as costas retas"
                        ],
                        series: "3 series x 15 repetições"
                    },
                    {
                        nome: "Magazine",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/Y8R8G8G8X8",
                        instrucoes: [
                            "Deite de lado",
                            "Abra a perna superior",
                            "Retorne lentamente"
                        ],
                        series: "3 series x 15 cada lado"
                    }
                ]
            }
        ]
    },
    panturrilhas: {
        nome: "Panturrilhas",
        subdivisoes: [
            {
                nome: "Gastrocnêmio",
                descricao: "Panturrilha interna (gemelo)",
                exercicios: [
                    {
                        nome: "Elevação em Pé",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/G8R8G8G8X8",
                        instrucoes: [
                            "Fique em uma borda",
                            "Desça os calcanhares",
                            "Eleva-se na ponta",
                            "Retorne lentamente"
                        ],
                        series: "4 series x 15-20 repetições"
                    },
                    {
                        nome: "Elevação em Pé Unilateral",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/G8R8G8G8X8",
                        instrucoes: [
                            "Fique em uma perna",
                            "Eleva-se na ponta",
                            "Retorne lentamente"
                        ],
                        series: "3 series x 12 cada perna"
                    }
                ]
            },
            {
                nome: "Sóleo",
                descricao: "Panturrilha profunda",
                exercicios: [
                    {
                        nome: "Elevação Sentado",
                        nivel: "Iniciante",
                        video: "https://www.youtube.com/embed/H8R8G8G8X8",
                        instrucoes: [
                            "Sente noaparelho",
                            "Coloque os joelhos sob as coxas",
                            "Eleva os calcanhares",
                            "Retorne"
                        ],
                        series: "4 series x 15-20 repetições"
                    },
                    {
                        nome: "Leg Press Panturrilha",
                        nivel: "Intermediário",
                        video: "https://www.youtube.com/embed/J8R8G8G8X8",
                        instrucoes: [
                            "Sente no leg press",
                            "Coloque os pés na borda",
                            "Flexione os tornozelos",
                            "Estenda"
                        ],
                        series: "4 series x 15-20 repetições"
                    }
                ]
            }
        ]
    }
};