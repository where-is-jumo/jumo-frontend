import {
  fetchData,
  createData,
  updateData,
  deleteData,
  PostBody,
  PutBody,
  DeleteBody,
} from './modules'

export const DOMAIN = 'https://api.github.com';
export const REPOS_API = `${DOMAIN}/orgs/octokit/repos`;

// Repos
interface RepoPostBody extends PostBody { }
interface RepoPutBody extends PutBody { }
interface RepoDeleteBody extends DeleteBody { }
interface RepoFetchResponse { }

export const fetchRepos = () => fetchData<RepoFetchResponse>(REPOS_API);
export const createRepo = (body: RepoPostBody): Promise<RepoPostBody> => createData<any>(REPOS_API, body);
export const updateRepo = (body: RepoPutBody): Promise<RepoPostBody> => updateData<any>(REPOS_API, body);
export const deleteRepo = (body: RepoDeleteBody): Promise<RepoPostBody> => deleteData(<any>REPOS_API, body);

// Add new APIs