/** Сопоставление формулировок из ВКР с ключами tooltip */
const aliasEntries: [RegExp, string][] = [
  [/проговариван/i, "Think Aloud"],
  [/мысли\s+вслух/i, "Think Aloud"],
  [/think\s+aloud/i, "Think Aloud"],
  [/^наблюдение$/i, "Наблюдение"],
  [/^интервью$/i, "Интервью"],
  [/^sus$/i, "SUS"],
  [/a\/b/i, "A/B тестирование"],
  [/айтрекинг|eye-?tracking/i, "Eye-tracking"],
  [/теплов/i, "Тепловые карты"],
  [/отслеживание\s+мыши|mouse-?tracking/i, "Отслеживание курсора мыши"],
  [/отслеживание\s+движен/i, "Отслеживание курсора мыши"],
  [/когнитивн\w*\s+walkthrough/i, "Когнитивный walkthrough"],
  [/эвристическ/i, "Эвристическая оценка"],
  [/nasa-?tlx|нагрузки\s+nasa/i, "NASA-TLX"],
  [/ээг|эог|нейротехнолог/i, "Нейротехнологии"],
  [/ии-?анализ|искусственн/i, "Искусственный интеллект"],
  [/лог-?анализ|веб-?аналитик/i, "Автоматизированный анализ UX-данных"],
  [/first\s+click/i, "First Click Test"],
  [/инструментальн\w*\s+метод/i, "Автоматизированный анализ UX-данных"],
  [/wcag/i, "WCAG"],
  [/опросник/i, "Опросники"],
  [/фокус-?групп/i, "Фокус-группа"],
];

export function resolveMethodTooltipKey(label: string): string | null {
  const trimmed = label.trim();
  for (const [pattern, key] of aliasEntries) {
    if (pattern.test(trimmed)) return key;
  }
  return null;
}

export function splitMethods(raw: string): string[] {
  return raw
    .split(",")
    .map((m) => m.trim())
    .filter(Boolean);
}
