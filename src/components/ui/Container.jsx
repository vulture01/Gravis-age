export default function Container({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag className={`mx-auto w-full max-w-content container-px ${className}`}>
      {children}
    </Tag>
  );
}
