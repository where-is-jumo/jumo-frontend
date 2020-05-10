import { initializeRepoStore, RepoStoreModel } from './repo'

class RootStore {
  repoStore: RepoStoreModel

  constructor() {
    this.repoStore = initializeRepoStore();
  }
}

export default RootStore