export const Table = ({ caption, title, body, ...props }) => {
  return (
    <>
      <table {...props}>
        <caption>{caption}</caption>
        <thead>{title}</thead>
        <tbody>{body}</tbody>
      </table>
      <small className="caution">* Please note that the prices or rates listed are subject to change at any time without prior notice.</small> <br />
    </>
  );
};
