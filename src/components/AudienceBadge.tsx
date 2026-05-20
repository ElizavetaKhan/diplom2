import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { audienceTooltips } from "@/data/audienceTooltips";
import { cn } from "@/lib/utils";

interface AudienceBadgeProps {
  name: string;
}

export function AudienceBadge({ name }: AudienceBadgeProps) {
  const tooltip = audienceTooltips[name];

  const label = (
    <span
      className={cn(
        "block break-words text-sm font-medium leading-snug text-foreground",
        tooltip &&
          "cursor-default underline decoration-dotted decoration-muted-foreground/50 underline-offset-2"
      )}
    >
      {name}
    </span>
  );

  if (!tooltip) return label;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="block w-full max-w-full text-left break-words focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
        >
          {label}
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-[260px]">
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
}
