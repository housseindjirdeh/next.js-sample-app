function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default MyApp

export const unstable_onPerformanceData = ({ name, startTime, duration }) => { 
  localStorage.setItem(
    name,
    duration || startTime
  )
};
