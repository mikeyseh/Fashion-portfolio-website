export default function About() {
  return (
    <div className="py-24 px-8 max-w-5xl mx-auto space-y-24">
      {/* Mission */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-display">Our Mission</h2>
          <p className="text-ela-gray leading-relaxed">
            I would like to introduce myself as somewhat someone who is still
            discovering himself. I am someone who is first and foremost
            passionate about Jesus, yet I'm not too uptight about it.
          </p>
          <p className="text-ela-gray leading-relaxed">
            I have an interest in high-fashion like Balenciaga, but I also love
            streetwear. Another sense of fashion I have is of Rock Music
            culture. I have no particular experience in fashion as of yet, but
            that's what I'm aiming to gain—the only thing I have done is model
            at an event at a young age.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/images/design2.jpg"
            alt="Mission"
            className="w-full h-[400px] object-cover grayscale"
          />
        </div>
      </div>

      {/* Vision */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-display">Our Vision</h2>
          <p className="text-ela-gray leading-relaxed">
            My design philosophy centers on a fusion of high fashion and
            streetwear, deeply influenced by hip-hop and rock music. Drawing
            from diverse cultural experiences across suburban, middle-class,
            lower-class, and village life, my work embodies a distinct love for
            classical yet swagger-infused style.
          </p>
          <p className="text-ela-gray leading-relaxed">
            I aim to create designs that scream authenticity—nonchalant,
            chaotic, and simple—while reflecting the human experience. By
            blending luxurious materials with urban aesthetics, I prioritize
            comfort and freedom of expression.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/images/design3.jpg"
            alt="Vision"
            className="w-full h-[400px] object-cover grayscale"
          />
        </div>
      </div>
    </div>
  );
}
