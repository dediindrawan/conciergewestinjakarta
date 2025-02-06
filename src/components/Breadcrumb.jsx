import { Link } from 'react-router-dom';
import { ChevronsRight } from 'lucide-react';

export const Breadcrumb = ({ page }) => {
  return (
    <>
      <Link to={'/'}>Home</Link> <ChevronsRight size={16} className="text-white" /> <span className="text-sm">{page}</span>
    </>
  );
};
