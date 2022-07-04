/**
 * Excerpt component
 * @param excerpt
 */

const Excerpt: React.FC<any> = ({ excerpt }) => {
  return (
    <ul className='p-4'>
      {excerpt?.length > 0
        ? excerpt.map((el: any, index: any) => (
            <li key={index} className='flex justify-end'>
              <a href={el} target='_blank' className='italic'>
                Reference {index + 1}
              </a>
            </li>
          ))
        : null}
    </ul>
  );
};

export default Excerpt;
