import React from 'react'
import { Card } from '@/components/ui/card'

export default function Features() {
  return (
    <section id="features" className="px-12 py-24">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-4xl font-bold">
            Instant, accurate, and reliable
            <br />
            reports of any vehicle you want
            <br />
            at your fingertips
          </h2>
          <div className="flex items-center gap-2 mt-6">
            <div className="w-8 h-8 rounded-full bg-gray-200" />
            <div className="w-8 h-8 rounded-full bg-gray-200" />
            <div className="w-8 h-8 rounded-full bg-gray-200" />
          </div>
        </div>
        <p className="max-w-xs text-sm text-gray-600">
          Our professional team helps you to make an informed decision before bidding on any vehicle.
        </p>
      </div>

      <div className="relative mt-12 h-[500px]">
        <Card className="absolute left-0 top-1/4 max-w-xs p-4 bg-white/90 backdrop-blur">
          <h3 className="font-semibold">Easy to Use</h3>
          <p className="mt-2 text-sm text-gray-600">
            Simply enter the vehicle&apos;s VIN, and receive a detailed report in minutes.
          </p>
        </Card>
      </div>

      <div className="flex items-center justify-between mt-16">
      </div>
    </section>

  )
}
