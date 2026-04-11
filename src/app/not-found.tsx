export default function NotFound() {
  return (
    <main className='min-h-[70vh] flex items-center justify-center px-6'>
      <div className='text-center section-shell rounded-2xl p-8'>
        <h1 className='text-3xl font-[var(--font-display)] mb-3'>
          Page Not Found
        </h1>
        <p className='text-[color:var(--muted)]'>
          The page you are looking for does not exist.
        </p>
      </div>
    </main>
  );
}
