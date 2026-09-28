export default function Button({
  children,
  href,
  variant = "primary",
}) {
  const className = `button button-${variant}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}