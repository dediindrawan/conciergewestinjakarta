export const CardImage = ({ src, alt = 'image', loading, children, ...props }) => {
  return (
    <figure {...props}>
      <img src={src} alt={alt} loading={loading} />
      <figcaption>{children}</figcaption>
    </figure>
  );
};
