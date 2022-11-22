const questions = []

function buildQuestion(question, rightAnswer, ...answers) {
  const isCorrect = (index, right) => {
    const mapRightAnswer = {
      0: 'a',
      1: 'b',
      2: 'c',
      3: 'd'
    }

    return mapRightAnswer[index] === right.toLowerCase()
  }
  const dto = {
    question,
    answers: answers.map((value, index) => ({
      value,
      isCorrect: isCorrect(index, rightAnswer)
    }))
  }

  questions.push(dto)
}

buildQuestion(
  'A qué escuela de pensamiento pertenece la siguiente afirmación: "el objetivo de los cuidados enfermeros consisten en restablecer el equilibrio interno de la persona y conservar la energía"',
  'A',
  'Escuela de Caring',
  'Escuela de los efectos deseados',
  'Escuela del ser humano humanitario',
  'Escuela de las necesidades'
)
buildQuestion(
  '¿Cuál de estos forma parte de los grupos de necesidades básicas?',
  'B',
  'Anatomía',
  'Fisiología',
  'Reacción',
  'Salud'
)
buildQuestion(
  'Respecto a los conceptos en términos de sistemas ¿cuál es el concepto en el que consiste en tener en cuenta la globalidad del problema y sus interacciones ?',
  'C',
  'Grado de definiciones de un sistema',
  'Concentración de un sistema',
  'Enfoque sistémico',
  'Grado de integración de un sistema'
)
buildQuestion(
  '¿Cuáles son las principales corrientes del pensamiento?',
  'D',
  'Paradigma de categorización',
  'Paradigma de integración',
  'Paradigma de transformación',
  'Todas son correctas'
)
buildQuestion(
  'Según la clasificación de Kerouac sobre las corrientes de pensamientos señale la correcta',
  'B',
  'Paradigma integración orientado hacia la persona',
  'Paradigma de la transformación orientado hacia la salud pública',
  'Paradigma de categorización orientada hacia la enfermedad y unida a la práctica médica',
  'Paradigma de transformación orientado hacia el mundo'
)
buildQuestion(
  '¿Cuál no es un requisito universal del cuidado según Dorothea Orem?',
  'D',
  'Mantenimiento de un soporte de aire suficiente',
  'Mantenimiento del equilibrio entre la la actividad y el reposo',
  'Mantenimiento de un aporte suficiente de alimentos',
  'Mantenimiento de la temperatura corporal'
)
buildQuestion(
  '"Para Henderson, todos los seres humanos tienen 14 necesidades básicas ¿cuál de estas no es una de ellas?"',
  'C',
  'Comunicarse con los demás',
  'Dormir y descansar',
  'Tener un buen nivel económico',
  'Elegir ropas adecuadas'
)
buildQuestion(
  'Con respecto al modelo teórico señale la correcta',
  'B',
  'Siempre procede de un modelo teórico básico',
  'Puede evolucionara teoria cuando consigue un respaldo empírico',
  'Intenta responder a preguntas concretas de la práctica asistencial',
  'Se desarrolan usando conceptos abstratos relacionados'
)
buildQuestion(
  '¿Cuál de la siguientes afirmaciones no es correcta a la hora de hablar de pensamientos?',
  'C',
  'Es disciplinado y reflexivo',
  'Se guía por códigos éticos',
  'Es un pensamientos no deliberado',
  'Todas son correctas'
)
buildQuestion(
  'Según la escuela de interaccion definida por Kerouac...',
  'B',
  'Los cuidados se orientan hacia la promoción de la salud ',
  'La enfermedad se considera una experiencia humana que puede permitir el crecimiento',
  'La enfermedad se trata como un cuidado personalizado',
  'La enfermedad desempeña un rol de agente facilitador, estimulador y motivador para el aprendizaje',
)

buildQuestion(
  'Cuál es un rol de enfermería que estableció Callista Roy',
  'D',
  'Rol extraño',
  'Rol de suministradora de recursos',
  'Rol de profesora o educadora',
  'Los roles los estableció E. Peplau'
)
buildQuestion(
  '¿Quién refleja el paradigma de la integración?',
  'A',
  'E. Peplau',
  'Callista Roy',
  'Jean Watson',
  'Florence  Nightingale'
)
buildQuestion(
  '¿En qué paradigma se considera a la persona como un todo formado por la suma de sus partes sin interacciones entre ellos?',
  'A',
  'Paradigma de la categorización',
  'Paradigma de la integración',
  'Paradigma de la transformación',
  'Paradigma de Kuhn'
)
buildQuestion(
  '¿Cómo podemos clasificar los sistemas?',
  'D',
  'Por su naturaleza ',
  'En qué paradigma se considera a la persona como un todo formado por la suma  de sus partes sin interracciones entre ellos?',
  'Por su dependencia',
  'Todas son correctas'
)

console.log('questions', JSON.stringify(questions))
