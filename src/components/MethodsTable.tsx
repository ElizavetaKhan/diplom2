import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AudienceBadge } from "@/components/AudienceBadge";
import { MethodList } from "@/components/MethodList";
import type { MatrixRow } from "@/data/interfaceData";

interface MethodsTableProps {
  rows: MatrixRow[];
}

function CriteriaCell({
  stage,
  format,
  objectivity,
}: {
  stage: string;
  format: string;
  objectivity: string;
}) {
  return (
    <div className="space-y-1.5 text-sm leading-relaxed text-muted-foreground">
      <p>
        <span className="font-medium text-foreground">Этап: </span>
        {stage}
      </p>
      <p>
        <span className="font-medium text-foreground">Формат: </span>
        {format}
      </p>
      <p>
        <span className="font-medium text-foreground">Объективность: </span>
        {objectivity}
      </p>
    </div>
  );
}

function InteractionCell({
  goal,
  metrics,
  limitations,
}: {
  goal: string;
  metrics: string;
  limitations: string;
}) {
  return (
    <div className="space-y-1.5 text-sm leading-relaxed text-muted-foreground">
      <p>
        <span className="font-medium text-foreground">Цель: </span>
        {goal}
      </p>
      <p>
        <span className="font-medium text-foreground">Метрики: </span>
        {metrics}
      </p>
      <p>
        <span className="font-medium text-foreground">Ограничения: </span>
        {limitations}
      </p>
    </div>
  );
}

export function MethodsTable({ rows }: MethodsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="min-w-[180px]">
            Особенности целевой аудитории
          </TableHead>
          <TableHead className="min-w-[160px]">Тип интерфейса</TableHead>
          <TableHead className="min-w-[200px]">Приоритетные методы</TableHead>
          <TableHead className="min-w-[200px]">Дополнительные методы</TableHead>
          <TableHead className="min-w-[180px]">
            Критерии выбора методов
          </TableHead>
          <TableHead className="min-w-[220px]">
            Особенности пользовательского взаимодействия
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={`${row.audience}-${row.testGoal}`}>
            <TableCell>
              <AudienceBadge name={row.audience} />
            </TableCell>
            <TableCell className="text-muted-foreground">
              {row.interfaceType}
            </TableCell>
            <TableCell>
              <MethodList raw={row.priorityMethods} variant="priority" />
            </TableCell>
            <TableCell>
              <MethodList raw={row.additionalMethods} variant="additional" />
            </TableCell>
            <TableCell>
              <CriteriaCell
                stage={row.developmentStage}
                format={row.testFormat}
                objectivity={row.objectivityLevel}
              />
            </TableCell>
            <TableCell>
              <InteractionCell
                goal={row.testGoal}
                metrics={row.keyMetrics}
                limitations={row.limitations}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
