import TestimonialsList from "@/components/Testimonial/TestimonialsList";
import Breadcums from "@/components/shared/Breadcrumb";
import Subscribe from "@/components/shared/Subscribe";

export async function generateMetadata() {
    const res = await fetch(process.env.BASE_URL + "api/SiteMeta/testimonials");
    const JSON = await res.json();
    return {
        title: JSON[0]['title'],
        description: JSON[0]['description'],
        keywords: JSON[0]['keywords'],
        openGraph: {
            images: JSON[0]['image'],
        },
    }
}

const Testimonial = () => {
    return (
        <main>
            <Breadcums pageName={"Testimonial List"} />
            <TestimonialsList />
            <Subscribe />
        </main>
    );
};

export default Testimonial;

