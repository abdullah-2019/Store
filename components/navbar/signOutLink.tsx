'use client';

import { SignOutButton } from '@clerk/nextjs';
// import { useToast } from '../ui/use-toast';
import Link from 'next/link';

function SingoutLink() {
    // const { toast } = useToast();
    // const handleLogout = () => {
    //     toast({desctiption: 'You have been logged out.'});
    // }
    return <SignOutButton redirectUrl='/'>
        <Link href='/' className='w-full text-left'>Logout</Link>
    </SignOutButton>
}

export default SingoutLink;