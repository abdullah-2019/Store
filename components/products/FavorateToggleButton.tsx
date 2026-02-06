import {FaHeart} from 'react-icons/fa';
import {Button} from '../ui/button';

export default function FavorateToggleButton({productId}:{productId:string}) {
  return (
    <Button variant="outline" size="icon" className='p-2 cursor-pointer'>
      <FaHeart />
    </Button>
  )
}
