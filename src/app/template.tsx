/**
 * Re-mounts on every navigation, giving each page a subtle CSS fade-in.
 * (App Router templates run on route change; layouts do not.)
 * Pure CSS so it never depends on JS/rAF to reveal the page.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-fade-in">{children}</div>;
}
