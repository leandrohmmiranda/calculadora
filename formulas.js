const formulasMatematica = [
    { nome: "Lei dos Senos", formula: "a/sin(A) ≈ b/sin(B) ≈ c/sin(C)" },
    { nome: "Lei dos Cossenos", formula: "c^2 ≈ a^2 + b^2 - 2*a*b*cos(C)" },
    { nome: "Área do Triângulo", formula: "Área = (1/2) * base * altura" },
    { nome: "Fórmula da velocidade média", formula: "v = Δx/Δt" },
    { nome: "Fórmula da aceleração média", formula: "a = Δv/Δt" },
    { nome: "Fórmula de Bhaskara (equação quadrática)", formula: "x = (-b ± √(b² - 4ac)) / (2a)" },
    { nome: "Fórmula da área do triângulo", formula: "A = (base * altura) / 2" },
    { nome: "Fórmula da área do retângulo", formula: "A = comprimento * largura" },
    { nome: "Fórmula da área do quadrado", formula: "A = lado * lado" },
    { nome: "Fórmula da área do trapézio", formula: "A = ((base maior + base menor) * altura) / 2" },
    { nome: "Fórmula da área do círculo", formula: "A = π * raio²" },
    { nome: "Fórmula da área da esfera", formula: "A = 4 * π * raio²" },
    { nome: "Fórmula da área do cilindro: A = 2πr(r + h)" },
    { nome: "Fórmula da área do cone", formula: "A = πr(r + g), onde g é a geratriz do cone" },
    { nome: "Fórmula da área da pirâmide", formula: "A = (Perímetro da base * apótema) / 2" },
    { nome: "Fórmula do perímetro do triângulo", formula: "P = lado1 + lado2 + lado3" },
    { nome: "Fórmula do perímetro do retângulo", formula: "P = 2 * (comprimento + largura)" },
    { nome: "Fórmula do perímetro do quadrado", formula: "P = 4 * lado" },
    { nome: "Fórmula do perímetro do círculo", formula: "P = 2 * π * raio" },
    { nome: "Fórmula do volume do cubo", formula: "V = lado³" },
    { nome: "Fórmula do volume do paralelepípedo", formula: "V = comprimento * largura * altura" },
    { nome: "Fórmula do volume do prisma", formula: "V = área da base * altura" },
    { nome: "Fórmula do volume da esfera", formula: "V = (4/3) * π * raio³" },
    { nome: "Fórmula do volume do cilindro", formula: "V = π * raio² * altura" },
    { nome: "Fórmula do volume do cone", formula: "V = (1/3) * π * raio² * altura" },
    { nome: "Fórmula da média aritmética", formula: "média = (soma dos valores) / (quantidade de valores)" },
    { nome: "Fórmula da média ponderada", formula: "média ponderada = (valor1 * peso1 + valor2 * peso2 + ...) / (peso1 + peso2 + ...)" },
    { nome: "Fórmula da média geométrica", formula: "média geométrica = √(valor1 * valor2 * ...)" },
    { nome: "Fórmula da média harmônica", formula: "média harmônica = quantidade de valores / (1/valor1 + 1/valor2 + ...)" },
    { nome: "Fórmula da progressão aritmética (termo geral)", formula: "an = a1 + (n - 1) * r, onde an é o termo geral, a1 é o primeiro termo, n é a posição do termo e r é a razão" },
    { nome: "Fórmula da soma dos termos de uma progressão aritmética", formula: "Sn = (n/2) * (a1 + an), onde Sn é a soma dos termos, n é a quantidade de termos, a1 é o primeiro termo e an é o último termo" },
    { nome: "Fórmula da progressão geométrica (termo geral)", formula: "an = a1 * r^(n - 1), onde an é o termo geral, a1 é o primeiro termo, n é a posição do termo e r é a razão" },
    { nome: "Fórmula da soma dos termos de uma progressão geométrica", formula: "Sn = (a1 * (r^n - 1)) / (r - 1), onde Sn é a soma dos termos, a1 é o primeiro termo, n é a quantidade de termos e r é a razão" },
    { nome: "Fórmula do teorema de Pitágoras", formula: "a² + b² = c², onde a, b e c são os lados de um triângulo retângulo" },
    { nome: "Fórmula do teorema de Tales", formula: "a/b = c/d, onde a, b, c e d são segmentos proporcionais" },
    { nome: "Fórmula da lei dos senos", formula: "a/sin(A) = b/sin(B) = c/sin(C), onde a, b e c são os lados de um triângulo e A, B e C são os ângulos opostos a esses lados, respectivamente" },
    { nome: "Fórmula da lei dos cossenos", formula: "c² = a² + b² - 2ab*cos(C), onde a, b e c são os lados de um triângulo e C é o ângulo oposto ao lado c" },
    { nome: "Fórmula da função linear", formula: "y = mx + b, onde m é o coeficiente angular e b é o coeficiente linear" },
    { nome: "Fórmula da função quadrática", formula: "y = ax² + bx + c, onde a, b e c são coeficientes constantes" },
    { nome: "Fórmula da função exponencial", formula: "y = a * b^x, onde a é a base, b é a base da exponencial e x é o expoente" },
    { nome: "Fórmula da função logarítmica", formula: "y = log base b (x), onde b é a base do logaritmo e x é o número logaritmado" },
    { nome: "Fórmula do binômio de Newton", formula: "(a + b)^n = C(n, 0) * a^n + C(n, 1) * a^(n-1) * b + C(n, 2) * a^(n-2) * b² + ... + C(n, n-1) * a * b^(n-1) + C(n, n) * b^n, onde C(n, k) é o coeficiente binomial" },
    { nome: "Fórmula da soma dos termos de uma série aritmética", formula: "Sn = (n/2) * (a1 + an), onde Sn é a soma dos termos, n é a quantidade de termos, a1 é o primeiro termo e an é o último termo" },
    { nome: "Fórmula da soma dos termos de uma série geométrica", formula: "Sn = (a1 * (r^n - 1)) / (r - 1), onde Sn é a soma dos termos, a1 é o primeiro termo, n é a quantidade de termos e r é a razão" },
    { nome: "Fórmula da derivada de uma função constante", formula: "d/dx (k) = 0, onde k é uma constante" },
    { nome: "Fórmula da derivada de uma função potência", formula: "d/dx (x^n) = n * x^(n-1), onde n é um expoente constante" },
    { nome: "Fórmula da derivada de uma função exponencial", formula: "d/dx (a^x) = ln(a) * a^x, onde a é a base da exponencial e ln(a) é o logaritmo natural de a" },
    { nome: "Fórmula da derivada da função logarítmica natural", formula: "d/dx (ln(x)) = 1/x" },
    { nome: "Fórmula da derivada da função logarítmica na base a", formula: "d/dx (log base a (x)) = 1 / (x * ln(a)), onde ln(a) é o logaritmo natural de a" },
    { nome: "Fórmula da derivada da função trigonométrica seno", formula: "d/dx (sin(x)) = cos(x)" },
    { nome: "Fórmula da derivada da função trigonométrica cosseno", formula: "d/dx (cos(x)) = -sin(x)" },
    { nome: "Fórmula da derivada da função trigonométrica tangente", formula: "d/dx (tan(x)) = sec²(x)" },
    { nome: "Fórmula da derivada da função trigonométrica cotangente", formula: "d/dx (cot(x)) = -csc²(x)" },
    { nome: "Fórmula da derivada da função trigonométrica secante", formula: "d/dx (sec(x)) = sec(x) * tan(x)" },
    { nome: "Fórmula da derivada da função trigonométrica cossecante", formula: "d/dx (csc(x)) = -csc(x) * cot(x)" },
    { nome: "Fórmula da regra do produto", formula: "d/dx (u * v) = u' * v + u * v', onde u e v são funções de x e u' e v' são as suas derivadas em relação a x" },
    { nome: "Fórmula da regra do quociente", formula: "d/dx (u / v) = (u' * v - u * v') / v², onde u e v são funções de x e u' e v' são as suas derivadas em relação a x" },
    { nome: "Fórmula da regra da cadeia", formula: "d/dx (f(g(x))) = f'(g(x)) * g'(x), onde f e g são funções de x e f' e g' são as suas derivadas em relação a x" },
    { nome: "Fórmula da integral da função constante", formula: "∫ k dx = kx + C, onde k é uma constante e C é a constante de integração" },
    { nome: "Fórmula da integral da função potência", formula: "∫ x^n dx = (x^(n+1)) / (n+1) + C, onde n é um expoente constante e C é a constante de integração" },
    { nome: "Fórmula da integral da função exponencial", formula: "∫ a^x dx = (a^x) / ln(a) + C, onde a é a base da exponencial, ln(a) é o logaritmo natural de a e C é a constante de integração" },
    { nome: "Fórmula da integral da função logarítmica natural", formula: "∫ ln(x) dx = x * (ln(x) - 1) + C" },
    { nome: "Fórmula da integral da função logarítmica na base a", formula: "∫ log base a (x) dx = (x * (ln(x) - ln(a))) / ln(a) + C, onde ln(a) é o logaritmo natural de a e C é a constante de integração" },
    { nome: "Fórmula da integral da função trigonométrica seno", formula: "∫ sin(x) dx = -cos(x) + C" },
    { nome: "Fórmula da integral da função trigonométrica cosseno", formula: "∫ cos(x) dx = sin(x) + C" },
    { nome: "Fórmula da integral da função trigonométrica tangente", formula: "∫ tan(x) dx = -ln(|cos(x)|) + C" },
    { nome: "Fórmula da integral da função trigonométrica cotangente", formula: "∫ cot(x) dx = ln(|sin(x)|) + C" },
    { nome: "Fórmula da integral da função trigonométrica secante", formula: "∫ sec(x) dx = ln(|sec(x) + tan(x)|) + C" },
    { nome: "Fórmula da integral da função trigonométrica cossecante", formula: "∫ csc(x) dx = ln(|csc(x) - cot(x)|) + C" },
    { nome: "Fórmula da integral por substituição", formula: "∫ f(g(x)) * g'(x) dx = ∫ f(u) du, onde u = g(x) e du = g'(x) dx" },
    { nome: "Fórmula da integral por partes", formula: "∫ u * v dx = u * v - ∫ v du, onde u e v são funções de x e du e dv são as suas derivadas em relação a x" },
    { nome: "Fórmula da área do setor circular", formula: "A = (θ/360°) * π * r², onde θ é a medida do ângulo central e r é o raio do setor circular" },
    { nome: "Fórmula do comprimento da circunferência", formula: "C = 2πr, onde r é o raio da circunferência" },
    { nome: "Fórmula da área da elipse", formula: "A = π * a * b, onde a e b são os semi-eixos da elipse" },
    { nome: "Fórmula da equação reduzida da reta", formula: "y = mx + n, onde m é o coeficiente angular e n é o coeficiente linear" },
    { nome: "Fórmula da distância entre dois pontos", formula: "d = √((x2 - x1)² + (y2 - y1)²), onde (x1, y1) e (x2, y2) são as coordenadas dos dois pontos" },
    { nome: "Fórmula do produto escalar de dois vetores", formula: "A · B = |A| * |B| * cos(θ), onde A e B são vetores, |A| e |B| são os seus módulos e θ é o ângulo entre eles" },
    { nome: "Fórmula do produto vetorial de dois vetores", formula: "A x B = |A| * |B| * sin(θ) * n, onde A e B são vetores, |A| e |B| são os seus módulos, θ é o ângulo entre eles e n é o vetor normal ao plano formado por A e B" },
];

const formulasFisica = [
    { nome: "Fórmula da velocidade média", formula: "v = Δx/Δt" },
    { nome: "Fórmula da aceleração média", formula: "a = Δv/Δt" },
    // Mecânica:
    { nome: "Fórmula da velocidade média", formula: "v = Δx/Δt" },
    { nome: "Fórmula da aceleração média", formula: "a = Δv/Δt" },
    { nome: "Fórmula da velocidade final", formula: "v = v₀ + at" },
    { nome: "Fórmula da posição final", formula: "x = x₀ + v₀t + (1/2)at²" },
    { nome: "Fórmula da velocidade em queda livre", formula: "v = gt" },
    { nome: "Fórmula da altura em queda livre", formula: "h = (1/2)gt²" },
    { nome: "Fórmula do trabalho realizado", formula: "W = F * d * cosθ" },
    { nome: "Fórmula da energia cinética", formula: "K = (1/2)mv²" },
    { nome: "Fórmula da energia potencial gravitacional", formula: "U = mgh" },
    { nome: "Fórmula da energia mecânica", formula: "E = K + U" },
    { nome: "Fórmula da força centrípeta", formula: "Fc = (mv²)/r" },
    { nome: "Fórmula da lei da gravitação universal", formula: "F = G * (m₁ * m₂)/r²" },
    { nome: "Fórmula da lei de Hooke", formula: "F = k * Δx" },
    { nome: "Fórmula do impulso", formula: "J = FΔt" },
    { nome: "Fórmula do momento linear", formula: "p = mv" },
    { nome: "Fórmula da lei da conservação do momento linear", formula: "m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'" },
    { nome: "Fórmula da lei de conservação da energia mecânica", formula: "K₁ + U₁ = K₂ + U₂" },
    { nome: "Fórmula do torque", formula: "τ = rFsinθ" },
    { nome: "Fórmula do momento de inércia", formula: "I = m * r²" },
    { nome: "Fórmula da lei de conservação do momento de inércia", formula: "I₁ω₁ = I₂ω₂" },
    // Termodinâmica:
    { nome: "Fórmula da variação de temperatura (escala Celsius)", formula: "ΔT = Tf - Ti" },
    { nome: "Fórmula da variação de temperatura (escala Kelvin)", formula: "ΔT = Tf - Ti" },
    { nome: "Fórmula da quantidade de calor", formula: "Q = mcΔT" },
    { nome: "Fórmula da capacidade térmica", formula: "C = Q/ΔT" },
    { nome: "Fórmula da lei zero da termodinâmica", formula: "Tf = Tc" },
    { nome: "Fórmula da lei de Boyle", formula: "P₁V₁ = P₂V₂" },
    { nome: "Fórmula da lei de Charles", formula: "V₁/T₁ = V₂/T₂" },
    { nome: "Fórmula da lei de Gay-Lussac", formula: "P₁/T₁ = P₂/T₂" },
    { nome: "Fórmula da lei dos gases ideais", formula: "PV = nRT" },
    { nome: "Fórmula da eficiência térmica", formula: "η = (W/Qh) * 100%" },
    // Óptica:
    { nome: "Fórmula da velocidade da luz", formula: "c = λν" },
    { nome: "Fórmula da frequência", formula: "ν = c/λ" },
    { nome: "Fórmula do aumento linear", formula: "A = hi/ho" },
    { nome: "Fórmula do aumento angular", formula: "A = θi/θo" },
    { nome: "Fórmula da distância focal", formula: "f = (R₁ * R₂)/(R₁ + R₂)" },
    { nome: "Fórmula da ampliação do espelho plano", formula: "A = -di/do" },
    { nome: "Fórmula da ampliação do espelho esférico", formula: "A = hi/ho = -di/do" },
    { nome: "Fórmula da lei de Snell", formula: "n₁sinθ₁ = n₂sinθ₂" },
    { nome: "Fórmula da vergência da lente", formula: "P = 1/f" },
    { nome: "Fórmula do aumento linear da lente", formula: "A = hi/ho = -di/do" },
    // Eletromagnetismo:
    { nome: "Fórmula da força elétrica", formula: "F = k * (|q₁| * |q₂|)/r²" },
    { nome: "Fórmula do campo elétrico", formula: "E = F/q" },
    { nome: "Fórmula do potencial elétrico", formula: "V = k * |q|/r" },
    { nome: "Fórmula do campo magnético", formula: "B = μ₀ * (I/2πr)" },
    { nome: "Fórmula da força magnética em um condutor retilíneo", formula: "F = BILsinθ" },
    { nome: "Fórmula da força magnética em uma carga em movimento", formula: "F = qvBsinθ" },
    { nome: "Fórmula da força magnética em uma partícula carregada em um campo elétrico", formula: "F = qEsinθ" },
    { nome: "Fórmula da força magnética em um condutor percorrido por corrente em um campo magnético", formula: "F = BILsinθ" },
    { nome: "Fórmula da lei de Faraday", formula: "ε = -dΦ/dt" },
    { nome: "Fórmula da lei de Ampère", formula: "B∫dl = μ₀ * Ienc" },
    // Ondas e Som:
    { nome: "Fórmula da velocidade de uma onda", formula: "v = λf" },
    { nome: "Fórmula da frequência de uma onda", formula: "f = v/λ" },
    { nome: "Fórmula do período de uma onda", formula: "T = 1/f" },
    { nome: "Fórmula da intensidade de uma onda", formula: "I = P/A" },
    { nome: "Fórmula da lei de Snell-Descartes", formula: "n₁sinθ₁ = n₂sinθ₂" },
    { nome: "Fórmula da frequência fundamental de uma corda vibrante", formula: "f₁ = v/2L" },
    { nome: "Fórmula da frequência de harmônicos em uma corda vibrante", formula: "fn = nf₁" },
    { nome: "Fórmula da velocidade do som", formula: "v = √(γRT)" },
    { nome: "Fórmula da frequência fundamental de um tubo sonoro aberto", formula: "f₁ = v/2L" },
    { nome: "Fórmula da frequência fundamental de um tubo sonoro fechado", formula: "f₁ = v/4L" },
    // Eletrostática:
    { nome: "Fórmula da lei de Coulomb", formula: "F = k * (|q₁| * |q₂|)/r²" },
    { nome: "Fórmula do campo elétrico", formula: "E = F/q" },
    { nome: "Fórmula do potencial elétrico", formula: "V = k * |q|/r" },
    { nome: "Fórmula da capacitância", formula: "C = Q/V" },
    { nome: "Fórmula da energia potencial elétrica", formula: "U = (1/2)CV²" },
    { nome: "Fórmula da energia elétrica armazenada em um capacitor", formula: "U = (1/2)QV" },
    { nome: "Fórmula da energia potencial elétrica de um sistema de cargas", formula: "U = k * (|q₁||q₂|)/r" },
    { nome: "Fórmula da lei de Gauss", formula: "Φ = E * A = Qenc/ε₀" },
    { nome: "Fórmula da força elétrica entre placas paralelas de um capacitor", formula: "F = EQ" },
    { nome: "Fórmula do campo elétrico produzido por um capacitor plano", formula: "E = σ/ε₀, onde σ é a densidade de carga superficial" },
    // Magnetismo:
    { nome: "Fórmula da força magnética em um condutor retilíneo", formula: "F = BILsinθ" },
    { nome: "Fórmula da força magnética em uma carga em movimento", formula: "F = qvBsinθ" },
    { nome: "Fórmula da força magnética em uma partícula carregada em um campo elétrico", formula: "F = qEsinθ" },
    { nome: "Fórmula da força magnética em um condutor percorrido por corrente em um campo magnético", formula: "F = BILsinθ" },
    { nome: "Fórmula do campo magnético produzido por um fio retilíneo", formula: "B = (μ₀ * I)/(2πr)" },
    { nome: "Fórmula do campo magnético no centro de uma espira circular", formula: "B = (μ₀ * I)/(2R)" },
    { nome: "Fórmula do campo magnético no centro de uma solenoide", formula: "B = μ₀ * nI" },
    { nome: "Fórmula da indução magnética em uma espira", formula: "Φ = BAcosθ" },
    { nome: "Fórmula da força eletromotriz induzida", formula: "ε = -dΦ/dt" },
    { nome: "Fórmula da lei de Ampère", formula: "B∫dl = μ₀ * Ienc" },
    // Óptica Geométrica:
    { nome: "Fórmula da velocidade da luz", formula: "c = 3.00 x 10^8 m/s" },
    { nome: "Fórmula da lei de Snell-Descartes", formula: "n₁sinθ₁ = n₂sinθ₂" },
    { nome: "Fórmula da lente delgada", formula: "1/f = (n-1) * (1/R₁ - 1/R₂)" },
];

const formulasQuimica = [
    { nome: "Fórmula da massa molar", formula: "M = m/n" },
    { nome: "Fórmula da concentração molar", formula: "C = n/V" },
    { nome: "Fórmula da massa molar", formula: "M = m/n" },
    { nome: "Fórmula da concentração molar", formula: "C = n/V" },
    { nome: "Fórmula da lei de Avogadro", formula: "V = k * n" },
    { nome: "Fórmula da lei dos gases ideais", formula: "PV = nRT" },
    { nome: "Fórmula do número de mols", formula: "n = m/M" },
    { nome: "Fórmula da reação de combustão", formula: "hidrocarboneto + O₂ → CO₂ + H₂O" },
    { nome: "Fórmula da reação de síntese", formula: "A + B → AB" },
    { nome: "Fórmula da reação de decomposição", formula: "AB → A + B" },
    { nome: "Fórmula da reação de neutralização", formula: "ácido + base → sal + água" },
    { nome: "Fórmula da reação de oxidação-redução", formula: "A + B → A⁺ + B⁻" },
    { nome: "Fórmula do pH", formula: "pH = -log[H⁺]" },
    { nome: "Fórmula da constante de equilíbrio", formula: "K = [C]^c [D]^d / [A]^a [B]^b" },
    { nome: "Fórmula da velocidade média de uma reação", formula: "v = Δ[A]/Δt" },
    { nome: "Fórmula da energia de ativação", formula: "Eₐ = R * T * ln(k/A)" },
    { nome: "Fórmula da velocidade da reação", formula: "v = k[A]^a[B]^b" },
    { nome: "Fórmula da constante de velocidade", formula: "k = Ae^(-Ea/RT)" },
    { nome: "Fórmula do equilíbrio químico", formula: "aA + bB ⇌ cC + dD" },
    { nome: "Fórmula da lei da velocidade de reação", formula: "r = k[A]^a[B]^b" },
    { nome: "Fórmula da pressão parcial", formula: "P₁ = X₁ * P total" },
    { nome: "Fórmula do produto de solubilidade", formula: "Ksp = [A]^a[B]^b" },
    { nome: "Fórmula da solubilidade", formula: "S = n/V" },
    { nome: "Fórmula da diluição", formula: "C₁V₁ = C₂V₂" },
    { nome: "Fórmula da constante de ionização", formula: "Ka = [H₃O⁺][A⁻]/[HA]" },
    { nome: "Fórmula do produto iônico da água", formula: "Kw = [H₃O⁺][OH⁻]" },
    { nome: "Fórmula da constante de acidez", formula: "Ka = [H₃O⁺][A⁻]/[HA]" },
    { nome: "Fórmula da constante de basicidade", formula: "Kb = [OH⁻][HB⁺]/[B]" },
    { nome: "Fórmula do pH de uma solução ácida", formula: "pH = -log[H₃O⁺]" },
    { nome: "Fórmula do pH de uma solução básica", formula: "pH = 14 - pOH" },
    { nome: "Fórmula da lei de Lambert-Beer", formula: "A = εbc" },
    { nome: "Fórmula do rendimento percentual", formula: "rendimento = (massa obtida experimentalmente / massa teórica) * 100%" },
    { nome: "Fórmula da estequiometria", formula: "aA + bB → cC + dD" },
    { nome: "Fórmula da lei de Raoult", formula: "P₁ = X₁" },
];

// Exportar as fórmulas como um objeto
const formulas = {
    matematica: formulasMatematica,
    fisica: formulasFisica,
    quimica: formulasQuimica,
};

// Exportar o objeto para ser usado em outros arquivos
module.exports = formulas;