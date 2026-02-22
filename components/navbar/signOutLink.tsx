'use client';

import { SignOutButton } from '@clerk/nextjs';
// import { useToast } from '../ui/use-toast';
import Link from 'next/link';

function SingoutLink() {
   
    return <SignOutButton redirectUrl='/'>
        <Link href='/' className='w-full text-left'>Logout</Link>
    </SignOutButton>
}

export default SingoutLink;