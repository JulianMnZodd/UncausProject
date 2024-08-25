import React from 'react'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css';
import 'flowbite/dist/flowbite.css';
import '../styles/globals.css';
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import { Navbar } from "flowbite-react";
import Link from 'next/link';


function MyApp({ Component, pageProps }: AppProps) {
  return (<React.Fragment>
    <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="">
            <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                UME Uncaus
            </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Navbar.Link href="/navbars" active={true}>
                Home
            </Navbar.Link>
            <Navbar.Link href="/navbars">
                Contacto
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
    <div className="flex">
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item  icon={HiChartPie}>
                       <Link href="/home"> Inicio</Link>
                    </Sidebar.Item>
                    
                    <Sidebar.Item  icon={HiInbox}>
                        <Link href="/form_medico"> Medicos</Link>
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiUser}>
                    <Link href="/form_paciente"> Pacientes</Link>
                    </Sidebar.Item>
                    <Sidebar.Item  icon={HiShoppingBag}>
                    <Link href="/form_medico"> Internacion</Link>
                    </Sidebar.Item>
                    <Sidebar.Item  icon={HiArrowSmRight}>
                        Iniciar Sesion
                    </Sidebar.Item>
                    <Sidebar.Item  icon={HiTable}>
                        Contacto
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
        <div className="flex-grow p-4">     
            <Component {...pageProps} />
        </div>
    </div>
</React.Fragment>
  )
}

export default MyApp
