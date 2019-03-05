// import { withParams, req } from './common'
// export default withParams({ type: 'required' }, req)

export default value => {
  if (Array.isArray(value)) return !!value.length

  return value === undefined || value === null
    ? false
    : !!String(value).trim().length
}
