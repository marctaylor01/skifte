import PostLink from '../postLink/postLink'
import pgImg from './../../images/pregroup.jpg'
import './pregroup.css'

export default function Pregroup () {
    return (
      <>
        <div className='pgImg' style={ 
          { backgroundImage: `url(${pgImg})`, height:'100vh', backgroundRepeat: 'no-repeat'}
        }>
          <PostLink className='chief' reference='q' display='Q'/>
          <PostLink className='cash' reference='ken' display='KEN'/>
          <PostLink className='trykk-emma' reference='trykk/queen' display='Trykk'/>
          <PostLink className='trykk-simon' reference='trykk/king' display='Trykk'/>
          <PostLink className='webb' reference='webb&öd' display='Webb & ÖD'/>
          <PostLink className='mos' reference='mos' display='MoS'/>
          <PostLink className='prolk' reference='prolk' display='PRolk'/>
          <PostLink className='spons' reference='spons' display='Spons'/>
          <PostLink className='öl-bar' reference='öl&bar' display='Öl & Bar'/>
          <PostLink className='prevent' reference='pr&event' display='PR & Event'/>
          <PostLink className='biljett' reference='biljett&u-lag' display='Biljett & U-lag'/>
          <PostLink className='werk' reference='werk' display='Werk'/>
          <PostLink className='j4' reference='j4' display='J^4'/>
        </div>
      </>
    )
  }