import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_API_KEY,
});

const getPage = async () => {
  const res = await notion.pages.retrieve({
    page_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
  });

  const resume = {
    id: res.id,
    title: res.properties.title.title[0].plain_text,
    cover: res.cover.file.url,
    icon: res.icon.file.url,
    lastEditedTime: res.last_edited_time,
  };

  return resume;
};

export default async function getNotionPage(req, res) {
  const resume = await getPage();
  res.status(200).json(resume);
}
