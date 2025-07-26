// script.js COMPLETO - Malla Medicina UCE

const materias = [
  // PERÍODO 1
  { codigo: "BIO-011", nombre: "Biología General", periodo: 1, prerequisitos: [] },
  { codigo: "BIO-014", nombre: "Ciencia Ambiental", periodo: 1, prerequisitos: [] },
  { codigo: "HUM-070", nombre: "Filosofía I", periodo: 1, prerequisitos: [] },
  { codigo: "IDI-051", nombre: "Inglés Básico I", periodo: 1, prerequisitos: [] },
  { codigo: "LET-011", nombre: "Letras I", periodo: 1, prerequisitos: [] },
  { codigo: "MED-204", nombre: "Matemática para la Salud I", periodo: 1, prerequisitos: [] },
  { codigo: "OAC-001", nombre: "Orientación Universitaria", periodo: 1, prerequisitos: [] },
  { codigo: "QUI-011", nombre: "Química General", periodo: 1, prerequisitos: [] },
  { codigo: "SIS-011", nombre: "Informática I", periodo: 1, prerequisitos: [] },
  // PERÍODO 2
  { codigo: "BIO-013", nombre: "Biología General II", periodo: 2, prerequisitos: ["BIO-011"] },
  { codigo: "HUM-024", nombre: "Ciencias de la Conducta I", periodo: 2, prerequisitos: [] },
  { codigo: "LET-012", nombre: "Letras II", periodo: 2, prerequisitos: ["LET-011"] },
  { codigo: "MED-205", nombre: "Matemática para la Salud II", periodo: 2, prerequisitos: ["MED-204"] },
  { codigo: "MED-206", nombre: "Inglés para la Salud I", periodo: 2, prerequisitos: ["IDI-051"] },
  { codigo: "MED-EL1", nombre: "Electiva I", periodo: 2, prerequisitos: [] },
  { codigo: "QUI-012", nombre: "Química Inorgánica I", periodo: 2, prerequisitos: ["QUI-011"] },
  // PERÍODO 3
  { codigo: "FIS-011", nombre: "Física General", periodo: 3, prerequisitos: [] },
  { codigo: "HUM-025", nombre: "Ciencias de la Conducta II", periodo: 3, prerequisitos: ["HUM-024"] },
  { codigo: "MED-207", nombre: "Inglés para la Salud II", periodo: 3, prerequisitos: ["MED-206"] },
  { codigo: "MED-304", nombre: "Ciencias Sociales y Salud I", periodo: 3, prerequisitos: [] },
  { codigo: "MED-395", nombre: "Estadística para la Salud", periodo: 3, prerequisitos: ["MED-205"] },
  { codigo: "MED-EL2", nombre: "Electiva II", periodo: 3, prerequisitos: [] },
  { codigo: "QUI-051", nombre: "Química Orgánica I", periodo: 3, prerequisitos: ["QUI-011", "QUI-012"] },
  { codigo: "TIC-014", nombre: "Tecnología en Salud", periodo: 3, prerequisitos: ["SIS-011"] },
  // PERÍODO 4
  { codigo: "FIS-103", nombre: "Biofísica", periodo: 4, prerequisitos: ["FIS-011"] },
  { codigo: "MED-100", nombre: "Intro. a la Fisiología", periodo: 4, prerequisitos: ["BIO-013"] },
  { codigo: "MED-208", nombre: "Inglés para la Salud III", periodo: 4, prerequisitos: ["MED-207"] },
  { codigo: "MED-209", nombre: "Intro. a Anatomía y Embriología", periodo: 4, prerequisitos: ["BIO-013"] },
  { codigo: "MED-210", nombre: "Intro. a la Investigación en Salud", periodo: 4, prerequisitos: ["TIC-014"] },
  { codigo: "MED-305", nombre: "Ciencias Sociales y Salud II", periodo: 4, prerequisitos: ["MED-304"] },
  { codigo: "MED-EL3", nombre: "Electiva III", periodo: 4, prerequisitos: [] },
  { codigo: "QUI-052", nombre: "Química Orgánica II", periodo: 4, prerequisitos: ["QUI-011", "QUI-012", "QUI-051"] },

  // PERÍODOS 5 AL 16 COMPLETOS
  { codigo: "MED-031", nombre: "Genética Médica I", periodo: 5, prerequisitos: [] },
  { codigo: "MED-061", nombre: "Histología General", periodo: 5, prerequisitos: [] },
  { codigo: "MED-091", nombre: "Bioquímica I", periodo: 5, prerequisitos: [] },
  { codigo: "MED-211", nombre: "Anatomía y Embriología I", periodo: 5, prerequisitos: [] },
  { codigo: "MED-213", nombre: "Habilidades Clínicas I", periodo: 5, prerequisitos: [] },
  { codigo: "MED-257", nombre: "Fisiología Humana I", periodo: 5, prerequisitos: [] },

  { codigo: "MED-092", nombre: "Bioquímica II", periodo: 6, prerequisitos: ["MED-091"] },
  { codigo: "MED-214", nombre: "Anatomía y Embriología II", periodo: 6, prerequisitos: ["MED-211"] },
  { codigo: "MED-215", nombre: "Microbiología y Parasitología", periodo: 6, prerequisitos: [] },
  { codigo: "MED-216", nombre: "Introducción a la Inmunología", periodo: 6, prerequisitos: [] },
  { codigo: "MED-232", nombre: "Habilidades Clínicas II", periodo: 6, prerequisitos: ["MED-213"] },
  { codigo: "MED-258", nombre: "Fisiología Humana II", periodo: 6, prerequisitos: ["MED-257"] },

  { codigo: "MED-217", nombre: "Neurociencias", periodo: 7, prerequisitos: ["MED-214"] },
  { codigo: "MED-218", nombre: "Epidemiología, Bioestadística e Investigación", periodo: 7, prerequisitos: [] },
  { codigo: "MED-219", nombre: "Principios de Patología Humana", periodo: 7, prerequisitos: ["MED-061"] },
  { codigo: "MED-223", nombre: "Farmacología y Toxicología", periodo: 7, prerequisitos: ["MED-091", "MED-258"] },
  { codigo: "MED-224", nombre: "Habilidades Clínicas III", periodo: 7, prerequisitos: ["MED-232"] },
  { codigo: "MED-259", nombre: "Fisiología Humana III", periodo: 7, prerequisitos: ["MED-258"] },

  { codigo: "MED-081", nombre: "Historia de la Medicina", periodo: 8, prerequisitos: [] },
  { codigo: "MED-121", nombre: "Psicología Médica I", periodo: 8, prerequisitos: [] },
  { codigo: "MED-225", nombre: "Patología y Terapéutica I", periodo: 8, prerequisitos: ["MED-211", "MED-214", "MED-217", "MED-219"] },
  { codigo: "MED-226", nombre: "Salud Pública y Medicina Preventiva", periodo: 8, prerequisitos: ["MED-215", "MED-218"] },
  { codigo: "MED-227", nombre: "Bioética Médica y Deontología", periodo: 8, prerequisitos: [] },
  { codigo: "MED-228", nombre: "Propedéutica Clínica y Semiología Médica", periodo: 8, prerequisitos: ["MED-224"] },
  { codigo: "MED-229", nombre: "Soporte Básico de Vida", periodo: 8, prerequisitos: [] },

  { codigo: "DER-200", nombre: "Educación Constitucional", periodo: 9, prerequisitos: [] },
  { codigo: "MED-151", nombre: "Nutrición", periodo: 9, prerequisitos: [] },
  { codigo: "MED-230", nombre: "Patología y Terapéutica II", periodo: 9, prerequisitos: ["MED-225"] },
  { codigo: "MED-233", nombre: "Administración de Servicios de Salud", periodo: 9, prerequisitos: ["MED-226"] },
  { codigo: "MED-234", nombre: "Medicina Legal y Forense", periodo: 9, prerequisitos: ["MED-227"] },
  { codigo: "MED-290", nombre: "Medicina Tropical e Internacional", periodo: 9, prerequisitos: ["MED-218", "MED-226"] },
  { codigo: "MED-351", nombre: "Semiología Quirúrgica", periodo: 9, prerequisitos: ["MED-228"] },

  { codigo: "MED-235", nombre: "Curso Integrado de Ciencias Básicas", periodo: 10, prerequisitos: ["MED-230"] },

  { codigo: "MED-236", nombre: "Salud Mental I", periodo: 11, prerequisitos: [] },
  { codigo: "MED-237", nombre: "Medicina Interna I", periodo: 11, prerequisitos: ["MED-235"] },
  { codigo: "MED-238", nombre: "Quirúrgico I", periodo: 11, prerequisitos: ["MED-235"] },
  { codigo: "MED-371", nombre: "Dermatología y Venerología", periodo: 11, prerequisitos: ["MED-235"] },
  { codigo: "MED-451", nombre: "Cardiología", periodo: 11, prerequisitos: ["MED-235"] },
  { codigo: "MED-502", nombre: "Anestesiología y Reanimación", periodo: 11, prerequisitos: ["MED-235"] },

  { codigo: "MED-239", nombre: "Medicina Interna II", periodo: 12, prerequisitos: ["MED-237"] },
  { codigo: "MED-240", nombre: "Salud Mental II", periodo: 12, prerequisitos: ["MED-236"] },
  { codigo: "MED-244", nombre: "Quirúrgico II", periodo: 12, prerequisitos: ["MED-238"] },
  { codigo: "MED-245", nombre: "Pediatría I", periodo: 12, prerequisitos: ["MED-237", "MED-451"] },
  { codigo: "MED-248", nombre: "Ortopedia y Traumatología", periodo: 12, prerequisitos: ["MED-238"] },
  { codigo: "MED-621", nombre: "Diagnóstico por Imágenes", periodo: 12, prerequisitos: ["MED-237"] },
  { codigo: "MED-731", nombre: "Geriatría", periodo: 12, prerequisitos: [] },
  { codigo: "MED-861", nombre: "Medicina Familiar", periodo: 12, prerequisitos: [] },

  { codigo: "MED-246", nombre: "Pediatría II", periodo: 13, prerequisitos: ["MED-245"] },
  { codigo: "MED-247", nombre: "Gineco-Obstetricia", periodo: 13, prerequisitos: ["MED-238", "MED-239"] },
  { codigo: "MED-249", nombre: "Neuroquirúrgico", periodo: 13, prerequisitos: ["MED-239", "MED-244", "MED-621"] },
  { codigo: "MED-250", nombre: "Medicina de Emergencias y Desastres", periodo: 13, prerequisitos: ["MED-238", "MED-239", "MED-451"] },
  { codigo: "MED-251", nombre: "Gerencia en Servicios de Salud", periodo: 13, prerequisitos: [] },
  { codigo: "MED-252", nombre: "Medicina Física y Rehabilitación", periodo: 13, prerequisitos: [] },
  { codigo: "MED-253", nombre: "Medicina Crítica", periodo: 13, prerequisitos: ["MED-239", "MED-621"] },
  { codigo: "MED-254", nombre: "Seminario de Investigación", periodo: 13, prerequisitos: [] },
  { codigo: "MED-521", nombre: "Neumopatología", periodo: 13, prerequisitos: ["MED-239", "MED-621"] },

  { codigo: "MED-633", nombre: "Rotación Cirugía General", periodo: 14, prerequisitos: [] },
  { codigo: "MED-634", nombre: "Rotación Medicina Interna", periodo: 14, prerequisitos: [] },

  { codigo: "MED-652", nombre: "Rotación Gineco-Obstetricia", periodo: 15, prerequisitos: [] },
  { codigo: "MED-662", nombre: "Rotación Pediatría", periodo: 15, prerequisitos: [] },

  { codigo: "MED-672", nombre: "Rotación Medicina Social", periodo: 16, prerequisitos: [] },
  { codigo: "MED-673", nombre: "Rotación Salud Mental", periodo: 16, prerequisitos: [] },
  { codigo: "MED-711", nombre: "Tesis", periodo: 16, prerequisitos: [] }
];

const materiasPorPeriodo = {};
materias.forEach((mat) => {
  if (!materiasPorPeriodo[mat.periodo]) materiasPorPeriodo[mat.periodo] = [];
  materiasPorPeriodo[mat.periodo].push(mat);
});

const aprobadas = new Set();

function renderMalla() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";

  for (const periodo in materiasPorPeriodo) {
    const div = document.createElement("div");
    div.className = "periodo";
    div.innerHTML = `<h2>Periodo ${periodo}</h2>`;

    materiasPorPeriodo[periodo].forEach((mat) => {
      const bloqueada = !mat.prerequisitos.every((pr) => aprobadas.has(pr));
      const materiaDiv = document.createElement("div");
      materiaDiv.className = `materia ${bloqueada ? "bloqueada" : ""}`;
      materiaDiv.textContent = `${mat.nombre} (${mat.codigo})`;

      if (!bloqueada) {
        materiaDiv.onclick = () => {
          if (aprobadas.has(mat.codigo)) {
            aprobadas.delete(mat.codigo);
          } else {
            aprobadas.add(mat.codigo);
          }
          renderMalla();
        };
      }

      if (aprobadas.has(mat.codigo)) materiaDiv.classList.add("aprobada");
      div.appendChild(materiaDiv);
    });

    malla.appendChild(div);
  }
}

renderMalla();


