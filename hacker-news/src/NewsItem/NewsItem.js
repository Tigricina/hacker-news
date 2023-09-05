import './NewsItem.css'

export function NewsItem() {
    return (
        <div className='container'>
            <a className='link' href="example.com">Title</a>
            <div className='info'>
                <div className='userData'>
                    <span>username | </span>
                    <span>00:00:00</span>
                </div>

                <div className='score'>
                    1 points
                </div>
            </div>
        </div>
    )
}