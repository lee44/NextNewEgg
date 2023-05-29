import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'


const AdminMenuItems = () => {
    const router = useRouter();

    return (
        <>
            <Menu.Item >
                {({ active }) => (
                    <button
                        className={`${active ? 'bg-secondary text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm gap-4`}
                        onClick={() => { router.push('/admin/dashboard') }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
                        </svg>
                        Dashboard
                    </button>
                )}
            </Menu.Item >
        </>
    )
}

export default AdminMenuItems