import { MethodsTable } from "@/components/MethodsTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { interfaceTabs, selectionCriteria } from "@/data/interfaceData";
import { ClipboardList } from "lucide-react";

function App() {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="min-h-screen">
        <header className="border-b bg-card/80 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              ВКР · Юзабилити-тестирование веб-приложений
            </p>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Подбор методов юзабилити-тестирования
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Систематизация методов тестирования в зависимости от типа
              интерфейса, особенностей пользователей и задач исследования
            </p>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <Tabs defaultValue={interfaceTabs[0].id} className="w-full">
            <TabsList className="mb-2 flex h-auto min-h-10 flex-wrap gap-1 p-1">
              {interfaceTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="text-xs sm:text-sm"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {interfaceTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <section className="rounded-lg border bg-card p-4 sm:p-5">
                  <h2 className="text-sm font-semibold text-foreground">
                    {tab.interfaceType}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {tab.description}
                  </p>
                </section>

                <div className="mt-4">
                  <MethodsTable rows={tab.rows} />
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <section className="mt-10 rounded-lg border bg-card p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted">
                <ClipboardList
                  className="h-4 w-4 text-muted-foreground"
                  aria-hidden
                />
              </div>
              <div>
                <h2 className="text-base font-semibold text-foreground">
                  Критерии выбора методов
                </h2>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {selectionCriteria.map((criterion) => (
                    <li
                      key={criterion}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      {criterion}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <footer className="mt-8 pb-6 text-center text-xs text-muted-foreground">
            Исследование методов юзабилити-тестирования веб-приложений
          </footer>
        </main>
      </div>
    </TooltipProvider>
  );
}

export default App;
