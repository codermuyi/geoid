import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const CountryListSkeleton = () => {
  const skeletonList = Array(10).fill()

  return (
    <>
      {
        skeletonList.map((val, index) =>
          <div key={index} className="country" style={{ width: 250 }}>
            <Skeleton height={150} />
            <p className="country-name">
              <Skeleton height={36} width={`95%`} />
            </p>
            <div className="country-info">
              <Skeleton width={`90%`} />
            </div>
            <div className="country-info">
              <Skeleton width={`90%`} />
            </div>
            <div className="country-info" style={{ marginBottom: "3rem" }}>
              <Skeleton width={`90%`} />
            </div>
          </div>
        )
      }
    </>
  )
}

const CountryInfoSkeleton = () => {
  return (
    <div className="country-info-skeleton">
      <Skeleton className="col" height={250} />
      <div className="col">
        <div>
          <Skeleton height={40} width="95%" style={{ marginBottom: "2rem" }} />
          <div className="list-of-info">
            <div className="first">
              <Skeleton height={15} width="90%" />
              <Skeleton height={15} width="90%" />
              <Skeleton height={15} width="90%" />
              <Skeleton height={15} width="90%" />
              <Skeleton height={15} width="90%" />
            </div>
            <div className="second">
              <Skeleton height={15} width="90%" />
              <Skeleton height={15} width="90%" />
              <Skeleton height={15} width="90%" />
            </div>
          </div>
        </div>
        <div>
          <Skeleton height={30} width="60%" style={{ marginBlock: "1.3rem" }} />
          <div style={{ display: "flex", gap: 10 }}>
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