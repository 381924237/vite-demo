import { parse } from 'qs'

const search = parse(window.location.search.substring(1))

export default search
