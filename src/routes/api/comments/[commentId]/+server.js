import { json } from '@sveltejs/kit';
import { comments } from '$lib/comments';

export function GET(req) {
	const { params } = req;
	const { commentId } = params;
	const comment = comments.find((comment) => comment.id === parseInt(commentId));
	return json(comment);
}

export async function PATCH(req) {
	const { request, params } = req;
	const { commentId } = params;
	const { text } = await request.json();
	const comment = comments.find((comment) => comment.id === parseInt(commentId));
	comment.text = text;
	return json(comment);
}

export async function DELETE(req) {
	const { params } = req;
	const { commentId } = params;
	const index = comments.findIndex((comment) => comment.id === parseInt(commentId));
	comments.splice(index, 1);
	return json(index);
}
