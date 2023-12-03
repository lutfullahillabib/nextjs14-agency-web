import TeamList from "@/components/Team/TeamList";
import Breadcums from "@/components/shared/Breadcrumb";
import Subscribe from "@/components/shared/Subscribe";

export async function generateMetadata() {
    const res = await fetch(process.env.BASE_URL + "api/SiteMeta/team");
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

const Team = async () => {

    return (
        <main>
            <Breadcums pageName="Team" />
            <TeamList />
            <Subscribe />
        </main>
    );
};

export default Team;

