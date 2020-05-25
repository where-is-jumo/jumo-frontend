import { types, Instance, applySnapshot, flow } from 'mobx-state-tree'
import { fetchRepos } from '../api'

// Instance is a typescript helper that extracts the type of the model instance
export type RepoModel = Instance<typeof Repo>
export type RepoStoreModel = Instance<typeof RepoStore>
export interface RepoStoreState {
  isLoading: boolean,
  repos: RepoModel[],
}

const Repo = types
  .model('Repo', {
    id: types.number,
    name: types.optional(types.string, ''),
    private: types.boolean,
  })
  .views(self => {
    return {
      get privateStatus(): string {
        return self.private ? 'PRIVATE' : 'PUBLIC'
      }
    }
  })


const RepoStore = types
  .model('RepoStore', {
    isLoading: types.boolean,
    repos: types.array(Repo),
  })
  .actions(self => ({
    loadRepos: flow(function* loadRepos(reload = false) {
      let repos = yield fetchRepos()
        .then(data => {
          return data.map((repo): RepoModel => Repo.create(repo));
        })
      self.repos = repos;
      self.isLoading = false;
    }),
    addRepo(repo: RepoModel): void {
      self.repos.push(repo);
    },
    removeRepoByid(id: number): void {
      const filteredRepos = this.repos.filter((repo: RepoModel): boolean => repo.id !== id);
      self.repos.replace(filteredRepos);
    },
    findRepoById(id: number): RepoModel | null {
      return self.repos.find(repo => repo.id === id) || null;
    },
  })
  )
  .views(self => {
    return {
      get repoNames() {
        return self.repos.map((repo): string => repo.name)
      },
      get privateRepos() {
        return self.repos
          .filter(repo => repo.private);
      }
    }
  })

let store: RepoStoreModel | undefined

export function initializeRepoStore(snapshot = null): RepoStoreModel {
  const _store: RepoStoreModel = store || RepoStore.create({
    isLoading: false,
    repos: [],
  })

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
  if (snapshot) {
    applySnapshot(_store, snapshot)
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store

  // Create the store once in the client
  if (!store) store = _store

  return store
}