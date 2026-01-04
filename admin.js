const alunos = [
  {
    nome: "Lucas Silva",
    curso: "Desenvolvimento Web",
    progresso: 75,
    boletim: [8, 9, 7, 10],
    certificados: ["HTML Básico", "CSS Avançado"],
    observacoes: "Ótimo desempenho em front-end."
  },
  {
    nome: "Ana Pereira",
    curso: "Marketing Digital",
    progresso: 90,
    boletim: [9, 10, 8, 9],
    certificados: ["SEO Avançado", "Google Ads"],
    observacoes: "Excelente participação prática."
  },
  {
    nome: "Carlos Oliveira",
    curso: "Design Gráfico",
    progresso: 60,
    boletim: [7, 6, 8, 9],
    certificados: ["Photoshop", "Illustrator"],
    observacoes: "Necessita reforçar teoria de cores."
  },
  {
    nome: "Mariana Souza",
    curso: "Inglês Básico",
    progresso: 80,
    boletim: [8, 7, 9, 8],
    certificados: ["Certificado Inicial"],
    observacoes: "Bom entendimento, melhorar conversação."
  },
];

// Preencher tabela de alunos
const tbody = document.querySelector("#alunosTable tbody");
alunos.forEach(a => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${a.nome}</td>
    <td>${a.curso}</td>
    <td>${a.progresso}%</td>
    <td>${a.boletim.join(", ")}</td>
    <td>${a.certificados.join(", ")}</td>
    <td>${a.observacoes}</td>
  `;
  tbody.appendChild(tr);
});

// Preencher observações individuais
const obsList = document.getElementById("observacoesList");
alunos.forEach(a => {
  const li = document.createElement("li");
  li.innerText = `${a.nome} (${a.curso}): ${a.observacoes}`;
  obsList.appendChild(li);
});

// Gráfico geral de progresso
const ctx = document.getElementById('graficoGeral').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: alunos.map(a => a.nome),
    datasets: [{
      label: 'Progresso (%)',
      data: alunos.map(a => a.progresso),
      backgroundColor: '#2563eb'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    },
    plugins: {
      legend: { display: false }
    }
  }
});
