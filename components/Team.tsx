"use client"

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import image1 from '@/app/assets/images/image1.jpg'
import image2 from '@/app/assets/images/image2.jpg'
import image3 from '@/app/assets/images/image3.jpg'
import image4 from '@/app/assets/images/image4.jpg'
import image5 from '@/app/assets/images/image5.jpg'
import image6 from '@/app/assets/images/image6.jpg'







const testimonials = [
  {
    name: "Kelli Williams",
    role: "SVP Consumer Insights & Strategy",
    company: "NAVIGATE",
    quote: "\"ClickUp has made collaboration really easy.\"",
    image: image1
  },
  {
    name: "Justin Kosmides",
    role: "CEO & Co-Founder",
    company: "vela",
    quote: "\"ClickUp made our production team two-thirds more efficient.\"",
    image: image2
  },
  {
    name: "DIGGS",
    role: "CEO & Co-Founder",
    company: "DIGGS",
    quote: "process.",
    image: image3
  },
  {
    name: "Joerg Mueckmann",
    role: "VP of Marketing",
    company: "FINASTRA",
    quote: "\"It's a low-code platform that helps us automate processes.\"",
    image: image4
  },
  {
    name: "Joerg Mueckmann",
    role: "VP of Marketing",
    company: "FINASTRA",
    quote: "\"Using Clickup we able to stay connected to each other.\"",
    image: image5
  },
  {
    name: "Joerg Clark",
    role: "Software Engineer",
    company: "FINASTRA",
    quote: "\"It's a low-code platform that helps us automate processes.\"",
    image: image6
  },
  // Add more testimonials as needed
]

export default function Team() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id='Resources' className="herofont w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className=" px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1d1e31]">Perfect fit for every team</h2>
          <p className="mt-4 text-black lg:text-xl max-w-[42rem] mx-auto">
            <span className='font-semibold'>

            Get started fast with out-of-the-box solutions.
            </span>
            <br />
            Easily customize ClickUp as team needs grow!
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex ">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_90%]   min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_20%] pl-4">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl ">
                    <img
                      // src={typeof testimonial.image === 'string' ? testimonial.image : testimonial.image.src}
                      src={testimonial.image.src}
                      alt={testimonial.name}
                      className="object-cover w-full h-full rounded-xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                      <p className="font-bold text-lg mb-1">{testimonial.company}</p>
                      <p className="text-sm mb-2">{testimonial.quote}</p>
                      <p className="text-xs">{testimonial.name}</p>
                      <p className="text-xs opacity-75">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute top-1/2 left-24 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            className="absolute top-1/2 right-24 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}