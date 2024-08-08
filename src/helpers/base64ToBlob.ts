export default function base64toBlob (data: string): Blob {
  // Cut the prefix data:application/pdf;base64 from the raw base 64
  const base64WithoutPrefix = data.substr('data:application/pdf;base64,'.length)

  const bytes = atob(base64WithoutPrefix)
  let length = bytes.length
  const out = new Uint8Array(length)

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  while (length--) {
    out[length] = bytes.charCodeAt(length)
  }

  return new Blob([out], { type: 'application/mp4' })
}
