const hiit = {
    nome: "HIIT",
    descricao: "High-Intensity Interval Training",
    treinos: [
        {
            nome: "Tabata",
            duracao: "4 minutos",
            nivel: "Avançado",
            exercicios: [
                "20s polichinelo → 10s descans → 8x",
                "20s agachamento → 10s descans → 8x",
                "20s mountain climber → 10s descans → 8x",
                "20s burpee → 10s descans → 8x",
                "20s salto em extensão → 10s descans → 8x",
                "20s prancha → 10s descans → 8x",
                "20s advance burpee → 10s descans → 8x",
                "20s corredores → 10s descans → 8x"
            ],
            series: "8 rounds",
            descanso: "10s entre rodadas",
            imagem: "tabata"
        },
        {
            nome: "EMOM 10",
            duracao: "10 minutos",
           nivel: "Intermediário",
            exercicios: [
                "Min 1: 10 agach + 10 cardio",
                "Min 2: 10 lunges + 10 polichinelo",
                "Min 3: 10 flexões + 10 mountain climber",
                "Min 4: 10 stiff + 10 corr/k",
                "Min 5: 10 burpee + 10 polichinelo",
                "Min 6: 10 agach + 10 alpinista",
                "Min 7: 10 remada + 10 jump",
                "Min 8: 10 squat jump + 10 agach",
                "Min 9: 10 flexões + 10 plank",
                "Min 10: 10 burpee + 10 polichinelo"
            ],
            series: "10 minutos",
            descanso: "Livre",
            imagem: "emom"
        },
        {
            nome: "EMOM 20",
            duracao: "20 minutos",
            nivel: "Avançado",
            exercicios: [
                "Min 1-2: 15 agach + 15 polichinelo",
                "Min 3-4: 15 lunges alternadas",
                "Min 5-6: 15 flexões + 15 mountain",
                "Min 7-8: 15 stiff + 15 salto",
                "Min 9-10: 15 burpee + 15 polichinelo",
                "Min 11-12: 15 agach + 15 alpinista",
                "Min 13-14: 15 remada + 15 jump",
                "Min 15-16: 15 squat jump + 15 agach",
                "Min 17-18: 15 flexões + 15 plank",
                "Min 19-20: 15 burpee + 15 polichinelo"
            ],
            series: "20 minutos",
            descanso: "Cada minuto",
            imagem: "emom"
        },
        {
            nome: "AMRAP 8",
            duracao: "8 minutos",
            nivel: "Intermediário",
            exercicios: [
                "10 agachamento",
                "10 flexões",
                "10 burpee",
                "10 mountain climber",
                "10 polichinelo",
                "10 jump squat"
            ],
            series: "8 minutos",
            descanso: "0 - quanto conseguir",
            imagem: "amrap"
        },
        {
            nome: "AMRAP 12",
            duracao: "12 minutos",
            nivel: "Avançado",
            exercicios: [
                "15 agachamento",
                "15 flexões", 
                "15 burpee",
                "15 mountain climber",
                "15 polichinelo",
                "15 jump squat",
                "15 stiff",
                "15 plank"
            ],
            series: "12 minutos",
            descanso: "0",
            imagem: "amrap"
        },
        {
            nome: "HIIT Iniciante",
            duracao: "15 minutos",
            nivel: "Iniciante",
            exercicios: [
                "30s march in place",
                "30s agach leve",
                "30s polichinelo lento",
                "30s lunges",
                "30s elev joelho",
                "30s alongamento",
                "30s cardio",
                "30s descanso"
            ],
            series: "8 rodadas",
            descanso: "30s entre rodadas",
            imagen: "beginner"
        },
        {
            nome: "HIIT intermediário",
            duracao: "20 minutos",
            nivel: "Intermediário",
            exercicios: [
                "40s agach + 20s descanso",
                "40s flexões + 20s descanso",
                "40s mountain climbers + 20s descanso",
                "40s lunges + 20s descanso",
                "40s jump rope (simulado) + 20s descanso",
                "40s plank + 20s descanso",
                "40s burpee mod + 20s descanso",
                "40s corr/k + 20s descanso"
            ],
            series: "8 rodadas",
            descanso: "20s entre rodadas",
            imagen: "inter"
        },
        {
            nome: "HIIT Cardio",
            duracao: "12 minutos",
            nivel: "Intermediário",
            exercicios: [
                "45s polichinelo",
                "15s descans",
                "45s box jump (sem caixa)",
                "15s descans",
                "45s burpee",
                "15s descans",
                "45s mountain climber",
                "15s descans",
                "45s jump squat",
                "15s descans"
            ],
            series: "6 rounds",
            descanso: "15s",
            imagen: "cardio"
        }
    ]
};