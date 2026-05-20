import { MethodBadge } from "@/components/MethodBadge";
import { resolveMethodTooltipKey, splitMethods } from "@/data/methodAliases";
import { methodTooltips } from "@/data/methodTooltips";

interface MethodListProps {
  raw: string;
  variant?: "priority" | "additional";
}

export function MethodList({ raw, variant = "priority" }: MethodListProps) {
  const items = splitMethods(raw);

  return (
    <div className="flex flex-wrap gap-1">
      {items.map((item) => {
        const key = resolveMethodTooltipKey(item);
        const tooltipLabel = key && methodTooltips[key] ? key : item;
        return (
          <MethodBadge
            key={item}
            name={tooltipLabel}
            displayName={item}
            variant={variant}
            hasTooltip={Boolean(key && methodTooltips[key])}
          />
        );
      })}
    </div>
  );
}
