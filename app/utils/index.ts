export type ReadsResult =
  | (
      | {
          error: Error
          result?: undefined
          status: 'failure'
        }
      | {
          error?: undefined
          result: unknown
          status: 'success'
        }
    )[]
  | undefined
export type Formatter = string[]
const formatReadsResult = (result: ReadsResult, formatter: Formatter) => {
  const obj: any = {}
  if (result) {
    for (let index = 0; index < result.length; index++) {
      obj[formatter[index]] = result[index]?.result || ''
    }
  }
  return obj
}

export { formatReadsResult }
