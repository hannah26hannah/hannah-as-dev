/**
 * @overview the slug API route. Wrapping slug in brackets will tell Next.js that this is a dynamic route, and the slug will be passed to the lambda function
 *
 */

import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query as { slug: string };

  res.send(slug);
};
