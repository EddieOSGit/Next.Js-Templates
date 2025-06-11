import { cn } from "@/lib/utils";

interface CenteredContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function CenteredContainer({ children, className = "" }: CenteredContainerProps) {
  return (
    <div className={cn("container mx-auto px-4 max-w-full", className)}>
      {children}
    </div>
  );
} 