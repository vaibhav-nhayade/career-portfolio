function TestimonialCard({ testimonial }) {
  return (
    <figure className="testimonial-card">
      <blockquote className="testimonial-card__quote">
        <p>“{testimonial.quote}”</p>
      </blockquote>
      <figcaption className="testimonial-card__author">
        <span className="testimonial-card__name">{testimonial.name}</span>
        <span className="testimonial-card__role">{testimonial.role}</span>
      </figcaption>
    </figure>
  )
}

export default TestimonialCard