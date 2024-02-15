import './App.css'

function MediaLinks() {
    return (
        <div>
            <ul className='icons'>
                <li className='icon-item'>
                    <a target="_blank" href="https://www.linkedin.com/in/diane-nhieu-231298277/">
                        <img src="linkedin.png" width={55} height={55}></img>
                    </a>
                </li>
                <li className='icon-item'>
                    <a target="_blank" href="https://soundcloud.com/bonsaideasea">
                        <img src="soundcloud.png" width={55} height={55}></img>
                    </a>
                </li>
                <li className='icon-item'>
                    <a target="_blank" href="https://github.com/bonsaideasea">
                        <img src="github.png" width={55} height={55}></img>
                    </a>
                </li>
                <li className='icon-item'>
                    <a target="_blank" href="">
                        <img src="bandcamp.png" width={55} height={55}></img>
                    </a>
                </li>
            </ul>
        </div>      
    )
}

export default MediaLinks