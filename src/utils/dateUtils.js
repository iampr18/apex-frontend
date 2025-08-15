import dayjs from 'dayjs'
export const toISODate = (d) => (d ? dayjs(d).toDate() : null)
