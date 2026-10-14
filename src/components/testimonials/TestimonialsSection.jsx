import { testimonials } from '../../data/testimonials.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import TestimonialCard from './TestimonialCard.jsx'
import './TestimonialsSection.css'

function TestimonialsSection() {
  // Hidden entirely until real testimonials are added to src/data/testimonials.js.
  if (!testimonials.length) return null

  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHeading
          id="testimonials-title"
          eyebrow="Kind words"
          title="What people say"
          subtitle="Feedback from mentors, teammates, and collaborators."
        />
        <ul className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default TestimonialsSection