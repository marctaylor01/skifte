import PostLink from '../postLink/postLink'
import pgImg from './../../images/pregroup.jpg'
import './pregroup.css'

export default function Pregroup () {
    return (
      <>
        <div className='pgImg' style={ 
          { backgroundImage: `url(${pgImg})`, height:'100vh', backgroundRepeat: 'no-repeat'}
        }>
          <PostLink className='chief' reference='/skifte/#/q' display='Q'/>
          <PostLink className='cash' reference='/skifte/#/ken' display='KEN'/>
          <PostLink className='trykk-emma' reference='/skifte/#/trykk-queen' display='Trykk'/>
          <PostLink className='trykk-simon' reference='/skifte/#/trykk-king' display='Trykk'/>
          <PostLink className='webb' reference='/skifte/#/webb&öd' display='Webb & ÖD'/>
          <PostLink className='mos' reference='/skifte/#/mos' display='MoS'/>
          <PostLink className='prolk' reference='/skifte/#/prolk' display='PRolk'/>
          <PostLink className='spons' reference='/skifte/#/spons' display='Spons'/>
          <PostLink className='öl-bar' reference='/skifte/#/öl&bar' display='Öl & Bar'/>
          <PostLink className='prevent' reference='/skifte/#/pr&event' display='PR & Event'/>
          <PostLink className='biljett' reference='/skifte/#/biljett&u-lag' display='Biljett & U-lag'/>
          <PostLink className='werk' reference='/skifte/#/werk' display='Werk'/>
          <PostLink className='j4' reference='/skifte/#/j4' display='J^4'/>
        </div>
      </>
    )
  }