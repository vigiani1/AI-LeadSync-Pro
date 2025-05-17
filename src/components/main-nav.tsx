import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

interface MainNavProps {
  items: NavItem[];
}

export default function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className={cn(
            "transition-colors hover:text-foreground/80",
            item.disabled && "cursor-not-allowed opacity-80"
          )}
        >
          {item.title}
        </Link>
      ))}
    </div>
  )
}

export type { NavItem }
