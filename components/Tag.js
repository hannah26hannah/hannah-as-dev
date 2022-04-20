const Tag = ({ title }) => {
  return (
    <li className='whitespace-pre rounded-xl bg-gray-1 text-white px-3 py-1 text-base tracking-[0.1em]'>
      {title}
    </li>
  );
};

const Tags = ({ tags }) => {
  return (
    <ul className='flex flex-row gap-3 w-full overflow-x-auto p-3 border-t-2 border-t-gray-light'>
      {tags.map((tag, index) => (
        <Tag key={index} title={tag} />
      ))}
    </ul>
  );
};

export default Tags;

export { Tag };
