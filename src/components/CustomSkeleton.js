import DefaultSkeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import useTheme from "../assets/theme"

const Skeleton = props => {
  const theme = useTheme()
  
  return (
    <DefaultSkeleton
      baseColor={theme.isDarkMode && "#10171E"}
      highlightColor={theme.isDarkMode && "var(--app-color-2)"}
      {...props}
    />
  )
}

const CountryListSkeleton = () => {
  const skeletonList = Array(10).fill()

  return (
    <>
      {
        skeletonList.map((_val, index) => (
          <div key={index} className="country" style={{ width: 250, border: "1px solid var(--app-color-2)" }}>
            <Skeleton height={150} />
            <p className="country-name" style={{ margin: "1rem" }}>
              <Skeleton height={36} width={`95%`} />
            </p>
            <Skeleton width={`75%`} count={3} style={{ marginLeft: "16px" }} />
            <div className="country-info" style={{ marginBottom: "3rem" }}></div>
          </div>
        ))
      }
    </>
  )
}

const CountryInfoSkeleton = () => {
  return (
    <div className="country-info-skeleton">
      <Skeleton className="col" height={280} />
      <div className="col">
        <div>
          <Skeleton height={40} width="95%" style={{ marginBottom: "2rem" }} />
          <div className="list-of-info">
            <div className="first">
              <Skeleton height={15} width="90%" count={5} />
            </div>
            <div className="second">
              <Skeleton height={15} width="90%" count={3} />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <Skeleton height={30} width="60%" style={{ marginBlock: "1.3rem" }} />
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Skeleton height={30} width={100} />
            <Skeleton height={30} width={100} />
            <Skeleton height={30} width={100} />
          </div>
        </div>
      </div>
    </div>
  )
}

export { CountryListSkeleton, CountryInfoSkeleton }
export default Skeleton