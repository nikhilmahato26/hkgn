import { cn } from "@/lib/utils";

export function Field({ label, htmlFor, error, children, className }) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-navy-900">
        {label}
      </label>
      {children}
      {error ? (
        <span className="text-xs font-medium text-red-600">{error}</span>
      ) : null}
    </div>
  );
}

const controlBase =
  "focus-ring h-12 w-full rounded-xl border border-grey-200 bg-white px-4 text-sm text-navy-900 placeholder:text-grey-500 transition-colors focus-visible:border-gold-500";

export function Input({ className, error, ...props }) {
  return (
    <input
      className={cn(controlBase, error && "border-red-400", className)}
      {...props}
    />
  );
}

export function Select({ className, error, children, ...props }) {
  return (
    <select
      className={cn(controlBase, "appearance-none bg-no-repeat", error && "border-red-400", className)}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235B6472' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
        backgroundPosition: "right 1rem center",
        backgroundSize: "16px",
      }}
      {...props}
    >
      {children}
    </select>
  );
}

export function Textarea({ className, error, ...props }) {
  return (
    <textarea
      className={cn(
        controlBase,
        "h-auto min-h-28 resize-y py-3",
        error && "border-red-400",
        className
      )}
      {...props}
    />
  );
}
