import addSpace from "./addSpace";

function listFollowers(followerNames: string[]): string {
  const spacedList = followerNames.map(addSpace)
  return (
    `Followed by${spacedList[0]},${spacedList[1]} and others`
  )
}

export default listFollowers;



