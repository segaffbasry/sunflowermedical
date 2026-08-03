export default function ProductLoading() {
  return (
    <main id="top" className="shell min-h-screen pt-[calc(var(--header-height)+6rem)]" aria-busy="true" aria-label="Loading product category">
      <div className="h-4 w-28 animate-pulse rounded-full bg-[rgba(27,27,24,0.08)]" />
      <div className="mt-8 h-20 max-w-3xl animate-pulse rounded-2xl bg-[rgba(27,27,24,0.07)] sm:h-28" />
      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <div className="aspect-[5/4] animate-pulse rounded-[26px] bg-[rgba(27,27,24,0.06)]" />
        <div className="space-y-4">
          <div className="h-6 animate-pulse rounded bg-[rgba(27,27,24,0.06)]" />
          <div className="h-6 w-4/5 animate-pulse rounded bg-[rgba(27,27,24,0.06)]" />
          <div className="h-6 w-3/5 animate-pulse rounded bg-[rgba(27,27,24,0.06)]" />
        </div>
      </div>
    </main>
  );
}
