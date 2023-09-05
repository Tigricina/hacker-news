import style from './NewsItem.module.css'

export function NewsItem() {
    return (
        <div className={style.container}>
            <a className={style.link} href="example.com">Title</a>
            <div className={style.info}>
                <div className={style.userData}>
                    <span>username | </span>
                    <span>00:00:00</span>
                </div>

                <div className={style.score}>
                    1 points
                </div>
            </div>
        </div>
    )
}