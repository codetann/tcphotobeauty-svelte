import { Client } from '@notion/client';

const notion = new Client({ auth: import.meta.env.VITE_NOTION_KEY });
const notionId = import.meta.env.VITE_NOTION_ID;

async function submitForm({ first, last, email, phone, message }) {
	// implement async logic here
}
