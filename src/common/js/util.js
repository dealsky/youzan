export function routePath(path, seg = '/') {
  if (path[0] === seg) {
    path = path.substr(1)
  }
  return path.split(seg)
}
