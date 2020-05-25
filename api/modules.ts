// import { RequestInit } from 'typescript'
export interface Body { }
export interface PostBody extends Body { }
export interface PutBody extends Body { }
export interface DeleteBody extends Body { }


const headers = { "Content-Type": "application/json" };

export const getFetchOption = (): RequestInit => ({
	method: "GET",
	headers
});

export const getCreateOption = (body: Body): RequestInit => ({
	method: "POST",
	headers,
	body: JSON.stringify(body)
});


export const getUpdateOption = (body: Body): RequestInit => ({
	method: "PUT",
	headers,
	body: JSON.stringify(body)
});

export const getDeleteOption = (body: Body): RequestInit => ({
	method: "DELETE",
	headers,
	body: JSON.stringify(body)
});


export function fetchData<T>(url: string): Promise<T> {
	return fetch(url, getFetchOption())
		.then(res => {
			const { ok, status, statusText } = res;

			if (ok) {
				// SUCCESS
			} else {
				// FALSE
				// throw new Error(response.statusText)
			}
			return res.json().then(data => data as T)
		});
}

export function createData<T>(url: string, body: PostBody): Promise<T> {
	return fetch(url, getCreateOption(body))
		.then(res => {
			const { ok, status, statusText } = res;

			if (ok) {
				// SUCCESS
			} else {
				// FALSE
				// throw new Error(response.statusText)
			}
			return res.json().then(data => data as T)
		});
}

export function updateData<T>(url: string, body: PutBody): Promise<T> {
	return fetch(url, getUpdateOption(body))
		.then(res => {
			const { ok, status, statusText } = res;

			if (ok) {
				// SUCCESS
			} else {
				// FALSE
				// throw new Error(response.statusText)
			}
			return res.json().then(data => data as T)
		});
}


export function deleteData<T>(url: string, body: DeleteBody): Promise<T> {
	return fetch(url, getDeleteOption(body))
		.then(res => {
			const { ok, status, statusText } = res;

			if (ok) {
				// SUCCESS
			} else {
				// FALSE
				// throw new Error(response.statusText)
			}
			return res.json().then(data => data as T)
		});
}
