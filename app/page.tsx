'use client'

import { Card, Divider, Subtitle, Text } from "@tremor/react"; 
import CityPicker from "./components/CityPicker";

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
        ">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-5xl text-center mb-10">Dynamic Weather </Text>
        <Subtitle className="text-xl text-center">Powered by Next.js 13.3, Tailwind CSS, Tremor 2.0 + More!</Subtitle>

        <Divider className="my-10"/>

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