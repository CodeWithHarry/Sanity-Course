import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-[#5540af]'>
      <div>
        <div class="w-full z-50 top-0 py-3 sm:py-5  bg-primary ">
          <div class="container flex items-center justify-between mx-auto">
            <div className=' '>
              <a href="/">
                <img src="/assets/img/logo.svg" class="w-24 lg:w-48" alt="logo image" />
              </a>
            </div>
            <div class="hidden lg:block">
              <ul class="flex items-center">

                <li class="group pl-6">

                  <a href="/#about"
                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">About</a>

                  <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li class="group pl-6">

                  <a href="/#services"
                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Services</a>

                  <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li class="group pl-6">

                  <a href="/#portfolio"
                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Portfolio</a>

                  <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li class="group pl-6">

                  <a href="/#clients"
                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Clients</a>

                  <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li class="group pl-6">

                  <a href="/#work"
                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Work</a>

                  <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li class="group pl-6">

                  <a href="/#statistics"
                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Statistics</a>

                  <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li class="group pl-6">

                  <a href="/#blog"
                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Blog</a>

                  <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li class="group pl-6">

                  <a href="/#contact"
                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Contact</a>

                  <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

              </ul>
            </div>
            <div class="block lg:hidden">
              <button>
                <i class="bx bx-menu text-4xl text-white"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" />

      </div>

    </div>
  )
}

export default NavBar