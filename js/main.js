/* ====================================================
   CHIP DATA — Conteúdo dos popups
==================================================== */
const CHIPS = {
  foco: {
    icon: '🎯',
    tag: '01 — Mente',
    title: 'FOCO MENTAL',
    body: `
      <p>O foco mental é a capacidade de manter a atenção direcionada a uma tarefa específica, eliminando distrações externas e internas. No contexto do treino físico, o foco é o diferencial entre uma sessão mediana e um treino de alta performance.</p>
      <h4>Como o CoreLab desenvolve seu foco</h4>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🧘</div>
        <div class="chip-benefit-text"><strong>Pré-Ativação:</strong> Ritual de 3 minutos antes de cada treino com visualização e definição de intenção para maximizar o engajamento mental.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">⏱️</div>
        <div class="chip-benefit-text"><strong>Blocos de Concentração:</strong> Sessões estruturadas em intervalos de foco máximo com pausas estratégicas para manter a qualidade da atenção.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">📱</div>
        <div class="chip-benefit-text"><strong>Modo Foco no App:</strong> Interface simplificada que elimina notificações e apresenta apenas o exercício atual durante o treino.</div>
      </div>
      <div class="chip-stat">
        <div class="chip-stat-num">34%</div>
        <div class="chip-stat-label">de aumento na performance com técnicas de foco aplicadas antes do treino</div>
      </div>`
  },
  mindfulness: {
    icon: '🌿',
    tag: '01 — Mente',
    title: 'MINDFULNESS',
    body: `
      <p>Mindfulness no treino significa estar completamente presente em cada movimento, sentindo a contração muscular, a respiração e o próprio corpo. Validada por mais de 200 estudos clínicos, reduz cortisol, melhora a conexão neuromuscular e acelera resultados.</p>
      <h4>Técnicas integradas ao CoreLab</h4>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🫁</div>
        <div class="chip-benefit-text"><strong>Escaneamento Corporal:</strong> Identificação de tensões e desequilíbrios antes de cada sessão para ajuste do plano em tempo real.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🔄</div>
        <div class="chip-benefit-text"><strong>Respiração Consciente:</strong> Sincronização da respiração com cada fase do movimento para maior eficiência e menor risco de lesão.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">💭</div>
        <div class="chip-benefit-text"><strong>Journaling Pós-Treino:</strong> Registro guiado de sensações e emoções para identificar padrões de performance ao longo do tempo.</div>
      </div>
      <div class="chip-stat">
        <div class="chip-stat-num">28%</div>
        <div class="chip-stat-label">de redução no cortisol após 8 semanas de prática de mindfulness no treino</div>
      </div>`
  },
  respiracao: {
    icon: '🫁',
    tag: '01 — Mente',
    title: 'RESPIRAÇÃO',
    body: `
      <p>A respiração é a única função autônoma do corpo que pode ser controlada voluntariamente — a ferramenta mais poderosa do atleta. Técnicas corretas aumentam VO2 máximo, melhoram a estabilidade do core e potencializam a entrega de oxigênio aos músculos.</p>
      <h4>Protocolos de respiração disponíveis</h4>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">💪</div>
        <div class="chip-benefit-text"><strong>Valsalva Modificada:</strong> Para exercícios de alta carga — criar pressão intra-abdominal segura para proteger a coluna e maximizar força.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🏃</div>
        <div class="chip-benefit-text"><strong>Ritmo 2:2 para Cardio:</strong> Expirar a cada 2 passos, inspirar a cada 2 — reduz impacto nas articulações e melhora eficiência aeróbica.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">😌</div>
        <div class="chip-benefit-text"><strong>Técnica 4-7-8:</strong> Inspirar 4s, segurar 7s, expirar 8s — ativa o sistema parassimpático e acelera a recuperação pós-treino.</div>
      </div>
      <div class="chip-stat">
        <div class="chip-stat-num">+18%</div>
        <div class="chip-stat-label">de melhora no VO2 máximo com protocolos de respiração estruturada em 12 semanas</div>
      </div>`
  },
  sono: {
    icon: '🌙',
    tag: '01 — Mente',
    title: 'SONO & RECUPERAÇÃO',
    body: `
      <p>O crescimento muscular acontece durante o sono. Durante as fases de sono profundo, o corpo libera 70-80% do hormônio do crescimento diário. Dormir mal por apenas 3 dias reduz a síntese proteica muscular em até 18%.</p>
      <h4>Monitoramento e otimização do sono</h4>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">📊</div>
        <div class="chip-benefit-text"><strong>Score de Prontidão:</strong> Índice diário calculado com base na qualidade do sono para determinar a intensidade ideal do treino do dia.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🌡️</div>
        <div class="chip-benefit-text"><strong>Higiene do Sono:</strong> Rotina personalizada pré-sono com alertas de desconexão digital e exercícios de relaxamento.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">⚡</div>
        <div class="chip-benefit-text"><strong>Power Nap Guiado:</strong> Sestas de 20 min com áudios guiados para recuperação entre sessões duplas.</div>
      </div>
      <div class="chip-stat">
        <div class="chip-stat-num">+23%</div>
        <div class="chip-stat-label">de ganho de força em atletas que otimizaram o sono de 6h para 8h em 4 semanas</div>
      </div>`
  },
  hipertrofia: {
    icon: '💪',
    tag: '02 — Força',
    title: 'HIPERTROFIA',
    body: `
      <p>Hipertrofia muscular é o aumento do volume das fibras musculares em resposta ao estresse mecânico do treino. O CoreLab aplica os três mecanismos primários de forma sistematizada e progressiva.</p>
      <h4>Metodologia CoreLab de Hipertrofia</h4>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">📈</div>
        <div class="chip-benefit-text"><strong>Sobrecarga Progressiva Inteligente:</strong> O algoritmo aumenta carga, volume ou frequência baseado nos seus logs de treino, garantindo progressão contínua sem overtraining.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🔄</div>
        <div class="chip-benefit-text"><strong>Periodização Ondulatória:</strong> Variação semanal de intensidade para maximizar adaptação e minimizar platôs.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">⏰</div>
        <div class="chip-benefit-text"><strong>Intervalos Otimizados:</strong> Tempo de descanso calculado por grupo muscular e intensidade do exercício.</div>
      </div>
      <div class="chip-stat">
        <div class="chip-stat-num">2.4×</div>
        <div class="chip-stat-label">mais ganho muscular com periodização estruturada vs. treino aleatório em 16 semanas</div>
      </div>`
  },
  'forca-maxima': {
    icon: '🏋️',
    tag: '02 — Força',
    title: 'FORÇA MÁXIMA',
    body: `
      <p>Força máxima é a capacidade de produzir o maior nível de força possível em uma única contração. Treinar força máxima recruta as unidades motoras de alto limiar e fortalece os padrões neurais.</p>
      <h4>Protocolos de Força Máxima</h4>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🎯</div>
        <div class="chip-benefit-text"><strong>Protocolo 5x5:</strong> 5 séries de 5 repetições em 85-90% do 1RM. Clássico e cientificamente validado para força bruta.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">📉</div>
        <div class="chip-benefit-text"><strong>Rampa até 1RM Estimado:</strong> Protocolo de aquecimento em rampa que chega ao peso máximo do dia de forma segura e progressiva.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🔬</div>
        <div class="chip-benefit-text"><strong>Velocidade de Execução:</strong> Monitoramento da velocidade para identificar quando a fadiga compromete a qualidade.</div>
      </div>
      <div class="chip-stat">
        <div class="chip-stat-num">+31%</div>
        <div class="chip-stat-label">de ganho de força em 12 semanas com protocolo de força máxima periodizado</div>
      </div>`
  },
  composicao: {
    icon: '⚖️',
    tag: '02 — Força',
    title: 'COMPOSIÇÃO CORPORAL',
    body: `
      <p>Composição corporal é a proporção entre massa muscular e gordura. Melhorar a composição requer combinação precisa de treino, nutrição e recuperação.</p>
      <h4>Análise e Otimização de Composição</h4>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">📊</div>
        <div class="chip-benefit-text"><strong>Rastreio Visual:</strong> Medidas corporais, percentual de gordura estimado e fotos de progresso em timeline visual.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🍽️</div>
        <div class="chip-benefit-text"><strong>Integração Nutricional:</strong> Cálculo automático de déficit ou superávit calórico baseado no objetivo — cutting, bulking ou recomposição.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🔄</div>
        <div class="chip-benefit-text"><strong>Ajuste Dinâmico:</strong> O plano se adapta mensalmente com base nos resultados reais — sem estagnação.</div>
      </div>
      <div class="chip-stat">
        <div class="chip-stat-num">-4.2kg</div>
        <div class="chip-stat-label">de gordura média em 12 semanas mantendo ou ganhando massa muscular com protocolo CoreLab</div>
      </div>`
  },
  hiit: {
    icon: '🔥',
    tag: '03 — Cardio',
    title: 'HIIT',
    body: `
      <p>High-Intensity Interval Training (HIIT) é o método cardiovascular mais eficiente. Intervalos de esforço máximo intercalados com recuperações criam adaptações superiores em 30-40% menos tempo.</p>
      <h4>Formatos HIIT disponíveis no CoreLab</h4>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">⚡</div>
        <div class="chip-benefit-text"><strong>Tabata (20s/10s):</strong> 8 rounds de 20 segundos de esforço máximo e 10 de descanso — 4 minutos que equivalem a 45 min de cardio moderado.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🏃</div>
        <div class="chip-benefit-text"><strong>HIIT 30/30:</strong> 30 segundos de sprint, 30 de caminhada — formato ideal para iniciantes e para dias de recuperação ativa.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🔄</div>
        <div class="chip-benefit-text"><strong>EMOM:</strong> Exercício a cada minuto — combina força e condicionamento de forma progressiva e mensurável.</div>
      </div>
      <div class="chip-stat">
        <div class="chip-stat-num">3×</div>
        <div class="chip-stat-label">mais eficiente que cardio moderado contínuo para perda de gordura por hora de treino</div>
      </div>`
  },
  resistencia: {
    icon: '🫀',
    tag: '03 — Cardio',
    title: 'RESISTÊNCIA',
    body: `
      <p>Resistência aeróbica aumenta o VO2 máximo, a densidade mitocondrial e a eficiência cardíaca — bases da saúde cardiovascular e longevidade.</p>
      <h4>Desenvolvimento de Resistência no CoreLab</h4>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">💓</div>
        <div class="chip-benefit-text"><strong>Treino por Zonas de FC:</strong> 5 zonas de frequência cardíaca com treinos específicos — do aeróbico leve (Z2) ao anaeróbico limiar (Z4).</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">📈</div>
        <div class="chip-benefit-text"><strong>Progressão de Volume:</strong> Aumento gradual de 10% por semana no volume aeróbico total para evitar overtraining.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🌬️</div>
        <div class="chip-benefit-text"><strong>LISS:</strong> Cardio contínuo de baixa intensidade — eficaz para recuperação ativa e base aeróbica sólida.</div>
      </div>
      <div class="chip-stat">
        <div class="chip-stat-num">+22%</div>
        <div class="chip-stat-label">de melhora no VO2 máximo em 8 semanas de treino de resistência estruturado</div>
      </div>`
  },
  queima: {
    icon: '🔥',
    tag: '03 — Cardio',
    title: 'QUEIMA DE GORDURA',
    body: `
      <p>A queima de gordura eficiente depende de criar e manter um déficit calórico sustentável enquanto preserva a massa muscular. O CoreLab combina protocolos de cardio estratégico com orientações nutricionais.</p>
      <h4>Estratégias de Queima de Gordura</h4>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🌅</div>
        <div class="chip-benefit-text"><strong>Cardio em Jejum:</strong> Protocolo matinal em estado de jejum de 8-12 horas para maximizar a mobilização de ácidos graxos livres.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🔄</div>
        <div class="chip-benefit-text"><strong>EPOC Maximizado:</strong> Treinos que mantêm seu corpo queimando gordura por até 24h após o treino.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🍽️</div>
        <div class="chip-benefit-text"><strong>Ciclagem de Carboidratos:</strong> Maior ingestão nos dias de treino pesado, menor nos leves — otimiza performance e composição.</div>
      </div>
      <div class="chip-stat">
        <div class="chip-stat-num">-1.2%</div>
        <div class="chip-stat-label">de gordura corporal por semana de forma sustentável com o protocolo CoreLab</div>
      </div>`
  },
  mobilidade: {
    icon: '🤸',
    tag: '04 — Flexibilidade',
    title: 'MOBILIDADE',
    body: `
      <p>Mobilidade é a capacidade de mover uma articulação ativamente por toda a sua amplitude de movimento. Combina força e flexibilidade para criar movimento funcional, seguro e eficiente.</p>
      <h4>Programa de Mobilidade CoreLab</h4>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🎯</div>
        <div class="chip-benefit-text"><strong>Avaliação FMS:</strong> Identifica limitações e desequilíbrios específicos para criar rotina personalizada de mobilidade.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">⏰</div>
        <div class="chip-benefit-text"><strong>Rotina de 10 min Diários:</strong> Protocolo mínimo eficaz para manutenção e melhora de mobilidade de forma progressiva.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🔄</div>
        <div class="chip-benefit-text"><strong>CARs:</strong> Rotações articulares controladas para manutenção da saúde das articulações e neuroplasticidade do movimento.</div>
      </div>
      <div class="chip-stat">
        <div class="chip-stat-num">-67%</div>
        <div class="chip-stat-label">de redução no risco de lesão em praticantes com programa regular de mobilidade</div>
      </div>`
  },
  alongamento: {
    icon: '🧘',
    tag: '04 — Flexibilidade',
    title: 'ALONGAMENTO',
    body: `
      <p>O alongamento correto, aplicado no momento e na intensidade certos, acelera a recuperação, reduz dores musculares tardias (DOMS) e melhora o recrutamento muscular nos treinos subsequentes.</p>
      <h4>Tipos de Alongamento no CoreLab</h4>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🌅</div>
        <div class="chip-benefit-text"><strong>Dinâmico Pré-Treino:</strong> Movimentos ativos que elevam a temperatura muscular — nunca estático antes de levantamento pesado.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🌙</div>
        <div class="chip-benefit-text"><strong>Estático Pós-Treino:</strong> Manutenção de 30-60 segundos por posição — reduz DOMS em até 40% quando aplicado imediatamente após.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🏥</div>
        <div class="chip-benefit-text"><strong>FNP:</strong> Técnica de contração-relaxamento para ganhos expressivos de amplitude — ideal para restrições graves.</div>
      </div>
      <div class="chip-stat">
        <div class="chip-stat-num">-40%</div>
        <div class="chip-stat-label">de dor muscular tardia com protocolo de alongamento estático pós-treino</div>
      </div>`
  },
  yoga: {
    icon: '🧘',
    tag: '04 — Flexibilidade',
    title: 'YOGA & PILATES',
    body: `
      <p>Yoga e Pilates são as práticas de movimento mais completas disponíveis — desenvolvem força, flexibilidade, controle corporal e respiração. Atletas como LeBron James e Cristiano Ronaldo praticam yoga regularmente.</p>
      <h4>Integração com o CoreLab</h4>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">💪</div>
        <div class="chip-benefit-text"><strong>Yoga para Atletas:</strong> Sequências para recuperação ativa, mobilidade de quadril e ativação de core.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🎯</div>
        <div class="chip-benefit-text"><strong>Pilates de Solo:</strong> Fortalece o core profundo — fundamental para execução segura de movimentos compostos pesados.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🌿</div>
        <div class="chip-benefit-text"><strong>Yin Yoga:</strong> Aulas de 45 min para dias de descanso — restaura o sistema nervoso e acelera a recuperação sistêmica.</div>
      </div>
      <div class="chip-stat">
        <div class="chip-stat-num">+26%</div>
        <div class="chip-stat-label">de melhora em força funcional em atletas que integraram yoga ao treino por 8 semanas</div>
      </div>`
  },
  sono2: {
    icon: '🌙',
    tag: '05 — Recuperação',
    title: 'SONO',
    body: `
      <p>O sono é o suplemento mais poderoso e gratuito disponível. Durante o sono profundo, o organismo produz GH, repara microlesões musculares e consolida memórias motoras.</p>
      <h4>Otimização do Sono no CoreLab</h4>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">📊</div>
        <div class="chip-benefit-text"><strong>Score de Qualidade:</strong> Registro diário de horário, duração e qualidade — correlacionado com a performance do treino.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🌡️</div>
        <div class="chip-benefit-text"><strong>Ambiente Ideal:</strong> Temperatura (18-19°C), blackout e protocolo de desconexão digital 1h antes de dormir.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">💊</div>
        <div class="chip-benefit-text"><strong>Suplementação Estratégica:</strong> Magnésio e melatonina baseados em evidências, sem dependência.</div>
      </div>
      <div class="chip-stat">
        <div class="chip-stat-num">+23%</div>
        <div class="chip-stat-label">de ganho de força em atletas que aumentaram o sono de 6h para 8h em 4 semanas</div>
      </div>`
  },
  nutricao: {
    icon: '🥗',
    tag: '05 — Recuperação',
    title: 'NUTRIÇÃO',
    body: `
      <p>A nutrição é responsável por 70-80% dos resultados de composição corporal. O CoreLab aplica periodização nutricional, timing de nutrientes e adequação calórica ao objetivo.</p>
      <h4>Nutrição Estratégica CoreLab</h4>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🍖</div>
        <div class="chip-benefit-text"><strong>Proteína como Prioridade:</strong> Meta de 1,6-2,2g/kg de peso corporal para maximizar síntese proteica e preservar massa muscular.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">⏰</div>
        <div class="chip-benefit-text"><strong>Nutrição Peritreinamento:</strong> Janela de carboidratos e proteínas pré e pós treino para maximizar performance e recuperação.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">📱</div>
        <div class="chip-benefit-text"><strong>Diário Alimentar:</strong> Registro simplificado de refeições com cálculo automático de macros e alertas de hidratação.</div>
      </div>
      <div class="chip-stat">
        <div class="chip-stat-num">+41%</div>
        <div class="chip-stat-label">de melhora nos resultados com periodização nutricional vs. dieta livre</div>
      </div>`
  },
  hidratacao: {
    icon: '💧',
    tag: '05 — Recuperação',
    title: 'HIDRATAÇÃO',
    body: `
      <p>A desidratação de apenas 2% do peso corporal reduz a performance física em 10-20%. A água regula temperatura, transporta nutrientes e é fundamental para toda reação bioquímica do metabolismo.</p>
      <h4>Hidratação Inteligente no CoreLab</h4>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">📊</div>
        <div class="chip-benefit-text"><strong>Meta Personalizada:</strong> Cálculo baseado em peso, temperatura, intensidade do treino e suor estimado — não a fórmula genérica de 2L/dia.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">⏰</div>
        <div class="chip-benefit-text"><strong>Lembretes Inteligentes:</strong> Notificações adaptadas ao seu cronograma — mais frequentes em dias de treino intenso.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">⚡</div>
        <div class="chip-benefit-text"><strong>Eletrólitos Estratégicos:</strong> Quando repor sódio, potássio e magnésio — fundamental em treinos acima de 60 minutos.</div>
      </div>
      <div class="chip-stat">
        <div class="chip-stat-num">+15%</div>
        <div class="chip-stat-label">de melhora na resistência com hidratação otimizada vs. beber somente quando com sede</div>
      </div>`
  },
  descanso: {
    icon: '🛋️',
    tag: '05 — Recuperação',
    title: 'DIAS DE DESCANSO',
    body: `
      <p>Dias de descanso não são dias desperdiçados — são onde a adaptação acontece. Sem períodos adequados de recuperação, o corpo entra em overtraining, resultando em queda de performance e aumento de lesões.</p>
      <h4>Estratégias de Recuperação no CoreLab</h4>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🚶</div>
        <div class="chip-benefit-text"><strong>Recuperação Ativa:</strong> Caminhadas leves 30-45 min, natação suave ou yoga restaurativo — mantém circulação sem adicionar estresse.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">🧊</div>
        <div class="chip-benefit-text"><strong>Crioterapia:</strong> Banho frio (10-15°C por 5 min) para acelerar remoção de metabólitos e reduzir inflamação muscular.</div>
      </div>
      <div class="chip-benefit">
        <div class="chip-benefit-icon">💆</div>
        <div class="chip-benefit-text"><strong>Foam Roller:</strong> 15 min pós-treino e em dias de descanso para liberação miofascial e redução de aderências musculares.</div>
      </div>
      <div class="chip-stat">
        <div class="chip-stat-num">2-3×</div>
        <div class="chip-stat-label">mais ganho muscular em programas que alternam estímulo e recuperação adequadamente</div>
      </div>`
  }
};

/* ====================================================
   CAROUSEL
==================================================== */
let cur = 0;
const total = 4;
let autoTimer;
const track = document.getElementById('cTrack');
const dots = [...document.querySelectorAll('.cdot')];

function goTo(i) {
  cur = (i + total) % total;
  track.style.transform = `translateX(-${cur * 100}%)`;
  dots.forEach((d, j) => d.classList.toggle('active', j === cur));
}

function startAuto() {
  autoTimer = setInterval(() => goTo(cur + 1), 5000);
}

function resetAuto() {
  clearInterval(autoTimer);
  startAuto();
}

document.getElementById('cNext').onclick = () => { goTo(cur + 1); resetAuto(); };
document.getElementById('cPrev').onclick = () => { goTo(cur - 1); resetAuto(); };
dots.forEach(d => d.addEventListener('click', () => { goTo(+d.dataset.i); resetAuto(); }));

let touchStartX = 0;
track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
track.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) { goTo(dx < 0 ? cur + 1 : cur - 1); resetAuto(); }
});

startAuto();

/* ====================================================
   NAVBAR SCROLL
==================================================== */
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', scrollY > 40);
});

/* ====================================================
   THEME TOGGLE
==================================================== */
let dark = true;
document.getElementById('themeBtn').onclick = () => {
  dark = !dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  document.getElementById('themeBtn').textContent = dark ? '🌙' : '☀️';
};

/* ====================================================
   LANGUAGE SWITCHER
==================================================== */
document.querySelectorAll('.lang-btn').forEach(b => b.onclick = () => {
  document.querySelectorAll('.lang-btn').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
});

/* ====================================================
   LOGIN MODAL
==================================================== */
const loginOverlay = document.getElementById('loginOverlay');

document.getElementById('loginBtn').onclick = () => {
  if (!document.getElementById('loginBtn').classList.contains('logged')) {
    loginOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

document.getElementById('loginClose').onclick = closeLogin;

loginOverlay.addEventListener('click', e => {
  if (e.target === loginOverlay) closeLogin();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeLogin(); closeChip(); }
});

function closeLogin() {
  loginOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('loginSubmit').onclick = () => {
  const email = document.getElementById('loginEmail').value;
  if (!email) return;
  const btn = document.getElementById('loginBtn');
  btn.classList.add('logged');
  document.getElementById('avatarEl').textContent = email.substring(0, 2).toUpperCase();
  closeLogin();
};

/* ====================================================
   CHIP POPUPS
==================================================== */
const chipOverlay = document.getElementById('chip-overlay');

document.querySelectorAll('.chip').forEach(c => c.onclick = () => {
  const d = CHIPS[c.dataset.chip];
  if (!d) return;
  document.getElementById('cpIcon').textContent = d.icon;
  document.getElementById('cpTag').textContent = d.tag;
  document.getElementById('cpTitle').textContent = d.title;
  document.getElementById('cpBody').innerHTML = d.body;
  chipOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
});

document.getElementById('cpClose').onclick = closeChip;

chipOverlay.addEventListener('click', e => {
  if (e.target === chipOverlay) closeChip();
});

function closeChip() {
  chipOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ====================================================
   EARLY ACCESS FORM
==================================================== */
document.getElementById('earlyForm').onsubmit = e => {
  e.preventDefault();
  const email = document.getElementById('earlyEmail').value;
  if (!email) return;
  document.getElementById('earlyForm').style.display = 'none';
  document.getElementById('success-msg').style.display = 'block';
};

/* ====================================================
   SCROLL REVEAL
==================================================== */
const ro = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('visible');
      ro.unobserve(en.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .reveal-l, .reveal-r').forEach(el => ro.observe(el));

/* ====================================================
   SPLASH TAG CYCLE
==================================================== */
const splashTags = [
  'Inicializando...',
  'Carregando módulos...',
  'Preparando seu treino...'
];
let tagIndex = 0;
const stagEl = document.getElementById('stag');
const splashInterval = setInterval(() => {
  tagIndex = (tagIndex + 1) % splashTags.length;
  stagEl.textContent = splashTags[tagIndex];
}, 900);
setTimeout(() => clearInterval(splashInterval), 2800);