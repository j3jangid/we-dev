'use client'

import React from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import menscat from "../data/menscat"

const menuItems = [
  {
    name: 'Mens',
    to: '/mens',
    conFile: menscat
  },
  {
    name: 'Womens',
    to: '/womens',
    conFile: []
  },
  {
    name: 'Electronics & Accessories',
    to: '/electronics&accessories',
    conFile: []
  },
  {
    name: 'Extra',
    to: '/',
    conFile: []
  },
]


export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative w-full bg-black text-white">
      <div className="mx-auto flex w-full items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <Link to={"/"}>
            <span>
              <img className='object-scale-down h-7' src={require("../Images/deity_itself_logo_crop.jpg")} alt="" />
            </span>
            {/* <span className="font-bold">deity itself</span> */}
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item, i) => {
              return (
                <div className="dropdown w-auto" key={i}>
                  <Link to={item.to} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{item.name}<span className="caret"></span></Link>
                  <dl className="dropdown-menu max-h-80 overflow-auto rounded-0 " >
                    {
                      item.conFile.map((cats, ind) => {
                        return (
                          <>
                            <dt className='list-group-item list-group-item-warning' key={cats.heading} >{cats.heading}</dt>
                            {
                              cats.category.map((categ) => (
                                <dd key={categ}><Link to={"/"}>{categ}</Link></dd>
                              ))
                            }
                          </>
                        )
                      })}
                  </dl>
                </div>
              )
            })}
          </ul>
        </div>
        <div className="flex grow justify-end">
          <input
            className="flex h-10 w-[250px] rounded-md bg-gray-900 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Serach"
          ></input>
        </div>

        <div className="ml-2 mt-2 hidden lg:block">
          <div className="dropdown w-auto position-relative ">
            <CgProfile className="h-10 w-10 rounded-full" />
            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-600 ring-2 ring-white"></span>
            <ul className="dropdown-menu max-h-80 overflow-auto rounded-0 text-end position-absolute top-10 end-0">
              <li><Link to={"/login"}>Login</Link></li>
              <li><Link to={"/signup"}>Sign-Up</Link></li>
            </ul>
          </div>

          {/* <Link to={"/login"}>
            <span className="relative inline-block">
              <CgProfile className="h-10 w-10 rounded-full" />
              <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-600 ring-2 ring-white"></span>
            </span>
          </Link> */}
        </div>
        <div className="ml-2 lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    {/* <span>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 50 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                          fill="black"
                        />
                      </svg>
                    </span> */}
                    <span className="font-bold">deity_itself</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                        <span>
                          <ChevronRight className="ml-3 h-4 w-4" />
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="ml-3 mt-4 flex items-center space-x-2">
                  <Link to={"/login"}>
                    <CgProfile className="h-10 w-10 rounded-full" />
                    <span className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">deity_itself</span>
                      <span className="text-sm font-medium text-gray-500">@deity</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <hr className="navShadow"></hr>
    </div>
  )
}
