
export const Quote = ({ quote, author }) => {

  return (
    <blockquote className="blockquote text-end">
      <p className="mb-1">{quote}</p>
      <footer className="blockquote-footer mb-1">{author}</footer>
    </blockquote>
  );
  
};
