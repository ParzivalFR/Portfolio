import { cn } from "@/lib/utils";
import { forwardRef, useEffect, useState } from "react";

const Textarea = forwardRef(
  ({ className, value = "", onChange, maxLength = 200, ...props }, ref) => {
    const [numText, setNumText] = useState(value.length);

    useEffect(() => {
      setNumText(value.length);
    }, [value]);

    const handleChange = (e) => {
      setNumText(e.target.value.length);
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className="w-full relative">
        <textarea
          className={cn(
            "relative flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          value={value}
          onChange={handleChange}
          {...props}
        />
        <span className="absolute right-2 bottom-2 w-full text-xs text-end">
          {numText < maxLength / 2 ? (
            <span className="text-green-500">
              {numText}/{maxLength}
            </span>
          ) : numText < maxLength ? (
            <span className="text-yellow-500">
              {numText}/{maxLength}
            </span>
          ) : (
            <span className="text-red-500">
              {numText}/{maxLength}
            </span>
          )}
        </span>
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
