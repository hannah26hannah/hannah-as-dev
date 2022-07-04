/**
 * @overview Card UI component
 *
 */

import React from 'react';
import Image from 'next/image';

interface IPeriod {
  start: string;
  end: string;
}

interface IImage {
  src: string;
  alt: string;
}

interface ICard {
  /**
   * title of a card
   */
  title: string;
  /**
   * period of a card
   */
  period: IPeriod;
  /**
   * image option of a card
   */
  image: IImage;
  /**
   * description of a card
   */
  description: string;
  /**
   * children of a card
   */
  children?: React.ReactChild;
}

const Card: React.FC<ICard> = ({
  title,
  period,
  image,
  description,
  children,
}) => {
  return (
    <article className='border-[1px] border-gray-light rounded-lg p-3'>
      <h2 className='font-bold'>{title}</h2>
      <span className='block text-right text-gray-default'>
        {period.start} ~ {period.end}
      </span>

      <div className='w-full my-4 flex justify-center max-h-[200px] h-auto'>
        <Image
          src={image.src}
          alt={image.alt}
          className='rounded-lg'
          width='200px'
        />
      </div>

      <p className='my-4'>{description}</p>

      {children}
    </article>
  );
};

export default Card;
