import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { methodTooltips } from "@/data/methodTooltips";
import { cn } from "@/lib/utils";

interface MethodBadgeProps {
  name: string;
  displayName?: string;
  variant?: "priority" | "additional";
  hasTooltip?: boolean;
}

export function MethodBadge({
  name,
  displayName,
  variant = "priority",
  hasTooltip = true,
}: MethodBadgeProps) {
  const label = displayName ?? name;
  const tooltip = hasTooltip ? methodTooltips[name] : undefined;

  const badge = (
    <span
      className={cn(
        "inline-flex cursor-default rounded border px-1.5 py-px text-[11px] leading-tight font-medium transition-colors",
        variant === "priority"
          ? "border-primary/20 bg-primary/5 text-foreground hover:bg-primary/10"
          : "border-border bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
      )}
    >
      {label}
    </span>
  );

  if (!tooltip) {
    return badge;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="inline-flex rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          {badge}
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-[240px]">
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
}
