import { Giscus } from '@giscus/react';
import metadata, { repo } from 'data/metadata';

const GiscusComment = ({ slug }, { slug: string }) => {
  return (
    <Giscus
      repo={`${metadata.giscus.id}/${metadata.giscus.repo}`}
      repoId={process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID}
      category={metadata.giscus.category}
      categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
      mapping='specific'
      term={slug}
      reactionsEnabled='1'
      dataInputPosition='top'
      emitMetadata='0'
      theme='light'
    />
  );
};

export default GiscusComment;
