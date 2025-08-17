import React, { useState } from 'react';

// Main App component
const App = () => {
  // State to store the currently selected ailment category
  const [selectedCategory, setSelectedCategory] = useState('');
  // State to store the specific ailment selected within the category
  const [selectedAilment, setSelectedAilment] = useState('');
  // State to store the generated strengthening text
  const [strengtheningText, setStrengtheningText] = useState('');
  // New state to control showing the strengthening view
  const [showStrengtheningView, setShowStrengtheningView] = useState(false);

  // Define categories with their correct labels for buttons, ordered as they appear in the image
  const categories = [
    { value: 'fisico', label: 'Físico' },
    { value: 'mental', label: 'Mental' },
    { value: 'emocional', label: 'Emocional' },
    { value: 'psiquico', label: 'Psíquico' },
    { value: 'psicologico', label: 'Psicológico' },
    { value: 'espiritual', label: 'Espiritual' }, // Intercambiado con General
    { value: 'general', label: 'General' },       // Intercambiado con Espiritual
  ];

  // Define specific ailments and their corresponding strengthening texts for each category
  const ailmentsData = {
    fisico: {
      title: 'Padecimientos Físicos',
      options: [
        { value: 'dolor_cabeza', label: 'Dolor de Cabeza / Migraña' },
        { value: 'dolor_espalda', label: 'Dolor de Espalda / Cuello' },
        { value: 'problemas_digestivos', label: 'Problemas Digestivos' },
        { value: 'fatiga_cronica', label: 'Fatiga Crónica / Agotamiento' },
        { value: 'problemas_articulares', label: 'Problemas Articulares / Musculares' },
        { value: 'bajar_de_peso', label: 'Bajar de Peso' },
        { value: 'sistema_inmune', label: 'Sistema Inmune Débil' },
        { value: 'alergias_sensibilidades', label: 'Alergias / Sensibilidades' },
        { value: 'insomnio_sueño', label: 'Insomnio / Problemas de Sueño' },
        { value: 'presion_arterial', label: 'Presión Arterial (Alta/Baja)' },
        { value: 'circulacion', label: 'Problemas de Circulación' },
        { value: 'hormonales', label: 'Desequilibrios Hormonales' },
        { value: 'nerviosismo_temblores', label: 'Nerviosismo / Temblores' },
        { value: 'piel', label: 'Problemas de Piel' },
      ],
      strengthenings: {
        dolor_cabeza: `
          Elimino y disipo toda debilidad de dolores de cabeza, migrañas y cefaleas,
          tanto tensionales, vasculares, sinusales u hormonales. Borro el efecto acumulado
          de golpes, contracturas cervicales, estrés visual, deshidratación, sensibilidad a la luz/sonido
          y cualquier detonante conocido o desconocido. Fortalezco la región craneal, cervical,
          la mandíbula y el cuero cabelludo. Fortalezco su interconexión con el sistema nervioso central,
          para una relajación profunda y libre de presión.
          Fortalezco la microcirculación cerebral, la eliminación de toxinas a nivel neuronal,
          la desinflamación de tejidos y el drenaje linfático de la cabeza y cuello.
          Aumento la oxigenación, la energía y la hidratación en la cabeza,
          liberando tensiones físicas, mentales (sobrepensar, perfeccionismo) y emocionales
          (ira, frustración) que contribuyan al dolor. Fortalezco el flujo energético ascendente
          y descendente para balancear la presión.
        `,
        dolor_espalda: `
          Elimino y disipo debilidades de dolor, rigidez e inflamación en espalda (alta, media, baja),
          cervicales y lumbares, incluyendo hernias discales, protrusiones, ciática, lumbalgia,
          tortícolis, esguinces y pinzamientos nerviosos. Borro el impacto de malas posturas,
          sobrecargas físicas, movimientos repetitivos, traumas antiguos (caídas, golpes)
          y estrés emocional somatizado en la espalda y cuello (cargas, responsabilidades).
          Fortalezco la columna vertebral en su totalidad, sus discos intervertebrales,
          nervios, ligamentos y músculos para una alineación óptima, flexibilidad,
          libertad de movimiento y soporte. Aumento el flujo linfático y sanguíneo en toda la zona,
          la regeneración de tejidos, la hidratación de los discos, y la fuerza de soporte
          para una postura fuerte, erguida y sin esfuerzo. Elimino la tensión acumulada y la debilidad
          en la fascia muscular.
        `,
        problemas_digestivos: `
          Elimino y disipo toda debilidad en el sistema digestivo: acidez, indigestión,
          hinchazón, gases, estreñimiento crónico, diarrea, síndrome de colon irritable (SCI),
          gastritis, reflujo y úlceras. Borro el efecto acumulado de malas dietas, estrés crónico,
          intolerancias alimentarias (lactosa, gluten), infecciones parasitarias o bacterianas,
          desequilibrios de la flora intestinal (disbiosis) y emociones reprimidas (ansiedad, miedo)
          que afectan la digestión. Fortalezco la digestión óptima de proteínas, grasas y carbohidratos,
          la absorción de nutrientes, la eliminación de toxinas y la regeneración celular
          del intestino y estómago. Fortalezco la conexión mente-intestino, el nervio vago
          y la microbiota para una función digestiva armoniosa, libre de molestias e inflamación.
        `,
        fatiga_cronica: `
          Elimino y disipo cualquier debilidad de fatiga crónica, agotamiento extremo,
          cansancio inexplicable, debilidad física y mental persistente, y falta de vitalidad.
          Borro el efecto acumulado de estrés prolongado, falta de sueño reparador,
          disfunción adrenal y tiroidea, intoxicación celular, deficiencias nutricionales (vitaminas, minerales),
          inflamación sistémica o infecciones latentes. Fortalezco mi energía vital a nivel mitocondrial,
          la resistencia celular al estrés oxidativo, el descanso profundo y reparador,
          y la regeneración de todos los sistemas (endocrino, nervioso, inmune)
          para una vitalidad plena, sostenida y una recuperación rápida. Aumento la claridad mental
          y la motivación para la acción.
        `,
        problemas_articulares: `
          Elimino y disipo toda debilidad de problemas articulares y musculares:
          dolor en rodillas, hombros, caderas, cuello, manos, rigidez, inflamación (artritis),
          desgaste (artrosis), tendinitis, bursitis, desgarros musculares, calambres y debilidad en ligamentos.
          Borro el efecto acumulado de lesiones deportivas, traumatismos, desgaste natural,
          inflamación crónica, acidificación del cuerpo y falta de lubricación articular.
          Fortalezco las articulaciones, cartílagos, tendones y músculos para una movilidad
          sin dolor, flexibilidad, regeneración óptima de tejidos y una función articular suave.
          Aumento la producción de líquido sinovial, la eliminación de desechos metabólicos
          en las articulaciones y la fuerza para el soporte y la estabilidad.
        `,
        bajar_de_peso: `
          Elimino y disipo toda debilidad que impida la pérdida de peso saludable
          y el mantenimiento de un peso óptimo: metabolismo lento, retención de líquidos,
          ansiedad por la comida, antojos incontrolables, desequilibrios hormonales (tiroides, insulina),
          y acumulación de toxinas en tejidos grasos. Borro el efecto acumulado de dietas fallidas,
          frustración, imágenes corporales negativas, estrés emocional o genético que contribuya al sobrepeso,
          y la programación de almacenamiento de grasa. Fortalezco mi sistema linfático, digestivo,
          endocrino y mi inteligencia física para quemar grasa de forma eficiente y natural,
          eliminar excesos y regenerar células. Fortalezco la relación sana con los alimentos,
          el control del apetito, la saciedad, y la capacidad del cuerpo para autorregular su peso
          de forma permanente y sin esfuerzo.
        `,
        sistema_inmune: `
          Elimino y disipo toda debilidad del sistema inmune: bajas defensas,
          susceptibilidad a infecciones (virales, bacterianas, fúngicas, parasitarias),
          autoinmunidad, inflamación crónica, alergias exacerbadas y fatiga inmunológica.
          Borro el efecto acumulado de estrés prolongado, toxinas ambientales,
          deficiencias nutricionales, exposición a patógenos o memorias de enfermedad y debilidad
          en el ADN. Fortalezco la respuesta inmune innata y adaptativa,
          la eliminación eficaz de patógenos, la diferenciación celular
          y la capacidad de autorregulación del cuerpo a nivel celular,
          energético y espiritual, para una protección robusta, equilibrada y fuerte ante cualquier amenaza.
        `,
        alergias_sensibilidades: `
          Elimino y disipo toda debilidad a alergias, sensibilidades alimentarias (gluten, lácteos, etc.),
          ambientales (polen, polvo), químicas o a cualquier sustancia externa que provoque reacción.
          Borro las reacciones exageradas del sistema inmune, la congestión (nasal, ocular),
          la inflamación (piel, vías respiratorias) y la hipersensibilidad.
          Borro el efecto acumulado de sobrecarga tóxica, exposición repetida a alérgenos,
          memorias de reacciones adversas o debilidades genéticas.
          Fortalezco el sistema respiratorio, digestivo y la piel para estar fuerte,
          neutral y resiliente ante cualquier sustancia, sin hipersensibilidad,
          irritación ni respuestas desproporcionadas. Aumento la capacidad del cuerpo
          para desintoxicar alérgenos.
        `,
        insomnio_sueño: `
          Elimino y disipo toda debilidad de insomnio, dificultad para conciliar el sueño,
          despertares nocturnos, sueño no reparador, pesadillas recurrentes,
          bruxismo y somniloquio. Borro el efecto acumulado de estrés crónico,
          preocupación excesiva, exceso de actividad mental (mente ruidosa),
          dolor físico, desequilibrios energéticos, patrones de sueño irregulares,
          y la exposición a pantallas antes de dormir. Fortalezco la relajación profunda
          a nivel neuronal y muscular, el equilibrio de las ondas cerebrales (alfa, delta),
          el ciclo circadiano, la producción de melatonina, la regeneración nocturna
          y un sueño reparador y profundo, que permita al cuerpo y la mente recargarse
          completamente y despertar con vitalidad.
        `,
        presion_arterial: `
          Elimino y disipo toda debilidad de presión arterial alta (hipertensión) o baja (hipotensión):
          fluctuaciones repentinas, mareos, palpitaciones, arritmias y falta de energía.
          Borro el efecto acumulado de estrés emocional, rigidez arterial,
          problemas renales, desequilibrios de líquidos o electrolitos, obstrucciones en arterias,
          y debilidades genéticas. Fortalezco el corazón, los vasos sanguíneos
          (arterias, venas, capilares), los riñones, las glándulas suprarrenales
          y el sistema nervioso autónomo para regular la presión arterial de forma óptima,
          estable y saludable, sin esfuerzo ni fluctuaciones. Aumento la elasticidad vascular
          y el flujo sanguíneo adecuado.
        `,
        circulacion: `
          Elimino y disipo toda debilidad de circulación sanguínea y linfática:
          piernas cansadas, varices, arañitas, hinchazón (edemas), pies/manos frías,
          mala oxigenación celular, calambres y acumulación de toxinas.
          Borro el efecto acumulado de sedentarismo, mala alimentación,
          debilidad venosa, capilar o linfática, obstrucciones, coágulos
          y bloqueos energéticos. Fortalezco el sistema cardiovascular y linfático,
          la elasticidad de vasos, la eliminación de toxinas a nivel celular,
          y el flujo energético óptimo en todo el cuerpo, para una vitalidad,
          desintoxicación completa y una sensación de ligereza.
        `,
        hormonales: `
          Elimino y disipo toda debilidad de desequilibrios hormonales:
          problemas tiroideos (hipo/hipertiroidismo), menstruales (síndrome premenstrual,
          irregularidades, dolor), menopausia (sofocos, cambios de humor), andropausia,
          acné hormonal, cambios de humor drásticos y problemas de fertilidad.
          Borro el efecto acumulado de estrés crónico, toxinas endocrinas disruptoras,
          disfunción glandular (tiroides, adrenales, ovarios/testículos, hipotálamo, pituitaria)
          o memorias de desequilibrio hormonal. Fortalezco el sistema endocrino en su totalidad,
          la función hormonal, y la comunicación entre todas las glándulas para un equilibrio
          perfecto, armonía y bienestar hormonal, impactando positivamente el estado de ánimo y la vitalidad.
        `,
        nerviosismo_temblores: `
          Elimino y disipo toda debilidad de nerviosismo, temblores (esenciales, parkinsonianos),
          tics nerviosos, espasmos, inquietud interna, agitación y falta de control motor.
          Borro el efecto acumulado de estrés crónico, traumas nerviosos (físicos o emocionales),
          ansiedad, desequilibrios neurológicos (ej. neurotransmisores), deficiencias nutricionales
          o debilidades en el sistema neuromuscular. Fortalezco la calma interna,
          la relajación profunda del sistema nervioso central y periférico, el equilibrio
          de la actividad neuronal y el control muscular coordinado y preciso,
          para una sensación de paz, estabilidad y control total del cuerpo.
        `,
        piel: `
          Elimino y disipo toda debilidad de problemas de piel:
          acné, eccema, psoriasis, dermatitis, rosácea, erupciones, sequedad extrema,
          picazón persistente, cicatrices, manchas y envejecimiento prematuro.
          Borro el efecto acumulado de toxinas internas (hígado, intestino) y externas (contaminación),
          estrés, alergias, problemas digestivos o memorias de afecciones cutáneas.
          Fortalezco la piel a nivel celular para su capacidad de regeneración, hidratación profunda,
          elasticidad, eliminación de toxinas, y su función de barrera protectora.
          Para que esté sana, radiante, protegida y refleje el bienestar interior,
          con una apariencia rejuvenecida y vital.
        `,
      },
    },
    mental: {
      title: 'Padecimientos Mentales',
      options: [
        { value: 'falta_concentracion', label: 'Falta de Concentración' },
        { value: 'problemas_memoria', label: 'Problemas de Memoria' },
        { value: 'confusion_mental', label: 'Confusión Mental' },
        { value: 'sobrepensar', label: 'Sobrepensar / Mente Ruidosa' },
        { value: 'bloqueo_creativo', label: 'Bloqueo Creativo' },
        { value: 'indecision', label: 'Indecisión / Duda' },
        { value: 'negatividad', label: 'Patrones de Pensamiento Negativo' },
        { value: 'rigidez_mental', label: 'Rigidez Mental / Obsesiones' },
        { value: 'procrastinacion_mental', label: 'Procrastinación (Mental)' },
      ],
      strengthenings: {
        falta_concentracion: `
          Elimino y disipo la debilidad de falta de concentración, dispersión mental,
          distracción constante y dificultad para mantener el enfoque en tareas o conversaciones.
          Borro el efecto acumulado de sobrecarga de información, estrés mental crónico,
          fatiga cerebral, déficits de atención, y debilidades neuronales en la corteza prefrontal.
          Fortalezco el enfoque sostenido, la claridad mental, la agilidad cognitiva
          y la capacidad de procesar información de manera rápida, eficiente y sin interrupciones.
          Aumento la atención plena, la presencia en el momento y la capacidad de filtrar
          distracciones externas e internas.
        `,
        problemas_memoria: `
          Elimino y disipo toda debilidad de problemas de memoria: olvidos frecuentes,
          dificultad para recordar nombres, fechas, información reciente o pasada,
          y la sensación de "tenerlo en la punta de la lengua". Borro el efecto acumulado
          de estrés crónico, fatiga mental, desnutrición cerebral (falta de B12, omega-3),
          deterioro cognitivo, neuroinflamación y el impacto de emociones (ansiedad, depresión)
          que bloquean el recuerdo. Fortalezco una memoria aguda y duradera,
          la retención de información, la facilidad y precisión en la recuperación de recuerdos,
          y la salud neuronal del hipocampo y otras regiones cerebrales para una función cerebral óptima.
        `,
        confusion_mental: `
          Elimino y disipo toda debilidad de confusión mental, pensamiento nublado,
          neblina cerebral, dificultad para tomar decisiones claras y sensación de desorientación.
          Borro el efecto acumulado de sobrecarga emocional, indecisión crónica,
          dudas persistentes, influencias energéticas externas que nublan la mente,
          y falta de claridad interna o propósito. Fortalezco la claridad mental,
          la lucidez, la percepción nítida, la agilidad para resolver problemas
          y la facilidad para tomar decisiones con certeza, rapidez y alineación
          con mi verdad y mis objetivos, eliminando la ambigüedad.
        `,
        sobrepensar: `
          Elimino y disipo la debilidad del sobrepensamiento excesivo, la mente ruidosa,
          los pensamientos repetitivos, las cavilaciones, la rumia mental incesante
          y la incapacidad de desconectar. Borro el efecto acumulado de ansiedad,
          miedos, inseguridades, traumas, perfeccionismo o la necesidad de control
          que alimentan este ciclo mental. Fortalezco el silencio mental,
          la calma interna, la capacidad de soltar cualquier pensamiento que no
          contribuya a mi bienestar y paz interior, permitiendo una mente tranquila,
          serena y enfocada en lo constructivo.
        `,
        bloqueo_creativo: `
          Elimino y disipo toda debilidad de bloqueo creativo, falta de ideas,
          estancamiento, dificultad para innovar y miedo a la expresión original.
          Borro el efecto acumulado de perfeccionismo, miedo al fracaso,
          autocrítica excesiva, juicio externo, falta de inspiración
          o la presión por ser original. Fortalezco la fluidez creativa,
          la originalidad, la imaginación ilimitada, la intuición artística
          y la capacidad de manifestar nuevas ideas y soluciones con facilidad,
          permitiendo que la creatividad fluya libremente y sin obstáculos,
          conectando con la fuente de la inspiración.
        `,
        indecision: `
          Elimino y disipo toda debilidad de indecisión, dudas constantes,
          dificultad para elegir, miedo a equivocarse o arrepentirse.
          Borro el efecto acumulado de experiencias pasadas de malas decisiones,
          errores percibidos, arrepentimiento, o la influencia de opiniones ajenas
          que generan incertidumbre. Fortalezco la certeza interna, la claridad,
          la intuición, la confianza en mis decisiones y la capacidad de tomar
          elecciones firmes, rápidas y correctas para mi mayor bien y el de todos,
          con total seguridad y sin vacilación.
        `,
        negatividad: `
          Elimino y disipo toda debilidad de patrones de pensamiento negativo:
          pesimismo, autocrítica constante, victimismo, quejas, catastrofismo
          y la tendencia a ver lo peor. Borro el efecto acumulado de programaciones negativas
          (familiares, sociales), entornos tóxicos, experiencias de frustración,
          decepción o desesperanza. Fortalezco el pensamiento positivo, el optimismo,
          la gratitud, la autocompasión y una perspectiva constructiva y empoderadora,
          transformando cualquier negatividad en luz, aprendizaje y oportunidad.
        `,
        rigidez_mental: `
          Elimino y disipo toda debilidad de rigidez mental, pensamiento inflexible,
          dogmatismo, terquedad, obsesiones y resistencia al cambio.
          Borro el efecto acumulado de traumas, miedo a lo desconocido,
          miedo a perder el control, patrones aprendidos de inflexibilidad
          o la necesidad de tener siempre la razón. Fortalezco la flexibilidad mental,
          la apertura a nuevas ideas y perspectivas, la adaptabilidad
          y la capacidad de soltar el control para fluir con la vida
          y sus constantes cambios, con facilidad, gracia y sabiduría.
        `,
        procrastinacion_mental: `
          Elimino y disipo toda debilidad de procrastinación mental:
          posponer tareas intelectuales, evitar decisiones importantes, pereza mental,
          falta de iniciativa y dilación. Borro el efecto acumulado de falta de motivación,
          miedo al esfuerzo, sobrecarga mental, perfeccionismo que paraliza,
          o la sensación de no ser suficiente. Fortalezco la acción, el enfoque,
          la disciplina, la energía mental para iniciar y completar tareas con facilidad
          y eficiencia, transformando la inercia en impulso, productividad y logro de objetivos.
        `,
      },
    },
    emocional: {
      title: 'Padecimientos Emocionales',
      options: [
        { value: 'tristeza_depresion', label: 'Tristeza / Depresión' },
        { value: 'ansiedad_estres', label: 'Ansiedad / Estrés' },
        { value: 'enojo_frustracion', label: 'Enojo / Frustración' },
        { value: 'miedo_fobia', label: 'Miedo / Fobia' },
        { value: 'baja_autoestima', label: 'Baja Autoestima' },
        { value: 'buenas_relaciones', label: 'Buenas Relaciones' },
        { value: 'abundancia', label: 'Abundancia' },
        { value: 'exito', label: 'Éxito' },
        { value: 'para_los_hijos', label: 'Para los Hijos' },
        { value: 'nuevos_comienzos', label: 'Nuevos Comienzos' },
        { value: 'pareja_trabajo', label: 'Pareja: Éxito en el Trabajo' },
        { value: 'culpa_verguenza', label: 'Culpa / Vergüenza' },
        { value: 'resentimiento_perdon', label: 'Resentimiento / Falta de Perdón' },
        { value: 'soledad', label: 'Soledad / Aislamiento' },
        { value: 'apego_dependencia', label: 'Apego / Dependencia Emocional' },
      ],
      strengthenings: {
        tristeza_depresion: `
          Elimino y disipo toda debilidad de tristeza, melancolía, pena profunda,
          duelo no resuelto y cualquier tendencia a la depresión. Borro el efecto acumulado
          de desánimo histórico, desilusiones, decepciones, pérdidas (de personas, trabajos, sueños),
          y memorias ancestrales o colectivas de dolor y desesperanza.
          Fortalezco la alegría genuina, el optimismo, el entusiasmo, la vitalidad emocional
          y la capacidad de soltar cargas emocionales pasadas para vivir en gratitud y plenitud,
          con una conexión profunda con la felicidad incondicional y la luz interior.
        `,
        ansiedad_estres: `
          Elimino y disipo toda debilidad de ansiedad, estrés crónico, preocupación excesiva,
          inquietud, agitación, nerviosismo y ataques de pánico. Borro el efecto acumulado
          de experiencias traumáticas, inseguridades profundas, presiones autoimpuestas o externas,
          la necesidad de control y el miedo al futuro. Fortalezco la calma interior,
          la relajación profunda del sistema nervioso (simpático y parasimpático),
          la confianza en mi capacidad de manejar cualquier situación con serenidad
          y la certeza de que todo está bien, reduciendo la urgencia, la tensión y el pensamiento catastrófico.
        `,
        enojo_frustracion: `
          Elimino y disipo toda debilidad de enojo, ira, resentimiento, frustración,
          irritabilidad, indignación y explosiones emocionales. Borro el efecto acumulado
          de todas las experiencias de injusticia, impotencia, traición, expectativas no cumplidas
          o la sensación de no ser escuchado que generaron estas emociones.
          Fortalezco la paciencia, la comprensión, el perdón (hacia mí y hacia otros),
          la comunicación asertiva y la capacidad de transmutar el enojo
          en energía constructiva, permitiendo la liberación, el flujo y la paz interior,
          sin reprimir ni explotar.
        `,
        miedo_fobia: `
          Elimino y disipo toda debilidad de miedo, terror, pánico, fobias específicas
          (social, alturas, animales, etc.) o generalizadas, inseguridad y desconfianza.
          Borro el efecto acumulado de experiencias traumáticas (directas o indirectas),
          amenazas percibidas (reales o imaginarias) o heredadas que generaron estos miedos.
          Fortalezco la valentía, la seguridad interior, la protección divina,
          la confianza para enfrentar cualquier desafío y la disolución de las raíces
          de cualquier fobia a nivel celular y energético, permitiendo la libertad
          y la expansión personal.
        `,
        baja_autoestima: `
          Elimino y disipo toda debilidad de baja autoestima, falta de valor personal,
          sentimientos de insuficiencia, culpa, vergüenza, autocrítica destructiva
          y la necesidad de aprobación externa. Borro el efecto acumulado de todas las
          programaciones negativas (familiares, sociales), comparaciones, críticas o rechazos
          del pasado que afectaron mi valía. Fortalezco el amor propio incondicional,
          la confianza en mis capacidades, el respeto a mí mismo, la autoaceptación
          y el reconocimiento de mi poder personal y mi unicidad, elevando mi autoimagen
          y mi vibración para manifestar mi verdadero potencial.
        `,
        buenas_relaciones: `
          Elimino y disipo toda debilidad en mis relaciones interpersonales (pareja, familia, amigos, trabajo):
          conflictos, falta de comunicación efectiva, resentimientos, desconfianza,
          dependencia o codependencia, y la dificultad para establecer límites sanos.
          Borro el efecto acumulado de experiencias pasadas de traición, abandono,
          desilusión o separación que afectaron mi capacidad de relacionarme.
          Fortalezco la empatía, la compasión, el respeto mutuo, la honestidad,
          la reciprocidad, el apoyo y la alegría en todas mis interacciones.
          Me fortalezco para atraer relaciones sanas, equilibradas,
          enriquecedoras y duraderas en todos los ámbitos de mi vida.
        `,
        abundancia: `
          Elimino y disipo toda debilidad relacionada con la abundancia y la prosperidad:
          escasez, limitación, deudas, bloqueos financieros, miedo a no tener suficiente,
          y la creencia de no merecer la riqueza o el éxito. Borro el efecto acumulado
          de creencias limitantes sobre el dinero, la riqueza, el merecimiento
          o programaciones ancestrales de pobreza, sacrificio y carencia.
          Fortalezco mi conexión con el flujo universal de la abundancia en todas sus formas.
          Me fortalezco para atraer oportunidades, prosperidad ilimitada, riqueza,
          bienestar material y espiritual, éxito en proyectos, y reconocimiento de mis talentos
          y valor, abriéndome a recibir todo lo bueno del universo.
        `,
        exito: `
          Elimino y disipo toda debilidad que me impida alcanzar el éxito y la realización
          personal y profesional: procrastinación, falta de enfoque, autosabotaje,
          miedo al fracaso o miedo al éxito (a sus responsabilidades, al juicio).
          Borro el efecto acumulado de experiencias pasadas de decepciones, críticas,
          comparaciones, esfuerzos no recompensados o desánimo. Fortalezco mi visión clara,
          my determinación inquebrantable, mi disciplina, mi perseverancia y mi capacidad
          para tomar acción masiva y efectiva. Me fortalezco para reconocer y celebrar
          mis logros, para superar cualquier obstáculo con facilidad y confianza,
          y para manifestar mi máximo potencial en todas las áreas de mi vida.
        `,
        para_los_hijos: `
          Elimino y disipo toda debilidad que afecte el bienestar de mis hijos
          (físico, emocional, mental, espiritual): enfermedades, miedos, inseguridades,
          problemas escolares, rebeldía, conflictos familiares, influencias negativas
          o problemas de desarrollo. Borro el efecto acumulado de karmas familiares,
          traumas generacionales o cualquier debilidad que como padre/madre
          les esté transmitiendo inconscientemente. Fortalezco la conexión amorosa,
          la comunicación abierta, el respeto, la paciencia, la sabiduría para guiarlos,
          y la capacidad de ser un modelo positivo. Me fortalezco para que mis hijos
          sean fuertes, sanos, felices, exitosos, seguros, resilientes y desarrollen
          su máximo potencial en todas las áreas. **Aumento su inteligencia física,
          su capacidad de aprendizaje, retención y comprensión. Fortalezco su desempeño escolar,
          su concentración, su memoria y su entusiasmo por aprender.** Elimino cualquier debilidad
          en el proceso educativo, presiones académicas o sociales, y la debilidad en su relación
          con maestros y compañeros.
        `,
        nuevos_comienzos: `
          Elimino y disipo toda debilidad ante los nuevos comienzos, transiciones
          y cambios de ciclo en la vida: miedo al cambio, resistencia, incertidumbre,
          apego al pasado, dudas, falta de dirección y temor a lo desconocido.
          Borro el efecto acumulado de experiencias pasadas donde los cambios fueron difíciles
          o dolorosos, y cualquier programación de resistencia a la novedad.
          Fortalezco la valentía, la adaptabilidad, la flexibilidad, la confianza en el proceso
          de la vida y la capacidad de soltar lo que ya no sirve. Me fortalezco para abrazar
          lo nuevo con optimismo, claridad y determinación, y para manifestar
          mis intenciones con facilidad y éxito en cada nuevo ciclo o etapa.
        `,
        pareja_trabajo: `
          Elimino y disipo toda debilidad que impida el éxito de mi pareja en el trabajo,
          en su carrera o en su propósito de vida: inseguridad, estrés, frustración,
          falta de reconocimiento, problemas con colegas o jefes, o bloqueos económicos.
          Borro el efecto acumulado de sus propias limitaciones, miedos, autosabotaje
          o cualquier energía de terceros que esté influyendo negativamente.
          Fortalezco su inteligencia física, su intuición, su habilidad para tomar decisiones,
          su creatividad, su resiliencia y su capacidad de liderazgo.
          Me fortalezco para apoyar a mi pareja de manera óptima y para que su camino
          profesional y personal sea de prosperidad, realización, éxito y alegría,
          alineado con su máximo potencial.
        `,
        culpa_verguenza: `
          Elimino y disipo toda debilidad de culpa, remordimiento, autocondena,
          vergüenza, humillación, arrepentimiento y auto-castigo. Borro el efecto acumulado
          de errores pasados (propios o ajenos), juicios de valor (internos o externos),
          expectativas no cumplidas o la sensación de no ser suficiente.
          Fortalezco el autoperdón incondicional, la autoaceptación completa,
          la dignidad, el honor y la liberación de cualquier carga emocional.
          Me fortalezco para aprender de las experiencias sin juicio y para avanzar
          con ligereza y paz interior, sintiendo mi valía.
        `,
        resentimiento_perdon: `
          Elimino y disipo toda debilidad de resentimiento, rencor, amargura,
          venganza, dificultad para perdonar a otros o a mí mismo, y la incapacidad de soltar el pasado.
          Borro el efecto acumulado de traiciones, ofensas, injusticias percibidas,
          dolor emocional no procesado o la incapacidad de procesar el dolor del pasado.
          Fortalezco el perdón verdadero y profundo (hacia mí y hacia otros),
          la compasión, la liberación emocional, la aceptación y la paz interior profunda,
          permitiendo que la energía se mueva libremente, sane el corazón
          y libere cualquier atadura al pasado doloroso.
        `,
        soledad: `
          Elimino y disipo toda debilidad de soledad, aislamiento,
          sensación de abandono, desconexión y nostalgia. Borro el efecto acumulado
          de pérdidas (de seres queridos, relaciones, sueños), separaciones,
          falta de apoyo emocional, miedo a la intimidad, o la creencia de no pertenecer.
          Fortalezco la conexión genuina (conmigo mismo, con otros y con lo divino),
          el sentido de pertenencia, el amor propio incondicional y la capacidad de disfrutar
          de la compañía de otros y de mí mismo, sintiéndome conectado, pleno y amado.
        `,
        apego_dependencia: `
          Elimino y disipo toda debilidad de apego emocional, dependencia excesiva,
          necesidad de aprobación, celos, posesividad o miedo a la pérdida (de una persona, relación, situación).
          Borro el efecto acumulado de inseguridades, carencias afectivas,
          traumas de abandono o patrones de relación tóxicos.
          Fortalezco la independencia emocional, la libertad, el amor incondicional
          (sin condiciones ni ataduras), y la capacidad de amar sin aferrarse,
          manteniendo mi individualidad, valor propio y autonomía en todas las relaciones,
          desde la plenitud y el respeto mutuo.
        `,
      },
    },
    psiquico: {
      title: 'Padecimientos Psíquicos',
      options: [
        { value: 'intuicion_bloqueada', label: 'Intuición Bloqueada' },
        { value: 'hipersensibilidad', label: 'Hipersensibilidad / Sobrecarga Energética' },
        { value: 'sueños_perturbadores', label: 'Sueños Perturbadores / Pesadillas' },
        { value: 'energia_negativa', label: 'Energías Negativas / Influencias Externas' },
        { value: 'telepatia_debilitada', label: 'Telepatía Debilitada' },
        { value: 'percepcion_extra', label: 'Percepción Extrasensorial Desequilibrada' },
        { value: 'vision_futuro_nublada', label: 'Visión de Futuro Nublada' },
      ],
      strengthenings: {
        intuicion_bloqueada: `
          Elimino y disipo toda debilidad de intuición bloqueada,
          dificultad para escuchar la voz interior, confusión sobre el camino,
          y desconexión con la sabiduría innata. Borro el efecto acumulado de escepticismo,
          juicios, miedos, dudas, sobrecarga mental o influencias externas que nublan la percepción.
          Fortalezco una intuición clara, aguda, asertiva y la conexión
          profunda con mi sabiduría interna para guiarme, tomar decisiones
          y discernir la verdad en cada situación, con total claridad y confianza.
        `,
        hipersensibilidad: `
          Elimino y disipo toda debilidad de hipersensibilidad energética,
          sobrecarga emocional o energética, absorción de emociones o energías de otros,
          y la vulnerabilidad a entornos densos. Borro la falta de límites energéticos,
          la debilidad en el campo áurico y los chakras, o la incapacidad de filtrar.
          Fortalezco mi protección energética, mi discernimiento,
          la capacidad de filtrar cualquier influencia externa y la fortaleza
          de mi aura, manteniendo mi energía limpia, estable y protegida
          ante cualquier persona o entorno, sin que nada me debilite.
        `,
        sueños_perturbadores: `
          Elimino y disipo toda debilidad de sueños perturbadores,
          pesadillas recurrentes, insomnio por actividad onírica intensa,
          mensajes confusos en sueños o terrores nocturnos.
          Borro el efecto acumulado de estrés, traumas no resueltos,
          liberaciones energéticas nocturnas, influencias espirituales que alteran el descanso,
          o la incapacidad de procesar experiencias del día.
          Fortalezco un sueño pacífico, reparador, profundo y sin interrupciones,
          la comprensión clara de los mensajes oníricos para mi evolución y bienestar,
          y la protección en el plano astral.
        `,
        energia_negativa: `
          Elimino y disipo toda debilidad de energías negativas,
          mal de ojo, envidias, ataques psíquicos, influencias de baja vibración,
          entidades no deseadas y cualquier tipo de magia o brujería.
          Borro el efecto acumulado de resentimientos, miedos, culpa o puertas
          energéticas abiertas que permitan estas influencias. Fortalezco mi protección energética,
          la limpieza profunda de mi campo áurico y de mis espacios, el sellado del aura,
          y la elevación constante de mi vibración, para estar inmune y completamente
          protegido de cualquier negatividad, interferencia o intento de manipulación energética.
        `,
        telepatia_debilitada: `
          Elimino y disipo toda debilidad de telepatía debilitada,
          dificultad para conectar con otros a nivel sutil, falta de sincronías,
          y bloqueo en la comunicación no verbal o energética. Borro el efecto acumulado
          de dudas, escepticismo, bloqueos en el chakra de la garganta o del tercer ojo,
          o falta de desarrollo de habilidades psíquicas.
          Fortalezco una comunicación telepática clara, instantánea,
          y el entendimiento a distancia, permitiendo una conexión profunda,
          auténtica y sin palabras con otros seres conscientes.
        `,
        percepcion_extra: `
          Elimino y disipo toda debilidad de percepción extrasensorial desequilibrada:
          clarividencia (visión), clariaudiencia (audición), clariempatía (sentimiento),
          clariconciencia (conocimiento) o cualquier habilidad psíquica fuera de control.
          Borro el efecto acumulado de traumas, miedos a lo desconocido,
          experiencias negativas con estas habilidades o uso indebido de las mismas.
          Fortalezco el equilibrio, el control y la sabiduría en el uso de mis dones,
          para mi mayor bien y el de todos, en alineación con la luz y la verdad,
          permitiendo una percepción expandida y segura.
        `,
        vision_futuro_nublada: `
          Elimino y disipo toda debilidad de visión de futuro nublada:
          incertidumbre, falta de claridad en el camino, no ver las oportunidades,
          y sensación de estancamiento. Borro el efecto acumulado de miedos,
          programaciones negativas, fatalismo, duda sobre el futuro o falta de conexión
          con el propósito divino. Fortalezco una visión clara, optimismo, dirección,
          la capacidad de discernir las oportunidades y la manifestación del futuro deseado,
          con facilidad y gracia, abriendo caminos hacia el éxito y la realización
          de mis sueños y metas.
        `,
      },
    },
    psicologico: {
      title: 'Padecimientos Psicológicos',
      options: [
        { value: 'traumas_pasado', label: 'Traumas del Pasado' },
        { value: 'patrones_repetitivos', label: 'Patrones Repetitivos / Autosabotaje' },
        { value: 'adicciones_compulsiones', label: 'Adicciones / Compulsiones' },
        { value: 'dependencia_emocional', label: 'Dependencia Psicológica' }, // Differs from emotional apego
        { value: 'victimismo', label: 'Victimismo / Autocompasión' },
        { value: 'autoexigencia_perfeccionismo', label: 'Autoexigencia / Perfeccionismo' },
        { value: 'miedo_cambio_psico', label: 'Miedo al Cambio (Psicológico)' },
        { value: 'bloqueo_toma_decisiones', label: 'Bloqueo en Toma de Decisiones' },
      ],
      strengthenings: {
        traumas_pasado: `
          Elimino y disipo toda debilidad de traumas del pasado: abusos (físicos, emocionales, sexuales),
          pérdidas significativas, accidentes, shocks, experiencias dolorosas no procesadas
          y estrés postraumático. Borro el efecto acumulado en la memoria celular,
          el impacto en el sistema nervioso (simpático/parasimpático), el campo electromagnético
          y las huellas emocionales y mentales de esos eventos.
          Fortalezco la sanación profunda, la liberación de cargas emocionales,
          la resiliencia, la integración de estas experiencias, transformándolas
          en fortaleza, sabiduría y crecimiento personal, para vivir libre del pasado
          y sus cadenas.
        `,
        patrones_repetitivos: `
          Elimino y disipo toda debilidad de patrones repetitivos negativos:
          relaciones tóxicas recurrentes, fracasos repetidos, autosabotaje,
          estancamiento y ciclos de sufrimiento en cualquier área de la vida.
          Borro el efecto acumulado de programaciones inconscientes, lealtades familiares
          (visibles y ocultas), creencias limitantes o karmas que me mantienen en el ciclo.
          Fortalezco para romper cadenas, elegir conscientemente,
          y crear nuevos patrones de éxito, bienestar, libertad y plenitud,
          diseñando una vida en alineación con mi verdadero ser y mi propósito.
        `,
        adicciones_compulsiones: `
          Elimino y disipo toda debilidad de adicciones (sustancias, comportamientos, personas, comida),
          compulsiones, hábitos destructivos, falta de control y obsesiones.
          Borro el efecto acumulado de vacíos emocionales, ansiedades profundas,
          traumas no resueltos o influencias familiares/sociales que alimentan estas conductas.
          Fortalezco la voluntad inquebrantable, la libertad, el autocontrol,
          y la sanación de las causas subyacentes, para vivir plenamente,
          con poder personal, en armonía y libre de cualquier atadura,
          reconociendo mi capacidad de elección.
        `,
        dependencia_emocional: `
          Elimino y disipo toda debilidad de dependencia psicológica y emocional:
          necesidad excesiva del otro, miedo al abandono, fusión con la pareja u otros,
          y la búsqueda constante de aprobación o validación externa. Borro el efecto acumulado
          de inseguridades, carencias afectivas (reales o percibidas), traumas de apego
          o patrones de relación aprendidos que fomentan la codependencia.
          Fortalezco la autonomía, la autosuficiencia, el amor propio incondicional
          y la capacidad de establecer relaciones sanas, equitativas y de respeto mutuo,
          desde la plenitud individual y la libertad de ser yo mismo.
        `,
        victimismo: `
          Elimino y disipo toda debilidad de victimismo, sentirse indefenso,
          culpar a otros, quejas y falta de responsabilidad personal.
          Borro el efecto acumulado de experiencias de impotencia,
          creencias limitantes o programaciones que refuerzan la pasividad.
          Fortalezco el empoderamiento personal, la proactividad,
          la asunción de responsabilidad por mi vida y la capacidad
          de crear mi realidad desde mi poder interior, dejando atrás
          cualquier rol de víctima para ser un creador consciente,
          resiliente y fuerte.
        `,
        autoexigencia_perfeccionismo: `
          Elimino y disipo toda debilidad de autoexigencia extrema,
          perfeccionismo paralizante, autocrítica destructiva y miedo al error o al juicio.
          Borro el efecto acumulado de presiones externas, expectativas irreales
          o patrones de no merecimiento que impulsan la necesidad de perfección.
          Fortalezco la autoaceptación, la compasión hacia mí mismo,
          la excelencia saludable (sin estrés), la valoración de mi progreso
          y la libertad de ser yo mismo, con mis fortalezas y debilidades,
          sabiendo que soy suficiente y valioso tal como soy, permitiendo el disfrute del proceso.
        `,
        miedo_cambio_psico: `
          Elimino y disipo toda debilidad de miedo al cambio,
          resistencia a lo nuevo, ansiedad ante lo desconocido, apego a lo familiar
          y la zona de confort. Borro el efecto acumulado de traumas pasados
          relacionados con cambios dolorosos o la inseguridad ante lo nuevo.
          Fortalezco la adaptabilidad, la flexibilidad, la confianza en el proceso de la vida
          y el entusiasmo por lo nuevo y las oportunidades de crecimiento.
          Me fortalezco para abrazar los cambios con valentía,
          sabiendo que cada transición trae consigo nuevas posibilidades y crecimiento.
        `,
        bloqueo_toma_decisiones: `
          Elimino y disipo toda debilidad de bloqueo en la toma de decisiones:
          parálisis por análisis, duda constante, miedo a las consecuencias (positivas o negativas),
          y la incapacidad de elegir. Borro el efecto acumulado de indecisión,
          miedos al error, la influencia de opiniones ajenas o la falta de claridad interna.
          Fortalezco la claridad mental, la certeza interna, la intuición,
          y la capacidad de decidir con confianza, rapidez y acierto,
          alineado con mi propósito y mi verdad, permitiendo un flujo constante de progreso
          y manifestación de mis objetivos.
        `,
      },
    },
    espiritual: {
      title: 'Padecimientos Espirituales',
      options: [
        { value: 'desconexion', label: 'Desconexión Espiritual' },
        { value: 'proposito_vida', label: 'Falta de Propósito de Vida' },
        { value: 'karma', label: 'Karma No Resuelto' },
        { value: 'bloqueos_ancestrales', label: 'Bloqueos Ancestrales / Linaje' },
        { value: 'crisis_espiritual', label: 'Crisis Espiritual / Duda de Fe' },
        { value: 'votos_promesas', label: 'Votos / Juramentos / Promesas (de otras vidas)' },
        { value: 'entidades_negativas', label: 'Entidades / Energías No Deseadas' },
        { value: 'ascension_dificultad', label: 'Dificultad en el Proceso de Ascensión' },
      ],
      strengthenings: {
        desconexion: `
          Elimino y disipo toda debilidad de desconexión espiritual:
          sentirse alejado de lo divino, falta de fe, vacío existencial,
          y la sensación de estar solo en el universo. Borro el efecto acumulado
          de traumas religiosos, dogmas limitantes, experiencias que generaron
          dudas espirituales, la desconexión con mi ser superior o con la fuente.
          Fortalezco una conexión profunda y consciente con lo divino,
          una fe inquebrantable, la paz interior y el despertar espiritual,
          en total armonía y plenitud, sintiendo la guía y el apoyo constante
          del universo.
        `,
        proposito_vida: `
          Elimino y disipo toda debilidad de falta de propósito de vida:
          sentirse perdido, sin dirección, sin sentido, desmotivación
          y la incapacidad de encontrar mi misión o vocación. Borro el efecto acumulado
          de programaciones que limitan el potencial, miedos a la grandeza,
          o la influencia de expectativas ajenas que me desvían de mi camino.
          Fortalezco la claridad del propósito, la pasión, la dirección, la inspiración
          y la manifestación de mi misión de vida con alegría y certeza,
          alineado con mi verdadero ser y contribuyendo al bien mayor de todos.
          Abro los caminos para que mi propósito se revele y se manifieste.
        `,
        karma: `
          Elimino y disipo todo karma no resuelto: directo, indirecto y parcialmente indirecto,
          de esta vida, vidas pasadas, incluyendo el karma de mis ancestros y descendientes.
          Borro el efecto acumulado de acciones, palabras y pensamientos que generaron desequilibrio
          o deuda energética. Fortalezco la liberación kármica completa y consciente,
          el perdón universal (hacia mí y hacia todos), la transmutación energética
          y la creación de un nuevo destino, libre de cargas y patrones repetitivos,
          viviendo en armonía, libertad y plenitud en el presente.
        `,
        bloqueos_ancestrales: `
          Elimino y disipo toda debilidad de bloqueos ancestrales:
          patrones de enfermedad, pobreza, sufrimiento, relaciones tóxicas,
          limitaciones emocionales o mentales heredados del linaje.
          Borro el efecto acumulado de traumas, secretos, duelos no resueltos,
          maldiciones, votos o acuerdos de mis ancestros que me afectan.
          Fortalezco la sanación del linaje completo, la liberación de cargas transgeneracionales,
          la honra a los ancestros y la recepción de sus fortalezas y sabiduría,
          transformando la historia familiar hacia el bienestar, la prosperidad
          y la libertad para las generaciones presentes y futuras.
        `,
        crisis_espiritual: `
          Elimino y disipo toda debilidad de crisis espiritual,
          duda de fe, confusión, desorientación en el camino espiritual,
          y la sensación de pérdida de sentido. Borro el efecto acumulado
          de dogmas limitantes, expectativas no cumplidas, o experiencias
          que desafían mis creencias. Fortalezco la claridad, la resiliencia,
          la sabiduría, la confianza en el proceso y el crecimiento a través de la crisis,
          transformándola en una oportunidad para un despertar más profundo,
          una fe renovada y una conexión más auténtica con mi ser espiritual.
        `,
        votos_promesas: `
          Elimino y disipo toda debilidad de votos, juramentos,
          promesas, lealtades o contratos de vidas pasadas (pobreza, celibato,
          obediencia, sacrificio, servidumbre, silencio) que me limitan en esta vida.
          Borro los efectos de cualquier acuerdo que impida mi libertad actual
          y mi pleno potencial. Fortalezco la disolución de estos lazos energéticos,
          la libertad de elección, la autonomía y la manifestación de mi voluntad presente,
          sin restricciones kármicas o ancestrales, viviendo en mi máximo poder
          y alineado con mi propósito divino.
        `,
        entidades_negativas: `
          Elimino y disipo toda debilidad de entidades,
          energías no deseadas, larvas, implantes energéticos, ataques psíquicos,
          trabajos de magia o brujería, y cualquier influencia de baja vibración.
          Borro el efecto acumulado de vulnerabilidades áuricas o baja vibración
          que atrae estas influencias. Fortalezco mi protección energética (escudo áurico),
          la limpieza profunda de mi campo áurico y de mis espacios, el sellado del aura,
          y la elevación constante de mi vibración, para estar inmune y completamente
          protegido de cualquier negatividad, interferencia o intento de manipulación energética.
        `,
        ascension_dificultad: `
          Elimino y disipo toda debilidad en el proceso de ascensión:
          síntomas físicos intensos, confusión mental, desorientación emocional,
          resistencia al cambio vibracional y la sensación de estar atascado.
          Borro el efecto acumulado de miedos (a lo desconocido, a la muerte),
          densidad energética, o la incapacidad de mi cuerpo y mis campos sutiles
          para integrar altas frecuencias de luz. Fortalezco la integración armónica de la luz,
          la adaptación a nuevas vibraciones y un proceso de ascensión suave,
          consciente y lleno de gracia, permitiendo la expansión de mi conciencia,
          my ser y mi conexión con las dimensiones superiores.
        `,
      },
    },
    general: {
      title: 'Padecimientos Generales',
      options: [
        { value: 'energia_baja_general', label: 'Energía Baja General' },
        { value: 'mala_suerte', label: 'Mala Suerte / Obstáculos' },
        { value: 'apatia_desmotivacion', label: 'Apatía / Desmotivación' },
        { value: 'problemas_financieros', label: 'Problemas Financieros (General)' },
        { value: 'mejor_trabajo', label: 'Mejor Trabajo' }, // Nuevo
        { value: 'crecer_trabajo_actual', label: 'Crecer en el Trabajo Actual' }, // Nuevo
        { value: 'relacion_maestro_alumno', label: 'Relación Maestro-Alumno' }, // Nuevo
        { value: 'falta_oportunidades', label: 'Falta de Oportunidades' },
        { value: 'problemas_legales', label: 'Problemas Legales' },
        { value: 'casa_negativa', label: 'Energía Negativa en Casa/Trabajo' },
        { value: 'cambio_climatico_adaptacion', label: 'Adaptación a Cambios Climáticos' },
        { value: 'jet_lag', label: 'Jet Lag / Desajustes de Viaje' },
        { value: 'exposicion_radiacion', label: 'Exposición a Radiación Electromagnética' },
      ],
      strengthenings: {
        energia_baja_general: `
          Elimino y disipo toda debilidad de energía baja,
          cansancio generalizado, letargo y falta de vitalidad.
          Borro el efecto acumulado de desequilibrios energéticos,
          estrés crónico, sobrecarga física o mental, o influencias ambientales que agotan.
          Fortalezco la energía vital a nivel celular (mitocondrias), el entusiasmo,
          la vitalidad y la resistencia en todos los niveles (físico, mental, emocional, espiritual),
          para un bienestar completo y una fuente inagotable de energía.
          Aumento la capacidad de recuperación y regeneración.
        `,
        mala_suerte: `
          Elimino y disipo toda debilidad de mala suerte,
          obstáculos recurrentes, situaciones adversas y la sensación de que nada sale bien.
          Borro el efecto acumulado de patrones de escasez, creencias limitantes,
          karma no resuelto, memorias de fracaso o cualquier influencia negativa
          que impida el flujo de lo positivo. Fortalezco la buena fortuna,
          la atracción de oportunidades inesperadas, la sincronicidad y la alineación
          con la prosperidad y el éxito, para que todo se alinee a mi favor
          con facilidad y gracia, transformando cualquier racha negativa.
        `,
        apatia_desmotivacion: `
          Elimino y disipo toda debilidad de apatía,
          desmotivación, falta de interés, aburrimiento e indiferencia.
          Borro el efecto acumulado de rutinas monótonas, falta de desafíos,
          desilusiones pasadas, la pérdida de propósito o la falta de alegría.
          Fortalezco la pasión, el entusiasmo, la inspiración, la creatividad
          y el deseo de vivir plenamente, con propósito y energía renovada,
          encendiendo la chispa interior para perseguir mis sueños y metas con vigor.
        `,
        problemas_financieros: `
          Elimino y disipo toda debilidad de problemas financieros:
          escasez, deudas, falta de ingresos, bloqueos de dinero,
          dificultad para generar o administrar riqueza, o el miedo a la pobreza.
          Borro el efecto acumulado de creencias limitantes sobre el dinero,
          karma financiero, programaciones ancestrales sobre la pobreza y la carencia,
          o traumas relacionados con las finanzas. Fortalezco la abundancia ilimitada,
          la prosperidad en todas sus formas, la riqueza, y la facilidad para generar,
          atraer y administrar dinero, creando un flujo constante de bienestar económico
          y libertad financiera.
        `,
        mejor_trabajo: `
          Elimino y disipo toda debilidad que impida conseguir un mejor trabajo:
          falta de oportunidades, baja autoestima profesional, miedo al cambio,
          desconexión con el propósito, o influencias externas que bloquean el avance.
          Borro el efecto acumulado de rechazos laborales, fracasos pasados,
          o creencias limitantes sobre el propio valor en el mercado laboral.
          Fortalezco la atracción de oportunidades laborales alineadas con mi propósito,
          talentos y ambiciones. Aumento mi visibilidad, mis habilidades de entrevista,
          mi confianza y mi valor profesional, abriendo caminos para un trabajo
          más satisfactorio, próspero y realizado.
        `,
        crecer_trabajo_actual: `
          Elimino y disipo toda debilidad que impida crecer en el trabajo actual:
          estancamiento, falta de reconocimiento, problemas con colegas o superiores,
          baja motivación, o percepción de no merecimiento. Borro el efecto acumulado
          de frustraciones, comparaciones, autosabotaje, o patrones de subestimación
          del propio potencial. Fortalezco mi rendimiento, mi creatividad, mi liderazgo,
          my comunicación efectiva y mi capacidad para innovar y aportar valor.
          Aumento el reconocimiento, las oportunidades de ascenso, la prosperidad económica
          y la armonía en el entorno laboral, permitiendo un crecimiento continuo y exitoso.
        `,
        relacion_maestro_alumno: `
          Elimino y disipo toda debilidad en la relación maestro-alumno (para maestros):
          falta de conexión, problemas de disciplina, falta de motivación en alumnos,
          desafíos de comunicación, o agotamiento profesional. Borro el efecto acumulado
          de frustraciones, malentendidos, presiones externas, o la debilidad en la empatía.
          Fortalezco la paciencia, la comunicación clara y efectiva, la inspiración,
          la autoridad positiva y la capacidad de motivar a los alumnos. Aumento la conexión,
          el respeto mutuo y la fluidez en el proceso de enseñanza-aprendizaje, creando
          un ambiente positivo y enriquecedor para todos. Fortalezco la intuición del maestro
          para entender las necesidades de cada alumno.
        `,
        falta_oportunidades: `
          Elimino y disipo toda debilidad de falta de oportunidades:
          sentirse estancado, no ver el camino, puertas cerradas,
          y la sensación de que las cosas no avanzan. Borro el efecto acumulado
          de miedos (al éxito, al fracaso), inseguridades, karma que impide el avance,
          o la incapacidad de reconocer las oportunidades cuando se presentan.
          Fortalezco la apertura, la visión clara para ver nuevas posibilidades,
          el magnetismo para atraerlas y la capacidad de aprovecharlas con éxito
          y determinación, abriendo todos los caminos de prosperidad.
        `,
        problemas_legales: `
          Elimino y disipo toda debilidad de problemas legales:
          conflictos judiciales, burocracia, multas, desacuerdos legales
          y cualquier situación de injusticia. Borro el efecto acumulado de injusticias
          pasadas (propias o ancestrales), karmas relacionados con la justicia,
          o debilidades en el sistema de justicia. Fortalezco la justicia divina,
          la resolución favorable y rápida de cualquier situación legal,
          la protección legal en todos los ámbitos y la paz mental,
          para sentirme seguro, respaldado y con la certeza de un resultado justo.
        `,
        casa_negativa: `
          Elimino y disipo toda debilidad de energía negativa en casa o trabajo:
          ambientes pesados, conflictos constantes, estancamiento, incomodidad,
          y la presencia de energías densas o entidades no deseadas.
          Borro el efecto acumulado de entidades, memorias de dolor en los espacios,
          desequilibrios geopáticos, o la influencia de personas negativas.
          Fortalezco la limpieza energética profunda, la armonía, la paz,
          la alta vibración y la protección en mis espacios,
          creando un santuario de bienestar, luz, prosperidad y alegría.
        `,
        cambio_climatico_adaptacion: `
          Elimino y disipo toda debilidad de adaptación a cambios climáticos:
          sensibilidad al frío/calor extremo, jet lag estacional, alergias
          por cambios de estación, o malestar general por variaciones del tiempo.
          Borro el efecto acumulado de falta de conexión con la Tierra
          o desequilibrios internos que impiden la adaptación. Fortalezco la adaptabilidad,
          la resiliencia a los elementos naturales y la conexión con el ritmo natural del planeta,
          para sentirme cómodo, equilibrado y en armonía con cualquier clima,
          sin que las variaciones me debiliten.
        `,
        jet_lag: `
          Elimino y disipo toda debilidad de jet lag:
          desorientación, fatiga, problemas de sueño, digestivos y cambios de humor
          por cambios de huso horario. Borro el efecto acumulado de desincronización
          de los relojes biológicos o estrés de viaje. Fortalezco la adaptación rápida
          del cuerpo y la mente al nuevo huso horario, el equilibrio energético,
          un sueño reparador y un viaje armonioso, para transiciones sin esfuerzo
          y sin impacto negativo en la vitalidad.
        `,
        exposicion_radiacion: `
          Elimino y disipo toda debilidad por exposición a radiación electromagnética (EMF):
          procedente de wifi, móviles, antenas, dispositivos electrónicos, causando dolores de cabeza,
          fatiga, irritabilidad, insomnio o malestar general. Borro el efecto acumulado
          de sensibilidad, debilidad del campo áurico o sobrecarga del sistema nervioso por EMF.
          Fortalezco mi protección energética, la neutralidad ante las radiaciones
          y la fortaleza celular para resistir cualquier impacto negativo,
          manteniéndome fuerte, protegido y en equilibrio en entornos tecnológicos,
          sin que me afecte ninguna frecuencia.
        `,
      },
    },
  };

  // Function to handle the selection of an ailment category
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSelectedAilment(''); // Reset specific ailment when category changes
    setStrengtheningText(''); // Clear previous strengthening
    setShowStrengtheningView(false); // Ensure we are back on the main selection screen
  };

  // Function to handle the selection of a specific ailment
  const handleSelectAilment = (ailment) => {
    setSelectedAilment(ailment);
    setStrengtheningText(''); // Clear previous strengthening
    setShowStrengtheningView(false); // Ensure we are on the main selection screen if an ailment is chosen
  };

  // Function to generate the strengthening based on selected category and specific ailment
  const generateStrengthening = () => {
    if (!selectedCategory || !selectedAilment) {
      setStrengtheningText('Por favor, selecciona un tipo de padecimiento y luego una dolencia específica.');
      setShowStrengtheningView(true); // Show the message in the strengthening view
      return;
    }

    const specificStrengthening = ailmentsData[selectedCategory].strengthenings[selectedAilment];

    // The new fixed preamble that will be added to every strengthening
    const fixedPreamble = `
      Me pongo fuerte para sentir, percibir, intuir, 100% creativo.
      Elimino pensamiento, estoy neutral, no juzgo, no critico, sin miedo, vacío.
      Soy capaz, dispuesto, preparado, digno, comprometido.
      Puedo verlo, creerlo, crearlo, de la imaginación a la realidad. Que emerja mi verdadero ser.
      Al 100% con potencial infinito, las debilidades sean igual a 0 menos infinito, el 100% del tiempo por tiempo infinito, reiniciar, recalibrar, reprogramar, rejuvenecer.

      Elimino la mente y todo su excedente de mis células, moléculas, átomos y partículas cuánticas, enviándola a:
      Otras dimensiones.
      Campos energéticos.
      Tiempos y espacios.
      Lugares desconocidos.
      Otros universos.
      Agujeros negros.
      Agujeros de gusano.
      Energía y materia oscura del universo.
      Fuerte para estar sin mente, sin espíritu y vacío.
      Fuerte para que la mente, el cuerpo y el espíritu no se debiliten entre sí, y para que no tenga más mente que cuerpo.

      Fortalezco mi sistema nervioso central, incluyendo la cola energética, aumentando su energía y su integración con todas las partes del cuerpo y viceversa.
      Elimino la desigualdad del cuerpo (izquierda-derecha, arriba-abajo, enfrente-atrás, dentro-fuera), fortaleciendo el centrado, equilibrio y estabilidad.

      Aumento pH alcalino, iones negativos y campo electromagnético negativo.
      Elimino pH ácido, iones positivos y campo electromagnético positivo.
      Elimino cualquier sensación de dolor, malestar, irritación, ardor, presión, envaramiento, sensibilidad, insensibilidad, palpitaciones, hipersensibilidad, incomodidad, etc.

      Fortalezco el sistema linfático y sus componentes, eliminando bloqueos, fermentación, infestación e inflamación.
      Fortalezco la triada de los 3 sistemas mayores: respiratorio, digestivo y reproductor.
      Fortalezco la triada del flujo vital básico: linfático, energético y circulatorio.

      Fuerte para agujeros negros y agujeros de gusano en todas las células.
      Fuerte para activar y tensar los portales de salida: pies, dedos de los pies, manos, dedos de las manos, pecho, abdomen, barbilla, axilas, sacro, colon, vejiga y genitales.
      Aumento la velocidad de la percepción más allá de la velocidad de la luz.

      Elimino el juicio, autocritica, pena, culpa, frustración, enojo, ira, tristeza, lágrimas contenidas, desesperación, emociones negativas y experiencias negativas de la vida, y todo su efecto acumulado y repetitivo. Esto aplica para mí y para mis ancestros de esta vida y de todas mis vidas pasadas.
      Fuerte para estar alegre, para la felicidad incondicional, para el buen humor y para reír, fuerte para paz interior, fuerte para neutralidad.

      Fortalezco la triada de los átomos: neutrones, protones y electrones.
      Elimino todas las interpretaciones erróneas: que sea igual no igual, diferente no diferente, que cambie que no cambie, percepción no percepción.
      Separo y elimino sensaciones – emociones – reacciones.
      Elimino pensamientos negativos – recurrentes – involuntarios.
      Elimino que me debiliten los diagnósticos equivocados, la opinión de expertos, la influencia del colectivo humano y la mente de otras personas.
      Elimino todos los asuntos sin resolver de esta vida, de todas mis vidas pasadas y de mis ancestros.

      Aumento la inteligencia física, la forma física y la velocidad de todas mis células, moléculas, átomos y partículas cuánticas.
      Aumento la fuerza, resistencia, flexibilidad, coordinación, agilidad y velocidad.
      Fortalezco y elimino todas las debilidades de los soportes básicos de la vida:
      Salud. Forma física. Relaciones. Carrera o propósito. Finanzas. Tiempo (menos envejecimiento).
      Aumento la tensión, elimino el esfuerzo y elimino la relajación.
    `.trim();

    const finalStrengthening = `
      ${fixedPreamble}

      ${specificStrengthening}

      Al 100% y potencial infinito, 100% del tiempo con tiempo infinito.
      Reiniciar, recalibrar, reprogramar, rejuvenecer.
    `.trim(); // Using trim to remove leading/trailing whitespace

    setStrengtheningText(finalStrengthening);
    setShowStrengtheningView(true); // Show the strengthening view
  };

  // Function to return to the main selection menu
  const handleGoBack = () => {
    setSelectedCategory('');
    setSelectedAilment('');
    setStrengtheningText('');
    setShowStrengtheningView(false);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4 font-inter">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full text-center relative overflow-hidden">
        {/* Top "MÉTODO YUEN" */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center z-10">
          <h1 className="text-4xl font-serif text-gray-700 tracking-widest opacity-80 mb-2">
            MÉTODO YUEN
          </h1>
          {/* Decorative line, similar to the image's brush stroke */}
          <div className="w-24 h-1 bg-green-300 rounded-full mx-auto opacity-70"></div>
        </div>

        {/* Conditional rendering based on showStrengtheningView state */}
        {!showStrengtheningView ? ( // Show selection screen
          <>
            <p className="text-lg text-gray-700 mb-8 mt-24">
              Selecciona el área de tu padecimiento y luego una dolencia específica
              para recibir un fortalecimiento.
            </p>

            {/* Buttons to select ailment category */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category, index) => (
                <div
                  key={category.value}
                  className={`
                    ${index < 3 ? 'w-full sm:w-1/3 md:w-1/3' : ''}
                    ${index >= 3 && index < 6 ? 'w-full sm:w-1/3 md:w-1/3' : ''}
                    ${index === 6 ? 'w-full sm:w-1/3 md:w-1/3 mx-auto' : ''}
                  `}
                >
                  <button
                    onClick={() => handleSelectCategory(category.value)}
                    className={`w-full flex items-center justify-center px-4 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out shadow-md
                      ${selectedCategory === category.value
                        ? 'bg-purple-400 text-white transform scale-105'
                        : 'bg-purple-200 text-purple-800 hover:bg-purple-300'
                      } focus:outline-none focus:ring-4 focus:ring-purple-300`}
                  >
                    <span className="">{category.label}</span>
                    <span className="ml-2">→</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Dropdown for specific ailments, appears only after category is selected */}
            {selectedCategory && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Selecciona una dolencia específica en el área "{ailmentsData[selectedCategory].title}":
                </h3>
                <select
                  value={selectedAilment}
                  onChange={(e) => handleSelectAilment(e.target.value)}
                  className="w-full max-w-sm p-3 border border-gray-300 rounded-xl shadow-sm
                             focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                >
                  <option value="" disabled>-- Elige una opción --</option>
                  {ailmentsData[selectedCategory].options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Generate Strengthening button, only active if both category and specific ailment are selected */}
            <button
              onClick={generateStrengthening}
              disabled={!selectedCategory || !selectedAilment}
              className={`px-10 py-4 rounded-xl text-xl font-bold transition-all duration-300 ease-in-out
                ${selectedCategory && selectedAilment
                  ? 'bg-green-600 text-white shadow-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300'
                  : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                } focus:outline-none`}
            >
              Generar Fortalecimiento
            </button>
          </>
        ) : ( // Show strengthening text and back button
          <div className="mt-10 p-6 bg-indigo-50 rounded-2xl border border-indigo-200 text-left">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
              Tu Fortalecimiento:
            </h2>
            <p className="text-gray-800 whitespace-pre-line leading-relaxed">
              {strengtheningText}
            </p>
            <button
              onClick={handleGoBack}
              className="mt-6 px-8 py-3 rounded-full text-lg font-semibold bg-blue-500 text-white shadow-md
                         hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              ← Volver al Menú
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
