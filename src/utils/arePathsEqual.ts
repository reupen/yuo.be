function normalisePath(path: string) {
  return path.replaceAll(/([^/])$/g, "$1/")
}

export function arePathsEqual(left: string, right: string): boolean {
  return normalisePath(left) == normalisePath(right)
}
