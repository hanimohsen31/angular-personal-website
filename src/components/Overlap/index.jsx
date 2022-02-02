import { OverlapCard } from '../OverlapCard'
import './Overlap.css'

export const Overlap = () => {
    return (
        <>
        <div className="Overlap container">
            <div className='gridContainer'>
                <OverlapCard/>
                <OverlapCard/>
                <OverlapCard/>
                <OverlapCard/>
            </div>
        </div>
        </>
    )
}