import { HTMLAttributes, ReactNode, useState } from "react";

import { TooltipContent, TooltipTrigger } from "./styles";

export interface TooltipProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "content"> {
  content: ReactNode;
  position?: "top" | "right" | "bottom" | "left";
}

export function Tooltip({
  content,
  position = "top",
  children,
  ...props
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TooltipTrigger
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      {...props}
    >
      {children}

      {isVisible && (
        <TooltipContent position={position}>{content}</TooltipContent>
      )}
    </TooltipTrigger>
  );
}
