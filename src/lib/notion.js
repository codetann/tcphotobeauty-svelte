import { Client } from '@notionhq/client';
import { v4 as uuidv4 } from 'uuid';

const notion = new Client({ auth: import.meta.env.VITE_NOTION_KEY });
const databaseId = import.meta.env.VITE_NOTION_ID;

export async function submitForm({ first, last, email, phone, message }) {
	// implement async logic here
	const response = await notion.pages.creeate({
		parent: { database_id: databaseId },
		properties: {
			title: {
				title: [
					{
						text: {
							context: uuidv4()
						}
					}
				]
			},
			Name: {
				text: [
					{
						text: {
							content: `${first} ${last}`
						}
					}
				]
			},
			Email: {
				email: [
					{
						text: {
							content: email
						}
					}
				]
			},
			Phone: {
				phone: [
					{
						text: {
							content: phone
						}
					}
				]
			},
			Message: {
				text: [
					{
						text: {
							content: message
						}
					}
				]
			}
		}
	});
	return response;
}
