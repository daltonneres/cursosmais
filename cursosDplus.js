const cursos = [
  {
    nome: "Desenvolvimento Web",
    progresso: 65,
    boletim: [8, 9, 7, 10],
    certificados: ["HTML Básico", "CSS Avançado"],
    metodos: ["Vídeo aulas", "PDFs", "Quizzes"],
    observacoes: "Aluno apresenta bom desempenho em lógica e front-end."
  },
  {
    nome: "Marketing Digital",
    progresso: 80,
    boletim: [9, 10, 8, 9],
    certificados: ["SEO Avançado", "Google Ads"],
    metodos: ["Webinars", "Artigos", "Testes"],
    observacoes: "Excelente participação em campanhas práticas."
  },
  {
    nome: "Design Gráfico",
    progresso: 50,
    boletim: [7, 6, 8, 9],
    certificados: ["Photoshop", "Illustrator"],
    metodos: ["Vídeos", "Exercícios práticos", "Projetos"],
    observacoes: "Aluno precisa reforçar teoria de cores e tipografia."
  },
  {
    nome: "Inglês Básico",
    progresso: 70,
    boletim: [8, 7, 9, 8],
    certificados: ["Certificado Inicial"],
    metodos: ["Aulas Online", "PDFs", "Quizzes"],
    observacoes: "Bom entendimento geral, precisa treinar conversação."
  },
];

function loginAluno() {
  const nome = document.getElementById("nomeAluno").value.trim();
  if (!nome) {
    alert("Digite seu nome para entrar");
    return;
  }

  const dashboard = document.getElementById("dashboard");
  dashboard.classList.remove("hidden");

  document.getElementById("alunoNome").innerText = nome;

  // Curso aleatório
  const curso = cursos[Math.floor(Math.random() * cursos.length)];

  // Progresso com Chart.js
  const ctx = document.getElementById('chartProgresso').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Concluído', 'Restante'],
      datasets: [{
        label: 'Progresso',
        data: [curso.progresso, 100 - curso.progresso],
        backgroundColor: ['#2563eb', '#e5e7eb'],
        borderWidth: 1
      }]
    },
    options: {
      cutout: '70%',
      plugins: {
        legend: { display: true, position: 'bottom' },
        tooltip: { enabled: true }
      }
    }
  });

  // Boletim
  const boletimEl = document.getElementById("boletimNotas");
  boletimEl.innerHTML = "";
  curso.boletim.forEach((nota, idx) => {
    const li = document.createElement("li");
    li.innerText = `Módulo ${idx + 1}: Nota ${nota}`;
    boletimEl.appendChild(li);
  });

  // Certificados
  const certsEl = document.getElementById("certificadosLista");
  certsEl.innerHTML = "";
  curso.certificados.forEach(cert => {
    const li = document.createElement("li");
    li.innerText = cert;
    certsEl.appendChild(li);
  });

  // Métodos
  const metodosEl = document.getElementById("metodosLista");
  metodosEl.innerHTML = "";
  curso.metodos.forEach(m => {
    const li = document.createElement("li");
    li.innerText = m;
    metodosEl.appendChild(li);
  });

  // Observações
  document.getElementById("observacoes").innerText = curso.observacoes;

  // Esconde login
  document.querySelector(".login-section").style.display = "none";
}
