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
  'Cuál de estos, forma parte de los grupos de necesidades básicas',
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
  'El modelo de Peplau se centra en...',
  'A',
  'La importancia de la relación entre enfermera-paciente',
  'La importancia de la relación entre enfermería y cuidado',
  'La importancia entre la relación sociedad-salua',
  'Todas son correctas'
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
  '¿De qué habla Virginia Henderson?',
  'C',
  'Cuatro fases de interacción enfermera paciente',
  'Ocho requisitos de autocuidado universales',
  'Catorces necesidades',
  'Tres tipos de estímulos provenientes del entorno'
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
  'Para Henderson, todos los seres humanos tienen 14 necesidades básicas ¿cuál de estas no es una de ellas?',
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
  'Puede evolucionara teoría cuando consigue un respaldo empírico',
  'Intenta responder a preguntas concretas de la práctica asistencial',
  'Se desarrollan usando conceptos abstractos relacionados'
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
  'Según la escuela de interacción definida por Kerouac...',
  'B',
  'Los cuidados se orientan hacia la promoción de la salud ',
  'La enfermedad se considera una experiencia humana que puede permitir el crecimiento',
  'La enfermedad se trata como un cuidado personalizado',
  'La enfermedad desempeña un rol de agente facilitador, estimulador y motivador para el aprendizaje'
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
  'Quién refleja el paradigma de la integración',
  'A',
  'E. Peplau',
  'Callista Roy',
  'Jean Watson',
  'Florence Nightingale'
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
  'En qué paradigma se considera a la persona como un todo formado por la suma de sus partes sin interacciones entre ellos?',
  'Por su dependencia',
  'Todas son correctas'
)
buildQuestion(
  '¿Qué es un modelo?',
  'A',
  'Concepción de una disciplina que guía la práctica, la investigación, la docencia, y la gestión',
  'Conocimiento especulativo que intenta explicar o predecir un fenómeno',
  'Perspectiva de un conjunto de una disciplina (conceptos centrales)',
  'Corriente de pensamiento que influye en los saberes y las disciplinas (experiencias, valores creencias y prácticas)'
)
buildQuestion(
  '¿A quién corresponde la teoría de la adaptación?',
  'D',
  'Madeleine Leininger',
  'Dorothea Orem',
  'Jean Watson',
  'Ninguna es correcta'
)
buildQuestion(
  '¿En qué campo de estudio se encuentra el cuidado?',
  'D',
  'Persona',
  'Entorno',
  'Salud',
  'Enfermería'
)
buildQuestion(
  '¿Que modelo no forma parte del paradigma de la integración?',
  'D',
  'Teoría del cuidado transpersonal',
  'Teoría de la adaptación',
  'Teoría de las las relaciones interpersonales',
  'Teoría de las necesidades'
)
buildQuestion(
  '¿Que modelo y paradigma corresponde con Watson?',
  'B',
  'Modelo de roles, paradigma de integración',
  'Modelo de transpersonalidad paradigma de transformación',
  'Modelo de transpersonalidad paradigma de integración',
  'Modelo de autocuidados paradigma de transformación'
)
buildQuestion(
  '¿Que autor clasifica los trabajos los trabajos teóricos enfermeros atendiendo a estas tendencias de pensamiento ecologista, exitencial, cósmico y sociologico?',
  'A',
  'Paul Beck',
  'Alberdi et al',
  'Ann Marriner',
  'Florence Nightingale'
)
buildQuestion(
  'Según la pirámide de Maslow ¿qué necesidad es prioritario frente al resto?',
  'B',
  'La autorrealización',
  'Seguridad',
  'De amor y pertenencia',
  'De estima'
)
buildQuestion(
  'El modelo de Peplau se centra en...',
  'B',
  'Salud como: ausencia de la enfermedad-valore religiosos-supervivencia',
  'Salud como supervivencia-valor sobrenatural-valor religioso-ausencia de enfermedad-armonía, equilibrio',
  'Salud como: supervivencia-valor religiosos-valor sobrenatural',
  'Salud como: armonía, buen estado-valor religioso-ausencia de la enfermedad-valor sobrenatural-supervivencia'
)
buildQuestion(
  'La epistemología tiene como objetivo de estudio',
  'B',
  'La ciencia',
  'El conocimiento científico',
  'La persona',
  'La vida'
)
buildQuestion(
  '¿Cuáles son los cinco elementos esenciales de un entorno saludable según Florence Nightingale?',
  'B',
  'Aislamiento, salubridad, frialdad, desinfección, esterilización',
  'Aire puro,agua pura,desagües eficaces,limpieza o higiene y luz adecuada',
  'Aislamiento luz tenue, frialdad, ambiente',
  'Ninguna de las anteriores'
)
buildQuestion(
  '¿Cuál de estas no es una escuela de pensamientos?',
  'C',
  'Escuela de la integración',
  'Escuela de caring',
  'Escuela de nursing',
  'Escuela de los efectos deseados'
)
buildQuestion(
  '¿Cuál de la siguientes mujeres defendía que todo individuo tiene 14 necesidades básicas que debe cubrir de forma independiente?',
  'C',
  'Nightingale',
  'Orem',
  'Henderson',
  'Peplau'
)
buildQuestion(
  'Indique cuál de los modelos de las siguientes autoras no pertenece a la paradigma de la integración ',
  'C',
  'Peplau',
  'Orem',
  'Watson',
  'Roy'
)
buildQuestion(
  'En el paradigma de la transformación se entiende como...',
  'C',
  'Que es un todo componente biológicos, psicológicos, sociológicos y culturales están interrelacionados',
  'Es un todo formado por la suma de sus partes sin interrelaciones entre ellos',
  'Ser único cuyas múltiples dimensiones forman una unidad que es indispensable de su universo',
  'Compuesto físico,emocional,intelectual,y espiritual,con capacidad y responsabilidad para cambiar su situación de salud'
)
buildQuestion(
  'Respecto a la necesidad de autorrealizarse, las conductas descritas por Maslow para las personas para aspirara autorrealizarse son...',
  'D',
  'Aceptación de los hechos',
  'Resolución de problemas ',
  'Creatividad',
  'Todas son correctas'
)
buildQuestion(
  '¿Cuál de estas no es una necesidad básica según Henderson?',
  'D',
  'Dormir',
  'Vestirse',
  'Comunicarse con los demás',
  'Todas pertenecen a las necesidades básicas'
)
buildQuestion(
  '¿Cómo se denomina en el contexto de la dimension cultural?',
  'A',
  'Escuela de los efectos deseados',
  'Escuela de interacción',
  'Escuela de la promoción de la salud',
  'Escuela del ser humano',
  'humano unita'
)
buildQuestion(
  'El conocimiento científico es...',
  'D',
  'Sistemático, acumulado, y no progresivo',
  'Particular, no comprobable, no progresivo',
  'Acumulativo, acrítico, asistemático',
  'Progresivo, sistemático, universal'
)
buildQuestion(
  '¿Quién fundó la enfermería transcultural?',
  'C',
  'Peplau',
  'Lydia Hall',
  'Leininger',
  'Orem'
)
buildQuestion(
  'La capacidad de la enfermera para captar la percepción del paciente sobre su situación',
  'C',
  'Conciencia cultural',
  'Conocimiento cultural',
  'Sensibilidad cultural',
  'Habilidad cultural'
)
buildQuestion(
  '¿Cuál no es un concepto metaparadigma?',
  'D',
  'Persona',
  'Entorno',
  'Cuidados',
  'Ejercicio físico'
)
buildQuestion(
  '¿Cuáles de los siguientes componentes o aspectos de la comunicación no es correcta?',
  'D',
  'Orientación facial',
  'Gestos',
  'Miradas',
  'Clasismo'
)
buildQuestion(
  'La disciplina enfermera cumple 3 características, señala la errónea',
  'B',
  'Conocimientos sistemáticos',
  'Basada en actividades rutinarias',
  'Utiliza el método científico',
  'Utiliza lenguaje científico'
)
buildQuestion(
  'Según Mehrabian, ¿cuál es el porcentaje de la palabras que se captan de un mensaje?',
  'C',
  '38%',
  '55%',
  '7%',
  '13%'
)
buildQuestion(
  'Este paradigma define a la persona como ser único cuyas múltiples dimensiones forman una unidad, que es indisociable de su universo con el que tiene una relación de coexistencia',
  'D',
  'Paradigma de la integración ',
  'Paradigma de categorización',
  'Paradigma universal',
  'Paradigma de la transformación'
)
buildQuestion(
  'Relación la siguiente afirmación con una de las escuelas de pensamiento: el cuidado está centrado en al atención del cuidado humano y transpersonal que busca alcanzar la armonía entre psique cuerpo y espíritu',
  'B',
  'Escuela de las necesidades',
  'Escuela de caring',
  'Escuela de lo efectos deseados',
  'Escuela del ser humano unitario'
)
buildQuestion(
  '¿Cuál de estas clasificaciones es correcta según su alcance teórico?',
  'C',
  'Filosofía, prácticas y modelos conceptuales',
  'Teoría de la enfermería paradigma y tendencia humanista',
  'Filosofía, modelos conceptuales y teorías de la enfermería',
  'Tendencia sociológica, práctica y metaparadigma'
)
buildQuestion(
  '¿Cuál de las siguientes necesidades propuestas no es una de la 14 necesidades básicas mencionadas por virginia Henderson para el cuidado de la salud?',
  'B',
  'Comunicarse con los emas',
  'Entenderse espiritualmente',
  'Moverse y mantener una postura adecuada ',
  'Participar en actividades creativas'
)
buildQuestion(
  'La base de la teoría de Watson es la práctica enfermera centrada en ',
  'B',
  '10 necesidades fundamentales',
  '10 factores de cuidados',
  '4 modelos de adaptación',
  '21 problemas de la enfermedad'
)
buildQuestion(
  'La concepción de persona basada en la idea de que un ser único de manera inseparable a su cultura es desarrolla en el modelo de cuidado de...',
  'B',
  'J. Watson',
  'M. Leininger',
  'F. Nightingale',
  'D. Orem'
)
buildQuestion(
  '¿Cuál de los siguientes modelos no es un modelo de adaptación en el modelo de adaptación de C. Roy?',
  'D',
  'Modo fisiológico y físico',
  'Modo de autoconcepto',
  'Modo de función de rol',
  'Modo independiente'
)
buildQuestion(
  'Dentro de la escuela de pensamiento e la interacción, se incluye el modelo de desarrollo por:',
  'C',
  'Callista roy',
  'Virginia Henderson',
  'Hildegard Peplau',
  'D. Orem'
)
buildQuestion(
  'Según H Peplau, el rol adoptado por la enfermera durante la fase de identificación del problema del paciente, en el que esta le trata con cortesía puesto que se trata de un desconocido, se refiere al rol ',
  'B',
  'Docente',
  'Extraño',
  'Líder',
  'Persona de recurso'
)
buildQuestion(
  'La autora que mostró sus escritos su interés por el control del medio ambiente así como la importancia de la influencia de la naturaleza en la salud de las personas es:',
  'C',
  'V. Henderson',
  'H. Peplau',
  'F. Nightingale',
  'D. Orem'
)
buildQuestion(
  'Según keroac y colaborador dentro del paradigma de la categorización y desde la orientación a la enfermedad la persona:',
  'C',
  'Posee los componentes físicos, intelectual, emocional y espiritual',
  'Orienta los cuidados según su prioridad',
  'No tiene participación en sus cuidados ',
  'Tiene la responsabilidad de cambiar su situación'
)
buildQuestion(
  'Para Florence Nightingale, la enfermedad correspondía con:',
  'A',
  'Un proceso reparador',
  'Una dolencia, vulnerabilidad',
  'Lo que puede valorar físicamente y espiritualmente',
  'Defecto congénito o adquirido'
)

console.log('questions', JSON.stringify(questions))
