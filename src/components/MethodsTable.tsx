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
    <div className="space-y-1 text-sm leading-snug text-muted-foreground">
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
    <div className="space-y-1 text-sm leading-snug text-muted-foreground">
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
          <TableHead className="normal-case lg:w-[16%] lg:text-[11px]">
            <span className="block leading-tight">Особенности целевой аудитории</span>
          </TableHead>
          <TableHead className="normal-case lg:w-[19%] lg:text-[11px]">
            <span className="block leading-tight">Приоритетные методы</span>
          </TableHead>
          <TableHead className="normal-case lg:w-[17%] lg:text-[11px]">
            <span className="block leading-tight">Дополнительные методы</span>
          </TableHead>
          <TableHead className="normal-case lg:w-[21%] lg:text-[11px]">
            <span className="block leading-tight">Критерии выбора методов</span>
          </TableHead>
          <TableHead className="normal-case lg:w-[27%] lg:text-[11px]">
            <span className="block leading-tight">
              Особенности пользовательского взаимодействия
            </span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={`${row.audience}-${row.testGoal}`}>
            <TableCell className="min-w-0 overflow-hidden">
              <AudienceBadge name={row.audience} />
            </TableCell>
            <TableCell className="min-w-0 overflow-hidden">
              <MethodList raw={row.priorityMethods} variant="priority" />
            </TableCell>
            <TableCell className="min-w-0 overflow-hidden">
              <MethodList raw={row.additionalMethods} variant="additional" />
            </TableCell>
            <TableCell className="min-w-0 overflow-hidden">
              <CriteriaCell
                stage={row.developmentStage}
                format={row.testFormat}
                objectivity={row.objectivityLevel}
              />
            </TableCell>
            <TableCell className="min-w-0 overflow-hidden">
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
