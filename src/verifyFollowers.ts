import { followersMock } from './mocks'

import { getFollowers } from './getFollowers'

const followersOld:any = []

export default async function verifyFollowers (): Promise<Array<any>> {
  // const followers = await getFollowers()
  const followers = followersMock

  console.log(followers)
  console.log(followersOld)

  return JSON.stringify(followers) === JSON.stringify(followersOld) ? [] : followers
}
