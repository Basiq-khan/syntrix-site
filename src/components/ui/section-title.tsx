import { cn } from '@/lib/utils'

interface SectionTitleProps {
  pretitle?: string
  title: string
  description?: string
  className?: string
}

export function SectionTitle({ pretitle, title, description, className }: SectionTitleProps) {
  return (
    <div className={cn('max-w-3xl space-y-4', className)}>
      {pretitle ? (
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary/90">
          {pretitle}
        </p>
      ) : null}
      <h2 className="text-3xl font-black tracking-[-0.04em] text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
