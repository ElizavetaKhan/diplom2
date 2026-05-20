import * as React from "react";
import { cn } from "@/lib/utils";

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  scrollOnMobile?: boolean;
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, scrollOnMobile = true, ...props }, ref) => (
    <div
      className={cn(
        "relative w-full rounded-lg border bg-card",
        scrollOnMobile &&
          "max-lg:-mx-4 max-lg:overflow-x-auto max-lg:px-4 sm:max-lg:-mx-6 lg:overflow-visible"
      )}
    >
      <table
        ref={ref}
        className={cn(
          "w-full caption-bottom text-sm",
          scrollOnMobile && "min-w-[840px] lg:min-w-0 lg:table-fixed",
          className
        )}
        {...props}
      />
    </div>
  )
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/40 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-11 px-3 text-left align-middle text-xs font-semibold uppercase tracking-wide text-muted-foreground lg:px-2.5",
      className
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "min-w-0 px-3 py-3 align-top text-sm leading-relaxed break-words lg:px-2.5",
      className
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

export { Table, TableHeader, TableBody, TableHead, TableRow, TableCell };
