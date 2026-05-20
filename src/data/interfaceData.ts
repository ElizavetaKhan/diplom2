export interface MatrixRow {
  audience: string;
  interfaceType: string;
  developmentStage: string;
  testGoal: string;
  priorityMethods: string;
  additionalMethods: string;
  testFormat: string;
  objectivityLevel: string;
  keyMetrics: string;
  limitations: string;
}

export interface InterfaceTab {
  id: string;
  label: string;
  interfaceType: string;
  description: string;
  rows: MatrixRow[];
}

export const interfaceTabs: InterfaceTab[] = [
  {
    id: "informational",
    label: "Информационные интерфейсы",
    interfaceType: "Информационные и контентные интерфейсы",
    description:
      "Новостные сайты, образовательные платформы и справочные ресурсы, основной задачей которых является предоставление и поиск информации. Для тестирования особенно важны интуитивно понятная структура, логичная навигация, читаемость и воспринимаемость контента.",
    rows: [
      {
        audience: "Массовые пользователи",
        interfaceType: "Информационные и контентные интерфейсы",
        developmentStage: "Прототип / готовый интерфейс",
        testGoal: "Оценка навигации и читаемости",
        priorityMethods:
          "Метод проговаривания мыслей вслух, SUS, наблюдение",
        additionalMethods: "Отслеживание мыши, тепловые карты",
        testFormat: "Удаленный / лабораторный",
        objectivityLevel: "Средний",
        keyMetrics: "Время поиска информации, удовлетворенность",
        limitations: "Субъективность ответов",
      },
      {
        audience: "Профессиональные пользователи",
        interfaceType: "Информационные и контентные интерфейсы",
        developmentStage: "Готовый интерфейс",
        testGoal: "Оценка эффективности",
        priorityMethods:
          "Эвристическая оценка, task completion time, A/B-тестирование",
        additionalMethods: "Айтрекинг",
        testFormat: "Лабораторный",
        objectivityLevel: "Высокий",
        keyMetrics: "Скорость выполнения задач, количество ошибок",
        limitations: "Высокие требования к сценарию",
      },
      {
        audience: "Пользователи с ограничениями",
        interfaceType: "Информационные и контентные интерфейсы",
        developmentStage: "Прототип / готовый интерфейс",
        testGoal: "Проверка доступности",
        priorityMethods:
          "WCAG-эвристика, метод проговаривания вслух, тестирование со экранными читалками",
        additionalMethods: "Айтрекинг",
        testFormat: "Лабораторный",
        objectivityLevel: "Средний–высокий",
        keyMetrics: "Доступность, успешность выполнения задач",
        limitations: "Необходимость адаптации сценариев",
      },
      {
        audience: "Новички",
        interfaceType: "Информационные и контентные интерфейсы",
        developmentStage: "Прототип",
        testGoal: "Оценка обучаемости интерфейса",
        priorityMethods: "Наблюдение, SUS, когнитивный walkthrough",
        additionalMethods: "Интервью, A/B-тестирование",
        testFormat: "Лабораторный",
        objectivityLevel: "Средний",
        keyMetrics: "Первичная понятность интерфейса",
        limitations: "Зависимость от поведения пользователя",
      },
    ],
  },
  {
    id: "transactional",
    label: "Транзакционные интерфейсы",
    interfaceType: "Транзакционные интерфейсы",
    description:
      "Интернет-магазины, сервисы бронирования и личные кабинеты, где пользователь посещает сайт с конкретной целью — оформить заказ, отправить данные или оплатить услугу. Важны четко проработанный сценарий, минимальное количество шагов и понятная структура взаимодействия.",
    rows: [
      {
        audience: "Массовые пользователи",
        interfaceType: "Транзакционные интерфейсы",
        developmentStage: "Бета / готовый продукт",
        testGoal: "Проверка успешности пользовательских сценариев",
        priorityMethods: "A/B-тестирование, мысли вслух, SUS",
        additionalMethods: "Отслеживание мыши, веб-аналитика",
        testFormat: "Удаленный",
        objectivityLevel: "Высокий",
        keyMetrics: "Время выполнения задачи",
        limitations: "Зависимость результатов от сценариев",
      },
      {
        audience: "Профессиональные пользователи",
        interfaceType: "Транзакционные интерфейсы",
        developmentStage: "Готовый интерфейс",
        testGoal: "Анализ производительности взаимодействия",
        priorityMethods: "Task completion time, A/B-тестирование",
        additionalMethods: "Айтрекинг",
        testFormat: "Лабораторный",
        objectivityLevel: "Высокий",
        keyMetrics: "Error rate, производительность",
        limitations: "Высокая стоимость инструментальных методов",
      },
      {
        audience: "Пользователи с ограничениями",
        interfaceType: "Транзакционные интерфейсы",
        developmentStage: "Готовый интерфейс",
        testGoal: "Проверка доступности транзакций",
        priorityMethods: "WCAG-анализ, мысли вслух",
        additionalMethods: "Айтрекинг, интервью",
        testFormat: "Лабораторный",
        objectivityLevel: "Средний",
        keyMetrics: "Успешность транзакций",
        limitations: "Необходимость адаптации интерфейса",
      },
      {
        audience: "Новички",
        interfaceType: "Транзакционные интерфейсы",
        developmentStage: "Прототип / бета",
        testGoal: "Проверка понятности пользовательского пути",
        priorityMethods: "Мысли вслух, когнитивный walkthrough, SUS",
        additionalMethods: "Интервью, A/B-тестирование",
        testFormat: "Лабораторный",
        objectivityLevel: "Средний",
        keyMetrics: "Восстановление после ошибок",
        limitations: "Повышенная нагрузка при сложных сценариях",
      },
    ],
  },
  {
    id: "instrumental",
    label: "Инструментальные интерфейсы",
    interfaceType: "Профессиональные и инструментальные системы",
    description:
      "Веб-панели управления, профессиональные системы и специализированные сервисы. Ключевым требованием является уровень когнитивной нагрузки на пользователя, эффективность выполнения профессиональных задач и обучаемость сложных функций.",
    rows: [
      {
        audience: "Массовые пользователи",
        interfaceType: "Профессиональные и инструментальные системы",
        developmentStage: "Прототип / бета",
        testGoal: "Проверка понятности сложных функций",
        priorityMethods: "SUS, эвристическая оценка, мысли вслух",
        additionalMethods: "Анализ нагрузки NASA-TLX",
        testFormat: "Лабораторный",
        objectivityLevel: "Средний",
        keyMetrics: "Время освоения интерфейса",
        limitations: "Высокая информационная нагрузка",
      },
      {
        audience: "Профессиональные пользователи",
        interfaceType: "Профессиональные и инструментальные системы",
        developmentStage: "Готовый интерфейс",
        testGoal: "Анализ эффективности работы",
        priorityMethods: "Айтрекинг, task completion time, лог-анализ",
        additionalMethods: "ЭЭГ/ЭОГ, ИИ-анализ",
        testFormat: "Лабораторный",
        objectivityLevel: "Очень высокий",
        keyMetrics: "Производительность, нагрузка, точность действий",
        limitations: "Высокая стоимость и сложность организации",
      },
      {
        audience: "Пользователи с ограничениями",
        interfaceType: "Профессиональные и инструментальные системы",
        developmentStage: "Бета / готовый интерфейс",
        testGoal: "Проверка доступности сложных функций",
        priorityMethods: "WCAG, адаптированный мысли вслух",
        additionalMethods: "Инструментальные методы",
        testFormat: "Лабораторный",
        objectivityLevel: "Средний",
        keyMetrics: "Доступность функций",
        limitations: "Ограниченная совместимость оборудования",
      },
      {
        audience: "Новички",
        interfaceType: "Профессиональные и инструментальные системы",
        developmentStage: "Прототип",
        testGoal: "Проверка обучаемости",
        priorityMethods: "Наблюдение, когнитивный walkthrough, SUS",
        additionalMethods: "Айтрекинг, A/B-тестирование",
        testFormat: "Лабораторный",
        objectivityLevel: "Средний",
        keyMetrics: "Время до продуктивного использования",
        limitations: "Высокая вероятность перегрузки",
      },
    ],
  },
];

export const selectionCriteria = [
  "тип интерфейса",
  "особенности целевой аудитории",
  "цели тестирования",
  "этап разработки",
  "уровень объективности",
  "ресурсы исследования",
];
