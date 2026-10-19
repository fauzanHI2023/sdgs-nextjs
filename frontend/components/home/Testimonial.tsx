import Container from "../ui/Container";
import Photo from "../ui/Photo";

export default function Testimonial() {
  return (
    <section className="py-14 md:py-[88px]">
      <Container>
        <Photo image="/assets/img-062.png" className="min-h-[440px]">
          <span className="absolute left-6 top-6 z-[1] rounded-md bg-white/90 px-3 py-[7px] text-[12.5px] font-bold text-ink">Partner: Pertamina</span>
          <figure className="absolute bottom-6 left-6 right-6 z-[1] m-0 max-w-[440px] rounded-m bg-white px-7 py-[26px] shadow-[0_12px_32px_rgba(42,18,22,.18)]">
            <blockquote className="m-0">
              <p className="text-[15.5px] text-ink">CI2 support helped us build a CSR disaster contingency plan that had never been properly structured before</p>
            </blockquote>
            <figcaption className="mt-3.5 text-[13px] font-semibold text-[#8a8a8a]">
              <b className="text-ink">Pertamina CSR Team</b> D.I. Yogyakarta Region
            </figcaption>
          </figure>
        </Photo>
      </Container>
    </section>
  );
}
