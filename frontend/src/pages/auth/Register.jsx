import React from 'react'

function Register() {
    return (
        <div className='grid h-screen grid-cols-2'>
            <div className='bg-g1 flex'>
                <img className='mx-auto self-center' src="/src/assets/img/logo.png" alt="" />
            </div>
            <div className='self-center p-36 bg-white'>
                <h1 className='mb-10 text-4xl font-bold'>Daftar</h1>
                <form class="mx-auto">
                    <label for="email-address-icon" class="block mb-2 text-sm font-medium">Email</label>
                    <div class="relative mb-3">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <span class="material-symbols-outlined text-gray-400">mail</span>
                        </div>
                        <input type="text" id="email-address-icon" class="border-c1b border-2 w-full p-2 block ps-12" placeholder="Masukkan Email" />
                    </div>
                    <label for="email-address-icon" class="block mb-2 text-sm font-medium">Kata Sandi</label>
                    <div class="relative mb-3">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <span class="material-symbols-outlined text-gray-400">lock</span>
                        </div>
                        <input type="text" id="email-address-icon" class="border-c1b border-2 w-full p-2 block ps-12" placeholder="Masukkan Password" />
                    </div>
                    <button className='w-full p-4 text-lg font-normal text-center text-white rounded-sm h-14 bg-secondary'>Daftar</button>
                </form>
                <h1 className='my-5 font-medium text-right'>Sudah punya akun? <a className='text-primary' href="">Masuk</a></h1>
                <h1 className='my-5 font-medium'>Atau daftar dengan Google<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr></h1>
                <button className='w-full p-4 text-lg font-normal text-center border-2 h-14 border-c1b'>Daftar dengan Google</button>
            </div>
        </div>
    )
}

export default Register