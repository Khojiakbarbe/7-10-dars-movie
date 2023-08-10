import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function SkeletonF() {
    return (
        <div className='grid grid-cols-[repeat(auto-fit,minmax(auto,342px))] justify-center gap-5 mb-10'>

            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <div>
                <Skeleton className='w-[324px] h-[400px] mb-3' />
                <Skeleton count={3} className='w-[324px]' />
            </div>)}
        </div>
    )
}

export default SkeletonF