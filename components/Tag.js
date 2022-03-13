const Tag = ({ title }) => {
  return (
    <li className='rounded-xl bg-gray-1 text-white px-3 py-1 text-base tracking-[0.1em]'>
      {title}
    </li>
  );
};

const Tags = ({ tags }) => {
  return (
    <ul className='flex flex-row gap-3'>
      {tags.map((tag, index) => (
        <Tag key={index} title={tag} />
      ))}
    </ul>
  );
};

export default Tags;

export { Tag };
