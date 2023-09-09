const { VITE_BASE_URL: BASE_URL } = import.meta.env

export default {
  BASE_URL,
  TIME_INTERVAL_OPTIONS: [
    { value: 5000, key: '5 seconds' },
    { value: 10000, key: '10 seconds' },
    { value: 20000, key: '20 seconds' },
    { value: 30000, key: '30 seconds' },
    { value: 60000, key: '1 min' },
    { value: 300000, key: '5 mins' },
    { value: 600000, key: '10 mins' },
  ],
}
