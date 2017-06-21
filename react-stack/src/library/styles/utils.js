export const o2a = obj => Object.keys(obj).map(v => ({ key: v, value: obj[v] }))

export const range = (start = 0, end = 50, step = 1) => {
  const arr = []
  for (let i = start; i < end; i += 1) {
    arr[i] = i * step
  }
  return arr
}
