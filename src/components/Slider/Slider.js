import './Slider.css';
import { FaAngleRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Slider(props) {

  const [game, setGame] = useState([]);
  const [mounted, setMoounted] = useState(false);

  const getData = async () => {
    await axios.get(`/game/find/${props.id}`)
    .then(response => {
      if(mounted) {
        setGame(response.data)
      }
    })
  }

  useEffect(() => {
    setMoounted(true)
    getData()
  }, [mounted])

  return (
    <div>
      <a href='https://www.xbox.com/pt-BR/games/halo-infinite'>
      <img className='image' src='https://s2.glbimg.com/rHbyvpdpK-Du2G5gXEMwSkj8qrA=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/E/X/7brP30R3CuQ1T8uDB6vw/5118ebed-e949-42e3-80de-37502cec73a4.jpg' alt='Halo'/>
      </a>
      <div className='bar'>
        <span className='disponivel'>Reserve Já</span>
        <button className='mais'>
          Saiba mais <FaAngleRight />
        </button>
        <div className='classification'>
          <div className='square'>
            <span>14</span>
          </div>
          <span className='class-text'>Violência</span>
        </div>
      </div>
    </div>
  )
}