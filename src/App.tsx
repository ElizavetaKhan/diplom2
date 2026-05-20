import { MethodsTable } from "@/components/MethodsTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { interfaceTabs, selectionCriteria } from "@/data/interfaceData";
import { ClipboardList, Table2 } from "lucide-react";

function App() {
  return (
    <TooltipProvider delayDuration={150}>
      <div className="min-h-screen bg-background">
        <header className="border-b bg-card/90">
          <div className="mx-auto max-w-[1400px] px-3 py-4 sm:px-4">
            <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              ВКР · Исследование методов юзабилити-тестирования
            </p>
            <h1 className="mt-1 text-lg font-semibold tracking-tight sm:text-xl">
              Подбор методов юзабилити-тестирования
            </h1>
          </div>
        </header>

        <main className="mx-auto max-w-[1400px] px-3 py-4 sm:px-4">
          <Tabs defaultValue={interfaceTabs[0].id} className="w-full">
            <TabsList className="mb-3 h-8 w-full justify-start gap-0.5 p-0.5 sm:w-auto">
              {interfaceTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="h-7 px-2.5 text-[11px] sm:text-xs"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {interfaceTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <section className="mb-3 rounded-md border bg-card px-3 py-2.5">
                  <div className="flex items-start gap-2">
                    <Table2
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground"
                      aria-hidden
                    />
                    <div>
                      <h2 className="text-xs font-semibold text-foreground">
                        {tab.interfaceType}
                      </h2>
                      <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                        {tab.description}
                      </p>
                    </div>
                  </div>
                </section>

                <MethodsTable rows={tab.rows} />
              </TabsContent>
            ))}
          </Tabs>

          <section className="mt-5 rounded-md border bg-card px-3 py-3">
            <div className="flex items-start gap-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-muted">
                <ClipboardList
                  className="h-3.5 w-3.5 text-muted-foreground"
                  aria-hidden
                />
              </div>
              <div>
                <h2 className="text-xs font-semibold text-foreground">
                  Критерии выбора методов
                </h2>
                <ul className="mt-2 grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
                  {selectionCriteria.map((criterion) => (
                    <li
                      key={criterion}
                      className="flex items-center gap-1.5 text-[11px] text-muted-foreground"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-primary/50" />
                      {criterion}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </TooltipProvider>
  );
}

export default App;
