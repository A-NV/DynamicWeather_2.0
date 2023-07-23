'use client'

import { Card, Divider, Subtitle } from "@tremor/react"; 
import CityPicker from "./components/CityPicker";
import Typewriter from 'typewriter-effect';

export default function Home() {

  return (
    <div 
      className="
        min-h-screen 
        p-10 
        flex 
        flex-col 
        justify-center 
        items-center
        bg-[rgb(36,36,36,36)]
        ">
      <Card className="max-w-4xl mx-auto">
      
        <div className="text-2xl text-center">
        <Typewriter
          options={{
            strings: ['Welcome to Dynamic Weather!'],
            autoStart: true,
            loop: true,
          }}
        />
        </div>

        <Subtitle className="text-sm text-center mt-4">Powered by Next.js 13.3, Tailwind CSS, Tremor 2.0 + More!</Subtitle>

        <Divider className="my-5"/>

        <Card 
          className="
          bg-gradient-to-br from-cyan-400 to-blue-500
          ">
          <CityPicker />
        </Card>
      </Card>

    </div>
  )
}

