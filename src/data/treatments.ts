export interface TreatmentItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  targetPain: string;
  neuroBenefit: string;
  scienceDetail: string;
  idealFor: string;
}

export const TREATMENTS: TreatmentItem[] = [
  {
    id: 'harmonizacao-sutil',
    number: '01',
    title: 'Harmonização Facial Sutil & Arquitetura',
    subtitle: 'Restauração milimétrica de proporções áureas sem alteração de feições',
    targetPain: 'Rosto com aspecto cansado, perda do contorno mandibular e medo de ficar artificial.',
    neuroBenefit: 'O cérebro humano reconhece a simetria sutil como indicador imediato de vitalidade e descanso, mantendo 100% da sua identidade.',
    scienceDetail: 'Uso de ácido hialurônico com reologia calibrada para os pontos exatos de sustentação óssea (ângulos de sustentação de Maurício de Maio e vetores dinâmicos).',
    idealFor: 'Mulheres e homens a partir dos 28 anos que buscam rejuvenescimento sofisticado e invisível.'
  },
  {
    id: 'bioestimuladores',
    number: '02',
    title: 'Bioestimuladores de Colágeno Endógeno',
    subtitle: 'Radiesse, Sculptra e Elleva para banco de colágeno a longo prazo',
    targetPain: 'Pele frouxa, aspecto "murcho" ao sorrir e envelhecimento acelerado do terço médio e inferior.',
    neuroBenefit: 'Gatilho da prevenção inteligente: você interrompe a curva natural de perda de colágeno (1% ao ano) e reativa a proliferação de fibroblastos.',
    scienceDetail: 'Micropartículas de hidroxiapatita de cálcio ou ácido poli-L-lático que induzem neo-colagênese tipo I e III por até 24 meses.',
    idealFor: 'Flacidez tissular facial, pescoço, colo e mãos com textura desidratada.'
  },
  {
    id: 'toxina-botulinica',
    number: '03',
    title: 'Toxina Botulínica de Precisão (Botox)',
    subtitle: 'Modulação muscular estratégica para prevenção de vincos sem congelar expressões',
    targetPain: 'Rugas na testa, glabela (expressão de bravo ou preocupado) e pés de galinha.',
    neuroBenefit: 'Hipótese do feedback facial: ao relaxar os músculos do cenho (glabela), o cérebro reduz os sinais biológicos de estresse e você transmite serenidade e liderança.',
    scienceDetail: 'Mapeamento individualizado da mímica facial com dosimetria fracionada, evitando arqueamento artificial de sobrancelhas ou rigidez.',
    idealFor: 'Prevenção de rugas dinâmicas a partir dos 25 anos ou suavização de marcas já instaladas.'
  },
  {
    id: 'fios-sustentacao',
    number: '04',
    title: 'Fios de PDO & Tração Vetorial',
    subtitle: 'Efeito lifting mecânico instantâneo com regeneração dérmica contínua',
    targetPain: 'Queda do terço médio da face, formação do bigode chinês e linhas de marionete.',
    neuroBenefit: 'Alívio instantâneo da queixa de gravidade com efeito reposicionador imediato e sem necessidade de cirurgia ou repouso prolongado.',
    scienceDetail: 'Fios 100% reabsorvíveis de polidioxanona espiculados que tracionam a fáscia superficial e estimulam colágeno fibroso no trajeto do vetor.',
    idealFor: 'Pacientes com ptose cutânea leve a moderada que desejam sustentação sem volumização excessiva.'
  },
  {
    id: 'dermocosmeticos-roberta',
    number: '05',
    title: 'Protocolo Home Care & Sérum Roberta',
    subtitle: 'Cosmetologia de alta biocompatibilidade pré e pós-procedimento',
    targetPain: 'Sensibilidade após procedimentos, cicatrização lenta ou falta de manutenção diária.',
    neuroBenefit: 'Sensação de cuidado contínuo e proteção do investimento estético: garantia de que a pele permanecerá nutrida e viçosa todos os dias.',
    scienceDetail: 'Fórmula desenvolvida com ativos biocompatíveis, fatores de crescimento e antioxidantes de alta permeação cutânea.',
    idealFor: 'Manutenção em casa e preparação da barreira lipídica antes de injetáveis.'
  }
];

export interface QuizQuestion {
  id: number;
  question: string;
  subtext: string;
  options: {
    label: string;
    description: string;
    protocolTag: string;
  }[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Qual é a principal queixa que você nota ao se olhar no espelho hoje?',
    subtext: 'Identifique o sinal visual que mais afeta a sua autoconfiança no dia a dia.',
    options: [
      {
        label: 'Sensação de rosto pesado ou cansado',
        description: 'Olheiras profundas, bigode chinês marcado ou cantos da boca caídos.',
        protocolTag: 'Harmonização Sutil & Sustentação'
      },
      {
        label: 'Perda de firmeza e flacidez geral',
        description: 'A pele parece mais fina, com perda de sustentação ao sorrir ou inclinar a cabeça.',
        protocolTag: 'Bioestimulador de Colágeno'
      },
      {
        label: 'Vincos de expressão na testa e olhos',
        description: 'Linhas ao franzir a testa, rugas entre as sobrancelhas ou pés de galinha.',
        protocolTag: 'Toxina Botulínica Preventiva'
      },
      {
        label: 'Textura opaca, poros dilatados e manchas',
        description: 'A pele perdeu o brilho natural e o viço juvenil.',
        protocolTag: 'Revitalização & Cosmetologia Roberta'
      }
    ]
  },
  {
    id: 2,
    question: 'Qual é o seu maior objetivo com um tratamento estético?',
    subtext: 'Para calibrarmos o nível de intervenção e respeito à sua anatomia.',
    options: [
      {
        label: 'Naturalidade absoluta (ninguém perceber o que fiz)',
        description: 'Quero parecer descansada, jovial e elegante, sem que pareça procedimento.',
        protocolTag: 'Estética Invisível de Precisão'
      },
      {
        label: 'Prevenção e longevidade celular',
        description: 'Criar uma poupança de colágeno para envelhecer com firmeza daqui a 5 e 10 anos.',
        protocolTag: 'Gerenciamento de Envelhecimento'
      },
      {
        label: 'Correção de pontos específicos',
        description: 'Melhorar contorno de mandíbula, lábios ou sustentação de bochechas.',
        protocolTag: 'Refinamento Anatômico'
      }
    ]
  },
  {
    id: 3,
    question: 'Qual a sua faixa de idade atual?',
    subtext: 'A biologia dérmica e a taxa de perda de colágeno mudam a cada década.',
    options: [
      {
        label: '24 a 34 anos',
        description: 'Fase de prevenção ativa, primeiros sinais de linhas finas e glow.',
        protocolTag: 'Fase Preventiva & Viço'
      },
      {
        label: '35 a 45 anos',
        description: 'Fase de reposição estrutural, combate à reabsorção de compartimentos de gordura.',
        protocolTag: 'Fase Reestruturante'
      },
      {
        label: '46 anos ou mais',
        description: 'Fase de bioestímulo profundo, suporte ligamentar e firmeza intensiva.',
        protocolTag: 'Fase Lifting & Densidade'
      }
    ]
  }
];
