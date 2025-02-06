export const Table = ({ caption, title, body, ...props }) => {
  return (
    <table {...props}>
      <caption>{caption}</caption>
      <thead>{title}</thead>
      <tbody>{body}</tbody>
    </table>
  );
};
