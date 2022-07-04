/**
 * Tag component for articles
 * @param title
 */

const Tag: React.FC<any> = ({ title }) => {
  return (
    <li className='whitespace-pre rounded-xl bg-gray-1 text-white px-3 py-1 text-base tracking-[0.1em]'>
      {title}
    </li>
  );
};

const Tags: React.FC<any> = ({ tags }) => {
  return (
    <ul className='flex flex-row gap-3 w-full overflow-x-auto p-3 border-t-2 border-t-gray-light'>
      {tags.map((tag, index) => (
        <Tag key={index} title={tag} />
      ))}
    </ul>
  );
};

export { Tag };
export default Tags;
